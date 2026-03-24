export default function Footer() {
  return (
    <footer className="bg-[#218491] text-white py-8 mt-auto font-body">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h4 className="font-title font-bold text-xl mb-4">MM Propiedades</h4>
          <p className="text-sm opacity-90">Calidad y Experiencia en el mercado inmobiliario.</p>
        </div>

        <div>
          <h4 className="font-title font-bold text-xl mb-4">Contacto</h4>
          <p className="text-sm opacity-90">📧 contactanos@mm-propiedades.net</p>
          <p className="text-sm opacity-90">📞 +58 422 323 81 12</p>
        </div>

        <div>
          <h4 className="font-title font-bold text-xl mb-4">Síguenos</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <span className="cursor-pointer hover:text-[#00cd9c]">Instagram</span>
            <span className="cursor-pointer hover:text-[#00cd9c]">Facebook</span>
            <span className="cursor-pointer hover:text-[#00cd9c]">WhatsApp</span>
          </div>
        </div>

      </div>
      <div className="mt-8 text-center text-sm opacity-75 border-t border-white/20 pt-4">
        © 2026 BM Consultores. Todos los derechos reservados.
      </div>
    </footer>
  );
}