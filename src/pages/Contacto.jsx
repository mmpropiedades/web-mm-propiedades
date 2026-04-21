import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeSlider from '../components/HomeSlider'; 

export default function Contacto() {
  const location = useLocation();
  
  const [formData, setFormData] = useState({ 
    nombre: '', 
    email: '', 
    telefono: '', 
    interes: 'General', 
    mensaje: '' 
  });
  
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Detectar si venimos de un botón específico de Servicios
  useEffect(() => {
    if (location.state?.tipo) {
      setFormData(prev => ({ ...prev, interes: location.state.tipo }));
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzwuKBiNnVqUpFkhmSmC9LKOUwtOqBd4F4noRd7YVdk6z3RurKlzBTLdQ65DTMEcs-B/exec", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ action: 'sendContact', ...formData })
      });
      
      setEnviado(true);
      setFormData({ nombre: '', email: '', telefono: '', interes: 'General', mensaje: '' });
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="w-full font-body text-brand-text">
      <HomeSlider titulo="Contacto" subtitulo="Estamos para asesorarte" />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Info de Contacto */}
          <div>
            <h2 className="text-3xl font-bold font-title text-brand-title mb-6">Hablemos</h2>
            <p className="text-gray-600 mb-8 text-justify">
              ¿Tienes dudas sobre un trámite legal, quieres vender tu propiedad o buscas un lugar para alquilar? 
              Déjanos tus datos y un asesor experto te contactará a la brevedad.
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-2">📍 <span className="font-semibold">Ubicación:</span> La Castellana, Miranda</p>
              <p className="flex items-center gap-2">📞 <span className="font-semibold">Teléfono:</span> +58 422 323 81 12</p>
              <p className="flex items-center gap-2">📧 <span className="font-semibold">Email:</span> contactanos@mm-propiedades.net</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold font-title text-brand-title mb-2">¡Recibido!</h3>
                <p className="text-gray-600">Hemos enviado una confirmación a tu correo. Pronto te llamaremos.</p>
                <button 
                  onClick={() => setEnviado(false)} 
                  className="mt-6 text-brand-subtitle font-bold underline hover:text-brand-title"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Selector de Interés */}
                <div>
                  <label className="block text-sm font-bold mb-1">Me interesa: *</label>
                  <select 
                    required
                    value={formData.interes}
                    onChange={(e) => setFormData({...formData, interes: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-brand-subtitle outline-none bg-white"
                  >
                    <option value="General">Consulta General</option>
                    <option value="Vender">Vender / Alquilar mi propiedad</option>
                    <option value="Comprar">Comprar / Alquilar propiedad</option>
                    <option value="Legal">Asesoría Legal / Documentación</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1">Nombre Completo *</label>
                  <input required type="text" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} className="w-full p-3 rounded-lg border border-gray-200 focus:border-brand-subtitle outline-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">Correo Electrónico *</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 rounded-lg border border-gray-200 focus:border-brand-subtitle outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Teléfono *</label>
                    <input required type="tel" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} className="w-full p-3 rounded-lg border border-gray-200 focus:border-brand-subtitle outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1">Mensaje</label>
                  <textarea rows="4" value={formData.mensaje} onChange={(e) => setFormData({...formData, mensaje: e.target.value})} className="w-full p-3 rounded-lg border border-gray-200 focus:border-brand-subtitle outline-none"></textarea>
                </div>

                <button 
                  disabled={enviando}
                  className="w-full bg-brand-subtitle hover:bg-brand-title text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 shadow-md hover:shadow-lg"
                >
                  {enviando ? "Procesando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}