import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPropiedades } from '../services/api';
import Banner from '../components/Banner';

export default function Propiedades() {
  const [propiedades, setPropiedades] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await fetchPropiedades();
      setPropiedades(datos);
      setCargando(false);
    };
    cargarDatos();
  }, []);

  return (
    <div className="w-full font-body text-brand-text">
      
      {/* Banner con los nuevos textos */}
      <Banner titulo="Catálogo" subtitulo="Encuentra tu propiedad ideal" />

      <div className="max-w-6xl mx-auto p-4 py-12"> 
        <h2 className="text-3xl font-bold font-title text-brand-title mb-10 text-center">
          Nuestras Propiedades
        </h2>
        
        {cargando ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-title mb-4"></div>
            <p className="text-xl text-gray-500 animate-pulse">Buscando las mejores opciones...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {propiedades.length > 0 ? (
              propiedades.map((prop) => (
                <div key={prop.ID} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                  
                  {/* Contenedor de Imagen con Badge de Operación */}
                  <div className="relative h-64">
                    <img 
                      src={prop.IMAGEN_PRINCIPAL || 'https://via.placeholder.com/400x300?text=Sin+Imagen'} 
                      alt={prop.TITULO} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                      {prop.OPERACION}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-title text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {prop.TIPO}
                    </div>
                  </div>

                  {/* Detalles de la Propiedad */}
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

                    {/* Características: Habitaciones, Baños, Metros */}
                    <div className="flex justify-between items-center text-gray-600 border-t pt-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span title="Habitaciones">🛏️</span>
                        <span className="font-semibold">{prop.HABITACIONES}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span title="Baños">🚿</span>
                        <span className="font-semibold">{prop.BANOS}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span title="Metros Cuadrados">📏</span>
                        <span className="font-semibold">{prop.METROS} m²</span>
                      </div>
                    </div>
                  </div>

                  {/* Botón de Acción */}
                  <div className="p-4 bg-gray-50 border-t">
                    <Link 
                      to={`/propiedad/${prop.ID}`}
                      className="block w-full text-center bg-brand-title bg-slate-800 text-white py-2 rounded font-semibold hover:bg-slate-700 transition"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">No encontramos propiedades disponibles en este momento.</p>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}