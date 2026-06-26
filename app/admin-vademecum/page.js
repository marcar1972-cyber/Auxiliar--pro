"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config"; 
import { useRouter } from "next/navigation"; 
import BannerVenta from "../components/BannerVenta";
import { ShieldCheck, Info, BookOpen, AlertTriangle, Search, List, Eye, EyeOff, Download, CheckSquare, Square } from "lucide-react";

// 🚀 IMPORTAMOS LOS BLOQUES DESDE EL OTRO ARCHIVO
import { BLOQUE_I, BLOQUE_II, OPCIONES_DESPLEGABLES } from "./vademecumData";

export default function BuscadorVademecum() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [buscado, setBuscado] = useState(false);

  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const [modoAuditoria, setModoAuditoria] = useState(false);
  const [modoInventario, setModoInventario] = useState(false); 
  const [todosMedicamentos, setTodosMedicamentos] = useState([]);
  const [cargandoAuditoria, setCargandoAuditoria] = useState(false);

  const [seleccionados, setSeleccionados] = useState(new Set()); 
  
  // 🚀 NUEVO ESTADO PARA LA SUGERENCIA DE BÚSQUEDA
  const [sugerencia, setSugerencia] = useState(null); 

  const ADMIN_EMAIL = "marcar1972@gmail.com";
  const PLANES_LINK = "/planes";
  const router = useRouter();

  const normalizarTexto = (texto) => {
    if (!texto) return "";
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  // 🚀 NUEVA FUNCIÓN: Calcula la similitud entre dos palabras (Distancia de Levenshtein)
  const calcularSimilitud = (palabra1, palabra2) => {
    if (!palabra1 || !palabra2) return 0;
    if (palabra1 === palabra2) return 100;
    const len1 = palabra1.length;
    const len2 = palabra2.length;
    
    // Si la diferencia de largo es muy grande, no es probable que sea un error de tipeo
    if (Math.abs(len1 - len2) > 3) return 0;

    let matriz = [];
    for (let i = 0; i <= len1; i++) {
      matriz[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
      matriz[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const costo = palabra1[i - 1] === palabra2[j - 1] ? 0 : 1;
        matriz[i][j] = Math.min(
          matriz[i - 1][j] + 1,
          matriz[i][j - 1] + 1,
          matriz[i - 1][j - 1] + costo
        );
      }
    }
    
    const distancia = matriz[len1][len2];
    const maxLen = Math.max(len1, len2);
    // Retornamos un porcentaje de similitud (100% es idéntico)
    return ((maxLen - distancia) / maxLen) * 100;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const isAdminCheck = currentUser.email === ADMIN_EMAIL;
        setIsAdmin(isAdminCheck);
        
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        
        let currentIsPro = false;
        if (userDoc.exists()) {
          currentIsPro = userDoc.data().isPro || isAdminCheck;
          setIsPro(currentIsPro);
        }
        
        if (!currentIsPro && !isAdminCheck) {
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

  const toggleSeleccion = (id) => {
    const nuevosSeleccionados = new Set(seleccionados);
    if (nuevosSeleccionados.has(id)) nuevosSeleccionados.delete(id);
    else nuevosSeleccionados.add(id);
    setSeleccionados(nuevosSeleccionados);
  };

  const seleccionarTodos = () => {
    const dataAMostrar = modoAuditoria ? todosMedicamentos : resultados;
    if (seleccionados.size === dataAMostrar.length) setSeleccionados(new Set()); 
    else setSeleccionados(new Set(dataAMostrar.map(item => item.id))); 
  };

  const descargarExcel = () => {
    if (seleccionados.size === 0) return;
    const itemsExportar = (modoAuditoria ? todosMedicamentos : resultados).filter(item => seleccionados.has(item.id));
    const cabeceras = ["Nombre", "Principio Activo", "Categoría", "Condición Venta", "Lista Control"];
    const lineasCSV = [cabeceras.join(";")];

    itemsExportar.forEach(item => {
      const limpiar = (txt) => (txt || "").replace(/;/g, ",").replace(/\n/g, " ");
      const fila = [limpiar(item.nombre), limpiar(item.principio_activo), limpiar(item.categoria), limpiar(item.condicion_venta), limpiar(item.lista_control)];
      lineasCSV.push(fila.join(";"));
    });

    const csvContenido = "data:text/csv;charset=utf-8,\uFEFF" + lineasCSV.join("\n");
    const encodeUri = encodeURI(csvContenido);
    const link = document.createElement("a");
    link.setAttribute("href", encodeUri);
    link.setAttribute("download", `Reporte_Vademecum_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert(`✅ Excel generado con ${seleccionados.size} medicamentos.`);
  };

  // 🚀 FUNCIÓN DE BÚSQUEDA MODIFICADA (Acepta un texto forzado para cuando se hace clic en la sugerencia)
  const handleBuscar = async (e, textoForzado = null) => {
    if (e) e.preventDefault();
    const textoABuscar = textoForzado || busqueda;
    if (!textoABuscar.trim()) return;
    
    setCargando(true);
    setBuscado(true);
    setSeleccionados(new Set()); 
    setSugerencia(null); 
    
    try {
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datosFiltrados = [];
      const terminoBusqueda = normalizarTexto(textoABuscar);
      let mejorSugerencia = { nombre: "", similitud: 0 };

      querySnapshot.forEach((doc) => {
        const item = { id: doc.id, ...doc.data() };
        const nombreNormalizado = normalizarTexto(item.nombre);
        const principioNormalizado = normalizarTexto(item.principio_activo);
        
        // 1. Búsqueda exacta (la que ya tenías)
        if (nombreNormalizado.includes(terminoBusqueda) || principioNormalizado.includes(terminoBusqueda)) {
          datosFiltrados.push(item);
        } 
        // 2. Búsqueda difusa (solo si la palabra tiene al menos 3 letras)
        else if (terminoBusqueda.length >= 3) {
          const primerNombre = nombreNormalizado.split(' ')[0];
          const primerPrincipio = principioNormalizado.split(' ')[0];
          
          const simNombre = calcularSimilitud(terminoBusqueda, primerNombre);
          const simPrincipio = calcularSimilitud(terminoBusqueda, primerPrincipio);
          
          const maxSim = Math.max(simNombre, simPrincipio);
          
          // Si la similitud es alta (> 70%) y es mejor que la anterior, la guardamos
          if (maxSim > 70 && maxSim > mejorSugerencia.similitud) {
            mejorSugerencia = { nombre: item.nombre, similitud: maxSim };
          }
        }
      });
      
      setResultados(datosFiltrados);
      
      // Si no hubo resultados exactos pero encontramos una sugerencia, la mostramos
      if (datosFiltrados.length === 0 && mejorSugerencia.nombre) {
        setSugerencia(mejorSugerencia.nombre);
      }
      
    } catch (error) { console.error(error); }
    setCargando(false);
  };

  // 🚀 NUEVA FUNCIÓN: Buscar sugerencia al hacer clic
  const buscarSugerencia = (textoSugerido) => {
    setBusqueda(textoSugerido); // Actualiza el input visualmente
    handleBuscar(null, textoSugerido); // Dispara la búsqueda inmediatamente
  };

  const iniciarEdicion = (item) => { setEditandoId(item.id); setEditForm(item); };
  const cancelarEdicion = () => { setEditandoId(null); setEditForm({}); };
  const handleEditChange = (e) => { setEditForm({ ...editForm, [e.target.name]: e.target.value }); };

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
    const nuevoModo = !modoAuditoria;
    setModoAuditoria(nuevoModo);
    setSeleccionados(new Set()); 
    if (nuevoModo && todosMedicamentos.length === 0) {
      setCargandoAuditoria(true);
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datos = [];
      querySnapshot.forEach((doc) => { if(doc.data().nombre) datos.push({ id: doc.id, ...doc.data() }) });
      setTodosMedicamentos(datos.sort((a, b) => a.nombre.localeCompare(b.nombre)));
      setCargandoAuditoria(false);
    }
  };

  // 🚀 FUNCIÓN GENÉRICA DE SINCRONIZACIÓN
  const sincronizarBloque = async (bloqueData, nombreBloque) => {
    if (!window.confirm(`⚠️ ¿Ejecutar SINCRONIZACIÓN PRO? Se cargará el ${nombreBloque}.`)) return;
    setCargandoAuditoria(true);

    try {
      const vademecumRef = collection(db, "vademecum");
      const todosLosDocsSnapshot = await getDocs(vademecumRef);

      for (const item of bloqueData) {
        const nombreLimpioNuevo = normalizarTexto(item.nombre).replace(/\s+/g, '');
        
        for (const docSnap of todosLosDocsSnapshot.docs) {
          const data = docSnap.data();
          if (data.nombre && normalizarTexto(data.nombre).replace(/\s+/g, '') === nombreLimpioNuevo) {
            await deleteDoc(doc(db, "vademecum", docSnap.id));
          }
        }
        
        const docId = normalizarTexto(item.nombre).replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        await setDoc(doc(db, "vademecum", docId), item);
      }
      alert(`✅ ${nombreBloque} Sincronizado con éxito.`);
      window.location.reload();
    } catch (error) { 
      console.error(error); 
      alert("❌ Error al sincronizar."); 
      setCargandoAuditoria(false);
    }
  };

  const renderFilaInventario = (item) => {
    const estaSeleccionado = seleccionados.has(item.id);
    return (
      <div key={item.id} className={`border-b border-slate-100 p-4 flex items-center justify-between transition-colors ${estaSeleccionado ? 'bg-emerald-50' : 'bg-white hover:bg-slate-50'}`}>
        <div className="flex items-center gap-4">
          <button onClick={() => toggleSeleccion(item.id)} className={`p-1 rounded-md transition-colors ${estaSeleccionado ? 'text-emerald-600' : 'text-slate-300 hover:text-emerald-400'}`}>
            {estaSeleccionado ? <CheckSquare size={20} /> : <Square size={20} />}
          </button>
          <div className="flex flex-col">
            <span className="font-black text-slate-900 text-base">{item.nombre}</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{item.principio_activo}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-lg uppercase">{item.categoria}</span>
          {isAdmin && (
            <button onClick={() => iniciarEdicion(item)} className="p-2 text-slate-300 hover:text-emerald-500 transition-colors" title="Editar Ficha">
              <Info size={18} />
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderTarjetaMedicamento = (item) => (
    <div key={item.id} className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden relative transition-all hover:border-emerald-200 mb-8">
      {editandoId !== item.id ? (
        <>
          <div className="bg-slate-900 text-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-black">{item.nombre}</h2>
              <p className="text-emerald-400 font-bold text-sm uppercase mt-1">P. Activo: {item.principio_activo}</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-emerald-500 text-white text-xs font-black px-4 py-2 rounded-full uppercase">{item.categoria}</span>
              {isAdmin && <button onClick={() => iniciarEdicion(item)} className="bg-white text-slate-900 text-xs font-black px-4 py-2 rounded-full shadow-md hover:bg-emerald-400 transition-colors">✏️ Editar</button>}
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
        </>
      ) : (
        <div className="p-8 bg-slate-50 relative rounded-b-[2.5rem]">
          <form onSubmit={guardarEdicion} className="space-y-6">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-slate-50 py-4 z-10 border-b border-slate-200">
              <h2 className="text-2xl font-black text-slate-900">✏️ Modo Edición PRO</h2>
              <div className="flex gap-4">
                <button type="button" onClick={cancelarEdicion} className="text-slate-500 hover:text-rose-500 font-black uppercase text-xs transition-colors">✖ Cancelar</button>
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-2 rounded-xl shadow-lg transition-colors">💾 Guardar Cambios</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-400 uppercase border-b pb-2">1. Identificación y Formato</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Denominación / Nombre</label>
                  <input type="text" name="nombre" value={editForm.nombre || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Principio Activo y Composición</label>
                  <input type="text" name="principio_activo" value={editForm.principio_activo || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Categoría Terapéutica</label>
                  <input type="text" name="categoria" value={editForm.categoria || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors" />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-400 uppercase border-b pb-2">2. Información Clínica</h3>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">¿Para qué sirve? (Acción Terapéutica)</label>
                <textarea name="para_que_sirve" value={editForm.para_que_sirve || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors" rows="2"></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Dosificación / Posología</label>
                <textarea name="posologia" value={editForm.posologia || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors" rows="2"></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-rose-500 mb-1 uppercase">Contraindicaciones (Riesgos)</label>
                <textarea name="contraindicaciones" value={editForm.contraindicaciones || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-rose-200 focus:border-rose-500 outline-none transition-colors" rows="2"></textarea>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-400 uppercase border-b pb-2">3. Normativa Legal y Estrategia Comercial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Condición de Venta</label>
                  <select name="condicion_venta" value={editForm.condicion_venta || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors">
                    <option value="">Seleccione una opción...</option>
                    {OPCIONES_DESPLEGABLES.condicionVenta.map((opcion) => (<option key={opcion} value={opcion}>{opcion}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Lista de Control (D.S. 404/405)</label>
                  <select name="lista_control" value={editForm.lista_control || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors">
                    <option value="">Seleccione una opción...</option>
                    {OPCIONES_DESPLEGABLES.listaControl.map((opcion) => (<option key={opcion} value={opcion}>{opcion}</option>))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-amber-600 mb-1 uppercase">💡 Tips de Mesón (Consejo PRO)</label>
                <textarea name="tips_venta" value={editForm.tips_venta || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 outline-none transition-colors bg-amber-50" rows="2"></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-emerald-600 mb-1 uppercase">🔄 Venta Complementaria (Cross-Selling)</label>
                <textarea name="cross_selling" value={editForm.cross_selling || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 outline-none transition-colors bg-emerald-50" rows="2"></textarea>
              </div>
            </div>
            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-4 rounded-xl shadow-xl text-lg transition-colors">💾 Confirmar y Actualizar Base de Datos</button>
          </form>
        </div>
      )}
    </div>
  );

  if (checkingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>;

  const dataAMostrar = modoAuditoria ? todosMedicamentos : resultados;
  const totalMostrados = dataAMostrar.length;
  const todosSeleccionados = totalMostrados > 0 && seleccionados.size === totalMostrados;

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 relative">
      {cargandoAuditoria && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500 mb-4"></div>
          <p className="text-slate-900 font-black text-xl animate-pulse">Sincronizando Base de Datos PRO...</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter text-center md:text-left w-full md:w-auto">Vademécum <span className="text-emerald-500">PRO</span></h1>
            
            {isAdmin && (
              <div className="flex flex-wrap gap-3 justify-center">
                <button onClick={() => sincronizarBloque(BLOQUE_I, "Bloque I")} className="bg-slate-900 hover:bg-slate-800 transition-colors text-white px-5 py-3 rounded-full font-black text-xs shadow-md">🚀 Sync Bloque I</button>
                <button onClick={() => sincronizarBloque(BLOQUE_II, "Bloque II")} className="bg-emerald-700 hover:bg-emerald-600 transition-colors text-white px-5 py-3 rounded-full font-black text-xs shadow-md">🚀 Sync Bloque II</button>
                
                <button onClick={toggleAuditoria} className="bg-blue-500 hover:bg-blue-400 transition-colors text-white px-5 py-3 rounded-full font-black text-xs shadow-md">{modoAuditoria ? "✖ Cerrar Auditoría" : "⚡ Ver Todos"}</button>
                
                <button 
                    onClick={() => { setModoInventario(!modoInventario); setSeleccionados(new Set()); }} 
                    className={`${modoInventario ? 'bg-amber-500' : 'bg-slate-400'} hover:opacity-80 transition-all text-white px-5 py-3 rounded-full font-black text-xs shadow-md flex items-center gap-2`}
                >
                    {modoInventario ? <EyeOff size={14}/> : <Eye size={14}/>}
                    {modoInventario ? "Vista Fichas" : "Vista Inventario"}
                </button>
              </div>
            )}
          </div>

          {!modoAuditoria && (
            <form onSubmit={handleBuscar} className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value); setBuscado(false);}} placeholder="Buscar fármaco o principio activo..." className="w-full border-2 rounded-2xl p-4 pl-12 text-base md:text-lg outline-none focus:border-emerald-500 transition-colors shadow-sm" />
              </div>
              <button type="submit" className="w-full md:w-auto bg-slate-900 text-white font-black py-4 px-10 rounded-2xl hover:bg-emerald-600 transition-all shadow-md">Buscar</button>
            </form>
          )}

          {/* 🚨 DISCLAIMER LEGAL / EXENCIÓN DE RESPONSABILIDAD */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
            <p className="text-amber-900 text-xs md:text-sm font-medium leading-relaxed">
              <span className="font-black uppercase">Aviso Legal:</span> Toda la información es orientativa. Los resultados, dosis y contraindicaciones deben ser <span className="font-black underline">validados por un Químico Farmacéutico (Q.F.) o fuentes oficiales (ISP/MINSAL)</span>. AuxiliarPro se exime de responsabilidad por dispensaciones no supervisadas.
            </p>
          </div>
        </div>

        {modoInventario && totalMostrados > 0 && (
          <div className="mb-4 flex flex-col sm:flex-row justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-3 sm:mb-0">
              <button onClick={seleccionarTodos} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-bold text-sm transition-colors">
                {todosSeleccionados ? <CheckSquare size={20} className="text-emerald-500" /> : <Square size={20} />}
                {todosSeleccionados ? "Deseleccionar Todos" : "Seleccionar Todos"}
              </button>
              <span className="text-xs text-slate-400 font-black px-3 py-1 bg-white rounded-full border border-slate-200">{seleccionados.size} / {totalMostrados}</span>
            </div>
            {seleccionados.size > 0 && (
              <button onClick={descargarExcel} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-2 rounded-xl shadow-md transition-all">
                <Download size={18} /> Descargar Selección (Excel)
              </button>
            )}
          </div>
        )}

        {/* 🚀 CONTENEDOR DE RESULTADOS CON BLOQUE DE SUGERENCIA INTEGRADO */}
        <div className={modoInventario ? "bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm divide-y divide-slate-100" : ""}>
            {totalMostrados > 0 ? (
                dataAMostrar.map(item => modoInventario ? renderFilaInventario(item) : renderTarjetaMedicamento(item))
            ) : buscado && !cargando && (
                <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center gap-6">
                    <p className="text-slate-400 font-bold text-xl uppercase tracking-widest">Sin resultados encontrados</p>
                    
                    {/* 🚀 NUEVO BLOQUE DE SUGERENCIA (Did you mean...?) */}
                    {sugerencia && (
                        <div className="mt-4 bg-amber-50 border-2 border-amber-200 p-6 rounded-2xl max-w-md animate-in fade-in zoom-in shadow-sm">
                            <p className="text-amber-800 font-bold text-sm mb-3 flex items-center justify-center gap-2">
                                <AlertTriangle size={18} /> ¿Tal vez quisiste decir...?
                            </p>
                            <button 
                                onClick={() => buscarSugerencia(sugerencia)}
                                className="text-emerald-600 font-black text-xl hover:text-emerald-700 transition-colors underline decoration-emerald-300 decoration-4 hover:decoration-emerald-500"
                            >
                                {sugerencia}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>

        {!modoInventario && (
            <section className="mt-20 border-t border-slate-200 pt-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-[#003366]">
                            <ShieldCheck size={32} />
                            <h3 className="text-2xl font-black uppercase tracking-tight">Vademécum Oficial AuxiliarPro</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            En <strong>AuxiliarPro</strong>, nos basamos estrictamente en la normativa técnica del <strong>MINSAL</strong> y las resoluciones del <strong>ISP de Chile</strong>. Nuestro buscador integra datos críticos para el auxiliar de farmacia moderno: desde el manejo de <strong>Recetas Cheque y Retenidas</strong> según el <strong>DS 404 y 405</strong>, hasta protocolos de almacenamiento bajo el <strong>DS 466</strong>.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-slate-400">
                            <BookOpen size={32} />
                            <h3 className="text-2xl font-black uppercase tracking-tight">Marco Normativo Chileno</h3>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed italic">
                            La dispensación de medicamentos en Chile está regulada por la <strong>Ley de Fármacos 20.724</strong>. El auxiliar de farmacia debe dominar la clasificación de productos, la <strong>Cadena de Frío</strong>, y los reportes de <strong>Farmacovigilancia</strong>.
                        </p>
                    </div>
                </div>
            </section>
        )}
        <div className="mt-8"><BannerVenta /></div>
      </div>
      <footer className="mt-12 text-center text-slate-300 text-[10px] font-mono uppercase tracking-[0.3em] pb-12">
        AuxiliarPro Vademécum v5.1 | macz.dev
      </footer>
    </div>
  );
}