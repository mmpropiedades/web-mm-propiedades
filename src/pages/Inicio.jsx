import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { fetchPropiedades } from '../services/api'; // Importamos tu servicio

export default function Inicio() {
  const [propiedades, setPropiedades] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. Cargar los datos de la API
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPropiedades();
      // Tomamos las últimas 5 o las que consideres "Destacadas"
      setPropiedades(data.slice(0, 5));
      setLoading(false);
    };
    loadData();
  }, []);

  // 2. Lógica de rotación automática (cada 5 segundos)
  useEffect(() => {
    if (propiedades.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % propiedades.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [propiedades]);

  return (
    <div className="w-full font-body text-brand-text">
      
      {/* 1. BANNER (INTACTO) */}
      <Banner isHome={true} subtitulo="Calidad y Experiencia" />
    
      {/* 2. SECCIÓN NOSOTROS */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/Images/Equipo1.jpg" 
            alt="Equipo MM Propiedades" 
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-4xl text-justify font-bold font-title text-brand-title leading-tight mb-6">
            Expertos en convertir tus planes inmobiliarios en realidad
          </h2>
          <p className="text-gray-700 text-justify mb-4 text-lg">
            Sabemos que moverte de casa o invertir en un local es un paso importante. En <strong className="text-black">MM Propiedades</strong>, te ofrecemos la seguridad y el conocimiento del mercado local que necesitas para tomar la mejor decisión.
          </p>
          <ul className="list-disc pl-5 text-justify space-y-2 text-gray-700">
            <li><strong>Seguridad jurídica:</strong> Revisamos cada detalle.</li>
            <li><strong>Precios reales:</strong> Valoración según el mercado.</li>
            <li><strong>Atención humana:</strong> Escuchamos lo que buscas.</li>
          </ul>
        </div>
      </section>

      {/* 3. CATEGORÍAS */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-title font-bold text-brand-title text-center mb-10">Explora nuestras categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {/* ... (Tus categorías se mantienen igual) ... */}
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&q=80" alt="Apartamentos" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Apartamentos</h3>
          </div>
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=500&q=80" alt="Casas" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Casas</h3>
          </div>
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=500&q=80" alt="Locales" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Locales</h3>
          </div>
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&w=500&q=80" alt="Bodegas" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Bodegas</h3>
          </div>
          <div className="group cursor-pointer">
            <img src="https://inmobiliariasencolombia.com/wp-content/uploads/2023/08/proyectos-inmobiliarios-b-ID-01.webp" alt="Proyectos" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Proyectos</h3>
          </div>
        </div>
      </section>

      {/* 4. CARRUSEL DESTACADAS (LOGICA APLICADA) */}
      <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
        <div className="relative w-full h-96 bg-gray-200 overflow-hidden rounded-lg shadow-lg mb-6">
          
          {loading ? (
            <div className="flex items-center justify-center h-full">
               <p className="text-gray-500 font-title animate-pulse">Cargando propiedades...</p>
            </div>
          ) : propiedades.length > 0 ? (
            propiedades.map((prop, index) => (
              <div
                key={prop.ID}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img 
                  src={prop.IMAGEN_PRINCIPAL} 
                  alt={prop.TITULO} 
                  className="w-full h-full object-cover" 
                />
                {/* Info Overlay */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h4 className="text-2xl font-bold font-title">{prop.TITULO}</h4>
                  <p className="text-lg">{prop.UBICACIÓN} </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No hay propiedades activas para mostrar.
            </div>
          )}

        </div>
        <h3 className="text-3xl font-title font-bold text-brand-title text-center mb-10">Propiedades Destacadas</h3>
      </section>

    </div>
  );
}