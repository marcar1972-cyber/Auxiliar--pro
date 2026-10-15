// ============================================================================
// COMPONENTE: ModuleFeedbackModal.jsx
// DESCRIPCIÓN: Pop-up express de satisfacción (NPS) al aprobar un módulo.
// DEPENDENCIAS DIRECTAS DE CÓDIGO:
//   - Requiere 'firebase/firestore' (db) desde "../firebase/config".
//   - Requiere la colección 'feedback_modules' en Firestore.
//   - Se invoca dentro del componente de Quiz/Evaluación (ej: app/quiz/pro/[id]/page.jsx).
//   - Recibe props: 
//       * isOpen (boolean): Controla la visibilidad.
//       * onClose (function): Callback al cerrar o redirigir al Campus.
//       * moduleId (string): ID del módulo evaluado (ej: "mod-1", "pro-eval-1").
//       * userId (string): UID de Firebase del usuario actual.
//       * userEmail (string): Email del usuario actual.
// ============================================================================

"use client";

import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Star, MessageSquare, Send, X, Loader2, Sparkles } from "lucide-react";

export default function ModuleFeedbackModal({ isOpen, onClose, moduleId, userId, userEmail }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Por favor, selecciona una puntuación de 1 a 5 estrellas antes de enviar.");
      return;
    }

    setLoading(true);
    try {
      console.log("💾 Intentando guardar feedback en Firestore...", { moduleId, userId, userEmail, rating, comment });

      // Guarda la encuesta en Firestore en la colección 'feedback_modules'
      const docRef = await addDoc(collection(db, "feedback_modules"), {
        moduleId: moduleId || "desconocido",
        userId: userId || "anonimo",
        userEmail: userEmail || "sin-email",
        rating: Number(rating),
        comment: comment.trim(),
        createdAt: serverTimestamp(),
      });

      console.log("✅ Feedback guardado exitosamente con ID:", docRef.id);
      setSubmitted(true);
      
      // Redirige o cierra tras 1.5 segundos
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error("❌ Error guardando feedback en Firestore:", error);
      alert(`Error al guardar en Firestore: ${error.message}\nRevisa la pestaña Reglas en Firebase Console.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Botón discreto para omitir/saltar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-full hover:bg-slate-100"
          title="Saltar encuesta"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8 text-center">
          {!submitted ? (
            <>
              <div className="w-14 h-14 bg-emerald-100 text-[#28a745] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Sparkles size={28} />
              </div>

              <h3 className="text-2xl font-black text-[#003366] mb-2 leading-tight">
                ¡Módulo Completado!
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                ¿Qué tal te pareció el material y las preguntas de este módulo? Tu opinión mejora AuxiliarPro.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Selección de Estrellas (1-5) */}
                <div className="flex justify-center items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform hover:scale-110 focus:outline-none"
                    >
                      <Star
                        size={32}
                        className={`${
                          (hoverRating || rating) >= star
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>

                {/* 2. Campo Opcional de Comentario */}
                <div className="text-left">
                  <label className="text-xs font-bold text-slate-500 mb-1.5 flex items-center gap-1">
                    <MessageSquare size={14} /> ¿Algún comentario o sugerencia? (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Ej: Las explicaciones estuvieron súper claras..."
                    className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] resize-none text-slate-700 bg-slate-50/50"
                  />
                </div>

                {/* 3. Acciones */}
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={rating === 0 || loading}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                      rating > 0 && !loading
                        ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer"
                        : "bg-slate-300 cursor-not-allowed"
                    }`}
                  >
                    {loading ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> Enviar y Volver al Campus
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="text-xs text-slate-400 hover:text-slate-600 py-2 transition-colors font-medium"
                  >
                    Saltar por ahora
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-[#28a745] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} />
              </div>
              <h4 className="text-2xl font-black text-[#003366] mb-2">¡Muchas Gracias!</h4>
              <p className="text-slate-500 text-sm">
                Guardamos tu respuesta. Redirigiendo al campus...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}