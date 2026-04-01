"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, getDoc, addDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
// 1 SALTO EXACTO: Salimos de admin-vademecum y entramos a firebase (ambas dentro de app)
import { auth, db } from "../firebase/config"; 
import Link from "next/link";
// IMPORTACIÓN DEL COMPONENTE DE VENTA
import BannerVenta from "../components/BannerVenta";

export default function BuscadorVademecum() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [esFechaBloqueo, setEsFechaBloqueo] = useState(false); // NUEVO: Estado de control temporal

  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [buscado, setBuscado] = useState(false);
  const [sugerencia, setSugerencia] = useState(null);

  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const [modoAuditoria, setModoAuditoria] = useState(false);
  const [todosMedicamentos, setTodosMedicamentos] = useState([]);
  const [cargandoAuditoria, setCargandoAuditoria] = useState(false);

  // NUEVOS ESTADOS PARA AUTOCOMPLETADO Y SOLICITUDES
  const [catalogoNombres, setCatalogoNombres] = useState([]);
  const [sugerenciasAuto, setSugerenciasAuto] = useState([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  // NUEVOS ESTADOS PARA FILTROS DE AUDITORÍA
  const [filtroCondicion, setFiltroCondicion] = useState("");
  const [filtroLista, setFiltroLista] = useState("");

  const ADMIN_EMAIL = "marcar1972@gmail.com";
  const PLANES_LINK = "/planes";

  // 1. LÓGICA DE TIEMPO: Define si el bloqueo debe estar activo (01 Abril 2026)
  useEffect(() => {
    const ahora = new Date();
    const fechaLimite = new Date(2026, 3, 1, 0, 0, 0); // Mes 3 es Abril en JS
    if (ahora >= fechaLimite) {
      setEsFechaBloqueo(true);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsAdmin(currentUser.email === ADMIN_EMAIL);
        
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setIsPro(userDoc.data().isPro || currentUser.email === ADMIN_EMAIL);
        }
      }
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  // CARGAR NOMBRES PARA AUTOCOMPLETADO RÁPIDO
  useEffect(() => {
    const fetchCatalogo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "vademecum"));
        const nombres = [];
        querySnapshot.forEach((doc) => nombres.push(doc.data().nombre));
        setCatalogoNombres(nombres);
      } catch (error) {
        console.error("Error al cargar catálogo:", error);
      }
    };
    fetchCatalogo();
  }, []);

  // LÓGICA DE AUTOCOMPLETADO PREDICITIVO (Efecto y Filtro)
  useEffect(() => {
    if (busqueda.trim().length >= 3) {
      const filtrados = catalogoNombres.filter(nombre => 
        nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
      setSugerenciasAuto(filtrados);
      setMostrarSugerencias(true);
    } else {
      setSugerenciasAuto([]);
      setMostrarSugerencias(false);
    }
  }, [busqueda, catalogoNombres]);

  const calcularSimilitud = (s1, s2) => {
    let equivalencia = 0;
    const p1 = s1.toLowerCase();
    const p2 = s2.toLowerCase();
    const palabraCorta = p1.length < p2.length ? p1 : p2;
    const palabraLarga = p1.length < p2.length ? p2 : p1;
    for (let i = 0; i < palabraCorta.length; i++) {
      if (palabraLarga.includes(palabraCorta[i])) equivalencia++;
    }
    return equivalencia / palabraLarga.length;
  };

  const handleBuscar = async (e) => {
    if (e) e.preventDefault();
    if (!busqueda.trim()) return;

    setCargando(true);
    setBuscado(true);
    setSugerencia(null);
    setMostrarSugerencias(false);
    
    try {
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datosCompletos = [];
      const datosFiltrados = [];
      const terminoBusqueda = busqueda.toLowerCase().trim();

      querySnapshot.forEach((doc) => {
        const item = { id: doc.id, ...doc.data() };
        datosCompletos.push(item);
        if (item.nombre.toLowerCase().includes(terminoBusqueda)) {
          datosFiltrados.push(item);
        }
      });
      
      if (datosFiltrados.length > 0) {
        setResultados(datosFiltrados);
      } else {
        let mejorMatch = null;
        let mayorPuntaje = 0;
        datosCompletos.forEach(item => {
          const puntaje = calcularSimilitud(terminoBusqueda, item.nombre);
          if (puntaje > mayorPuntaje && puntaje > 0.5) {
            mayorPuntaje = puntaje;
            mejorMatch = item.nombre;
          }
        });
        setResultados([]);
        setSugerencia(mejorMatch);
      }
    } catch (error) {
      console.error("Error al buscar:", error);
    }
    setCargando(false);
  };

  const aplicarSugerencia = (nombre) => {
    setBusqueda(nombre);
    setSugerencia(null);
    setTimeout(() => handleBuscar(), 50);
  };

  // ENVIAR SOLICITUD A FIREBASE
  const handleSolicitar = async () => {
    if (!busqueda.trim()) return;
    setCargando(true);
    try {
      await addDoc(collection(db, "solicitudes_vademecum"), {
        medicamento: busqueda,
        fecha: new Date().toISOString(),
        estado: "pendiente"
      });
      setSolicitudEnviada(true);
    } catch (error) {
      console.error("Error al guardar solicitud:", error);
    }
    setCargando(false);
  };

  const iniciarEdicion = (item) => {
    setEditandoId(item.id);
    setEditForm(item);
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const guardarEdicion = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "vademecum", editandoId);
      await updateDoc(docRef, editForm);
      setResultados(resultados.map(r => r.id === editandoId ? { ...r, ...editForm } : r));
      setTodosMedicamentos(todosMedicamentos.map(r => r.id === editandoId ? { ...r, ...editForm } : r));
      setEditandoId(null);
      alert("✅ Medicamento actualizado correctamente.");
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("❌ Error al actualizar.");
    }
  };

  const toggleAuditoria = async () => {
    const nuevoEstado = !modoAuditoria;
    setModoAuditoria(nuevoEstado);
    if (nuevoEstado && todosMedicamentos.length === 0) {
      setCargandoAuditoria(true);
      try {
        const querySnapshot = await getDocs(collection(db, "vademecum"));
        const datos = [];
        querySnapshot.forEach((doc) => {
          datos.push({ id: doc.id, ...doc.data() });
        });
        datos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        setTodosMedicamentos(datos);
      } catch (error) {
        console.error("Error al cargar auditoría:", error);
      }
      setCargandoAuditoria(false);
    }
  };

  // ⚡ CARGA MASIVA DIRECTA - VADEMÉCUM MILAB (65 ÍTEMS COMPLETOS)
  const handleCargaMasiva = async () => {
    if (!window.confirm("⚠️ ATENCIÓN: Esta acción cargará/sobreescribirá 65 medicamentos en la base de datos de Firebase. ¿Deseas continuar?")) return;
    setCargandoAuditoria(true);

    const dataMasiva = [
      {
        "nombre": "Amlodipino 10mg",
        "categoria": "Antihipertensivo / Bloqueador de Canales de Calcio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento de la hipertensión arterial y la angina de pecho. Relaja los vasos sanguíneos facilitando el flujo de sangre.",
        "posologia": "1 comprimido al día. Es fundamental tomarlo siempre a la misma hora para mantener niveles estables en sangre.",
        "contraindicaciones": "Embarazo, lactancia, hipotensión severa e insuficiencia cardíaca descompensada.",
        "tips_venta": "Sugerir tomar en la mañana. Advertir que puede causar leve hinchazón en los tobillos (edema periférico) los primeros días.",
        "cross_selling": ["Monitor de presión arterial (Tensiómetro)", "Pastillero semanal", "Endulzante sin calorías"]
      },
      {
        "nombre": "Amoxicilina + Ácido Clavulánico 400/57mg (Suspensión)",
        "categoria": "Antimicrobiano / Antibiótico Betalactámico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Trata infecciones bacterianas resistentes como otitis media, sinusitis, infecciones respiratorias y de piel en pacientes pediátricos.",
        "posologia": "Según indicación pediátrica (usualmente cada 12 horas). Agitar bien antes de usar y refrigerar tras reconstituir.",
        "contraindicaciones": "Alergia a penicilinas o cefalosporinas. Antecedentes de daño hepático por amoxicilina/ácido clavulánico.",
        "tips_venta": "Recordar que DEBE refrigerarse y desechar a los 7-10 días. Entregar jeringa dosificadora si no la incluye.",
        "cross_selling": ["Probiótico infantil (para prevenir diarrea)", "Termómetro digital", "Jeringa dosificadora extra"]
      },
      {
        "nombre": "Amoxicilina 500mg",
        "categoria": "Antimicrobiano / Penicilina de amplio espectro",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Tratamiento de infecciones bacterianas comunes en vías respiratorias, dentales, urinarias y de piel.",
        "posologia": "1 cápsula cada 8 horas por 7 a 10 días, o según receta. No abandonar el tratamiento antes de tiempo.",
        "contraindicaciones": "Alergia confirmada a penicilinas. Precaución en asma grave o mononucleosis infecciosa.",
        "tips_venta": "Completar el tratamiento siempre aunque los síntomas desaparezcan. Puede tomarse con o sin alimentos.",
        "cross_selling": ["Probiótico multicepa", "Ibuprofeno 400mg (para el dolor/inflamación asociado)", "Enjuague bucal de Clorhexidina (si es uso dental)"]
      },
      {
        "nombre": "Atenolol 50mg",
        "categoria": "Antihipertensivo / Betabloqueador",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Control de la presión arterial y arritmias cardíacas. Reduce la carga de trabajo del corazón.",
        "posologia": "Dosis habitual 50-100mg al día. Se recomienda tomar a la misma hora, idealmente en la mañana.",
        "contraindicaciones": "Asma bronquial, bradicardia severa, bloqueos cardíacos e insuficiencia cardíaca no tratada.",
        "tips_venta": "Preguntar si el paciente es asmático (si es nuevo). No suspender el uso bruscamente ya que puede causar arritmias de rebote.",
        "cross_selling": ["Tensiómetro digital", "Organizador de pastillas", "Aspirina 100mg (si fue recetada por cardiólogo)"]
      },
      {
        "nombre": "Atorvastatina 20mg",
        "categoria": "Hipolipemiante / Estatina",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Disminuye el colesterol malo (LDL) y los triglicéridos en sangre, reduciendo el riesgo de infartos.",
        "posologia": "1 comprimido al día. Idealmente tomar en la noche, ya que la síntesis de colesterol es mayor mientras se duerme.",
        "contraindicaciones": "Daño hepático activo, embarazo, lactancia. Uso concurrente con antifúngicos azólicos debe ser supervisado.",
        "tips_venta": "Recalcar el uso nocturno. Si el paciente reporta dolor muscular fuerte (mialgia), recomendar que avise a su médico.",
        "cross_selling": ["Omega 3 (complemento cardiovascular)", "Endulzante", "Multivitamínico (sin hierro para adultos mayores)"]
      },
      {
        "nombre": "Azitromicina 500mg",
        "categoria": "Antimicrobiano / Macrólido",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Infecciones del tracto respiratorio (bronquitis, neumonía atípica), sinusitis y ciertas enfermedades de transmisión sexual.",
        "posologia": "Usualmente 1 comprimido al día por 3 a 5 días. Tomar al menos 1 hora antes o 2 horas después de las comidas.",
        "contraindicaciones": "Hipersensibilidad a macrólidos, insuficiencia hepática grave. Precaución en pacientes con arritmias.",
        "tips_venta": "Recordar que es un esquema corto pero sigue actuando días después de terminado. Evitar tomar junto a antiácidos con aluminio/magnesio.",
        "cross_selling": ["Probiótico", "Paracetamol 500mg (para la fiebre)", "Pastillas de propóleo para la garganta"]
      },
      {
        "nombre": "Baclofeno 10mg",
        "categoria": "Relajante Muscular Central",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento de la espasticidad muscular severa en patologías neurológicas (ej. esclerosis múltiple, lesiones medulares).",
        "posologia": "El médico indicará dosis progresiva (iniciando generalmente con 5mg o 10mg repartidos en el día), tomar con alimentos.",
        "contraindicaciones": "Hipersensibilidad, úlcera péptica activa. Precaución en epilepsia y falla renal.",
        "tips_venta": "Advertir sobre la fuerte somnolencia inicial. Recomendar no manejar vehículos ni operar maquinaria peligrosa.",
        "cross_selling": ["Crema analgésica tópica", "Complejo B", "Guatero térmico / Compresa de gel"]
      },
      {
        "nombre": "Berocca Performance (Efervescente)",
        "categoria": "Suplemento Vitamínico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Aporte de vitaminas del complejo B, vitamina C, magnesio y zinc para mejorar el rendimiento físico y mental frente al estrés.",
        "posologia": "1 comprimido efervescente al día, disuelto en un vaso de agua, preferentemente por la mañana.",
        "contraindicaciones": "Insuficiencia renal grave, antecedentes de cálculos renales (por la vitamina C).",
        "tips_venta": "Excelente venta cruzada para personas que compran analgésicos para la cefalea por estrés o época de exámenes. La orina se tornará muy amarilla.",
        "cross_selling": ["Ibuprofeno 400mg (dolor de cabeza tensional)", "Ginseng", "Gotas lubricantes oculares (por estudio/pantallas)"]
      },
      {
        "nombre": "Bromuro de Ipratropio 250mcg",
        "categoria": "Broncodilatador / Anticolinérgico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento del broncoespasmo asociado a EPOC, asma crónica y cuadros respiratorios obstructivos agudos.",
        "posologia": "Habitualmente 2 puffs o inhalaciones de 2 a 4 veces al día, según indicación médica.",
        "contraindicaciones": "Hipersensibilidad a la atropina o derivados. Precaución en glaucoma de ángulo cerrado y retención urinaria.",
        "tips_venta": "Asegurarse que el paciente sabe usar la aerocámara. Recomendar enjuagarse la boca tras el uso.",
        "cross_selling": ["Aerocámara (adulto o infantil)", "Suero fisiológico (si usa nebulizador)", "Termómetro"]
      },
      {
        "nombre": "Carvedilol 12,5mg",
        "categoria": "Antihipertensivo / Betabloqueador y Alfabloqueador",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Trata la hipertensión y la insuficiencia cardíaca crónica. Mejora la función del corazón.",
        "posologia": "1 o 2 comprimidos diarios según ajuste médico. Se recomienda tomar junto con las comidas para evitar bajas de presión bruscas.",
        "contraindicaciones": "Asma bronquial severo, shock cardiogénico, bradicardia importante, bloqueo auriculoventricular.",
        "tips_venta": "Debe tomarse con comida. Advertir que al levantarse de golpe puede marearse (hipotensión ortostática).",
        "cross_selling": ["Monitor de presión arterial", "Pastillero", "Suplemento Omega 3"]
      },
      {
        "nombre": "Ciclobenzaprina 10mg",
        "categoria": "Relajante Muscular / Analgésico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Alivio de espasmos musculares dolorosos (tortícolis, lumbago) de origen musculoesquelético.",
        "posologia": "1 comprimido cada 8 o 12 horas, uso a corto plazo (máximo 2-3 semanas).",
        "contraindicaciones": "Hipertiroidismo, fase aguda de recuperación de infarto de miocardio, arritmias.",
        "tips_venta": "Da mucha somnolencia, sugerir la toma más fuerte en la noche antes de dormir. No mezclar con alcohol.",
        "cross_selling": ["Paracetamol / Ibuprofeno (para complementar el dolor)", "Parche poroso o crema de calor", "Compresa frío/calor"]
      },
      {
        "nombre": "Ciprofloxacino 500mg",
        "categoria": "Antimicrobiano / Fluoroquinolona",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Infecciones urinarias fuertes (pielonefritis, cistitis complicada), infecciones intestinales y óseas.",
        "posologia": "1 comprimido cada 12 horas. Ingerir con abundante agua. No tomar junto a lácteos ni antiácidos.",
        "contraindicaciones": "Hipersensibilidad a quinolonas, embarazo, lactancia, niños y adolescentes en crecimiento (riesgo de cartílago).",
        "tips_venta": "Advertir riesgo de tendinitis (sobre todo en tendón de Aquiles). Exigir receta estricta. Separar de suplementos de calcio o hierro.",
        "cross_selling": ["Probiótico (separado por 2 horas)", "Cápsulas de Cranberry (prevención ITU)", "Paracetamol (para la fiebre)"]
      },
      {
        "nombre": "Clindamicina 300mg",
        "categoria": "Antimicrobiano / Lincosamida",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Infecciones dentales profundas, infecciones de piel, huesos y pelvis causadas por bacterias anaerobias.",
        "posologia": "1 cápsula cada 8 horas o cada 6 horas según receta. Tomar con vaso lleno de agua.",
        "contraindicaciones": "Antecedentes de colitis pseudomembranosa, hipersensibilidad al principio activo.",
        "tips_venta": "Si el paciente presenta diarrea fuerte y persistente, debe suspender y consultar médico de urgencia. Excelente para recetas dentales.",
        "cross_selling": ["Probiótico multicepa intenso (indispensable)", "Ibuprofeno o Ketoprofeno", "Enjuague de clorhexidina"]
      },
      {
        "nombre": "Clonazepam 2mg",
        "categoria": "Psicofármaco / Benzodiazepina",
        "lista_control": "Lista IV (DS 405) - Psicotrópicos",
        "condicion_venta": "Receta Médica Retenida (RR) con Control de Existencia y registro de cliente",
        "para_que_sirve": "Tratamiento de trastornos de pánico, ansiedad generalizada y crisis epilépticas.",
        "posologia": "Según estricta indicación médica (usualmente se fracciona el comprimido en mitades o cuartos).",
        "contraindicaciones": "Miastenia gravis, insuficiencia respiratoria severa, glaucoma de ángulo estrecho.",
        "tips_venta": "Retener la receta siempre. Anotar en libro foliado. Indicar al paciente no suspender de golpe ni mezclar con alcohol.",
        "cross_selling": ["Cortador de pastillas (esencial para 2mg)", "Melatonina (si el doc intenta deshabituación progresiva)", "Té de melisa/manzanilla"]
      },
      {
        "nombre": "Clorfenamina Maleato 4mg",
        "categoria": "Antihistamínico de primera generación",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Alivio de síntomas alérgicos rápidos (rinitis, uritcaria, picaduras de insectos).",
        "posologia": "1 comprimido cada 8 a 12 horas.",
        "contraindicaciones": "Precaución en hipertrofia prostática, glaucoma y pacientes que manejan vehículos (produce sueño).",
        "tips_venta": "Da sueño intenso en la mayoría de los adultos. Recomendar loratadina o cetirizina si el paciente necesita trabajar/manejar.",
        "cross_selling": ["Lágrimas artificiales", "Crema antipruriginosa tópica", "Vitamina C"]
      },
      {
        "nombre": "Cloxacilina 500mg",
        "categoria": "Antimicrobiano / Penicilina antiestafilocócica",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Infecciones de piel y tejidos blandos (celulitis, impétigo, abscesos) causadas por estafilococos.",
        "posologia": "1 cápsula cada 6 horas. DEBE tomarse con el estómago vacío (1 hora antes o 2 horas después de comer).",
        "contraindicaciones": "Alergia a penicilinas.",
        "tips_venta": "Recalcar el estómago vacío, ya que los alimentos reducen drásticamente su absorción. Respetar el horario cada 6 horas.",
        "cross_selling": ["Probiótico", "Gasa y suero (si hay herida infectada)", "Paracetamol"]
      },
      {
        "nombre": "Dexametasona 4mg",
        "categoria": "Corticosteroide Sistémico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Potente antiinflamatorio y antialérgico usado en asma grave, reacciones alérgicas severas y crisis reumáticas.",
        "posologia": "Según indicación estricta, usualmente toma única matinal para respetar ciclo de cortisol.",
        "contraindicaciones": "Infecciones fúngicas sistémicas, úlcera gástrica activa, precaución en diabetes (sube la glicemia).",
        "tips_venta": "Indicar que se tome en la mañana con comida para proteger el estómago. Preguntar si es diabético.",
        "cross_selling": ["Omeprazol (como protector gástrico si es tratamiento largo)", "Crema hidratante para la piel", "Suplemento de Calcio"]
      },
      {
        "nombre": "Diclofenaco Sódico 50mg",
        "categoria": "AINE / Analgésico y Antiinflamatorio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Alivia inflamación y dolor moderado a severo (artritis, lumbago, dolor dental fuerte).",
        "posologia": "1 comprimido cada 8 o 12 horas, máximo 150mg al día. Tomar después de las comidas.",
        "contraindicaciones": "Úlcera gástrica activa, falla renal, asma sensible a AINEs, pacientes con bypass gástrico.",
        "tips_venta": "Altamente gastrolesivo. Recomendar siempre tomarlo con el estómago lleno.",
        "cross_selling": ["Omeprazol (Protector gástrico)", "Parche de calor o Gel Diclofenaco", "Complejo B (si es neuropatía)"]
      },
      {
        "nombre": "Domperidona 10mg",
        "categoria": "Antiemético / Procinético",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Alivio de las náuseas, vómitos, pesadez estomacal y reflujo. Acelera el vaciamiento gástrico.",
        "posologia": "1 comprimido 15 a 30 minutos antes de las comidas principales (máximo 3 al día).",
        "contraindicaciones": "Hemorragia gastrointestinal, tumores hipofisarios, antecedentes de arritmias cardíacas severas.",
        "tips_venta": "La clave es tomarlo ANTES de comer. Tratamientos deben ser cortos (no más de 1 semana en lo posible).",
        "cross_selling": ["Sales de rehidratación (si hay vómito)", "Antiácido masticable", "Probiótico"]
      },
      {
        "nombre": "Enalapril Maleato 10mg",
        "categoria": "Antihipertensivo / IECA",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Control de la presión arterial y protección del riñón en diabéticos. Tratamiento de insuficiencia cardíaca.",
        "posologia": "1 o 2 comprimidos al día según indicación.",
        "contraindicaciones": "Embarazo (teratogénico), antecedentes de angioedema. Estenosis arterial renal.",
        "tips_venta": "Puede causar tos seca molesta (efecto de clase IECA). Si ocurre, sugerirle al paciente que hable con su médico para cambiarlo (ej. Losartán).",
        "cross_selling": ["Tensiómetro", "Sal dietética", "Endulzante"]
      },
      {
        "nombre": "Espironolactona 25mg",
        "categoria": "Diurético ahorrador de potasio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Trata la insuficiencia cardíaca, edema hepático y coadyuvante en hipertensión. También usado off-label para acné hormonal.",
        "posologia": "1 a 2 comprimidos diarios, usualmente por la mañana.",
        "contraindicaciones": "Insuficiencia renal aguda, hiperpotasemia (potasio alto), embarazo.",
        "tips_venta": "Tomar idealmente de día para no levantarse a orinar de noche. Evitar suplementos extra de potasio.",
        "cross_selling": ["Tensiómetro", "Suplemento vitamínico (sin potasio extra)", "Crema antiacné (si su uso es dermatológico)"]
      },
      {
        "nombre": "Espironolactona 100mg",
        "categoria": "Diurético ahorrador de potasio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento de ascitis por cirrosis, edema severo e hiperaldosteronismo.",
        "posologia": "1 comprimido diario (dosis alta, estrictamente bajo monitoreo médico).",
        "contraindicaciones": "Insuficiencia renal, hiperkalemia.",
        "tips_venta": "El paciente orinará mucho, debe tomarlo temprano en la mañana. Monitoreo cardíaco es importante.",
        "cross_selling": ["Tensiómetro", "Humectante de piel (se reseca la piel)", "Pastillero semanal"]
      },
      {
        "nombre": "Famotidina 20mg",
        "categoria": "Antiácido / Antagonista H2",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Alivia el reflujo, la acidez estomacal y ayuda a curar úlceras. Reduce la producción de ácido en el estómago.",
        "posologia": "1 comprimido al día (noche) o 1 cada 12 horas. Tomar antes de comer o al acostarse.",
        "contraindicaciones": "Falla renal severa requiere ajuste de dosis.",
        "tips_venta": "Excelente opción si el paciente no tolera el Omeprazol. Funciona muy bien tomado 30 min antes de la cena.",
        "cross_selling": ["Antiácidos masticables de efecto rápido (Tums/Mylanta)", "Probióticos", "Té de manzanilla"]
      },
      {
        "nombre": "Femsure (Calcio + Vitamina D)",
        "categoria": "Suplemento Mineral y Vitamínico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Prevención y tratamiento de la osteoporosis y osteopenia. La vitamina D asegura la absorción del calcio.",
        "posologia": "1 o 2 comprimidos al día, tomar junto o inmediatamente después de las comidas (para maximizar absorción).",
        "contraindicaciones": "Hipercalcemia, litiasis renal (cálculos de calcio).",
        "tips_venta": "Si toma también fierro o levotiroxina, separar las tomas por al menos 3 horas, el calcio bloquea su absorción.",
        "cross_selling": ["Colágeno Hidrolizado", "Vitamina C", "Analgésico tópico para el dolor articular"]
      },
      {
        "nombre": "Fluconazol 150mg",
        "categoria": "Antimicótico Sistémico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento de infecciones por hongos, especialmente candidiasis vaginal, balanitis y hongos en la piel/uñas.",
        "posologia": "Para candidiasis vaginal usualmente es dosis única (1 sola cápsula). En onicomicosis el tratamiento es largo (1 semanal).",
        "contraindicaciones": "Daño hepático, embarazo. Interacciona peligrosamente con estatinas y anticoagulantes.",
        "tips_venta": "Si es dosis única, indicarlo claramente para evitar sobremedicación. Si es para cándida, tratar también a la pareja si el médico lo avala.",
        "cross_selling": ["Crema antimicótica (Clotrimazol/Fluconazol) tópica", "Jabón íntimo con pH neutro", "Probiótico ginecológico"]
      },
      {
        "nombre": "Furosemida 40mg",
        "categoria": "Diurético de Asa",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Diurético muy potente para eliminar retención de líquidos en insuficiencia cardíaca, renal o hepática.",
        "posologia": "Media a 1 tableta al día, preferentemente en la mañana. Actúa muy rápido (en 1 hora).",
        "contraindicaciones": "Anuria, hipocalemia (potasio bajo), hipotensión severa, deshidratación.",
        "tips_venta": "El paciente DEBE tomarlo en la mañana, de lo contrario no podrá dormir por ir al baño. Elimina mucho potasio.",
        "cross_selling": ["Suplemento de Potasio (si el médico lo indicó)", "Tensiómetro", "Báscula para pesar retención de líquido"]
      },
      {
        "nombre": "Gemfibrozilo 300mg",
        "categoria": "Hipolipemiante / Fibrato",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Baja los niveles muy altos de triglicéridos en la sangre, previniendo pancreatitis.",
        "posologia": "1 a 2 cápsulas al día, 30 minutos ANTES del desayuno y/o cena.",
        "contraindicaciones": "Enfermedad hepática o renal grave, enfermedad de la vesícula biliar. No asociar libremente con estatinas sin supervisión.",
        "tips_venta": "Tomar 30 min antes de la comida es vital para su eficacia. Advertir no mezclar por su cuenta con Atorvastatina.",
        "cross_selling": ["Omega 3", "Test de glicemia/colesterol", "Endulzante"]
      },
      {
        "nombre": "Glibenclamida 5mg",
        "categoria": "Hipoglicemiante oral / Sulfonilurea",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Controla el azúcar en sangre en Diabetes Tipo 2 estimulando al páncreas a liberar más insulina.",
        "posologia": "1 comprimido diario antes del desayuno.",
        "contraindicaciones": "Diabetes Tipo 1, insuficiencia renal grave, cetoacidosis diabética.",
        "tips_venta": "Riesgo alto de hipoglicemia (bajón de azúcar). Indicar al paciente no saltarse las comidas bajo ningún motivo.",
        "cross_selling": ["Glucómetro y cintas", "Caramelos o glucosa líquida (para emergencias de hipoglicemia)", "Crema pie diabético"]
      },
      {
        "nombre": "Glicerina Adulto",
        "categoria": "Laxante osmótico de uso local",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Alivia el estreñimiento ocasional estimulando el reflejo evacuatorio de forma rápida.",
        "posologia": "1 supositorio vía rectal. Hace efecto generalmente entre 15 y 30 minutos.",
        "contraindicaciones": "Hemorroides agudas sangrantes, dolor abdominal de origen desconocido.",
        "tips_venta": "Aclarar vía de administración (rectal). Si el paciente está muy constipado crónicamente, requiere evaluación médica.",
        "cross_selling": ["Fibra soluble (Lactulosa o Psyllium)", "Crema proctológica", "Toallas húmedas"]
      },
      {
        "nombre": "Hidroclorotiazida 50mg",
        "categoria": "Diurético Tiazídico / Antihipertensivo",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Ayuda a tratar la presión alta eliminando sal y agua por la orina.",
        "posologia": "Medio a 1 comprimido al día en la mañana.",
        "contraindicaciones": "Falla renal severa, gota (ácido úrico alto), alérgica a sulfas.",
        "tips_venta": "Aumenta la micción, tomar en la mañana. Si el paciente tiene crisis de Gota, que avise a su médico.",
        "cross_selling": ["Tensiómetro", "Suplemento de potasio (si receta médico)", "Sal sin sodio"]
      },
      {
        "nombre": "Hidrocortisona 1% (Crema)",
        "categoria": "Corticosteroide Tópico de baja potencia",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Alivia picazón, enrojecimiento e inflamación leve en dermatitis, eccemas, alergias y picaduras de insectos.",
        "posologia": "Aplicar capa fina en la zona afectada 1 a 2 veces al día por máximo 7 días.",
        "contraindicaciones": "Infecciones de piel (hongos, virus como herpes), acné, rosácea.",
        "tips_venta": "No usar por más de 1 semana sin ver al médico. No aplicar en grandes zonas ni vendar fuertemente la zona.",
        "cross_selling": ["Crema hidratante hipoalergénica (Ceramidas)", "Antihistamínico oral (Loratadina)", "Jabón Syndet"]
      },
      {
        "nombre": "Ibuprofeno 600mg",
        "categoria": "AINE / Analgésico y Antiinflamatorio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Alivio de dolor moderado, fiebre, dolor dental fuerte, dolor menstrual y lumbago.",
        "posologia": "1 comprimido cada 8 hours después de comidas.",
        "contraindicaciones": "Úlcera péptica activa, insuficiencia renal, embarazo (tercer trimestre), asma sensible a AINEs.",
        "tips_venta": "Siempre tomar con abundante comida. Si es dolor menstrual, es más efectivo si se toma apenas inicia la molestia.",
        "cross_selling": ["Protector gástrico", "Parche de calor", "Complejo B"]
      },
      {
        "nombre": "Ketoprofeno 50mg",
        "categoria": "AINE / Analgésico y Antiinflamatorio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Rápido alivio del dolor agudo musculoesquelético, dolor de muelas y trauma leve.",
        "posologia": "1 cápsula cada 8 horas con comida.",
        "contraindicaciones": "Sangrado gástrico, falla renal, asma inducida por AINEs.",
        "tips_venta": "Muy irritante para el estómago. Uso corto plazo (3-5 días).",
        "cross_selling": ["Omeprazol", "Gel antiinflamatorio tópico", "Compresas frías"]
      },
      {
        "nombre": "Kitadol Infantil (Paracetamol Jarabe)",
        "categoria": "Analgésico / Antipirético",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Bajar la fiebre y aliviar el dolor leve a moderado en niños (post vacuna, dolor dental, resfríos).",
        "posologia": "Dosificación según peso del niño (10-15 mg por kilo). Ver tabla en la caja.",
        "contraindicaciones": "Falla hepática grave.",
        "tips_venta": "Recalcar: la dosis en niños se calcula por PESO, no por edad. No sobrepasar 4 a 5 dosis en 24 horas.",
        "cross_selling": ["Termómetro pediátrico digital", "Suero fisiológico nasal", "Jeringa dosificadora exacta"]
      },
      {
        "nombre": "Lanzoprazol 30mg",
        "categoria": "Inhibidor de la Bomba de Protones (Protector Gástrico)",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento de úlceras gástricas, reflujo gastroesofágico severo y erradicación de H. Pylori.",
        "posologia": "1 cápsula diaria, 30 a 60 minutos ANTES del desayuno.",
        "contraindicaciones": "Precaución en daño hepático severo.",
        "tips_venta": "El error más común es tomarlo después de comer; no funciona. Debe ser en ayunas total.",
        "cross_selling": ["Antiácido suspensión rápida (para alivio mientras hace efecto)", "Té digestivo", "Probióticos"]
      },
      {
        "nombre": "Levotiroxina 100mcg",
        "categoria": "Hormona Tiroidea",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento del hipotiroidismo. Reemplaza la hormona que la glándula tiroides no produce.",
        "posologia": "1 comprimido diario estricto en ayunas, esperando al menos 30-45 minutos antes de desayunar.",
        "contraindicaciones": "Infarto agudo de miocardio no tratado, hipertiroidismo no tratado.",
        "tips_venta": "No tomar junto con hierro, calcio ni omeprazol (separar por 4 horas mínimo). Cumplir ayuno es crítico.",
        "cross_selling": ["Pastillero", "Suplemento de Vitamina D", "Crema ultra hidratante (hipotiroideos tienen piel muy seca)"]
      },
      {
        "nombre": "Loperamida 2mg",
        "categoria": "Antidiarreico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Detiene rápidamente la diarrea aguda no infecciosa reduciendo la motilidad intestinal.",
        "posologia": "2 cápsulas iniciales, luego 1 después de cada deposición líquida (Máx 8 al día).",
        "contraindicaciones": "Diarrea con fiebre alta o sangre, colitis ulcerosa, disentería.",
        "tips_venta": "No usar si la diarrea parece infecciosa (fiebre/sangre) ya que retiene la bacteria. Priorizar hidratación.",
        "cross_selling": ["Sales de rehidratación oral (Suero)", "Probióticos de alta carga (Enterogermina o Perenteryl)", "Toallas húmedas"]
      },
      {
        "nombre": "Loratadina 5mg/5mL Jarabe",
        "categoria": "Antihistamínico de segunda generación",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Alivia alergias (rinitis, picazón) en niños sin causar somnolencia severa.",
        "posologia": "Niños >30kg: 10 mL diarios. Niños <30kg: 5 mL diarios.",
        "contraindicaciones": "Menores de 2 años (sin indicación médica), daño hepático severo.",
        "tips_venta": "Ideal para la rinitis de primavera en escolares porque no los adormece. Incluir jeringa/vasito.",
        "cross_selling": ["Suero fisiológico nasal", "Vitamina C", "Termómetro (si dudan si es resfrío)"]
      },
      {
        "nombre": "Losartán Potásico 50mg",
        "categoria": "Antihipertensivo / ARA II",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Baja la presión arterial y protege el riñón en pacientes diabéticos. Alternativa ideal si Enalapril da tos.",
        "posologia": "1 o 2 comprimidos diarios según prescripción.",
        "contraindicaciones": "Embarazo, falla hepática severa.",
        "tips_venta": "No produce tos como el enalapril. Toma constante es vital para evitar ACV.",
        "cross_selling": ["Monitor de presión", "Organizador de pastillas", "Sal sin sodio"]
      },
      {
        "nombre": "Meloxicam 15mg",
        "categoria": "AINE inhibidor selectivo COX-2",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Antiinflamatorio muy usado en artrosis, artritis reumatoide y dolores crónicos articulares.",
        "posologia": "1 comprimido al día con abundante líquido, posterior a alimentos.",
        "contraindicaciones": "Úlcera gástrica, insuficiencia renal grave, alergia a AINEs.",
        "tips_venta": "Es más suave para el estómago que el Diclofenaco, pero igual se debe tomar con comida.",
        "cross_selling": ["Colágeno hidrolizado tipo 2", "Protector gástrico", "Bolsa de frío/calor"]
      },
      {
        "nombre": "Metamizol Sódico 300mg",
        "categoria": "Analgésico / Antipirético / Antiespasmódico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Bajar fiebre muy alta y calmar dolores viscerales (cólicos) y dolores severos.",
        "posologia": "1 a 2 comprimidos cada 8 horas.",
        "contraindicaciones": "Porfiria hepática, déficit de G6PD, hipotensión severa.",
        "tips_venta": "Excelente para bajar fiebre resistente. Puede teñir la orina rojiza (es normal).",
        "cross_selling": ["Termómetro", "Antiespasmódico (Viadil)", "Gasa y parches"]
      },
      {
        "nombre": "Metformina 850mg",
        "categoria": "Hipoglicemiante / Biguanida",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Pilar del tratamiento de Resistencia a la Insulina y Diabetes Tipo 2. Baja el azúcar y mejora la respuesta celular.",
        "posologia": "1 a 3 veces al día, tomar estricto DURANTE o DESPUÉS de las comidas.",
        "contraindicaciones": "Insuficiencia renal moderada-severa, alcoholismo crónico, acidosis láctica.",
        "tips_venta": "Avisa al paciente que los primeros días sentirá el estómago muy revuelto o diarrea; es temporal.",
        "cross_selling": ["Glucómetro", "Complejo B (su uso crónico baja la vit B12)", "Edulcorante"]
      },
      {
        "nombre": "Metoclopramida 10mg",
        "categoria": "Antiemético / Procinético Central",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Prevenir y tratar vómitos severos (incluyendo post quimioterapia y migraña).",
        "posologia": "1 comprimido 30 minutos antes de las comidas (máximo 3 veces al día).",
        "contraindicaciones": "Hemorragia gastrointestinal, epilepsia, Parkinson.",
        "tips_venta": "Puede causar movimientos musculares raros o rigidez (efecto extrapiramidal). En tal caso, suspender de inmediato.",
        "cross_selling": ["Sales de rehidratación oral", "Paracetamol (si es migraña asociada)", "Té de menta/manzanilla"]
      },
      {
        "nombre": "Metronidazol 500mg",
        "categoria": "Antimicrobiano y Antiparasitario",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Infecciones vaginales (tricomoniasis, vaginosis bacteriana), amebiasis, y bacterias del estómago (H. pylori).",
        "posologia": "1 comprimido cada 8 o 12 horas por 7 días usualmente. Tomar con comida para evitar asco.",
        "contraindicaciones": "Consumo de ALCOHOL. Embarazo (1er trimestre).",
        "tips_venta": "ADVERTENCIA CRÍTICA: Sabor metálico es normal. Prohibido tomar alcohol, causará efecto Antabús severo.",
        "cross_selling": ["Probiótico (imprescindible)", "Óvulos vaginales (si la terapia es mixta)", "Jabón íntimo"]
      },
      {
        "nombre": "Naproxeno Sódico 550mg",
        "categoria": "AINE / Analgésico y Antiinflamatorio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Dolor de muelas agudo, dolor menstrual fuerte y crisis de gota. Efecto muy prolongado.",
        "posologia": "1 comprimido cada 12 horas después de comer.",
        "contraindicaciones": "Úlcera gástrica, hipertensión no controlada, falla renal.",
        "tips_venta": "Dura 12 horas, no tomarlo más seguido. Siempre con estómago lleno.",
        "cross_selling": ["Protector gástrico", "Crema analgésica tópica", "Bolsa de calor"]
      },
      {
        "nombre": "Neurobionta (Comprimidos)",
        "categoria": "Complejo Vitamínico B (B1, B6, B12)",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Alivio y tratamiento de neuritis, lumbago, dolor del nervio ciático, y fatiga nerviosa.",
        "posologia": "1 a 3 grageas al día.",
        "contraindicaciones": "Hipersensibilidad al Cobalto o a la vit B1.",
        "tips_venta": "Excelente asociado a AINEs (Diclofenaco/Ibuprofeno) para lumbagos y ciáticas. Orina amarillo intenso.",
        "cross_selling": ["Parche calórico", "Analgésico oral", "Ginseng"]
      },
      {
        "nombre": "Nifuroxazida 200mg",
        "categoria": "Antiséptico intestinal de acción local",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento de diarreas bacterianas agudas sin invadir el torrente sanguíneo.",
        "posologia": "1 cápsula cada 6 horas por 5 a 7 días máximo.",
        "contraindicaciones": "Alergia a nitrofuranos, niños menores de 6 años (en cápsulas).",
        "tips_venta": "No suspender la hidratación. Es de acción puramente local (intestino).",
        "cross_selling": ["Suero de rehidratación", "Probióticos (Perenteryl es ideal)", "Dieta blanda astringente"]
      },
      {
        "nombre": "Nistatina 100.000 UI (Suspensión)",
        "categoria": "Antimicótico de acción local",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Hongos en la boca ('muguet' en bebés o pacientes con bajas defensas) y tubo digestivo.",
        "posologia": "Según edad (usualmente gotario completo en cada mejilla). Mantener el líquido en la boca lo más posible antes de tragar.",
        "contraindicaciones": "Hipersensibilidad. No se absorbe, por lo que casi no tiene contraindicaciones severas.",
        "tips_venta": "Enseñar a no tragarlo de inmediato; debe bañar las lesiones de la boca para actuar. Agitar bien.",
        "cross_selling": ["Cepillo dental nuevo suave", "Termómetro (si es bebé)", "Toallitas húmedas"]
      },
      {
        "nombre": "Nitrofurantoína 100mg (Macrocristales)",
        "categoria": "Antiséptico y Antibacteriano Urinario",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Cura infecciones urinarias no complicadas (Cistitis) y previene su recurrencia.",
        "posologia": "1 cápsula cada 12 horas o cada 6 horas según receta. Ingerir junto a alimentos para tolerarla mejor.",
        "contraindicaciones": "Insuficiencia renal moderada-severa (no llega a la orina para hacer efecto), último mes de embarazo.",
        "tips_venta": "Avisar que teñirá la orina color marrón/naranja oscuro (no es sangre). Tomar mucha agua.",
        "cross_selling": ["Cápsulas de Cranberry", "Probióticos para la flora vaginal", "Ibuprofeno"]
      },
      {
        "nombre": "Omeprazol 20mg",
        "categoria": "Inhibidor Bomba Protones (Protector Gástrico)",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Reduce la producción de ácido estomacal, sana gastritis, úlceras y protege del daño de AINEs.",
        "posologia": "1 cápsula diaria en ayunas total, al menos 30 min antes de la primera comida.",
        "contraindicaciones": "Daño hepático (requiere ajuste). No usar largo plazo sin evaluación médica.",
        "tips_venta": "Mucha gente lo toma con dolor; explicar que su efecto es progresivo, no es un antiácido instantáneo.",
        "cross_selling": ["Antiácidos masticables líquidos", "AINE (si el paciente lleva diclofenaco)", "Té digestivo"]
      },
      {
        "nombre": "Paracetamol 500mg",
        "categoria": "Analgésico / Antipirético central",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Fiebre y dolor leve a moderado. Es el medicamento más seguro para casi toda la población, incluidas embarazadas.",
        "posologia": "1 a 2 comprimidos cada 6 u 8 horas. No exceder 4 gramos (8 pastillas) en 24h.",
        "contraindicaciones": "Insuficiencia hepática grave (cirrosis), alcoholismo crónico.",
        "tips_venta": "No mezclar con alcohol por daño hepático grave. No quita la inflamación, solo dolor y fiebre.",
        "cross_selling": ["Termómetro", "Vitamina C", "Mentholatum (si es resfrío)"]
      },
      {
        "nombre": "Prednisona 20mg",
        "categoria": "Corticosteroide Sistémico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Baja inflamaciones potentes, crisis de asma, brotes alérgicos graves y enfermedades autoinmunes.",
        "posologia": "Según receta. Debe tomarse en la MAÑANA (para no suprimir eje adrenal) y con el desayuno.",
        "contraindicaciones": "Infecciones fúngicas sistémicas, úlcera gástrica activa, precaución en diabetes (descontrola la glicemia).",
        "tips_venta": "Enfatizar el horario matinal y nunca suspender de un día para otro si lleva más de 1 semana tomándolo.",
        "cross_selling": ["Protector gástrico (Omeprazol)", "Calcio (si es receta larga)", "Monitor de glucosa (si es diabético)"]
      },
      {
        "nombre": "Propafenona 150mg",
        "categoria": "Antiarrítmico",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento y prevención de arritmias cardíacas peligrosas, estabilizando los latidos del corazón.",
        "posologia": "Estricta supervisión del cardiólogo. Usualmente cada 8 o 12 horas.",
        "contraindicaciones": "Falla cardíaca congestiva severa, asma grave, bradicardia extrema.",
        "tips_venta": "Recordar no saltarse tomas para evitar crisis de arritmia. Exigir receta al día.",
        "cross_selling": ["Tensiómetro y medidor de pulso", "Organizador de pastillas semanal", "Aspirina preventiva"]
      },
      {
        "nombre": "Salbutamol 100mcg Aerosol",
        "categoria": "Broncodilatador de acción corta",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Abre las vías respiratorias en crisis de asma, bronquitis aguda o como prevención antes del ejercicio en asmáticos.",
        "posologia": "1 a 2 puff en caso de ahogo (crisis) o según horario indicado por broncopulmonar.",
        "contraindicaciones": "Precaución extrema en hipertiroidismo, hipertensión severa y taquicardias.",
        "tips_venta": "Agitar vigorosamente antes de disparar. Si el paciente siente palpitaciones y temblor de manos, es el efecto adverso clásico.",
        "cross_selling": ["Aerocámara (Aumenta la efectividad un 40%)", "Antihistamínico", "Termómetro"]
      },
      {
        "nombre": "Salmeterol / Fluticasona 25/250mcg",
        "categoria": "Broncodilatador + Corticosteroide Inhalatorio",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Tratamiento preventivo y de mantención del Asma y EPOC severo.",
        "posologia": "Generalmente 2 inhalaciones cada 12 horas (Mañana y Noche). Uso crónico, no sirve para la crisis aguda.",
        "contraindicaciones": "Infecciones fúngicas no tratadas en pulmón.",
        "tips_venta": "Regla de Oro: Enjuagarse y lavar bien la boca después de usar para evitar Candidiasis oral (hongos).",
        "cross_selling": ["Aerocámara con mascarilla", "Enjuague bucal", "Pastillero/Calendario de recordatorio"]
      },
      {
        "nombre": "Sertralina 50mg",
        "categoria": "Antidepresivo / ISRS",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Trata depresión, crisis de pánico, ansiedad generalizada y trastorno obsesivo compulsivo.",
        "posologia": "1 comprimido al día (mañana o noche, según tolerancia del paciente).",
        "contraindicaciones": "No mezclar con IMAOs, precaución extrema en epilepsia e ideación suicida inicial.",
        "tips_venta": "Tarda de 2 a 4 semanas en hacer efecto positivo; que el paciente no se desespere. Puede causar náuseas la primera semana.",
        "cross_selling": ["Vitaminas del complejo B", "Pastillero", "Melatonina (si causa insomnio)"]
      },
      {
        "nombre": "Tamsulosina 0.4mg",
        "categoria": "Alfabloqueador prostático",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Relaja el cuello de la vejiga y la próstata, permitiendo orinar con flujo normal en hombres con Hiperplasia Prostática Benigna.",
        "posologia": "1 cápsula al día después de la misma comida (generalmente el desayuno).",
        "contraindicaciones": "Falla hepática grave. Precaución antes de una cirugía de cataratas (informar al oftalmólogo).",
        "tips_venta": "Puede bajar un poco la presión y causar mareo al inicio. Sugerir tomarlo 30 min post cena.",
        "cross_selling": ["Suplemento de Cranberry o semilla de calabaza", "Incontinencia urinaria (pañales / apósitos para hombre)"]
      },
      {
        "nombre": "Topiramato 50mg",
        "categoria": "Anticonvulsivante / Preventivo de Migraña",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Controla epilepsia y previene eficazmente crisis constantes de migrañas intensas.",
        "posologia": "Inicio progresivo indicado por neurólogo, dosis se dividen en día y noche.",
        "contraindicaciones": "Embarazo, falla renal, glaucoma.",
        "tips_venta": "Recomendar alta ingesta de agua para evitar cálculos renales. Produce pérdida de peso y parestesias (hormigueo) en dedos.",
        "cross_selling": ["Analgésico SOS (Migranol)", "Botella de agua (fomento de hidratación)", "Vitaminas B"]
      },
      {
        "nombre": "Tramadol 50mg",
        "categoria": "Analgésico Opioide débil",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control de Existencia y registro de cliente",
        "para_que_sirve": "Alivio de dolor moderado a severo (post operatorio, hernias, cáncer, dolor agudo).",
        "posologia": "1 cápsula cada 8 horas, o SOS en dolor.",
        "contraindicaciones": "Depresión respiratoria severa, alcoholismo, epilepsia no controlada.",
        "tips_venta": "Exigir receta retenida. Advertir sobre fuertes náuseas y mareos en los primeros usos. Da sueño.",
        "cross_selling": ["Metoclopramida/Domperidona (para evitar las náuseas del Tramadol)", "Paracetamol (potencia analgésica)", "Laxante suave (estriñe mucho)"]
      },
      {
        "nombre": "Trioval Comprimidos",
        "categoria": "Antigripal (Paracetamol + Pseudoefedrina + Clorfenamina)",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Descongestiona, baja fiebre y alivia el dolor corporal y alergia nasal de resfríos fuertes.",
        "posologia": "1 comprimido cada 8 horas. No por más de 5 días.",
        "contraindicaciones": "Hipertensión severa, glaucoma, hipertiroidismo y problemas de próstata.",
        "tips_venta": "Preguntar siempre si es Hipertenso (la pseudoefedrina le disparará la presión). Da sueño por la clorfenamina.",
        "cross_selling": ["Vitamina C + Zinc", "Toallas de papel con aloe vera", "Spray nasal de agua de mar"]
      },
      {
        "nombre": "Venlafaxina 75mg (L.P.)",
        "categoria": "Antidepresivo Dual (ISRSN)",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)",
        "para_que_sirve": "Depresión mayor, trastorno de ansiedad generalizada y fobia social.",
        "posologia": "1 cápsula diaria (LP es Liberación Prolongada, tragar entera en la mañana).",
        "contraindicaciones": "No asociar a IMAO, hipertensión no controlada (a dosis altas sube la PA).",
        "tips_venta": "No masticar ni abrir la cápsula. No dejar el tratamiento de un día para otro (síndrome de abstinencia muy fuerte).",
        "cross_selling": ["Tensiómetro (por el riesgo de hipertensión)", "Pastillero", "Suplementos relajantes naturales"]
      },
      {
        "nombre": "Viadil Gotas (Compuesto)",
        "categoria": "Antiespasmódico + Analgésico (Pargeverina + Metamizol)",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Receta Médica Simple (R)",
        "para_que_sirve": "Quita el cólico abdominal, biliar, renal o menstrual severo combinando relajación muscular con dolor.",
        "posologia": "20 a 40 gotas disueltas en un poco de agua, hasta 3 veces al día.",
        "contraindicaciones": "Glaucoma, uropatía obstructiva, alergia a pirazolonas (Metamizol).",
        "tips_venta": "No usar frente a 'dolor de guata' que pueda ser Apendicitis sin diagnóstico, ya que enmascara el cuadro quirúrgico.",
        "cross_selling": ["Glicerina (si el dolor es por estreñimiento severo)", "Té de manzanilla", "Guatero de semillas"]
      },
      {
        "nombre": "Vitamina C 1g",
        "categoria": "Suplemento / Inmunoestimulante",
        "lista_control": "Ninguna (N/A)",
        "condicion_venta": "Venta Directa (VD)",
        "para_que_sirve": "Previene déficit de Vitamina C, potencia el sistema inmune y ayuda en la absorción de hierro.",
        "posologia": "1 comprimido efervescente al día en un vaso de agua.",
        "contraindicaciones": "Pacientes con historial de cálculos renales de oxalato (en dosis altas sostenidas).",
        "tips_venta": "Sugerir si el paciente compra hierro en comprimidos. Venta muy fácil en época de invierno.",
        "cross_selling": ["Multivitamínico", "Propóleo en spray", "Trioval (o similar para resfríos)"]
      },
      {
        "nombre": "Zolpidem 10mg",
        "categoria": "Hipnótico no benzodiazepínico",
        "lista_control": "Lista IV (DS 405) - Psicotrópicos",
        "condicion_venta": "Receta Médica Retenida (RR) con Control de Existencia y registro de cliente",
        "para_que_sirve": "Tratamiento a corto plazo del insomnio (dificultad para iniciar el sueño).",
        "posologia": "1 comprimido justo en el momento de meterse a la cama, hace efecto en 15-30 minutos.",
        "contraindicaciones": "Apnea del sueño severa, insuficiencia hepática grave.",
        "tips_venta": "Advertir al paciente que DEBE estar en la cama; puede causar amnesia o acciones sonámbulas si no se acuesta.",
        "cross_selling": ["Tapones de oído", "Antifaz para dormir", "Té relajante sin teína"]
      },
      {
        "nombre": "Zopiclona 7.5mg",
        "categoria": "Hipnótico no benzodiazepínico",
        "lista_control": "Lista IV (DS 405) - Psicotrópicos",
        "condicion_venta": "Receta Médica Retenida (RR) con Control de Existencia y registro de cliente",
        "para_que_sirve": "Inducción y mantenimiento del sueño para insomnio transitorio o crónico.",
        "posologia": "1 comprimido (7.5mg) justo al acostarse. Mitad (3.75mg) en adulto mayor.",
        "contraindicaciones": "Insuficiencia respiratoria severa, miastenia gravis.",
        "tips_venta": "Produce un sabor amargo/metálico muy fuerte al día siguiente (es completamente normal).",
        "cross_selling": ["Enjuague bucal fuerte o chicles (para el sabor metálico del día sgte)", "Infusión relajante", "Melatonina"]
      }
    ];

    try {
      for (const item of dataMasiva) {
        const docId = item.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        await setDoc(doc(db, "vademecum", docId), item);
      }
      alert("✅ ¡Carga masiva completada! Se integraron los 65 medicamentos al Vademécum de Firebase.");
      toggleAuditoria(); // Cierra o recarga para ver resultados
    } catch (error) {
      console.error("Error al cargar masivamente:", error);
      alert("❌ Ocurrió un error en la carga a Firebase.");
    }
    setCargandoAuditoria(false);
  };

  // Reutilización limpia del componente de Tarjeta para ambas vistas
  const renderTarjetaMedicamento = (item) => (
    <div key={item.id} className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden relative transition-all hover:border-emerald-200">
      {editandoId !== item.id ? (
        <>
          <div className="bg-slate-900 text-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl font-black">{item.nombre}</h2>
            <div className="flex gap-3 items-center flex-wrap">
              <span className="bg-emerald-500 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
                {item.categoria}
              </span>
              {isAdmin && (
                <button onClick={() => iniciarEdicion(item)} className="bg-white text-slate-900 hover:bg-emerald-400 hover:text-white text-xs font-black px-4 py-2 rounded-full transition-all shadow-sm">
                  ✏️ Editar Info
                </button>
              )}
            </div>
          </div>
          
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="font-black text-emerald-600 uppercase text-xs tracking-widest mb-2">¿Para qué sirve?</h3>
                <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line">{item.para_que_sirve}</p>
              </div>
              <div>
                <h3 className="font-black text-emerald-600 uppercase text-xs tracking-widest mb-2">Posología / Uso</h3>
                <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line">{item.posologia}</p>
              </div>
              <div>
                <h3 className="font-black text-rose-500 uppercase text-xs tracking-widest mb-2">Contraindicaciones</h3>
                <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line text-sm">{item.contraindicaciones || "Ninguna especificada."}</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 h-full flex flex-col justify-center">
              <h3 className="font-black text-slate-400 uppercase text-xs tracking-widest mb-2">Condición de Venta</h3>
              <p className="text-slate-900 font-black mb-4 text-xl">🏷️ {item.condicion_venta || "No especificada"}</p>

              {item.lista_control && item.lista_control !== "N/A" && item.lista_control !== "Ninguna (N/A)" && (
                <div className="mb-8 inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-4 py-2 rounded-xl">
                  <span className="text-rose-700 font-black text-sm uppercase">⚖️ {item.lista_control}</span>
                </div>
              )}
              
              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 mb-4">
                <h3 className="font-black text-amber-700 text-sm mb-2 uppercase">💡 Tips de Venta</h3>
                <p className="text-amber-900 font-medium text-sm whitespace-pre-line">{item.tips_venta}</p>
              </div>

              {item.cross_selling && item.cross_selling.length > 0 && (
                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                  <h3 className="font-black text-emerald-700 text-sm mb-2 uppercase">🔄 Cross-Selling</h3>
                  <ul className="text-emerald-900 font-medium text-sm list-disc pl-4">
                    {Array.isArray(item.cross_selling) 
                      ? item.cross_selling.map((cs, i) => <li key={i}>{cs}</li>)
                      : <li>{item.cross_selling}</li>}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 bg-slate-100 text-[10px] text-slate-500 font-bold uppercase tracking-tighter text-center border-t border-slate-200">
            ⚠️ IMPORTANTE: La posología es definida exclusivamente por el médico tratante. 
            Cualquier duda sobre la dispensación debe ser validada con el Químico Farmacéutico de turno.
          </div>
        </>
      ) : (
        <div className="p-8 bg-slate-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-slate-900">✏️ Editando: {editForm.nombre}</h2>
            <button onClick={cancelarEdicion} className="text-slate-500 font-black uppercase text-xs">✖ Cancelar</button>
          </div>
          <form onSubmit={guardarEdicion} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="nombre" value={editForm.nombre || ""} onChange={handleEditChange} className="p-3 rounded-xl border-2" placeholder="Nombre" />
              <input type="text" name="categoria" value={editForm.categoria || ""} onChange={handleEditChange} className="p-3 rounded-xl border-2" placeholder="Categoría" />
              
              <select name="lista_control" value={editForm.lista_control || ""} onChange={handleEditChange} className="p-3 rounded-xl border-2 bg-white">
                <option value="">Ninguna (N/A)</option>
                <option value="Lista I (DS 404) - Estupefacientes">Lista I (DS 404) - Estupefacientes</option>
                <option value="Lista II (DS 404) - Estupefacientes">Lista II (DS 404) - Estupefacientes</option>
                <option value="Lista I (DS 405) - Psicotrópicos">Lista I (DS 405) - Psicotrópicos</option>
                <option value="Lista II (DS 405) - Psicotrópicos">Lista II (DS 405) - Psicotrópicos</option>
                <option value="Lista III (DS 405) - Psicotrópicos">Lista III (DS 405) - Psicotrópicos</option>
                <option value="Lista IV (DS 405) - Psicotrópicos">Lista IV (DS 405) - Psicotrópicos</option>
              </select>

              <select name="condicion_venta" value={editForm.condicion_venta || ""} onChange={handleEditChange} className="p-3 rounded-xl border-2 bg-white">
                <option value="">No especificada</option>
                <option value="Venta Directa (VD)">Venta Directa (VD)</option>
                <option value="Receta Médica Simple (R)">Receta Médica Simple (R)</option>
                <option value="Receta Médica Retenida (RR) con Control de Existencia y registro de cliente">Receta Médica Retenida (RR) con Control de Existencia y registro de cliente</option>
                <option value="Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)">Receta Médica Retenida (RR) con Control Simplificado (sin datos de cliente)</option>
                <option value="Receta Cheque (RCH)">Receta Cheque (RCH)</option>
              </select>
            </div>
            <textarea name="para_que_sirve" value={editForm.para_que_sirve || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3" placeholder="Uso"></textarea>
            <textarea name="posologia" value={editForm.posologia || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3" placeholder="Posología"></textarea>
            <textarea name="contraindicaciones" value={editForm.contraindicaciones || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="2" placeholder="Contraindicaciones"></textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <textarea name="tips_venta" value={editForm.tips_venta || ""} onChange={handleEditChange} className="p-3 rounded-xl border-2" rows="3" placeholder="Tips Venta"></textarea>
              <textarea name="cross_selling" value={editForm.cross_selling ? (Array.isArray(editForm.cross_selling) ? editForm.cross_selling.join(", ") : editForm.cross_selling) : ""} onChange={(e) => setEditForm({...editForm, cross_selling: e.target.value.split(",").map(s => s.trim())})} className="p-3 rounded-xl border-2" rows="3" placeholder="Cross Selling (Separado por comas)"></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl">💾 Guardar Cambios</button>
          </form>
        </div>
      )}
    </div>
  );

  if (checkingAuth) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
    </div>
  );

  // ⚡ ACTUALIZACIÓN DE LÓGICA: Solo muestra el bloqueo si ya es la fecha Y el usuario no es PRO
  if (!user || (esFechaBloqueo && !isPro)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 p-10 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-inner">💎</div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Vademécum PRO</h2>
          <p className="text-slate-500 mb-6 text-sm font-medium">
            Herramienta exclusiva para miembros de <span className="font-black text-slate-800">AuxiliarPro</span>
          </p>
          
          <ul className="text-left space-y-3 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
              <span className="text-emerald-500 text-lg leading-none">✓</span> 
              <span>Información técnica y posología exacta.</span>
            </li>
            <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
              <span className="text-emerald-500 text-lg leading-none">✓</span> 
              <span>Tips de venta en mesón y estrategias de Cross-Selling.</span>
            </li>
            <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
              <span className="text-emerald-500 text-lg leading-none">✓</span> 
              <span>Control legal avanzado para inspecciones SEREMI.</span>
            </li>
          </ul>

          <Link 
            href={!user ? "/login" : PLANES_LINK} 
            className="block w-full bg-slate-900 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg transition-all transform hover:scale-105"
          >
            {!user ? "Iniciar Sesión 🔑" : "Ver Planes de Acceso 🚀"}
          </Link>
          <Link href="/" className="block mt-6 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-emerald-500 transition-colors">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 p-6">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-emerald-100">
                  Herramienta de Mesón Operativa
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Vademécum <span className="text-emerald-500">Inteligente</span>
                </h1>
              </div>
              {isAdmin && (
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <button 
                    onClick={handleCargaMasiva} 
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-black text-sm hover:bg-slate-800 transition-all shadow-md text-center"
                  >
                    ➕ Carga Masiva MILAB (Ejecutar JSON)
                  </button>
                  <button 
                    onClick={toggleAuditoria} 
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-md ${modoAuditoria ? 'bg-rose-500 hover:bg-rose-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
                  >
                    {modoAuditoria ? "❌ Cerrar Panel" : "⚡ Mostrar Todo el Catálogo"}
                  </button>
                </div>
              )}
            </div>
            {!modoAuditoria && (
              <form onSubmit={handleBuscar} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    value={busqueda}
                    onChange={(e) => {
                      setBusqueda(e.target.value);
                      setBuscado(false);
                      setSolicitudEnviada(false);
                    }}
                    placeholder="Busca un medicamento (ej: Atenolol)..." 
                    className="w-full border-2 border-slate-200 rounded-2xl p-4 text-lg font-medium focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 outline-none transition-all shadow-sm"
                  />
                  {mostrarSugerencias && sugerenciasAuto.length > 0 && !buscado && (
                    <ul className="absolute z-50 w-full bg-white border border-slate-200 shadow-xl rounded-xl mt-2 max-h-60 overflow-y-auto">
                      {sugerenciasAuto.map((sug, idx) => (
                        <li 
                          key={idx} 
                          className="p-3 hover:bg-emerald-50 cursor-pointer text-slate-700 font-medium border-b border-slate-50 last:border-0"
                          onClick={() => aplicarSugerencia(sug)}
                        >
                          {sug}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button type="submit" className="bg-slate-900 text-white font-black px-10 py-4 rounded-2xl hover:bg-emerald-600 transition-all text-lg shadow-xl flex items-center justify-center gap-2">
                  Buscar 🔍
                </button>
              </form>
            )}
          </div>
        </div>

        {/* RESULTADOS */}
        {!modoAuditoria && (
          <div className="space-y-8">
            {resultados.map(renderTarjetaMedicamento)}

            {buscado && resultados.length === 0 && !cargando && (
              <div className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 p-10 text-center mt-8">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Medicamento no encontrado</h3>
                <p className="text-slate-500 mb-6">Actualmente no tenemos "{busqueda}" en nuestro vademécum.</p>
                
                {solicitudEnviada ? (
                  <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl inline-block font-bold">
                    ✅ ¡Gracias! Solicitud enviada al equipo de AuxiliarPro.
                  </div>
                ) : (
                  <button 
                    onClick={handleSolicitar}
                    className="bg-slate-900 text-white font-black px-8 py-4 rounded-2xl hover:bg-emerald-600 transition-all shadow-md flex items-center justify-center gap-2 mx-auto"
                  >
                    🔔 ¿Necesitas este medicamento? Solicítalo aquí
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* MODO AUDITORÍA */}
        {modoAuditoria && (
          <div className="space-y-8">
            {cargandoAuditoria ? (
              <div className="text-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-8">
                {todosMedicamentos.map(renderTarjetaMedicamento)}
              </div>
            )}
          </div>
        )}

        {/* AVISO DE ESTADO BETA */}
        <div className="mt-16 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center">
          <div className="inline-block bg-amber-100 text-amber-700 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3">
            Versión Beta 0.9
          </div>
          <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-2xl mx-auto">
            Este Vademécum Inteligente se encuentra en estado <span className="font-bold text-slate-900">BETA</span>. 
            Nuestro equipo técnico actualiza la base de datos semanalmente con nuevos medicamentos y tips de venta. 
            Si no encuentras lo que buscas, utiliza el botón de solicitud para priorizar su carga.
          </p>
        </div>

        {/* BANNER DE VENTA INSERTADO EN EL FOOTER DEL CONTENEDOR */}
        <div className="mt-8">
          <BannerVenta />
        </div>

      </div>
    </div>
  );
}