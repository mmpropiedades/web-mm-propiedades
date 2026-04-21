// src/components/HomeSlider.jsx
import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, image: "/Images/Banner.png" },
  { id: 2, image: "/Images/1.png" },
  { id: 3, image: "/Images/2.png" },
  { id: 4, image: "/Images/3.png" }
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    /* AJUSTES DE TAMAÑO:
       - w-full: Ancho total.
       - h-auto: Deja que la imagen mande en la altura.
       - aspect-[21/9] o [3/1]: Crea el efecto "delgado y largo".
    */
    <div className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/1]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              /* SOLUCIÓN AL RECORTE Y OSCURIDAD:
                 - object-contain: Muestra la imagen COMPLETA (logo y contacto visibles).
                 - opacity-100: Colores vivos y originales (sin capa opaca).
              */
              className="w-full h-full object-contain opacity-100"
            />
          </div>
        ))}
      </div>

      {/* Indicadores (Bolitas) adaptados al diseño delgado */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-brand-title w-5" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}