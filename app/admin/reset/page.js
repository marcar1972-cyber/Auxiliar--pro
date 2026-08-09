"use client";

// ==========================================
// IMPORTACIONES
// ==========================================
import { useState, useEffect } from "react";
// Funciones de Firestore para interactuar con la base de datos
import { collection, getDocs, doc, updateDoc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
// Función para escuchar cambios en el estado de autenticación
import { onAuthStateChanged } from "firebase/auth";
// Configuración de Firebase (Auth y DB)
import { auth, db } from "../../firebase/config"; 
// Router de Next.js para redirecciones
import { useRouter } from "next/navigation"; 
// Componente personalizado para mostrar banners
import BannerVenta from "../../components/BannerVenta";
// Datos estáticos para la carga masiva (Bloque G y opciones de select)
// import { BLOQUE_G, OPCIONES_DESPLEGABLES } from "../../admin-vademecum/vademecumData";

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function BuscadorVademecum() {
  // --- ESTADOS DE AUTENTICACIÓN Y ACCESO ---
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // Para mostrar loader mientras verifica sesión
  const [esFechaBloqueo, setEsFechaBloqueo] = useState(false);

  // --- ESTADOS DEL BUSCADOR ---
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [buscado, setBuscado] = useState(false);

  // --- ESTADOS DE EDICIÓN INLINE ---
  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // --- ESTADOS DE MODO AUDITORÍA (VER TODOS) ---
  const [modoAuditoria, setModoAuditoria] = useState(false);
  const [todosMedicamentos, setTodosMedicamentos] = useState([]);
  const [cargandoAuditoria, setCargandoAuditoria] = useState(false);

  // --- CONSTANTES DE CONFIGURACIÓN ---
  const ADMIN_EMAIL = "marcar1972@gmail.com";
  const PLANES_LINK = "/planes";
  const router = useRouter();

  // ==========================================
  // FUNCIONES AUXILIARES
  // ==========================================
  // Normaliza el texto: lo pasa a minúsculas, quita tildes (acentos) y espacios extra.
  // Esto permite que "Paracetamol" coincida con "paracetamol" o "paracetamól".
  const normalizarTexto = (texto) => {
    return texto
      ? texto
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim()
      : "";
  };

  // ==========================================
  // EFECTOS (USEEFFECT)
  // ==========================================
  
  // 1. Verificación de fecha de bloqueo (Ej: Bloquear acceso después del 1 de Abril de 2026)
  useEffect(() => {
    const ahora = new Date();
    const fechaLimite = new Date(2026, 3, 1, 0, 0, 0); // Mes 3 es Abril (0-indexado)
    if (ahora >= fechaLimite) {
      setEsFechaBloqueo(true);
    }
  }, []);

  // 2. Listener de Autenticación y Validación de Plan PRO
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAdmin(currentUser.email === ADMIN_EMAIL);
        
        // Consultar datos adicionales del usuario en Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        
        let currentIsPro = false;
        if (userDoc.exists()) {
          // Es PRO si tiene el flag en true o si es el admin hardcodeado
          currentIsPro = userDoc.data().isPro || currentUser.email === ADMIN_EMAIL;
          setIsPro(currentIsPro);
        }
        
        // Si NO es PRO, lo expulsamos a la página de planes
        if (!currentIsPro) {
          router.push(PLANES_LINK);
        } else {
          // Si es PRO, dejamos de mostrar el loader de verificación
          setCheckingAuth(false);
        }
      } else {
        // Si no hay usuario, lo mandamos al login
        setUser(null);
        router.push("/login");
      }
    });
    // Limpieza del listener al desmontar el componente
    return () => unsubscribe();
  }, [router]);

  // ==========================================
  // MANEJADORES DE EVENTOS (HANDLERS)
  // ==========================================

  // Búsqueda en tiempo real / por submit
  const handleBuscar = async (e) => {
    if (e) e.preventDefault();
    if (!busqueda.trim()) return;
    setCargando(true);
    setBuscado(true);
    
    try {
      // Obtenemos TODOS los documentos de la colección (Nota: para miles de registros, esto debería ser una consulta indexada)
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datosFiltrados = [];
      const terminoBusqueda = normalizarTexto(busqueda);

      // Filtrado en el cliente (frontend)
      querySnapshot.forEach((doc) => {
        const item = { id: doc.id, ...doc.data() };
        const nombreNormalizado = normalizarTexto(item.nombre);
        
        if (nombreNormalizado.includes(terminoBusqueda)) {
          datosFiltrados.push(item);
        }
      });
      setResultados(datosFiltrados);
    } catch (error) { 
      console.error("Error al buscar:", error); 
    }
    setCargando(false);
  };

  // --- LÓGICA DE EDICIÓN INLINE ---
  const iniciarEdicion = (item) => {
    setEditandoId(item.id);
    setEditForm(item); // Carga los datos actuales en el formulario
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    // Actualiza el estado del formulario a medida que el usuario escribe
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const guardarEdicion = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "vademecum", editandoId);
      await updateDoc(docRef, editForm); // Actualiza en Firestore
      
      alert("✅ Medicamento actualizado.");
      
      // Actualiza el estado local inmediatamente para no tener que recargar
      setResultados(resultados.map(r => r.id === editandoId ? { ...r, ...editForm } : r));
      setTodosMedicamentos(todosMedicamentos.map(r => r.id === editandoId ? { ...r, ...editForm } : r));
      
      setEditandoId(null); // Sale del modo edición
    } catch (error) { 
      alert("❌ Error al guardar."); 
    }
  };

  // --- LÓGICA DE AUDITORÍA (VER TODOS) ---
  const toggleAuditoria = async () => {
    setModoAuditoria(!modoAuditoria);
    
    // Si entramos al modo auditoría y está vacío, cargamos todo de Firestore
    if (!modoAuditoria && todosMedicamentos.length === 0) {
      setCargandoAuditoria(true);
      const querySnapshot = await getDocs(collection(db, "vademecum"));
      const datos = [];
      querySnapshot.forEach((doc) => datos.push({ id: doc.id, ...doc.data() }));
      
      // Ordena alfabéticamente por nombre
      setTodosMedicamentos(datos.sort((a, b) => (a.nombre || "").localeCompare(b.nombre || "")));
      setCargandoAuditoria(false);
    }
  };

  // --- CARGA MASIVA Y PURGA (SYNC BLOQUE G) ---
  const handleCargaMasivaYPurga = async () => {
    if (!window.confirm("⚠️ ¿Ejecutar SINCRONIZACIÓN PRO? Cargar Bloque G desde archivo externo.")) return;
    setCargandoAuditoria(true);

    try {
      const vademecumRef = collection(db, "vademecum");
      // Obtenemos snapshot de todo para poder purgar duplicados
      const todosLosDocsSnapshot = await getDocs(vademecumRef);

      // NOTA: Como comentamos el import de BLOQUE_G, esta función no se ejecutará correctamente hasta que lo arreglemos en el próximo sprint.
      // Por ahora, el objetivo es que Vercel logre compilar el proyecto.
      
      alert("⚠️ Función de sincronización temporalmente desactivada para permitir el despliegue.");
      setCargandoAuditoria(false);
      
    } catch (error) { 
      console.error("Error en carga masiva:", error); 
      alert("❌ Error en carga masiva."); 
      setCargandoAuditoria(false);
    }
  };

  // ==========================================
  // RENDERIZADO DE TARJETAS (SUB-COMPONENTE)
  // ==========================================
  const renderTarjetaMedicamento = (item) => (
    <div key={item.id} className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden relative transition-all hover:border-emerald-200">
      {editandoId !== item.id ? (
        // ==========================================
        // MODO VISUALIZACIÓN (READ-ONLY)
        // ==========================================
        <>
          <div className="bg-slate-900 text-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-black">{item.nombre}</h2>
              <p className="text-emerald-400 font-bold text-sm uppercase mt-1">P. Activo: {item.principio_activo}</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-emerald-500 text-white text-xs font-black px-4 py-2 rounded-full uppercase">{item.categoria}</span>
              {/* Botón de editar solo visible para Admin */}
              {isAdmin && <button onClick={() => iniciarEdicion(item)} className="bg-white text-slate-900 text-xs font-black px-4 py-2 rounded-full shadow-md hover:bg-emerald-400 transition-colors">✏️ Editar</button>}
            </div>
          </div>
          
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Columna Izquierda: Info Clínica */}
            <div className="space-y-6">
                <div>
                  <h3 className="font-black text-emerald-600 text-xs mb-2 uppercase">¿Para qué sirve?</h3>
                  <p className="text-slate-700 font-medium">{item.para_que_sirve}</p>
                </div>
                <div>
                  <h3 className="font-black text-emerald-600 text-xs mb-2 uppercase">Dosificación / Posología</h3>
                  <p className="text-slate-700 font-medium whitespace-pre-line">{item.posologia}</p>
                </div>
                <div>
                  <h3 className="font-black text-rose-500 text-xs mb-2 uppercase">Contraindicaciones</h3>
                  <p className="text-slate-700 font-medium text-sm">{item.contraindicaciones}</p>
                </div>
            </div>
            
            {/* Columna Derecha: Info Legal y Comercial */}
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
          
          {/* Footer de la tarjeta con aviso legal */}
          <div className="bg-slate-100 px-8 py-4 border-t border-slate-200">
            <p className="text-slate-500 text-xs text-center font-medium italic">
              ⚠️ Aviso: La información contenida en este vademécum es referencial para profesionales de la salud. La posología final la determina el médico.
            </p>
          </div>
        </>
      ) : (
        // ==========================================
        // MODO EDICIÓN (FORMULARIO)
        // ==========================================
        <div className="p-8 bg-slate-50 relative rounded-b-[2.5rem]">
          <form onSubmit={guardarEdicion} className="space-y-6">
            {/* Cabecera del formulario con botones de acción */}
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-slate-50 py-4 z-10 border-b border-slate-200">
              <h2 className="text-2xl font-black text-slate-900">✏️ Modo Edición PRO</h2>
              <div className="flex gap-4">
                <button type="button" onClick={cancelarEdicion} className="text-slate-500 hover:text-rose-500 font-black uppercase text-xs transition-colors">✖ Cancelar</button>
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-2 rounded-xl shadow-lg transition-colors">💾 Guardar Cambios</button>
              </div>
            </div>

            {/* Sección 1: Datos básicos */}
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

            {/* Sección 2: Datos clínicos */}
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

            {/* Sección 3: Datos legales y comerciales */}
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
            
            {/* Botón final de envío del formulario */}
            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-4 rounded-xl shadow-xl text-lg transition-colors">💾 Confirmar y Actualizar Base de Datos</button>
          </form>
        </div>
      )}
    </div>
  );

  // ==========================================
  // RENDERIZADO PRINCIPAL (RETURN)
  // ==========================================
  
  // 1. Loader inicial de verificación de autenticación
  if (checkingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>;

  return (
    <div className="min-h-screen bg-white p-6 relative">
      
      {/* 2. Overlay de carga para la sincronización masiva */}
      {cargandoAuditoria && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500 mb-4"></div>
          <p className="text-slate-900 font-black text-xl animate-pulse">Sincronizando Base de Datos PRO...</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* 3. Cabecera y Barra de Búsqueda */}
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-4xl font-black text-slate-900">Vademécum <span className="text-emerald-500">PRO</span></h1>
            
            {/* Botones exclusivos para Admin */}
            {isAdmin && (
              <div className="flex gap-3">
                <button onClick={handleCargaMasivaYPurga} className="bg-slate-900 hover:bg-slate-800 transition-colors text-white px-6 py-3 rounded-full font-black text-sm shadow-md">🚀 Sync Bloque G</button>
                <button onClick={toggleAuditoria} className="bg-emerald-500 hover:bg-emerald-400 transition-colors text-white px-6 py-3 rounded-full font-black text-sm shadow-md">{modoAuditoria ? "❌ Cerrar" : "⚡ Ver Todo"}</button>
              </div>
            )}
          </div>
          
          {/* Formulario de búsqueda (se oculta si está en modo auditoría) */}
          {!modoAuditoria && (
            <form onSubmit={handleBuscar} className="flex gap-3">
              <input 
                type="text" 
                value={busqueda} 
                onChange={(e) => {setBusqueda(e.target.value); setBuscado(false);}} 
                placeholder="Buscar por fármaco, categoría o acción..." 
                className="flex-1 border-2 rounded-2xl p-4 text-lg outline-none focus:border-emerald-500 transition-colors shadow-sm" 
              />
              <button type="submit" className="bg-slate-900 text-white font-black px-10 rounded-2xl hover:bg-emerald-600 transition-all shadow-md">Buscar 🔍</button>
            </form>
          )}
        </div>
        
        {/* 4. Listado de Resultados o Listado Completo (Auditoría) */}
        <div className="space-y-8">
          {modoAuditoria 
            ? todosMedicamentos.map(renderTarjetaMedicamento) 
            : resultados.map(renderTarjetaMedicamento)
          }
        </div>
        
        {/* 5. Banner publicitario o de cierre al final de la página */}
        <div className="mt-8">
          <BannerVenta />
        </div>
      </div>
    </div>
  );
}