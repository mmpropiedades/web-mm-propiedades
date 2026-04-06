import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const telefono = "584223238112";
  const mensajeWA = encodeURIComponent("¡Hola MM Propiedades! Vengo de la web...");
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeWA}`;
  const urlInstagram = "https://www.instagram.com/mm.propiedades_vzla/";

  return (
    <footer className="bg-[#218491] text-white py-10 mt-auto font-body">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Columna 1: Marca */}
        <div className="space-y-4">
          <h4 className="font-title font-bold text-2xl tracking-tight">MM Propiedades</h4>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0">
            Calidad y Experiencia en el mercado inmobiliario venezolano.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="space-y-4">
          <h4 className="font-title font-bold text-lg uppercase tracking-widest">Contacto</h4>
          <div className="flex flex-col space-y-4">
            <a href="mailto:contactanos@mm-propiedades.net" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#00cd9c] transition-all text-sm group">
              <FaEnvelope className="text-[#00cd9c] group-hover:scale-110 transition-transform" size={18} />
              contactanos@mm-propiedades.net
            </a>
            <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#00cd9c] transition-all text-sm group">
              <FaPhone className="text-[#00cd9c] group-hover:scale-110 transition-transform" size={18} />
              +58 422 323 81 12
            </a>
          </div>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="space-y-4">
          <h4 className="font-title font-bold text-lg uppercase tracking-widest">Síguenos</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href={urlInstagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#00cd9c] hover:text-white transition-all transform hover:-translate-y-1" title="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#00cd9c] hover:text-white transition-all transform hover:-translate-y-1 opacity-50 cursor-not-allowed" title="Facebook">
              <FaFacebook size={22} />
            </a>
            <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1" title="WhatsApp">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="mt-10 text-center text-[10px] uppercase tracking-[0.2em] opacity-40 border-t border-white/5 pt-8">
        © {new Date().getFullYear()} BM Consultores. Todos los derechos reservados.
      </div>
    </footer>
  );
}