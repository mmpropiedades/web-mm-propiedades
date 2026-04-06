export default function Footer() {
  // Configuración de WhatsApp (igual que el botón flotante)
  const telefono = "584223238112";
  const mensajeWA = encodeURIComponent("¡Hola MM Propiedades! Vengo de la web y me interesa recibir información sobre sus servicios.");
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeWA}`;

  // URL de Instagram (Asegúrate de cambiar 'TU_USUARIO' por el real)
  const urlInstagram = "https://www.instagram.com/mm.propiedades_vzla/"; 

  return (
    <footer className="bg-[#218491] text-white py-8 mt-auto font-body">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h4 className="font-title font-bold text-xl mb-4">MM Propiedades</h4>
          <p className="text-sm opacity-90">Calidad y Experiencia en el mercado inmobiliario.</p>
        </div>

        <div>
          <h4 className="font-title font-bold text-xl mb-4">Contacto</h4>
          <p className="text-sm opacity-90 flex items-center justify-center md:justify-start gap-2 mb-2">
            📧 <a href="mailto:contactanos@mm-propiedades.net" className="hover:underline">contactanos@mm-propiedades.net</a>
          </p>
          <p className="text-sm opacity-90 flex items-center justify-center md:justify-start gap-2">
            📞 <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:underline">+58 422 323 81 12</a>
          </p>
        </div>

        <div>
          <h4 className="font-title font-bold text-xl mb-4">Síguenos</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a 
              href={urlInstagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm hover:text-[#00cd9c] transition-colors font-semibold"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-sm hover:text-[#00cd9c] transition-colors font-semibold opacity-50 cursor-not-allowed"
            >
              Facebook
            </a>
             {/* Pendiente link Facebook */}

            <a 
              href={urlWhatsApp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm hover:text-[#00cd9c] transition-colors font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
      <div className="mt-8 text-center text-sm opacity-75 border-t border-white/20 pt-4">
        © 2026 BM Consultores. Todos los derechos reservados.
      </div>
    </footer>
  );
}