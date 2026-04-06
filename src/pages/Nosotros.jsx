import Banner from '../components/Banner';

export default function Nosotros() {
  return (
    <div className="w-full font-body text-brand-text">
        <Banner titulo="Nosotros" subtitulo="Conoce a nuestro equipo" />
      
      {/* 1. SECCIÓN INTRODUCCIÓN */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold font-title text-brand-title text-center mb-12">
          Experiencia local, transparencia total
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <img 
            src="/Images/Equipo2.jpg" 
            alt="Equipo MM Propiedades" 
            className="w-full rounded shadow-md object-cover"
          />
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              En <strong className="text-black">MM Propiedades</strong>, nacimos con la visión de profesionalizar el sector inmobiliario en nuestra región. Entendemos los retos y las oportunidades de vivir y emprender en Venezuela, por eso basamos nuestro trabajo en la honestidad y el respeto por el patrimonio de nuestros clientes. Nuestra misión es facilitar soluciones inmobiliarias eficientes, mientras que nuestra visión es ser la referencia de confianza para cada familia venezolana.
            </p>
            <div>
              <h3 className="font-bold text-lg mb-3">¿Por qué elegirnos?</h3>
              <p className="mb-4 text-gray-700">Sabemos que tienes opciones, pero aquí te damos razones para confiar en nosotros:</p>
              <ul className="list-disc pl-5 text-justify space-y-2 text-gray-700">
                <li><strong>Conocimiento local:</strong> Entendemos el movimiento de cada zona y sector.</li>
                <li><strong>Transparencia:</strong> Te hablamos claro sobre los costos, trámites y tiempos de espera.</li>
                <li><strong>Asesoría integral:</strong> No solo vendemos, te asesoramos en la gestión de documentos y negociación.</li>
                <li><strong>Trato equitativo:</strong> Atendemos con la misma excelencia a quien busca una habitación que a quien invierte en una quinta.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN EQUIPO */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold font-title text-brand-title text-center mb-12">
          Conoce a nuestro equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Lda. Maritza */}
          <div>
            <img src="/Images/Mujer 1.jpeg" alt="Lda. Maritza Mite" className="w-full aspect-[4/5] object-cover object-top rounded shadow mb-6" />
            <h3 className="text-2xl font-title text-brand-subtitle font-bold mb-1">Lda. Maritza Mite</h3>
            <p className="text-gray-800">CEO</p>
          </div>
          {/* Dra. María Isabel */}
          <div>
            <img src="/Images/Mujer 2.jpeg" alt="Dra. María Isabel Mite" className="w-full aspect-[4/5] object-cover rounded shadow mb-6" />
            <h3 className="text-2xl font-title text-brand-subtitle font-bold mb-1">Dra. María Isabel Mite</h3>
            <p className="text-gray-800">Asesoría Legal</p>
          </div>
          {/* Victoria Bustamante */}
          <div>
            <img src="/Images/Mujer 3.jpeg" alt="Victoria Bustamante" className="w-full aspect-[4/5] object-cover object-top rounded shadow mb-6" />
            <h3 className="text-2xl font-title text-brand-subtitle font-bold mb-1">Victoria Bustamante</h3>
            <p className="text-gray-800">Agente inmobiliaria</p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN MISIÓN, VISIÓN, VALORES */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Misión */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-title to-brand-subtitle flex items-center justify-center shadow-lg mb-8 transform hover:scale-105 transition-transform">
              <span className="text-white text-3xl font-title font-bold">Misión</span>
            </div>
            <p className="text-brand-subtitle text-justify text-base leading-relaxed px-2">
              Nuestra misión es transformar la experiencia de compra, venta y alquiler de inmuebles a través de un servicio personalizado basado en la transparencia y el conocimiento profundo del mercado. Nos comprometemos a acompañar a nuestros clientes en cada paso, brindando seguridad técnica y legal para asegurar que cada propiedad se convierta en el hogar o la inversión ideal.
            </p>
          </div>

          {/* Visión */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-title to-brand-subtitle flex items-center justify-center shadow-lg mb-8 transform hover:scale-105 transition-transform">
              <span className="text-white text-3xl font-title font-bold">Visión</span>
            </div>
            <p className="text-brand-subtitle text-justify text-base leading-relaxed px-2">
              Ser reconocidos como la inmobiliaria líder en confianza y eficiencia, destacando por nuestra capacidad de adaptarnos a las nuevas tendencias del mercado sin perder la esencia del trato humano. Aspiramos a expandir nuestra huella en el sector, siendo el referente de calidad y excelencia operativa para familias e inversionistas.
            </p>
          </div>

          {/* Valores */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-title to-brand-subtitle flex items-center justify-center shadow-lg mb-8 transform hover:scale-105 transition-transform">
              <span className="text-white text-3xl font-title font-bold">Valores</span>
            </div>
            <ul className="text-brand-subtitle text-base space-y-3 w-full pl-8 list-square marker:text-brand-title">
              <li> - Experiencia</li>
              <li> - Profesionalismo</li>
              <li> - Honestidad</li>
              <li> - Calidad</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}