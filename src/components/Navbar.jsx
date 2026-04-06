import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 font-body sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Nombre de la Marca */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-title text-2xl md:text-3xl font-bold text-brand-title hover:text-brand-subtitle transition-colors duration-300">
              MM Propiedades
            </Link>
          </div>

          {/* Menú de Escritorio (Oculto en móviles) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-brand-text hover:text-brand-subtitle font-semibold transition-colors duration-200">
              Inicio
            </Link>
            <Link to="/nosotros" className="text-brand-text hover:text-brand-subtitle font-semibold transition-colors duration-200">
              Nosotros
            </Link>
            <Link to="/servicios" className="text-brand-text hover:text-brand-subtitle font-semibold transition-colors duration-200">
              Servicios
            </Link>
            <Link to="/propiedades" className="text-brand-text hover:text-brand-subtitle font-semibold transition-colors duration-200">
              Propiedades
            </Link>
            <Link to="/contacto" className="text-brand-text hover:text-brand-subtitle font-semibold transition-colors duration-200">
              Contacto
            </Link>
            
          </div>

          {/* Botón de Menú Móvil (Hamburguesa) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-subtitle hover:text-brand-title focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-brand-light border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-brand-text hover:text-brand-subtitle font-semibold">
              Inicio
            </Link>
            <Link to="/nosotros" onClick={() => setIsOpen(false)} className="block py-2 text-brand-text hover:text-brand-subtitle font-semibold">
              Nosotros
            </Link>
            <Link to="/servicios" onClick={() => setIsOpen(false)} className="block py-2 text-brand-text hover:text-brand-subtitle font-semibold">
              Servicios
            </Link>
            <Link to="/propiedades" onClick={() => setIsOpen(false)} className="block py-2 text-brand-text hover:text-brand-subtitle font-semibold">
              Propiedades
            </Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="block py-2 text-brand-text hover:text-brand-subtitle font-semibold">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}