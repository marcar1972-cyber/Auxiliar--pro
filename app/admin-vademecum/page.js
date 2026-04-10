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

  const handleBuscar = async (e) => {
    if (e) e.preventDefault();
    if (!busqueda.trim()) return;
    setCargando(true);
    setBuscado(true);
    
    try {
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datosFiltrados = [];
      const terminoBusqueda = normalizarTexto(busqueda);

      querySnapshot.forEach((doc) => {
        const item = { id: doc.id, ...doc.data() };
        const nombreNormalizado = normalizarTexto(item.nombre);
        
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
    if (!window.confirm("⚠️ ¿Ejecutar SINCRONIZACIÓN PRO? Bloque A (Salud Mental y Sistema Nervioso) con Venta Complementaria OTC.")) return;
    setCargandoAuditoria(true);

    const dataMasiva = [
      {
        nombre: "Diazepam 10 mg",
        principio_activo: "Diazepam 10 mg",
        categoria: "Ansiolítico / Anticonvulsivante",
        lista_control: "Lista IV (Psicotrópico - D.S. 404)",
        condicion_venta: "Receta Médica Retenida con Control de Existencia",
        para_que_sirve: "Tratamiento de estados de ansiedad, espasmos musculares de origen central, coadyuvante en trastornos convulsivos y sedación previa a procedimientos médicos. Actúa potenciando la inhibición del neurotransmisor GABA.",
        posologia: "Adultos: 2 a 10 mg, 2 a 4 veces al día. Geriátricos: Iniciar con 2 a 2,5 mg, 1 o 2 veces al día para evitar sedación excesiva. No exceder dosis en pacientes con insuficiencia renal.",
        contraindicaciones: "Hipersensibilidad a benzodiazepinas, miastenia gravis, insuficiencia respiratoria severa, síndrome de apnea del sueño e insuficiencia hepática grave.",
        tips_venta: "LEY 404: Solo dispensar con receta médica retenida. Advertir sobre riesgo de dependencia y evitar consumo de alcohol por potenciación de efecto depresor del SNC.",
        cross_selling: "Infusiones naturales de Melisa o Pasiflora para favorecer el relax, y suplementos de Magnesio para la función muscular si existe contractura."
      },
      {
        nombre: "Lorazepam 2 mg",
        principio_activo: "Lorazepam 2 mg",
        categoria: "Ansiolítico / Sedante",
        lista_control: "Lista IV (Psicotrópico - D.S. 404)",
        condicion_venta: "Receta Médica Retenida con Control de Existencia",
        para_que_sirve: "Alivio de síntomas de ansiedad severa e insomnio asociado a ansiedad. Utilizado también como medicación preanestésica. Posee una vida media intermedia sin metabolitos activos de larga duración.",
        posologia: "Ansiedad: 2 a 3 mg diarios en dosis divididas. Insomnio: 2 a 4 mg al acostarse. Ancianos: Reducir dosis a la mitad para minimizar riesgos de caídas y desorientación.",
        contraindicaciones: "Glaucoma de ángulo estrecho, insuficiencia respiratoria aguda, embarazo (especialmente 1er trimestre) y lactancia.",
        tips_venta: "SEGURIDAD: Informar que puede causar amnesia anterógrada. El retiro debe ser gradual bajo supervisión para evitar síndrome de abstinencia.",
        cross_selling: "Melatonina OTC para regular el ciclo circadiano y antifaces de descanso para mejorar la higiene del sueño."
      },
      {
        nombre: "Escitalopram 10 mg",
        principio_activo: "Escitalopram 10 mg",
        categoria: "Antidepresivo (ISRS)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Tratamiento de episodios depresivos mayores, trastorno de pánico con o sin agorafobia, trastorno de ansiedad social y trastorno obsesivo-compulsivo. Inhibidor altamente selectivo de la recaptación de serotonina.",
        posologia: "Dosis habitual: 10 mg una vez al día. Dosis máxima: 20 mg. En pacientes geriátricos o con insuficiencia hepática, la dosis inicial debe ser de 5 mg diarios.",
        contraindicaciones: "Uso concomitante con IMAO no selectivos o irreversibles, antecedentes de prolongación del intervalo QT o uso con fármacos que prolonguen el QT.",
        tips_venta: "PACIENCIA TERAPÉUTICA: Explicar al usuario que la respuesta terapéutica suele aparecer después de 2 a 4 semanas de tratamiento continuo.",
        cross_selling: "Multivitamínicos con Vitamina B12 para la energía diaria y bloqueador solar FPS 50+ debido a posible fotosensibilidad."
      },
      {
        nombre: "Amitriptilina 25 mg",
        principio_activo: "Amitriptilina Clorhidrato 25 mg",
        categoria: "Antidepresivo Tricíclico",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Depresión mayor, tratamiento del dolor neuropático crónico y profilaxis de la cefalea tensional o migraña. Posee marcadas propiedades anticolinérgicas y sedantes.",
        posologia: "Adultos: Iniciar con 25 a 50 mg en la noche. Dolor neuropático: 10 a 25 mg al acostarse, aumentando según tolerancia. Dosis máxima ambulatoria: 150 mg.",
        contraindicaciones: "Infarto de miocardio reciente, cualquier grado de bloqueo cardíaco, trastornos del ritmo cardíaco e insuficiencia coronaria. Uso con IMAO.",
        tips_venta: "EFECTOS SECUNDARIOS: Advertir sobre sequedad bucal, visión borrosa y estreñimiento. Se recomienda tomar antes de dormir por su fuerte efecto sedante.",
        cross_selling: "Lágrimas artificiales OTC para la sequedad ocular y chicles sin azúcar o caramelos de limón para estimular la saliva."
      },
      {
        nombre: "Duloxetina 30 mg",
        principio_activo: "Duloxetina 30 mg",
        categoria: "Antidepresivo (IRSN)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Tratamiento de depresión mayor, dolor neuropático periférico diabético, fibromialgia y trastorno de ansiedad generalizada. Inhibidor de la recaptación de serotonina y noradrenalina.",
        posologia: "Dosis inicial y de mantenimiento: 60 mg una vez al día. En pacientes con trastorno de ansiedad social, iniciar con 30 mg para mejorar tolerancia gástrica.",
        contraindicaciones: "Enfermedad hepática que produzca insuficiencia hepática, insuficiencia renal grave, hipertensión no controlada.",
        tips_venta: "TOMA CON ALIMENTOS: Para reducir la incidencia de náuseas al inicio del tratamiento. No abrir ni masticar las cápsulas (son de liberación entérica).",
        cross_selling: "Compresas de gel frío/calor para el manejo de dolores musculares en fibromialgia y suplementos de Vitamina D."
      },
      {
        nombre: "Quetiapina 100 mg",
        principio_activo: "Quetiapina 100 mg",
        categoria: "Antipsicótico Atípico",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Tratamiento de la esquizofrenia, trastorno bipolar (episodios maníacos y depresivos) y como adyuvante en depresión mayor. Actúa sobre receptores de dopamina y serotonina.",
        posologia: "Esquizofrenia: 300-450 mg/día. Trastorno Bipolar: 400-800 mg/día. En dosis bajas (25-50 mg) se usa off-label para el insomnio refractario.",
        contraindicaciones: "Hipersensibilidad, administración con inhibidores potentes del citocromo P450 3A4 (antifúngicos azólicos, macrólidos).",
        tips_venta: "ALERTA METABÓLICA: El uso crónico requiere control de peso, glicemia y lípidos. Puede causar somnolencia intensa y mareos ortostáticos.",
        cross_selling: "Edulcorantes naturales (Stevia) para el control calórico y balanzas de pesaje personal para monitorear variaciones de peso."
      },
      {
        nombre: "Risperidona 2 mg",
        principio_activo: "Risperidona 2 mg",
        categoria: "Antipsicótico Atípico",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Esquizofrenia, episodios maníacos asociados a trastorno bipolar y tratamiento a corto plazo de la agresión persistente en pacientes con demencia tipo Alzheimer.",
        posologia: "Esquizofrenia: Iniciar con 2 mg, dosis óptima 4-6 mg/día. Ancianos: Iniciar con 0,5 mg dos veces al día para evitar efectos extrapiramidales e hipotensión.",
        contraindicaciones: "Hipersensibilidad al principio activo o a los componentes de la fórmula.",
        tips_venta: "HIDRATACIÓN: Recomendar beber abundante agua. Controlar síntomas como rigidez muscular o temblores involuntarios y reportar al médico.",
        cross_selling: "Botellas de agua reutilizables para fomentar la hidratación y cremas hidratantes para la sequedad cutánea ocasional."
      },
      {
        nombre: "Haloperidol 5 mg",
        principio_activo: "Haloperidol 5 mg",
        categoria: "Antipsicótico Típico (Butirofenona)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Control de trastornos psicóticos agudos y crónicos, agitación psicomotriz, tics severos y síndrome de Gilles de la Tourette. Potente antagonista dopaminérgico.",
        posologia: "Dosis moderada: 2 a 5 mg, 2 o 3 veces al día. Casos severos: hasta 20 mg/día. Geriátricos: Dosis muy bajas (0,5 mg) para evitar sedación profunda.",
        contraindicaciones: "Estado de coma, depresión del SNC por alcohol u otros fármacos, enfermedad de Parkinson, lesión de los ganglios basales.",
        tips_venta: "SÍNTOMAS EXTRAPIRAMIDALES: Advertir sobre riesgo de rigidez o movimientos anormales. Es uno de los fármacos más potentes y antiguos del arsenal público.",
        cross_selling: "Jabones de glicerina neutros para pieles sensibles y suplementos de fibra para prevenir el enlentecimiento intestinal."
      },
      {
        nombre: "Ácido Valproico 500 mg",
        principio_activo: "Valproato de Sodio / Ácido Valproico 500 mg",
        categoria: "Anticonvulsivante / Estabilizador del Ánimo",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Tratamiento de epilepsias (ausencias, crisis tónico-clónicas) y episodios maníacos asociados a trastorno bipolar. También profilaxis de migraña.",
        posologia: "Adultos: 15 mg/kg/día, aumentando semanalmente hasta alcanzar respuesta (máx 60 mg/kg/día). Se debe monitorear niveles plasmáticos.",
        contraindicaciones: "Enfermedad hepática aguda o crónica, antecedentes familiares de disfunción hepática grave, trastornos del ciclo de la urea y embarazo.",
        tips_venta: "PROTECCIÓN HEPÁTICA: Es mandatorio realizar pruebas de función hepática periódicas. No suspender bruscamente por riesgo de estatus epiléptico.",
        cross_selling: "Champú anticaída o vitaminas para el cabello (Biotina), dado que el valproato puede causar alopecia transitoria en algunos pacientes."
      },
      {
        nombre: "Paroxetina 20 mg",
        principio_activo: "Paroxetina 20 mg",
        categoria: "Antidepresivo (ISRS)",
        lista_control: "N/A",
        condicion_venta: "Receta Médica Simple",
        para_que_sirve: "Tratamiento de depresión mayor, TOC, trastorno de pánico, trastorno de ansiedad social y trastorno de estrés postraumático.",
        posologia: "Depresión y Ansiedad: 20 mg/día. TOC y Pánico: 40 mg/día. Se administra en una sola toma matinal para evitar insomnio.",
        contraindicaciones: "Uso con IMAO, pimozida o tioridazina.",
        tips_venta: "DISFUNCIÓN SEXUAL: Es un efecto secundario común. El retiro debe ser extremadamente gradual para evitar el síndrome de discontinuación.",
        cross_selling: "Lubricantes íntimos OTC para sequedad vaginal asociada y cremas corporales para el manejo de la hipersudoración."
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
      alert("✅ Bloque A Sincronizado: Venta Complementaria Refulmulada (OTC/Consumo).");
      window.location.reload();
    } catch (error) { 
      console.error(error); 
      alert("❌ Error en carga masiva."); 
      setCargandoAuditoria(false);
    }
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
                <div><h3 className="font-black text-emerald-600 text-xs mb-2 uppercase">Dosificación / Posología</h3><p className="text-slate-700 font-medium whitespace-pre-line">{item.posologia}</p></div>
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
                    <h3 className="font-black text-amber-700 text-sm mb-2">💡 TIPS DE MESÓN (CONSEJO PRO)</h3>
                    <p className="text-amber-900 text-sm">{item.tips_venta}</p>
                </div>
                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                  <h3 className="font-black text-emerald-700 text-sm mb-2 uppercase">🔄 VENTA COMPLEMENTARIA (OTC/Consumo)</h3>
                  <p className="text-emerald-900 font-medium text-sm whitespace-pre-line">{item.cross_selling}</p>
                </div>
            </div>
          </div>
          <div className="bg-slate-100 px-8 py-4 border-t border-slate-200">
            <p className="text-slate-500 text-xs text-center font-medium italic">
              ⚠️ Aviso: La información contenida en este vademécum es referencial para profesionales de la salud. La posología final la determina el médico.
            </p>
          </div>
        </>
      ) : (
        <div className="p-8 bg-slate-50 relative">
          <form onSubmit={guardarEdicion} className="space-y-6">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-slate-50 py-4 z-10 border-b border-slate-200">
              <h2 className="text-xl font-black text-slate-900">✏️ Editar: {editForm.nombre}</h2>
              <div className="flex gap-4">
                <button type="button" onClick={cancelarEdicion} className="text-slate-500 font-black uppercase text-xs">✖ Cancelar</button>
                <button type="submit" className="bg-slate-900 text-white font-black px-6 py-2 rounded-xl">💾 Guardar Cambios</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Denominación</label>
                <input type="text" name="nombre" value={editForm.nombre || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Composición</label>
                <input type="text" name="principio_activo" value={editForm.principio_activo || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-emerald-200" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Acción Terapéutica</label>
              <textarea name="para_que_sirve" value={editForm.para_que_sirve || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Dosificación</label>
              <textarea name="posologia" value={editForm.posologia || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2" rows="3"></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg text-lg">💾 Guardar Registro</button>
          </form>
        </div>
      )}
    </div>
  );

  if (checkingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>;

  return (
    <div className="min-h-screen bg-white p-6 relative">
      {/* 🔄 SPINNER DE CARGA MASIVA */}
      {cargandoAuditoria && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500 mb-4"></div>
          <p className="text-slate-900 font-black text-xl animate-pulse">Sincronizando Base de Datos PRO...</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-4xl font-black text-slate-900">Vademécum <span className="text-emerald-500">PRO</span></h1>
            {isAdmin && (
              <div className="flex gap-3">
                <button onClick={handleCargaMasivaYPurga} className="bg-slate-900 text-white px-6 py-3 rounded-full font-black text-sm">🚀 Sync Bloque A</button>
                <button onClick={toggleAuditoria} className="bg-emerald-500 text-white px-6 py-3 rounded-full font-black text-sm">{modoAuditoria ? "❌ Cerrar" : "⚡ Ver Todo"}</button>
              </div>
            )}
          </div>
          {!modoAuditoria && (
            <form onSubmit={handleBuscar} className="flex gap-3">
              <input type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value); setBuscado(false);}} placeholder="Buscar por fármaco o acción..." className="flex-1 border-2 rounded-2xl p-4 text-lg outline-none focus:border-emerald-500 transition-colors" />
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