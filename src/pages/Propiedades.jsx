import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPropiedades } from '../services/api';
import Banner from '../components/Banner';

export default function Propiedades() {
  const [propiedades, setPropiedades] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      // 1. Cargar desde memoria local para respuesta instantánea
      const cache = localStorage.getItem('mm_propiedades_full');
      if (cache) {
        setPropiedades(JSON.parse(cache));
        setCargando(false);
      }

      // 2. Traer datos frescos de Google Sheets
      const datos = await fetchPropiedades();
      if (datos && datos.length > 0) {
        setPropiedades(datos);
        localStorage.setItem('mm_propiedades_full', JSON.stringify(datos));
      }
      setCargando(false);
    };
    cargarDatos();
  }, []);

  // Componente visual para la carga (Skeleton)
  const SkeletonCard = () => (
    <div className="bg-gray-100 rounded-lg h-96 animate-pulse border border-gray-200">
      <div className="h-48 bg-gray-200 rounded-t-lg"></div>
      <div className="p-4 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );

  return (
    <div className="w-full font-body text-brand-text">
      
      <Banner titulo="Catálogo" subtitulo="Encuentra tu propiedad ideal" />

      <div className="max-w-6xl mx-auto p-4 py-12"> 
        <h2 className="text-3xl font-bold font-title text-brand-title mb-10 text-center">
          Nuestras Propiedades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Si está cargando y no hay nada en caché, mostramos los Skeletons */}
          {cargando && propiedades.length === 0 ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : propiedades.length > 0 ? (
            propiedades.map((prop) => (
              <div key={prop.ID} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                
                <div className="relative h-64 bg-gray-100">
                  <img 
                    src={prop.IMAGEN_PRINCIPAL || 'https://via.placeholder.com/400x300?text=Sin+Imagen'} 
                    alt={prop.TITULO} 
                    loading="lazy" // <-- Optimización de carga
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                    {prop.OPERACION}
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold font-title text-brand-title mb-2 truncate">
                    {prop.TITULO}
                  </h3>
                  <p className="text-gray-500 flex items-center mb-4 text-sm">
                    <span className="mr-1">📍</span> {prop.UBICACIÓN}
                  </p>
                  
                  <div className="text-2xl font-bold text-blue-700 mb-4">
                    $ {Number(prop.PRECIO).toLocaleString('es-CO')}
                  </div>

                  <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                    <div className="flex items-center gap-1">
                      <span>🛏️</span>
                      <span className="font-semibold">{prop.HABITACIONES}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🚿</span>
                      <span className="font-semibold">{prop.BANOS}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📏</span>
                      <span className="font-semibold">{prop.METROS} m²</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-t mt-auto">
                  <Link 
                    to={`/propiedad/${prop.ID}`}
                    className="block w-full text-center bg-slate-800 text-white py-2 rounded font-semibold hover:bg-slate-700 transition"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg">No encontramos propiedades disponibles.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}