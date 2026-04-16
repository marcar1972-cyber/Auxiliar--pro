"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config"; 
import { useRouter } from "next/navigation"; 
import BannerVenta from "../components/BannerVenta";

// IMPORTAMOS LA DATA DESDE EL OTRO ARCHIVO
import { BLOQUE_G, OPCIONES_DESPLEGABLES } from "./vademecumData";

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
  const [todosMedicamentos, setTodosMedicamentos] = useState([]);
  const [cargandoAuditoria, setCargandoAuditoria] = useState(false);

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
      querySnapshot.forEach((doc) => {
          if(doc.data().nombre) datos.push({ id: doc.id, ...doc.data() })
      });
      setTodosMedicamentos(datos.sort((a, b) => a.nombre.localeCompare(b.nombre)));
      setCargandoAuditoria(false);
    }
  };

  const handleCargaMasivaYPurga = async () => {
    if (!window.confirm("⚠️ ¿Ejecutar SINCRONIZACIÓN PRO? Se cargará el Bloque G desde el archivo externo.")) return;
    setCargandoAuditoria(true);

    try {
      const vademecumRef = collection(db, "vademecum");
      const todosLosDocsSnapshot = await getDocs(vademecumRef);

      for (const item of BLOQUE_G) {
        const nombreLimpioNuevo = normalizarTexto(item.nombre).replace(/\s+/g, '');
        
        todosLosDocsSnapshot.forEach(async (docSnap) => {
          const data = docSnap.data();
          if (data.nombre && normalizarTexto(data.nombre).replace(/\s+/g, '') === nombreLimpioNuevo) {
            await deleteDoc(doc(db, "vademecum", docSnap.id));
          }
        });
        
        const docId = normalizarTexto(item.nombre).replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        await setDoc(doc(db, "vademecum", docId), item);
      }
      alert("✅ Bloque G Sincronizado correctamente.");
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
          <div className="bg-slate-100 px-8 py-4 border-t border-slate-200">
            <p className="text-slate-500 text-xs text-center font-medium italic">
              ⚠️ Aviso: La información contenida en este vademécum es referencial para profesionales de la salud. La posología final la determina el médico.
            </p>
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
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Contraindicaciones (Riesgos)</label>
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
                    {OPCIONES_DESPLEGABLES.condicionVenta.map((opcion) => (
                      <option key={opcion} value={opcion}>{opcion}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Lista de Control (D.S. 404/405)</label>
                  <select name="lista_control" value={editForm.lista_control || ""} onChange={handleEditChange} className="w-full p-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-colors">
                    <option value="">Seleccione una opción...</option>
                    {OPCIONES_DESPLEGABLES.listaControl.map((opcion) => (
                      <option key={opcion} value={opcion}>{opcion}</option>
                    ))}
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

  return (
    <div className="min-h-screen bg-white p-6 relative">
      {cargandoAuditoria && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500 mb-4"></div>
          <p className="text-slate-900 font-black text-xl animate-pulse">Sincronizando Base de Datos PRO...</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-4xl font-black text-slate-900">Vademécum <span className="text-emerald-500">PRO</span></h1>
            {isAdmin && (
              <div className="flex gap-3">
                <button onClick={handleCargaMasivaYPurga} className="bg-slate-900 hover:bg-slate-800 transition-colors text-white px-6 py-3 rounded-full font-black text-sm shadow-md">🚀 Sync Bloque G</button>
                <button onClick={toggleAuditoria} className="bg-emerald-500 hover:bg-emerald-400 transition-colors text-white px-6 py-3 rounded-full font-black text-sm shadow-md">{modoAuditoria ? "❌ Cerrar" : "⚡ Ver Todo"}</button>
              </div>
            )}
          </div>
          {!modoAuditoria && (
            <form onSubmit={handleBuscar} className="flex gap-3">
              <input type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value); setBuscado(false);}} placeholder="Buscar por fármaco, categoría o acción..." className="flex-1 border-2 rounded-2xl p-4 text-lg outline-none focus:border-emerald-500 transition-colors shadow-sm" />
              <button type="submit" className="bg-slate-900 text-white font-black px-10 rounded-2xl hover:bg-emerald-600 transition-all shadow-md">Buscar 🔍</button>
            </form>
          )}
        </div>
        <div className="space-y-8">{modoAuditoria ? todosMedicamentos.map(renderTarjetaMedicamento) : resultados.map(renderTarjetaMedicamento)}</div>
        <div className="mt-8"><BannerVenta /></div>
      </div>
    </div>
  );
}