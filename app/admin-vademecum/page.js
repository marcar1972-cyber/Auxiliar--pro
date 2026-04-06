"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, getDoc, addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config"; 
import { useRouter } from "next/navigation"; // <-- Añadido para redireccionar
import Link from "next/link";
import BannerVenta from "../components/BannerVenta";

export default function BuscadorVademecum() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [esFechaBloqueo, setEsFechaBloqueo] = useState(false);

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

  const [catalogoNombres, setCatalogoNombres] = useState([]);
  const [sugerenciasAuto, setSugerenciasAuto] = useState([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  const ADMIN_EMAIL = "marcar1972@gmail.com";
  const PLANES_LINK = "/planes";
  const router = useRouter(); // <-- Instanciamos el router

  useEffect(() => {
    const ahora = new Date();
    const fechaLimite = new Date(2026, 3, 1, 0, 0, 0); 
    if (ahora >= fechaLimite) {
      setEsFechaBloqueo(true);
    }
  }, []);

  // 🛡️ GUARDIÁN DE RUTA ACTUALIZADO
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAdmin(currentUser.email === ADMIN_EMAIL);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        
        let currentIsPro = false;
        if (userDoc.exists()) {
          currentIsPro = userDoc.data().isPro || currentUser.email === ADMIN_EMAIL;
          setIsPro(currentIsPro);
        }
        
        // Verificación de acceso PRO
        if (!currentIsPro) {
          router.push(PLANES_LINK); // Si no es pro, a la página de venta
        } else {
          setCheckingAuth(false); // Solo quita el loading si es PRO y puede ver la página
        }
      } else {
        setUser(null);
        router.push("/login"); // Si no está logueado, al login
      }
    });
    return () => unsubscribe();
  }, [router]);

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

  const handleBuscar = async (e) => {
    if (e) e.preventDefault();
    if (!busqueda.trim()) return;
    setCargando(true);
    setBuscado(true);
    setSugerencia(null);
    setMostrarSugerencias(false);
    try {
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datosFiltrados = [];
      const terminoBusqueda = busqueda.toLowerCase().trim();
      querySnapshot.forEach((doc) => {
        const item = { id: doc.id, ...doc.data() };
        if (item.nombre.toLowerCase().includes(terminoBusqueda)) {
          datosFiltrados.push(item);
        }
      });
      setResultados(datosFiltrados);
    } catch (error) { console.error(error); }
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
      alert("✅ Medicamento actualizado.");
      
      // Actualizamos estado local para que se vea inmediato sin refrescar
      setResultados(resultados.map(r => r.id === editandoId ? { ...r, ...editForm } : r));
      setTodosMedicamentos(todosMedicamentos.map(r => r.id === editandoId ? { ...r, ...editForm } : r));
      
      setEditandoId(null);
    } catch (error) { alert("❌ Error."); }
  };

  const toggleAuditoria = async () => {
    setModoAuditoria(!modoAuditoria);
    if (!modoAuditoria && todosMedicamentos.length === 0) {
      setCargandoAuditoria(true);
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datos = [];
      querySnapshot.forEach((doc) => datos.push({ id: doc.id, ...doc.data() }));
      setTodosMedicamentos(datos.sort((a, b) => a.nombre.localeCompare(b.nombre)));
      setCargandoAuditoria(false);
    }
  };

  // UNIFICACIÓN: PURGA + CARGA EN UN SOLO BOTÓN (ACTUALIZADO A BLOQUE 2)
  const handleCargaMasivaYPurga = async () => {
    if (!window.confirm("⚠️ ¿Ejecutar SINCRONIZACIÓN PRO? Esto borrará versiones antiguas y subirá el Bloque 2 (11-20).")) return;
    setCargandoAuditoria(true);

    const dataMasiva = [
      {
        nombre: "Atorvastatina 20 mg",
        categoria: "Hipolipemiante (Inhibidor de la HMG-CoA reductasa)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica",
        para_que_sirve: "Reducción de los niveles elevados de colesterol total, colesterol LDL, apolipoproteína B y triglicéridos en pacientes con hipercolesterolemia primaria. Actúa inhibiendo selectivamente la enzima responsable de la síntesis de colesterol en el hígado, aumentando el número de receptores LDL hepáticos para mejorar la captación y el catabolismo del colesterol circulante.",
        posologia: "Dosis inicial habitual de 10 mg a 20 mg una vez al día. Puede administrarse en cualquier momento del día, con o sin alimentos, aunque se recomienda mantener un horario constante. El ajuste de dosis se realiza cada 4 semanas según el perfil lipídico del paciente.",
        contraindicaciones: "Enfermedad hepática activa o elevaciones persistentes inexplicables de las transaminasas séricas. Embarazo y lactancia (Categoría X). Hipersensibilidad al principio activo.",
        tips_venta: "SEGURIDAD PACIENTE: Instruir al cliente que si experimenta dolor, sensibilidad o debilidad muscular inexplicable (mialgias), debe suspender el uso y consultar al médico para descartar rabdomiólisis. Evitar el consumo excesivo de jugo de pomelo, ya que aumenta la concentración plasmática del fármaco.",
        cross_selling: "Coenzima Q10 (para mitigar mialgias), Omega 3 de alta pureza y protectores hepáticos naturales."
      },
      {
        nombre: "Azitromicina 500 mg",
        categoria: "Antimicrobiano (Macrólido de amplio espectro)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Retenida",
        para_que_sirve: "Tratamiento de infecciones del tracto respiratorio inferior (bronquitis, neumonía), tracto respiratorio superior (sinusitis, faringoamigdalitis), infecciones de piel y tejidos blandos, y enfermedades de transmisión sexual causadas por Chlamydia trachomatis. Su larga vida media permite esquemas de tratamiento abreviados.",
        posologia: "Esquema estándar: 500 mg (1 comprimido) una vez al día durante 3 días consecutivos. En infecciones genitales por Chlamydia: 1 g (2 comprimidos) en una sola dosis única. Administrar al menos 1 hora antes o 2 horas después de las comidas.",
        contraindicaciones: "Hipersensibilidad a la azitromicina, eritromicina o cualquier antibiótico macrólido. Antecedentes de disfunción hepática/ictericia colestásica asociada al uso previo de azitromicina.",
        tips_venta: "RECOMENDACIÓN TÉCNICA: Informar al paciente que no debe tomar antiácidos que contengan aluminio o magnesio simultáneamente con la azitromicina, ya que reducen su absorción (espaciar por al menos 2 horas). Cumplir el ciclo completo de 3 días aunque se sienta mejor al primer día.",
        cross_selling: "Probióticos multicepa para evitar diarrea asociada a antibióticos y termómetros digitales."
      },
      {
        nombre: "Betametasona 0.05% (Crema)",
        categoria: "Corticoide de potencia alta (Tópico)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica",
        para_que_sirve: "Alivio de las manifestaciones inflamatorias y pruríticas de las dermatosis que responden a corticosteroides, como psoriasis, dermatitis atópica y dermatitis de contacto. Actúa produciendo una respuesta antiinflamatoria, inmunosupresora y antiproliferativa local.",
        posologia: "Aplicar una capa delgada sobre el área afectada 1 a 2 veces al día. No utilizar vendajes oclusivos a menos que el médico lo indique. El tratamiento no debe exceder las 2 semanas continuas para evitar atrofia cutánea.",
        contraindicaciones: "Infecciones cutáneas virales (herpes, varicela), fúngicas o bacterianas no tratadas. Rosácea, dermatitis perioral y acné vulgar. No aplicar en áreas extensas o heridas abiertas.",
        tips_venta: "CONSEJO DE MOSTRADOR: Advertir que el uso prolongado en el rostro puede causar telangiectasias (venitas rojas) o adelgazamiento de la piel. Lavar las manos antes y después de la aplicación. No usar en pañalitis de lactantes.",
        cross_selling: "Jabones syndet (sin jabón), cremas hidratantes reparadoras (Cica) y protectores solares para piel sensible."
      },
      {
        nombre: "Ciprofloxacino 500 mg",
        categoria: "Antimicrobiano (Fluoroquinolona de 2da generación)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Retenida",
        para_que_sirve: "Tratamiento de infecciones bacterianas severas: infecciones urinarias complicadas (pielonefritis), prostatitis bacteriana, infecciones del tracto respiratorio inferior, sinusitis aguda y diarrea infecciosa. Actúa inhibiendo la ADN girasa bacteriana, impidiendo la replicación del patógeno.",
        posologia: "Dosis habitual: 500 mg cada 12 horas. La duración depende de la gravedad y localización de la infección (usualmente 7 a 14 días). Ingerir con abundante líquido para evitar la formación de cristales en la orina.",
        contraindicaciones: "Hipersensibilidad a quinolonas. Uso concomitante con tizanidina. No recomendado en niños, adolescentes, embarazo y lactancia debido al riesgo de artropatía en articulaciones que soportan peso.",
        tips_venta: "ALERTA DE SEGURIDAD: Evitar la exposición solar directa durante el tratamiento debido al riesgo de fotosensibilidad (quemaduras). Si presenta dolor o inflamación en tendones (especialmente el de Aquiles), suspender el fármaco y consultar a urgencias.",
        cross_selling: "Protector solar FPS 50+, suplementos de arándano rojo (Cranberry) para salud urinaria y sales de rehidratación."
      },
      {
        nombre: "Clonazepam 2 mg",
        categoria: "Benzodiazepina (Anticonvulsivante / Ansiolítico)",
        lista_control: "Lista IV - Psicotrópicos (Decreto 405)",
        condicion_venta: "Receta Médica Retenida con Control de Existencia (R.R.)",
        para_que_sirve: "Tratamiento de trastornos de pánico (con o sin agorafobia) y ciertos tipos de epilepsia (ausencias, crisis mioclónicas). Actúa potenciando la acción inhibitoria del neurotransmisor GABA en el Sistema Nervioso Central, produciendo efectos sedantes, ansiolíticos y miorrelajantes.",
        posologia: "Dosis altamente individualizada. Suele iniciarse con 0.25 mg a 0.5 mg dos veces al día, aumentando gradualmente hasta alcanzar la dosis de mantenimiento. No exceder los 20 mg diarios. No suspender de forma abrupta por riesgo de síndrome de abstinencia.",
        contraindicaciones: "Hipersensibilidad a benzodiazepinas. Insuficiencia respiratoria grave, apnea del sueño, insuficiencia hepática severa y miastenia gravis. Glaucoma de ángulo cerrado.",
        tips_venta: "MANEJO ÉTICO: Recordar al paciente que este medicamento produce somnolencia y disminuye los reflejos; no debe conducir ni operar maquinaria pesada. Prohibido el consumo de alcohol, ya que potencia la depresión del sistema respiratorio.",
        cross_selling: "Pastilleros con alarma, infusiones naturales complementarias y literatura sobre higiene del sueño."
      },
      {
        nombre: "Diclofenaco Sódico 50 mg",
        categoria: "AINE (Antiinflamatorio no esteroidal)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica",
        para_que_sirve: "Alivio del dolor y la inflamación en afecciones como artritis reumatoide, osteoartritis, espondilitis anquilosante y gota aguda. También efectivo en dismenorrea primaria y dolor postoperatorio. Actúa inhibiendo la síntesis de prostaglandinas mediante el bloqueo de la enzima ciclooxigenasa (COX).",
        posologia: "Dosis habitual: 50 mg dos a tres veces al día. Se recomienda administrar con las comidas o leche para reducir la irritación gástrica. Usar la dosis mínima efectiva por el menor tiempo posible.",
        contraindicaciones: "Úlcera gastroduodenal activa o sangrado gastrointestinal. Antecedentes de asma o rinitis tras el uso de aspirina/AINEs. Insuficiencia renal o hepática grave. Tercer trimestre de embarazo.",
        tips_venta: "DATO TÉCNICO: Si el paciente tiene antecedentes de gastritis, sugerir el uso de un protector gástrico. Advertir que el uso prolongado aumenta el riesgo de eventos cardiovasculares (infarto) y daño renal.",
        cross_selling: "Inhibidores de la bomba de protones (Omeprazol), rodilleras/muñequeras y geles analgésicos tópicos."
      },
      {
        nombre: "Enalapril 10 mg",
        categoria: "Antihipertensivo (Inhibidor de la ECA)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica",
        para_que_sirve: "Tratamiento de la hipertensión arterial en todos sus grados y de la insuficiencia cardíaca sintomática. Actúa bloqueando la enzima que convierte la angiotensina I en angiotensina II (un potente vasoconstrictor), logrando una disminución de la resistencia vascular periférica y de la presión arterial.",
        posologia: "Dosis inicial: 5 mg a 10 mg una vez al día. En pacientes con insuficiencia cardíaca, la dosis se ajusta según tolerancia. Se recomienda tomarlo a la misma hora todos los días para mantener niveles estables.",
        contraindicaciones: "Antecedentes de angioedema relacionado con tratamientos previos con IECA. Estenosis bilateral de la arteria renal. Segundo y tercer trimestre de embarazo (Fetotóxico).",
        tips_venta: "ALERTA PROFESIONAL: Advertir al paciente que puede presentar una 'tos seca y persistente' como efecto secundario común. Si presenta hinchazón de cara, labios o lengua (angioedema), debe acudir inmediatamente a urgencias y suspender el fármaco.",
        cross_selling: "Sal de potasio (consultar médico), tensiómetros digitales de alta precisión y diarios de control de presión."
      },
      {
        nombre: "Fluoxetina 20 mg",
        categoria: "Antidepresivo (Inhibidor Selectivo de la Recaptación de Serotonina - ISRS)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica",
        para_que_sirve: "Tratamiento de episodios depresivos mayores, trastorno obsesivo-compulsivo (TOC) y bulimia nerviosa. Actúa aumentando los niveles de serotonina en el espacio sináptico del cerebro, mejorando el estado de ánimo y controlando impulsos.",
        posologia: "Dosis habitual: 20 mg al día, preferiblemente por la mañana para evitar insomnio. El efecto terapéutico completo puede demorar de 2 a 4 semanas en manifestarse. No suspender el tratamiento sin supervisión médica.",
        contraindicaciones: "Hipersensibilidad a la fluoxetina. Uso concomitante con Inhibidores de la MAO (IMAO); debe esperarse al menos 5 semanas tras suspender fluoxetina antes de iniciar un IMAO.",
        tips_venta: "MANEJO DE EXPECTATIVAS: Informar al paciente que los efectos secundarios iniciales (náuseas, nerviosismo) suelen desaparecer después de las primeras dos semanas. Se requiere paciencia para notar el beneficio real sobre el ánimo.",
        cross_selling: "Triptófano con Magnesio, complejos vitamínicos del grupo B y pelotas antiestrés."
      },
      {
        nombre: "Glibenclamida 5 mg",
        categoria: "Hipoglicemiante oral (Sulfonilurea de 2da generación)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica",
        para_que_sirve: "Tratamiento de la Diabetes Mellitus Tipo 2 en pacientes que no logran control glicémico solo con dieta y ejercicio. Actúa estimulando las células beta del páncreas para aumentar la secreción de insulina endógena.",
        posologia: "Dosis inicial: 2.5 mg a 5 mg administrados inmediatamente antes del desayuno o de la primera comida principal. La dosis se ajusta según los controles de glucemia capilar del paciente.",
        contraindicaciones: "Diabetes Mellitus Tipo 1. Cetoacidosis diabética o pre-coma diabético. Insuficiencia renal o hepática grave. Hipersensibilidad a las sulfonilureas.",
        tips_venta: "PROTOCOLO DE EMERGENCIA: Instruir al paciente sobre los síntomas de hipoglicemia (sudor frío, temblor, hambre extrema, confusión). Siempre debe portar caramelos o azúcar ante estas señales. Es vital NO saltarse las comidas tras tomar el medicamento.",
        cross_selling: "Glucómetros, tiras reactivas, lancetas y cremas para el cuidado del pie diabético."
      },
      {
        nombre: "Hidroclorotiazida 50 mg",
        categoria: "Diurético tiazídico (Antihipertensivo)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica",
        para_que_sirve: "Tratamiento de la hipertensión arterial (solo o combinado) y del edema asociado a insuficiencia cardíaca, cirrosis hepática o disfunción renal. Actúa inhibiendo la reabsorción de sodio y cloruro en el túbulo contorneado distal, aumentando la excreción de agua y electrolitos.",
        posologia: "Hipertensión: 12.5 mg a 25 mg una vez al día. Edema: 25 mg a 100 mg diarios. Se recomienda tomarlo por la mañana para evitar la nicturia (necesidad de orinar durante la noche).",
        contraindicaciones: "Anuria (incapacidad de orinar). Hipersensibilidad a derivados de las sulfonamidas. Hipopotasemia o hipercalcemia refractaria.",
        tips_venta: "CONSEJO TÉCNICO: Este medicamento puede aumentar la sensibilidad de la piel al sol y elevar los niveles de ácido úrico. Se recomienda consumir alimentos ricos en potasio (plátano, tomate) ya que el diurético favorece su eliminación.",
        cross_selling: "Suplementos de potasio (bajo receta), protectores solares y monitores de presión arterial."
      }
    ];

    try {
      const vademecumRef = collection(db, "vademecum");
      const todosLosDocsSnapshot = await getDocs(vademecumRef);

      for (const item of dataMasiva) {
        const nombreLimpioNuevo = item.nombre.replace(/\s+/g, '').toLowerCase();
        
        // PASO 1: PURGA (Borrar duplicados antes de subir)
        todosLosDocsSnapshot.forEach(async (docSnap) => {
          const data = docSnap.data();
          if (data.nombre && data.nombre.replace(/\s+/g, '').toLowerCase() === nombreLimpioNuevo) {
            await deleteDoc(doc(db, "vademecum", docSnap.id));
          }
        });

        // PASO 2: CARGA
        const docId = item.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        await setDoc(doc(db, "vademecum", docId), item);
      }
      alert("✅ ¡Sincronización Total! Se purgaron antiguos y se cargó el Bloque 2 con Info PRO.");
      window.location.reload(); // Recarga para ver los cambios
    } catch (error) { console.error(error); alert("❌ Error en sincronización."); }
    setCargandoAuditoria(false);
  };

  const renderTarjetaMedicamento = (item) => (
    <div key={item.id} className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden relative transition-all hover:border-emerald-200">
      {editandoId !== item.id ? (
        <>
          <div className="bg-slate-900 text-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-black">{item.nombre}</h2>
              <p className="text-emerald-400 font-bold text-sm uppercase mt-1">P. Activo: {item.principio_activo || "Ver descripción"}</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-emerald-500 text-white text-xs font-black px-4 py-2 rounded-full uppercase">{item.categoria}</span>
              {isAdmin && <button onClick={() => iniciarEdicion(item)} className="bg-white text-slate-900 text-xs font-black px-4 py-2 rounded-full">✏️ Editar</button>}
            </div>
          </div>
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
                <div><h3 className="font-black text-emerald-600 text-xs mb-2">¿PARA QUÉ SIRVE?</h3><p className="text-slate-700 font-medium">{item.para_que_sirve}</p></div>
                <div><h3 className="font-black text-emerald-600 text-xs mb-2">POSOLOGÍA</h3><p className="text-slate-700 font-medium whitespace-pre-line">{item.posologia}</p></div>
                <div><h3 className="font-black text-rose-500 text-xs mb-2">CONTRAINDICACIONES</h3><p className="text-slate-700 font-medium text-sm">{item.contraindicaciones}</p></div>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem]">
                <h3 className="font-black text-slate-400 text-xs mb-2 uppercase">Venta</h3>
                <p className="text-slate-900 font-black mb-4 text-xl">🏷️ {item.condicion_venta}</p>
                
                {item.lista_control && item.lista_control !== "N/A" && item.lista_control !== "Ninguna (N/A)" && (
                <div className="mb-4 inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-4 py-2 rounded-xl">
                  <span className="text-rose-700 font-black text-xs uppercase">⚖️ {item.lista_control}</span>
                </div>
                )}

                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 mb-4">
                    <h3 className="font-black text-amber-700 text-sm mb-2">💡 TIPS DE MESÓN</h3>
                    <p className="text-amber-900 text-sm">{item.tips_venta}</p>
                </div>

                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                  <h3 className="font-black text-emerald-700 text-sm mb-2 uppercase">🔄 CROSS-SELLING</h3>
                  <p className="text-emerald-900 font-medium text-sm whitespace-pre-line">{item.cross_selling}</p>
                </div>
            </div>
          </div>
          {/* DISCLAIMER LEGAL GLOBAl */}
          <div className="bg-slate-100 px-8 py-4 border-t border-slate-200">
            <p className="text-slate-500 text-xs text-center font-medium">
              ⚠️ <strong className="text-slate-700">Importante:</strong> La posología final siempre debe ser determinada por el médico tratante. Toda información entregada debe ser revisada y validada por el Químico Farmacéutico a cargo.
            </p>
          </div>
        </>
      ) : (
        /* FORMULARIO DE EDICIÓN COMPLETO RESTAURADO */
        <div className="p-8 bg-slate-50 relative">
          <form onSubmit={guardarEdicion} className="space-y-6">
            
            {/* CABECERA STICKY CON BOTÓN DE GUARDADO */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sticky top-0 bg-slate-50 py-4 z-10 border-b border-slate-200">
              <h2 className="text-xl font-black text-slate-900 truncate pr-4">✏️ Editando: {editForm.nombre}</h2>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <button type="button" onClick={cancelarEdicion} className="text-slate-500 hover:text-slate-700 font-black uppercase text-xs transition-colors">✖ Cancelar</button>
                <button type="submit" className="bg-slate-900 hover:bg-emerald-600 text-white font-black px-6 py-2 rounded-xl transition-all shadow-md">💾 Guardar</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Nombre Comercial</label>
                <input type="text" name="nombre" value={editForm.nombre || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Principio Activo</label>
                <input type="text" name="principio_activo" value={editForm.principio_activo || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-emerald-200" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Categoría</label>
                <input type="text" name="categoria" value={editForm.categoria || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Lista de Control</label>
                <select name="lista_control" value={editForm.lista_control || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 bg-white">
                  <option value="">Ninguna (N/A)</option>
                  <option value="Lista I (DS 404) - Estupefacientes">Lista I (DS 404) - Estupefacientes</option>
                  <option value="Lista II (DS 404) - Estupefacientes">Lista II (DS 404) - Estupefacientes</option>
                  <option value="Lista I (DS 405) - Psicotrópicos">Lista I (DS 405) - Psicotrópicos</option>
                  <option value="Lista II (DS 405) - Psicotrópicos">Lista II (DS 405) - Psicotrópicos</option>
                  <option value="Lista III (DS 405) - Psicotrópicos">Lista III (DS 405) - Psicotrópicos</option>
                  <option value="Lista IV (DS 405) - Psicotrópicos">Lista IV (DS 405) - Psicotrópicos</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Condición de Venta</label>
                <select name="condicion_venta" value={editForm.condicion_venta || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 bg-white">
                  <option value="">No especificada</option>
                  <option value="Venta Directa (VD)">Venta Directa (VD)</option>
                  <option value="Receta Médica Simple (R)">Receta Médica Simple (R)</option>
                  <option value="Receta Retenida">Receta Retenida</option>
                  <option value="Receta Médica Retenida (RR) con Control de Existencia">Receta Médica Retenida (RR) con Control de Existencia y registro de cliente</option>
                  <option value="Receta Médica Retenida (RR) con Control Simplificado">Receta Médica Retenida (RR) con Control Simplificado</option>
                  <option value="Receta Cheque (RCH)">Receta Cheque (RCH)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">¿Para qué sirve?</label>
              <textarea name="para_que_sirve" value={editForm.para_que_sirve || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Posología</label>
              <textarea name="posologia" value={editForm.posologia || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Contraindicaciones</label>
              <textarea name="contraindicaciones" value={editForm.contraindicaciones || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="2"></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Tips Venta</label>
                <textarea name="tips_venta" value={editForm.tips_venta || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Cross Selling (separado por saltos de línea)</label>
                <textarea name="cross_selling" value={Array.isArray(editForm.cross_selling) ? editForm.cross_selling.join('\n') : editForm.cross_selling || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
              </div>
            </div>

            {/* BOTÓN DE GUARDADO AL PIE DEL FORMULARIO */}
            <div className="pt-6 border-t border-slate-200">
              <button type="submit" className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-black py-4 rounded-xl transition-all shadow-lg text-lg">
                💾 Guardar Medicamento
              </button>
            </div>
            
          </form>
        </div>
      )}
    </div>
  );

  if (checkingAuth) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-4xl font-black text-slate-900">Vademécum <span className="text-emerald-500">PRO</span></h1>
            {isAdmin && (
              <div className="flex gap-3">
                <button onClick={handleCargaMasivaYPurga} className="bg-slate-900 text-white px-6 py-3 rounded-full font-black text-sm hover:bg-emerald-600">
                  🚀 Sincronización Total (Purga + Bloque 2)
                </button>
                <button onClick={toggleAuditoria} className="bg-emerald-500 text-white px-6 py-3 rounded-full font-black text-sm">
                  {modoAuditoria ? "❌ Cerrar" : "⚡ Ver Todo"}
                </button>
              </div>
            )}
          </div>
          {!modoAuditoria && (
            <form onSubmit={handleBuscar} className="flex gap-3">
              <input type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value); setBuscado(false);}} placeholder="Buscar..." className="flex-1 border-2 rounded-2xl p-4 text-lg outline-none" />
              <button type="submit" className="bg-slate-900 text-white font-black px-10 rounded-2xl">Buscar 🔍</button>
            </form>
          )}
        </div>
        <div className="space-y-8">{modoAuditoria ? todosMedicamentos.map(renderTarjetaMedicamento) : resultados.map(renderTarjetaMedicamento)}</div>
        <div className="mt-8"><BannerVenta /></div>
      </div>
    </div>
  );
}