import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

export default function Inicio() {
  return (
    <div className="w-full font-body text-brand-text">
      
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
            Sabemos que moverte de casa o invertir en un local es un paso importante. En <strong className="text-black">MM Propiedades</strong>, te ofrecemos la seguridad y el conocimiento del mercado local que necesitas para tomar la mejor decisión. Ya sea que busques tu primer apartamento, desees vender tu casa o necesites un local para tu negocio, estamos contigo de principio a fin.
          </p>
          <ul className="list-disc pl-5 text-justify space-y-2 text-gray-700">
            <li><strong>Seguridad jurídica:</strong> Revisamos cada detalle para que tu operación sea legal y tranquila.</li>
            <li><strong>Precios reales:</strong> Te ayudamos a valorar tu propiedad según la realidad del mercado actual.</li>
            <li><strong>Atención humana:</strong> No eres un número más; escuchamos lo que realmente buscas.</li>
          </ul>
        </div>
      </section>

      {/* 3. CATEGORÍAS ACTUALIZADAS (5 categorías) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-title font-bold text-brand-title text-center mb-10">Explora nuestras categorías</h2>
        
        {/* Ajustamos el grid a 5 columnas en pantallas grandes (lg:grid-cols-5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          
          {/* Apartamentos */}
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&q=80" alt="Apartamentos" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Apartamentos</h3>
          </div>

          {/* Casas */}
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=500&q=80" alt="Casas" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Casas</h3>
          </div>

          {/* Locales */}
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=500&q=80" alt="Locales" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Locales</h3>
          </div>

          {/* Bodegas (Nueva) */}
          <div className="group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&w=500&q=80" alt="Bodegas y Galpones" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Bodegas</h3>
          </div>

          {/* Proyectos (Nueva) */}
          <div className="group cursor-pointer">
            <img src="https://inmobiliariasencolombia.com/wp-content/uploads/2023/08/proyectos-inmobiliarios-b-ID-01.webp" alt="Proyectos Inmobiliarios" className="w-full h-56 object-cover mb-4 rounded shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1" />
            <h3 className="text-xl font-title text-brand-subtitle font-bold">Proyectos</h3>
          </div>

        </div>
      </section>

      {/* 4. CARRUSEL DESTACADAS */}
      <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner mb-6">
          <p className="text-gray-500 font-title">Aquí irá el Carrusel (Lógica React pendiente)</p>
        </div>
        <h3 className="text-3xl font-title font-bold text-brand-title text-center mb-10">Propiedades Destacadas</h3>
      </section>

    </div>
  );
}