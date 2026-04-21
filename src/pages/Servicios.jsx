import HomeSlider from '../components/HomeSlider'; 
import { useNavigate } from 'react-router-dom';

export default function Servicios() {

  const navigate = useNavigate();
  const listaServicios = [
    {
      titulo: "Para Propietarios (Venta)",
      descripcion: "Valoración comercial, plan de marketing digital y filtrado de prospectos para vender tu propiedad al mejor precio.",
      icono: "📢"
    },
    {
      titulo: "Búsqueda Personalizada",
      descripcion: "Ubicamos la casa o apartamento de tus sueños según tus necesidades y presupuesto, ahorrándote tiempo y visitas innecesarias.",
      icono: "🔍"
    },
    {
      titulo: "Gestión de Alquiler",
      descripcion: "Administramos tu inmueble, seleccionamos al inquilino ideal y gestionamos las pólizas de arrendamiento para tu tranquilidad.",
      icono: "🔑"
    },
    {
      titulo: "Asesoría para Inquilinos",
      descripcion: "Te ayudamos a encontrar tu próximo hogar, asesorándote con los requisitos legales y la firma del contrato de arrendamiento.",
      icono: "🏘️"
    },
    {
      titulo: "Respaldo Jurídico",
      descripcion: "Redacción de documentos, promesas de compraventa y estudios de títulos liderados por nuestra abogada experta.",
      icono: "⚖️"
    },
    {
      titulo: "Gestión Administrativa",
      descripcion: "Tramitología completa, solvencias y procesos notariales para que tu única preocupación sea recibir las llaves.",
      icono: "📋"
    }
  ];

  return (
    <div className="w-full font-body text-brand-text">
      <HomeSlider titulo="Servicios" subtitulo="Soluciones para Propietarios e Inquilinos" />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold font-title text-brand-title mb-4">
            Tu aliado integral en el mercado inmobiliario
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Ya sea que desees poner tu propiedad en el mercado o estés buscando tu próximo hogar o inversión, en MM Propiedades tenemos un plan para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaServicios.map((servicio, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {servicio.icono}
              </div>
              <h3 className="text-xl font-bold font-title text-brand-subtitle mb-3">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Dual */}
      <section className="bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-title text-brand-title mb-8">
            ¿Listo para dar el siguiente paso?
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
  <button 
    onClick={() => navigate('/contacto', { state: { tipo: 'Vender' } })}
    className="bg-brand-subtitle hover:bg-brand-title text-white font-bold py-3 px-8 rounded-full transition-all"
  >
    Quiero vender/arrendar mi propiedad
  </button>
  <button 
    onClick={() => navigate('/contacto', { state: { tipo: 'Comprar' } })}
    className="bg-white border-2 border-brand-subtitle text-brand-subtitle hover:bg-brand-subtitle hover:text-white font-bold py-3 px-8 rounded-full transition-all"
  >
    Estoy buscando una propiedad
  </button>
</div>
        </div>
      </section>
    </div>
  );
}