"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config"; // Tu ruta correcta
import Link from "next/link";

export default function BuscadorVademecum() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [buscado, setBuscado] = useState(false);
  const [sugerencia, setSugerencia] = useState(null); // Estado para la sugerencia inteligente

  // ESTADOS PARA LA EDICIÓN GENERAL (Profunda)
  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // ESTADOS PARA EL MODO AUDITORÍA RÁPIDA
  const [modoAuditoria, setModoAuditoria] = useState(false);
  const [todosMedicamentos, setTodosMedicamentos] = useState([]);
  const [cargandoAuditoria, setCargandoAuditoria] = useState(false);
  const [guardandoRapidoId, setGuardandoRapidoId] = useState(null);

  const ADMIN_EMAIL = "marcar1972@gmail.com";

  // Verifica si eres tú para mostrar los botones de Edición
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(user && user.email === ADMIN_EMAIL);
    });
    return () => unsubscribe();
  }, []);

  // --- Lógica de Similitud para sugerencias ---
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

  // Función de Búsqueda EXACTA e Inteligente (Modo Normal)
  const handleBuscar = async (e) => {
    if (e) e.preventDefault();
    if (!busqueda.trim()) return;

    setCargando(true);
    setBuscado(true);
    setSugerencia(null); // Limpiamos sugerencias previas
    
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
        // Si no hay resultados, buscamos una sugerencia
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

  // Función para aplicar la sugerencia
  const aplicarSugerencia = (nombre) => {
    setBusqueda(nombre);
    setSugerencia(null);
    // Disparamos la búsqueda automáticamente con un delay mínimo
    setTimeout(() => handleBuscar(), 50);
  };

  // FUNCIONES DE EDICIÓN GENERAL (Modo Normal)
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
      setEditandoId(null);
      alert("✅ Medicamento actualizado correctamente.");
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("❌ Error al actualizar.");
    }
  };

  // ==========================================
  // FUNCIONES MODO AUDITORÍA RÁPIDA
  // ==========================================
  const toggleAuditoria = async () => {
    const nuevoEstado = !modoAuditoria;
    setModoAuditoria(nuevoEstado);
    
    // Si entramos a auditoría, cargamos TODOS los medicamentos
    if (nuevoEstado && todosMedicamentos.length === 0) {
      setCargandoAuditoria(true);
      try {
        const querySnapshot = await getDocs(collection(db, "vademecum"));
        const datos = [];
        querySnapshot.forEach((doc) => {
          datos.push({ id: doc.id, ...doc.data() });
        });
        // Ordenamos alfabéticamente para que sea más fácil auditar
        datos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        setTodosMedicamentos(datos);
      } catch (error) {
        console.error("Error al cargar auditoría:", error);
      }
      setCargandoAuditoria(false);
    }
  };

  const handleCondicionRapidaChange = (id, nuevoValor) => {
    setTodosMedicamentos(todosMedicamentos.map(item => 
      item.id === id ? { ...item, condicion_venta: nuevoValor } : item
    ));
  };

  const guardarCondicionRapida = async (id, nuevaCondicion) => {
    setGuardandoRapidoId(id); // Para mostrar estado de "Cargando..."
    try {
      const docRef = doc(db, "vademecum", id);
      await updateDoc(docRef, { condicion_venta: nuevaCondicion });
      
      // Mantenemos el botón verde por 1.5 segundos visualmente
      setTimeout(() => {
        setGuardandoRapidoId(null);
      }, 1500);
    } catch (error) {
      console.error("Error al guardar rápido:", error);
      alert("Error al actualizar la condición.");
      setGuardandoRapidoId(null);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 p-6">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO PRINCIPAL Y BOTONES ADMIN */}
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
              
              {/* BOTONES DE ADMINISTRADOR */}
              {isAdmin && (
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <Link href="/admin-vademecum" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-black text-sm hover:bg-slate-800 transition-all shadow-md text-center">
                    ➕ Nuevo Manual
                  </Link>
                  <button 
                    onClick={toggleAuditoria} 
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-md ${modoAuditoria ? 'bg-rose-500 hover:bg-rose-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
                  >
                    {modoAuditoria ? "❌ Cerrar Auditoría" : "⚡ Auditoría Legal Rápida"}
                  </button>
                </div>
              )}
            </div>
            
            {/* BARRA DE BÚSQUEDA (Se oculta en Modo Auditoría) */}
            {!modoAuditoria && (
              <form onSubmit={handleBuscar} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Busca un medicamento, vitamina o suplemento..." 
                  className="flex-1 border-2 border-slate-200 rounded-2xl p-4 text-lg font-medium focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 outline-none transition-all shadow-sm"
                />
                <button type="submit" className="bg-slate-900 text-white font-black px-10 py-4 rounded-2xl hover:bg-emerald-600 transition-all text-lg shadow-xl flex items-center justify-center gap-2">
                  Buscar 🔍
                </button>
              </form>
            )}
          </div>
        </div>

        {/* --- SECCIÓN DE SUGERENCIA ("Quizás quisiste decir") --- */}
        {sugerencia && !cargando && !modoAuditoria && (
          <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-[2rem] flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500 shadow-sm">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xl">💡</div>
            <p className="text-amber-800 font-medium text-lg">
              No hay resultados exactos. ¿Quizás quisiste decir:{" "}
              <button 
                onClick={() => aplicarSugerencia(sugerencia)}
                className="text-emerald-600 font-black hover:underline decoration-2 underline-offset-4"
              >
                {sugerencia}
              </button>
              ?
            </p>
          </div>
        )}

        {/* ========================================================= */}
        {/* VISTA 1: MODO AUDITORÍA LEGAL RÁPIDA (SOLO ADMIN)         */}
        {/* ========================================================= */}
        {modoAuditoria && (
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden relative p-8">
            <div className="mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                ⚡ Panel de Auditoría Legal
              </h2>
              <p className="text-slate-500 font-medium text-sm mt-2">
                Modifica rápidamente la condición de venta. Los cambios se guardan al instante.
              </p>
            </div>

            {cargandoAuditoria ? (
              <p className="text-center text-emerald-600 font-bold animate-pulse text-lg tracking-widest uppercase py-10">Cargando base de datos completa...</p>
            ) : (
              <div className="space-y-3">
                {todosMedicamentos.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all gap-4">
                    <div className="flex-1 w-full">
                      <h3 className="font-black text-lg text-slate-800">{item.nombre}</h3>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.categoria}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <select 
                        value={item.condicion_venta || ""} 
                        onChange={(e) => handleCondicionRapidaChange(item.id, e.target.value)}
                        className="flex-1 md:w-64 border-2 border-slate-200 p-3 rounded-xl focus:border-emerald-500 outline-none font-medium text-slate-700 bg-white"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="Venta Directa">Venta Directa</option>
                        <option value="Receta Médica">Receta Médica</option>
                        <option value="Receta Retenida">Receta Retenida</option>
                        <option value="Receta Cheque">Receta Cheque</option>
                        <option value="Receta Retenida con Control de Stock">Receta Retenida con Control de Stock</option>
                        <option value="Receta Retenida con Control de Stock Simplificado">Receta Retenida con Control de Stock Simplificado</option>
                      </select>
                      
                      <button 
                        onClick={() => guardarCondicionRapida(item.id, item.condicion_venta)}
                        disabled={guardandoRapidoId === item.id}
                        className={`px-6 py-3 rounded-xl font-black text-sm transition-all whitespace-nowrap shadow-sm
                          ${guardandoRapidoId === item.id 
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                            : 'bg-slate-900 text-white hover:bg-emerald-500'}`}
                      >
                        {guardandoRapidoId === item.id ? "✅ ¡Listo!" : "Guardar ✔️"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* VISTA 2: RESULTADOS DE BÚSQUEDA NORMAL Y EDICIÓN PROFUNDA */}
        {/* ========================================================= */}
        {!modoAuditoria && (
          <>
            {cargando && <p className="text-center text-emerald-600 font-bold animate-pulse text-lg tracking-widest uppercase">Consultando base de datos...</p>}
            
            {!cargando && buscado && resultados.length === 0 && !sugerencia && (
              <div className="bg-slate-50 p-10 rounded-[2.5rem] text-center border border-slate-200 shadow-sm">
                <p className="text-slate-900 font-black text-2xl mb-2">No encontramos "{busqueda}"</p>
                <p className="text-slate-500 font-medium">Hemos registrado esta búsqueda para agregar el producto a la brevedad.</p>
              </div>
            )}

            <div className="space-y-8">
              {resultados.map((item) => (
                <div key={item.id} className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden relative transition-all hover:border-emerald-200">
                  
                  {/* === MODO VISTA NORMAL === */}
                  {editandoId !== item.id ? (
                    <>
                      {/* CABECERA DEL MEDICAMENTO */}
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
                      
                      {/* CUERPO DEL MEDICAMENTO */}
                      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-black text-emerald-600 uppercase text-xs tracking-widest mb-2 flex items-center gap-2">¿Para qué sirve?</h3>
                            <p className="text-slate-700 font-medium leading-relaxed">{item.para_que_sirve}</p>
                          </div>
                          
                          <div>
                            <h3 className="font-black text-emerald-600 uppercase text-xs tracking-widest mb-2">Posología / Uso</h3>
                            <p className="text-slate-700 font-medium leading-relaxed">{item.posologia}</p>
                          </div>
                          
                          <div>
                            <h3 className="font-black text-rose-500 uppercase text-xs tracking-widest mb-2">Contraindicaciones</h3>
                            <p className="text-slate-700 font-medium leading-relaxed">{item.contraindicaciones || "Ninguna especificada."}</p>
                          </div>
                        </div>
                        
                        {/* PANEL DE VENTAS (DERECHA) */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 h-full flex flex-col justify-center">
                          <h3 className="font-black text-slate-400 uppercase text-xs tracking-widest mb-2">Condición de Venta</h3>
                          <p className="text-slate-900 font-black mb-8 text-xl flex items-center gap-2">
                            🏷️ {item.condicion_venta || "No especificada"}
                          </p>
                          
                          <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 mb-4">
                            <h3 className="font-black text-amber-700 text-sm mb-2 uppercase tracking-wider">💡 Tips de Venta</h3>
                            <p className="text-amber-900 font-medium leading-relaxed text-sm">{item.tips_venta || "Sin tips registrados. ¡Edítalo para agregar uno!"}</p>
                          </div>

                          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                            <h3 className="font-black text-emerald-700 text-sm mb-2 uppercase tracking-wider">🔄 Cross-Selling</h3>
                            <p className="text-emerald-900 font-medium leading-relaxed text-sm">{item.cross_selling || "Sin sugerencias. ¡Edítalo para agregar!"}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    
                    /* === MODO EDICIÓN GENERAL === */
                    <div className="p-8 bg-slate-50">
                      <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
                        <h2 className="text-2xl font-black text-slate-900">✏️ Editando: <span className="text-emerald-600">{editForm.nombre}</span></h2>
                        <button onClick={cancelarEdicion} className="text-slate-500 hover:text-rose-500 font-black uppercase text-sm tracking-widest transition-colors">✖ Cancelar</button>
                      </div>
                      
                      <form onSubmit={guardarEdicion} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Nombre</label>
                            <input type="text" name="nombre" value={editForm.nombre} onChange={handleEditChange} className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-emerald-500 outline-none" />
                          </div>
                          <div>
                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Categoría</label>
                            <select name="categoria" value={editForm.categoria} onChange={handleEditChange} className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-emerald-500 outline-none">
                              <option value="Medicamento">Medicamento</option>
                              <option value="Vitamina">Vitamina</option>
                              <option value="Suplemento">Suplemento</option>
                              <option value="Dermocosmética">Dermocosmética</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Condición de Venta</label>
                            <select name="condicion_venta" value={editForm.condicion_venta} onChange={handleEditChange} className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-emerald-500 outline-none">
                              <option value="Venta Directa">Venta Directa</option>
                              <option value="Receta Médica">Receta Médica</option>
                              <option value="Receta Retenida">Receta Retenida</option>
                              <option value="Receta Cheque">Receta Cheque</option>
                              <option value="Receta Retenida con Control de Stock">Receta Retenida con Control de Stock</option>
                              <option value="Receta Retenida con Control de Stock Simplificado">Receta Retenida con Control de Stock Simplificado</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Contraindicaciones</label>
                            <input type="text" name="contraindicaciones" value={editForm.contraindicaciones} onChange={handleEditChange} className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-emerald-500 outline-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">¿Para qué sirve?</label>
                          <textarea name="para_que_sirve" value={editForm.para_que_sirve} onChange={handleEditChange} className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-emerald-500 outline-none" rows="2"></textarea>
                        </div>

                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Posología / Uso</label>
                          <textarea name="posologia" value={editForm.posologia} onChange={handleEditChange} className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-emerald-500 outline-none" rows="2"></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                          <div>
                            <label className="block text-xs font-black text-amber-600 uppercase tracking-widest mb-2">💡 Tips de Venta</label>
                            <textarea name="tips_venta" value={editForm.tips_venta} onChange={handleEditChange} className="w-full border-2 border-amber-100 p-3 rounded-xl focus:border-amber-500 outline-none" rows="2"></textarea>
                          </div>
                          <div>
                            <label className="block text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">🔄 Cross-Selling</label>
                            <textarea name="cross_selling" value={editForm.cross_selling} onChange={handleEditChange} className="w-full border-2 border-emerald-100 p-3 rounded-xl focus:border-emerald-500 outline-none" rows="2"></textarea>
                          </div>
                        </div>

                        <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-emerald-600 transition-all text-lg shadow-md tracking-wider">
                          💾 Guardar Cambios
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}