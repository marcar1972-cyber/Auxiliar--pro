"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, getDoc, addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config"; 
import { useRouter } from "next/navigation"; 
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

  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const [modoAuditoria, setModoAuditoria] = useState(false);
  const [todosMedicamentos, setTodosMedicamentos] = useState([]);
  const [cargandoAuditoria, setCargandoAuditoria] = useState(false);

  const [catalogoNombres, setCatalogoNombres] = useState([]);

  const ADMIN_EMAIL = "marcar1972@gmail.com";
  const PLANES_LINK = "/planes";
  const router = useRouter();

  // 🛡️ FUNCIÓN DE NORMALIZACIÓN (Elimina tildes y diacríticos)
  const normalizarTexto = (texto) => {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  useEffect(() => {
    const ahora = new Date();
    const fechaLimite = new Date(2026, 3, 1, 0, 0, 0); 
    if (ahora >= fechaLimite) {
      setEsFechaBloqueo(true);
    }
  }, []);

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
        
        if (!currentIsPro) {
          router.push(PLANES_LINK);
        } else {
          setCheckingAuth(false);
        }
      } else {
        setUser(null);
        router.push("/login");
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

  // 🔍 BUSCADOR OPTIMIZADO (Sin tildes)
  const handleBuscar = async (e) => {
    if (e) e.preventDefault();
    if (!busqueda.trim()) return;
    setCargando(true);
    setBuscado(true);
    
    try {
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datosFiltrados = [];
      const terminoBusqueda = normalizarTexto(busqueda); // Normalizamos búsqueda

      querySnapshot.forEach((doc) => {
        const item = { id: doc.id, ...doc.data() };
        const nombreNormalizado = normalizarTexto(item.nombre); // Normalizamos dato DB
        
        if (nombreNormalizado.includes(terminoBusqueda)) {
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

  const handleCargaMasivaYPurga = async () => {
    if (!window.confirm("⚠️ ¿Ejecutar SINCRONIZACIÓN PRO? Bloque 4 (Cardio Complejo) con principios activos.")) return;
    setCargandoAuditoria(true);

    const dataMasiva = [
      {
        nombre: "Rosuvastatina 20 mg",
        principio_activo: "Rosuvastatina Cálcica",
        categoria: "Hipolipemiante (Estatina de alta intensidad)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Reducción agresiva de los niveles de colesterol LDL y triglicéridos en pacientes con alto riesgo cardiovascular. Retrasa la progresión de la ateroesclerosis al inhibir la enzima HMG-CoA reductasa.",
        posologia: "Dosis habitual: 10 mg a 20 mg una vez al día. Puede administrarse en cualquier momento del día, con o sin alimentos (a diferencia de otras estatinas, su larga vida media no exige toma nocturna obligatoria).",
        contraindicaciones: "Enfermedad hepática activa, embarazo y lactancia, o miopatía preexistente. Precaución severa en pacientes con insuficiencia renal grave.",
        tips_venta: "ALERTA MUSCULAR: Instruir al paciente que debe informar al médico si siente dolores musculares, debilidad o calambres sin explicación aparente (riesgo de rabdomiólisis).",
        cross_selling: "Coenzima Q10 (para atenuar molestias musculares asociadas a estatinas) y Omega 3."
      },
      {
        nombre: "Fenofibrato 160 mg",
        principio_activo: "Fenofibrato Micronizado",
        categoria: "Hipolipemiante (Fibrato)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Tratamiento de la hipertrigliceridemia severa (aislada o mixta). Actúa reduciendo la producción hepática de triglicéridos y acelerando su eliminación del plasma.",
        posologia: "1 cápsula o comprimido al día, estrictamente administrado durante una comida principal para asegurar una óptima absorción gastrointestinal.",
        contraindicaciones: "Insuficiencia hepática o renal grave, enfermedad de la vesícula biliar preexistente. No asociar con estatinas a menos que haya estricto control médico.",
        tips_venta: "TOMA CON COMIDA: El tip clínico más importante aquí es que si el paciente lo toma con el estómago vacío, el medicamento casi no se absorbe. Debe tomarse en la cena o almuerzo contundente.",
        cross_selling: "Fórmulas de Omega 3 concentradas (EPA/DHA) y educación sobre dieta baja en grasas saturadas."
      },
      {
        nombre: "Ácido Acetilsalicílico 100 mg (Aspirina EC)",
        principio_activo: "Ácido Acetilsalicílico",
        categoria: "Antiagregante Plaquetario",
        lista_control: "N/A",
        condicion_venta: "Venta Directa (VD)",
        para_que_sirve: "Prevención secundaria de eventos cardiovasculares mayores (infarto agudo de miocardio, accidente cerebrovascular). Inhibe la agregación de las plaquetas al bloquear la enzima COX-1.",
        posologia: "1 comprimido al día, usualmente después de la comida. La presentación EC (Capa Entérica) debe tragarse entera, sin partir ni masticar, para que se libere en el intestino y no irrite el estómago.",
        contraindicaciones: "Úlcera gastroduodenal activa, hemofilia u otros trastornos hemorrágicos. Hipersensibilidad a los AINEs. No dar a niños con cuadros virales (Riesgo de Síndrome de Reye).",
        tips_venta: "CUIDADO CON EL ESTÓMAGO: Aunque tenga capa entérica, recalcar que se debe tomar con el estómago lleno. Si el paciente se someterá a una cirugía o extracción dental, debe avisar al médico, ya que se suele suspender días antes.",
        cross_selling: "Inhibidores de la bomba de protones (Omeprazol) si hay susceptibilidad gástrica (bajo recomendación médica)."
      },
      {
        nombre: "Clopidogrel 75 mg",
        principio_activo: "Clopidogrel Bisulfato",
        categoria: "Antiagregante Plaquetario",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Prevención de la trombosis arterial, especialmente utilizado en pacientes a los que se les ha colocado un stent coronario, o aquellos intolerantes al ácido acetilsalicílico.",
        posologia: "1 comprimido (75 mg) al día, con o sin alimentos, siempre a la misma hora.",
        contraindicaciones: "Sangrado patológico activo (ej. úlcera péptica o hemorragia intracraneal). Insuficiencia hepática grave.",
        tips_venta: "ALERTA DE SANGRADO: Explicar al paciente que los moretones aparecerán con mayor facilidad y los sangrados por cortes demorarán más en coagular. Evitar deportes de contacto extremo.",
        cross_selling: "Gasa estéril y apósitos hemostáticos para botiquín casero por si ocurre algún corte accidental."
      },
      {
        nombre: "Warfarina 5 mg",
        principio_activo: "Warfarina Sódica",
        categoria: "Anticoagulante Oral (Antagonista de la Vitamina K)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Prevención y tratamiento de la trombosis venosa profunda, embolismo pulmonar y tromboembolismo asociado a fibrilación auricular o válvulas cardíacas mecánicas.",
        posologia: "Posología extremadamente variable basada en el control del INR (Razón Internacional Normalizada) en la sangre. Habitualmente en toma única diaria a la misma hora.",
        contraindicaciones: "Embarazo (altamente teratogénico). Hemorragia activa, hipertensión severa no controlada o cirugía reciente del sistema nervioso central.",
        tips_venta: "EL RIESGO VERDE: Instruir obligatoriamente sobre la interacción con la dieta: vegetales de hoja verde (espinaca, brócoli, lechuga) tienen vitamina K y contrarrestan el medicamento. La dieta debe ser constante, no eliminar bruscamente ni aumentar su consumo.",
        cross_selling: "Pastilleros semanales rígidos (la adherencia aquí es asunto de vida o muerte) y alertar que JAMÁS automedique ibuprofeno o aspirina por riesgo de hemorragia."
      },
      {
        nombre: "Acenocumarol 4 mg",
        principio_activo: "Acenocumarol",
        categoria: "Anticoagulante Oral (Derivado de la Cumarina)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Indicación idéntica a la warfarina (Trombosis, embolias, fibrilación). Es el anticoagulante oral más comúnmente prescrito en la práctica clínica chilena bajo el nombre de Neosintrom.",
        posologia: "Dosis ajustada exclusivamente por el médico según exámenes de coagulación (Tiempo de Protrombina/INR). La toma debe ser rigurosamente a la misma hora todos los días.",
        contraindicaciones: "Diátesis hemorrágica, lesiones de riesgo hemorrágico orgánico (úlceras), y embarazo. Falta de cooperación del paciente para hacerse controles sanguíneos rutinarios.",
        tips_venta: "CUIDADO CON LOS ANTIBIÓTICOS: Advertir al paciente que múltiples medicamentos (especialmente antibióticos o antifúngicos) alteran drásticamente el efecto del acenocumarol. Siempre debe avisar al médico/dentista que toma este fármaco.",
        cross_selling: "Cepillos de dientes de cerdas ultra suaves (para evitar sangrado gingival) y pastilleros partidores de pastillas (las dosis suelen ser de 1/4 o 1/2 comprimido)."
      },
      {
        nombre: "Amiodarona 200 mg",
        principio_activo: "Amiodarona Clorhidrato",
        categoria: "Antiarrítmico (Clase III)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Control de arritmias ventriculares y supraventriculares severas (incluyendo fibrilación auricular) que no responden a otros tratamientos. Actúa prolongando el potencial de acción del tejido cardíaco.",
        posologia: "Dosis de carga inicial alta en hospital, seguida de una dosis de mantenimiento que suele ser 200 mg diarios o pasando un día (según control médico). Administrar preferentemente con o después de comer.",
        contraindicaciones: "Bradicardia sinusal severa, bloqueo auriculoventricular. Disfunción tiroidea previa (el fármaco contiene gran cantidad de yodo y puede causar hipo o hipertiroidismo).",
        tips_venta: "FOTOSENSIBILIDAD EXTREMA: Informar al paciente que su piel se volverá muy sensible al sol; la exposición sin protección puede causar que la piel tome una coloración gris azulada irreversible.",
        cross_selling: "Bloqueadores solares dermatológicos de FPS 50+ o 100+ de amplio espectro físico/químico."
      },
      {
        nombre: "Digoxina 0.25 mg",
        principio_activo: "Digoxina",
        categoria: "Cardiotónico (Glucósido digitálico)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Tratamiento de la insuficiencia cardíaca crónica y control de la frecuencia ventricular en pacientes con fibrilación auricular. Mejora la fuerza de contracción del corazón (efecto inotrópico positivo) y disminuye el ritmo.",
        posologia: "Dosis de mantenimiento habitual: 0.125 a 0.25 mg diarios. El margen terapéutico es muy estrecho, por lo que el médico lo ajusta con extrema precisión.",
        contraindicaciones: "Bloqueo auriculoventricular intermitente o completo, taquicardia ventricular o fibrilación ventricular.",
        tips_venta: "INTOXICACIÓN DIGITÁLICA: Advertir sobre los signos tempranos de sobredosis: náuseas intensas, pérdida de apetito, confusión y alteraciones visuales (ver las cosas con un halo o tinte amarillo/verde). Derivar a urgencias de inmediato si ocurre.",
        cross_selling: "Monitores de presión arterial que incluyan detector automático de arritmias/fibrilación."
      },
      {
        nombre: "Nifedipino 20 mg",
        principio_activo: "Nifedipino",
        categoria: "Antihipertensivo (Bloqueador de Canales de Calcio)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Tratamiento de hipertensión arterial y angina de pecho crónica estable. Induce relajación muscular en los vasos sanguíneos (vasodilatador), reduciendo el esfuerzo del corazón.",
        posologia: "Generalmente 1 comprimido de acción retardada (Retard) cada 12 o 24 horas, dependiendo de la prescripción. No se debe partir ni masticar el comprimido retardado.",
        contraindicaciones: "Shock cardiovascular, hipotensión severa. No usar la forma de liberación rápida para crisis hipertensivas por riesgo de accidentes isquémicos.",
        tips_venta: "EFECTOS SECUNDARIOS COMUNES: Informar al paciente que los primeros días es normal sentir dolor de cabeza, rubor facial (cara roja) y, a veces, notar hinchazón (edema) en los tobillos por la vasodilatación.",
        cross_selling: "Cremas para piernas cansadas o calcetines/medias de compresión suave para ayudar con el edema de tobillos."
      },
      {
        nombre: "Valsartán 80 mg",
        principio_activo: "Valsartán",
        categoria: "Antihipertensivo (Antagonista de Receptores de Angiotensina II - ARA II)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple (R)",
        para_que_sirve: "Tratamiento de la hipertensión arterial, insuficiencia cardíaca y post-infarto de miocardio. Generalmente es la excelente alternativa para pacientes que presentan 'tos seca' intolerable con el Enalapril.",
        posologia: "Dosis inicial usual: 80 mg a 160 mg una vez al día. Tomar siempre a la misma hora, con o sin alimentos.",
        contraindicaciones: "Embarazo (altamente fetotóxico en el segundo y tercer trimestre), insuficiencia hepática grave o cirrosis biliar.",
        tips_venta: "ADHERENCIA DE POR VIDA: Como todo antihipertensivo, recalcar que la presión no duele y el tratamiento no se suspende aunque el paciente 'se sienta bien'. Levantarse de la cama lentamente para evitar mareos.",
        cross_selling: "Sal sin sodio (Potasio), tensiómetros digitales e infusiones para ayudar a manejar el estrés diario."
      }
    ];

    try {
      const vademecumRef = collection(db, "vademecum");
      const todosLosDocsSnapshot = await getDocs(vademecumRef);

      for (const item of dataMasiva) {
        const nombreLimpioNuevo = item.nombre.replace(/\s+/g, '').toLowerCase();
        todosLosDocsSnapshot.forEach(async (docSnap) => {
          const data = docSnap.data();
          if (data.nombre && data.nombre.replace(/\s+/g, '').toLowerCase() === nombreLimpioNuevo) {
            await deleteDoc(doc(db, "vademecum", docSnap.id));
          }
        });
        const docId = item.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        await setDoc(doc(db, "vademecum", docId), item);
      }
      alert("✅ Sincronización Bloque 4 + Buscador Inteligente.");
      window.location.reload();
    } catch (error) { console.error(error); alert("❌ Error."); }
    setCargandoAuditoria(false);
  };

  const renderTarjetaMedicamento = (item) => (
    <div key={item.id} className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden relative transition-all hover:border-emerald-200">
      {editandoId !== item.id ? (
        <>
          <div className="bg-slate-900 text-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-black">{item.nombre}</h2>
              <p className="text-emerald-400 font-bold text-sm uppercase mt-1">P. Activo: {item.principio_activo}</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-emerald-500 text-white text-xs font-black px-4 py-2 rounded-full uppercase">{item.categoria}</span>
              {isAdmin && <button onClick={() => iniciarEdicion(item)} className="bg-white text-slate-900 text-xs font-black px-4 py-2 rounded-full">✏️ Editar</button>}
            </div>
          </div>
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
                <div><h3 className="font-black text-emerald-600 text-xs mb-2 uppercase">¿Para qué sirve?</h3><p className="text-slate-700 font-medium">{item.para_que_sirve}</p></div>
                <div><h3 className="font-black text-emerald-600 text-xs mb-2 uppercase">Posología</h3><p className="text-slate-700 font-medium whitespace-pre-line">{item.posologia}</p></div>
                <div><h3 className="font-black text-rose-500 text-xs mb-2 uppercase">Contraindicaciones</h3><p className="text-slate-700 font-medium text-sm">{item.contraindicaciones}</p></div>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem]">
                <h3 className="font-black text-slate-400 text-xs mb-2 uppercase">Venta</h3>
                <p className="text-slate-900 font-black mb-4 text-xl">🏷️ {item.condicion_venta}</p>
                {item.lista_control && item.lista_control !== "N/A" && (
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
          <div className="bg-slate-100 px-8 py-4 border-t border-slate-200">
            <p className="text-slate-500 text-xs text-center font-medium italic">
              ⚠️ Importante: La posología final siempre debe ser determinada por el médico tratante.
            </p>
          </div>
        </>
      ) : (
        <div className="p-8 bg-slate-50 relative">
          <form onSubmit={guardarEdicion} className="space-y-6">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-slate-50 py-4 z-10 border-b border-slate-200">
              <h2 className="text-xl font-black text-slate-900">✏️ Editando: {editForm.nombre}</h2>
              <div className="flex gap-4">
                <button type="button" onClick={cancelarEdicion} className="text-slate-500 font-black uppercase text-xs">✖ Cancelar</button>
                <button type="submit" className="bg-slate-900 text-white font-black px-6 py-2 rounded-xl">💾 Guardar</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Nombre Comercial</label>
                <input type="text" name="nombre" value={editForm.nombre || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Principio Activo</label>
                <input type="text" name="principio_activo" value={editForm.principio_activo || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-emerald-200" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">¿Para qué sirve?</label>
              <textarea name="para_que_sirve" value={editForm.para_que_sirve || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Posología</label>
              <textarea name="posologia" value={editForm.posologia || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg text-lg">💾 Guardar Medicamento</button>
          </form>
        </div>
      )}
    </div>
  );

  if (checkingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-4xl font-black text-slate-900">Vademécum <span className="text-emerald-500">PRO</span></h1>
            {isAdmin && (
              <div className="flex gap-3">
                <button onClick={handleCargaMasivaYPurga} className="bg-slate-900 text-white px-6 py-3 rounded-full font-black text-sm">🚀 Sync Bloque 4</button>
                <button onClick={toggleAuditoria} className="bg-emerald-500 text-white px-6 py-3 rounded-full font-black text-sm">{modoAuditoria ? "❌ Cerrar" : "⚡ Ver Todo"}</button>
              </div>
            )}
          </div>
          {!modoAuditoria && (
            <form onSubmit={handleBuscar} className="flex gap-3">
              <input type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value); setBuscado(false);}} placeholder="Ej: valsartan, atorvastatina..." className="flex-1 border-2 rounded-2xl p-4 text-lg outline-none focus:border-emerald-500 transition-colors" />
              <button type="submit" className="bg-slate-900 text-white font-black px-10 rounded-2xl hover:bg-emerald-600 transition-all">Buscar 🔍</button>
            </form>
          )}
        </div>
        <div className="space-y-8">{modoAuditoria ? todosMedicamentos.map(renderTarjetaMedicamento) : resultados.map(renderTarjetaMedicamento)}</div>
        <div className="mt-8"><BannerVenta /></div>
      </div>
    </div>
  );
}