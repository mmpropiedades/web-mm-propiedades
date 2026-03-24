import { useEffect, useState } from 'react';
import { fetchPropiedades } from '../services/api';
import Banner from '../components/Banner';

export default function Catalogo() {
  const [propiedades, setPropiedades] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      console.log("Llamando a la API de Google...");
      const datos = await fetchPropiedades();
      console.log("Datos recibidos:", datos);
      setPropiedades(datos);
      setCargando(false);
    };

    cargarDatos();
  }, []);

return (
    <div className="w-full font-body text-brand-text"> {/* <-- PASO 1: Quitamos el max-w de aquí */}
      
      {/* El Banner ahora puede respirar y ocupar todo el ancho */}
      <Banner titulo="Catálogo" subtitulo="Encuentra tu propiedad ideal" />

      {/* PASO 2: Creamos una "caja" nueva solo para el contenido de abajo */}
      <div className="max-w-6xl mx-auto p-4 py-12"> 
        <h2 className="text-3xl font-bold font-title text-brand-title mb-6 text-center">
          Nuestras Propiedades
        </h2>
        
        {cargando ? (
          <p className="text-xl text-gray-500 animate-pulse text-center">Cargando...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* ... tu mapeo de propiedades aquí igual ... */}
          </div>
        )}
      </div>
    </div>
  );
}