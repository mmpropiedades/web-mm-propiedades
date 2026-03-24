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

      {/* 3. CATEGORÍAS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&q=80" alt="Apartamentos" className="w-full h-64 object-cover mb-4 rounded shadow-sm hover:shadow-md transition-shadow" />
            <h3 className="text-2xl font-title text-brand-subtitle font-bold">Apartamentos</h3>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=500&q=80" alt="Casas" className="w-full h-64 object-cover mb-4 rounded shadow-sm hover:shadow-md transition-shadow" />
            <h3 className="text-2xl font-title text-brand-subtitle font-bold">Casas</h3>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=500&q=80" alt="Locales" className="w-full h-64 object-cover mb-4 rounded shadow-sm hover:shadow-md transition-shadow" />
            <h3 className="text-2xl font-title text-brand-subtitle font-bold">Locales</h3>
          </div>
        </div>
      </section>

      {/* 4. CARRUSEL DESTACADAS (Estructura base) */}
      <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner mb-6">
          <p className="text-gray-500 font-title">Aquí irá el Carrusel (Lógica React pendiente)</p>
        </div>
        <h3 className="text-2xl font-title text-brand-subtitle font-bold">Propiedades Destacadas</h3>
      </section>

    </div>
  );
}