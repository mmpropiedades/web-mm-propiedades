import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

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
          <h4 className="font-title font-bold text-2xl">MM Propiedades</h4>
          <p className="text-sm opacity-80 leading-relaxed">
            Calidad y Experiencia en el mercado inmobiliario venezolano.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="space-y-4">
          <h4 className="font-title font-bold text-xl uppercase tracking-wider">Contacto</h4>
          <div className="flex flex-col space-y-3">
            <a href="mailto:contactanos@mm-propiedades.net" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#00cd9c] transition-colors text-sm">
              <Mail size={18} /> contactanos@mm-propiedades.net
            </a>
            <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#00cd9c] transition-colors text-sm">
              <Phone size={18} /> +58 422 323 81 12
            </a>
          </div>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="space-y-4">
          <h4 className="font-title font-bold text-xl uppercase tracking-wider">Síguenos</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href={urlInstagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#00cd9c] transform hover:scale-110 transition-all" title="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[#00cd9c] transform hover:scale-110 transition-all opacity-50" title="Facebook">
              <Facebook size={24} />
            </a>
            <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:text-[#00cd9c] transform hover:scale-110 transition-all" title="WhatsApp">
              {/* Usamos el SVG de WhatsApp para mantener el look oficial */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="mt-10 text-center text-xs opacity-60 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} BM Consultores. Todos los derechos reservados.
      </div>
    </footer>
  );
}