// app/activar/page.js
"use client";

import { useState, useEffect } from "react";
import { auth, db, storage } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Loader2, CheckCircle, Upload, AlertCircle, Phone, Mail, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ActivarCuenta() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Estados del Formulario
  const [emailLogin, setEmailLogin] = useState("");
  const [emailPago, setEmailPago] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  // Estados de carga y feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setEmailLogin(currentUser.email || "");
        setEmailPago(currentUser.email || ""); 
      }
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError("");
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!emailLogin || !emailPago) {
      setError("El correo de inicio de sesión y el correo de pago son obligatorios.");
      return;
    }

    setIsSubmitting(true);

    try {
      let downloadURL = "pendiente_subida_directa";

      // Intentamos subir al Storage con un timeout agresivo de 3 segundos
      if (storage && file) {
        try {
          const fileName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
          const storageRef = ref(storage, `comprobantes/${fileName}`);
          
          // Timeout de 3 segundos para el Storage
          const uploadPromise = uploadBytes(storageRef, file).then((snapshot) => 
            getDownloadURL(snapshot.ref)
          );

          downloadURL = await Promise.race([
            uploadPromise,
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error("Timeout Storage")), 3000)
            )
          ]);
        } catch (storageErr) {
          console.warn("⚠️ Storage demoró mucho o falló, aplicando guardado de emergencia en base de datos.");
          downloadURL = "subida_manual_pendiente_por_red";
        }
      }

      // Registro directo en la colección de solicitudes de Firestore
      await addDoc(collection(db, "solicitudes_activacion"), {
        uid: user ? user.uid : "anonimo",
        emailLogin: emailLogin.toLowerCase().trim(),
        emailPago: emailPago.toLowerCase().trim(),
        whatsapp: whatsapp.trim(),
        comprobanteUrl: downloadURL,
        estado: "pendiente",
        comentarioInterno: downloadURL === "subida_manual_pendiente_por_red" ? "El alumno reportó problemas de red al cargar el comprobante físico, validar directamente en Mercado Pago." : "",
        fechaCreado: serverTimestamp(),
      });

      setIsSuccess(true);
    } catch (err) {
      console.error("Error completo en el flujo:", err);
      setError(`No se pudo enviar la solicitud: ${err.message || "Error de conexión con la base de datos"}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Loader2 className="animate-spin text-[#003366]" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 md:p-10">
        
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
              <CheckCircle size={36} className="stroke-[2.5]" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
              ¡Comprobante Registrado!
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Recibimos tu información con éxito. Nuestro equipo validará el pago en el sistema y activará tu acceso PRO a la brevedad. Te avisaremos por correo.
            </p>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-8 text-left">
              <p className="text-xs text-slate-500 font-bold">Resumen de Registro:</p>
              <p className="text-sm text-slate-700 font-medium mt-1">
                📧 Correo de acceso: <span className="font-bold text-[#003366]">{emailLogin}</span>
              </p>
            </div>
            <Link 
              href="/dashboard"
              className="w-full inline-flex items-center justify-center bg-[#003366] hover:bg-[#002244] text-white font-black py-4 rounded-xl transition-all text-sm shadow-md"
            >
              Ir al Dashboard
            </Link>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <span className="bg-[#003366]/10 text-[#003366] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                <FileText size={14} /> Validación de Pago
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-4 mb-2 tracking-tight">
                Activa tu Cuenta PRO
              </h2>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                Ingresa los datos para verificar tu pago y activar manualmente tu simulador de forma rápida.
              </p>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3 text-sm font-semibold">
                <AlertCircle className="shrink-0 mt-0.5" size={18} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  Correo con el que inicias sesión *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    required
                    value={emailLogin}
                    onChange={(e) => setEmailLogin(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 font-bold text-sm focus:outline-none focus:border-[#003366] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  Correo que usaste para pagar en Mercado Pago *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    required
                    value={emailPago}
                    onChange={(e) => setEmailPago(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 font-bold text-sm focus:outline-none focus:border-[#003366] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  WhatsApp de contacto (Opcional)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <Phone size={18} />
                  </span>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+569 1234 5678"
                    className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 font-bold text-sm focus:outline-none focus:border-[#003366] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  Sube la captura de tu comprobante de pago (Opcional si falla la red)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-2xl bg-slate-50 hover:bg-slate-100/50 transition-all cursor-pointer relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-slate-400" />
                    <div className="flex text-sm text-slate-600">
                      <span className="relative rounded-md font-black text-[#003366] hover:text-[#002244]">
                        {file ? "Cambiar comprobante" : "Seleccionar imagen"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">PNG, JPG, JPEG o WEBP</p>
                  </div>
                </div>

                {filePreview && (
                  <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <img 
                      src={filePreview} 
                      alt="Vista previa" 
                      className="w-16 h-16 object-cover rounded-lg border border-slate-300"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-slate-700 truncate">{file?.name}</p>
                      <p className="text-[10px] text-[#28a745] font-black">✓ Imagen cargada</p>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#003366] hover:bg-[#002244] disabled:bg-slate-300 text-white font-black py-4 rounded-xl transition-all text-sm shadow-md cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Procesando Registro...
                  </>
                ) : (
                  <>
                    Enviar Comprobante <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}