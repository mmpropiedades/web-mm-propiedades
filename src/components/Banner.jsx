export default function Banner({ titulo, subtitulo, isHome = false }) {
  const bgImage = "/Images/Banner.png";
  
  // Definimos la proporción según el dispositivo:
  // - Móvil: Proporción más cerrada (aspect-[4/3] o similar)
  // - Tablet/PC: Proporción panorámica (aspect-video o 21/9)
  const responsiveAspect = isHome 
    ? "aspect-[16/9] md:aspect-[21/9] lg:h-[60vh]" 
    : "aspect-[21/9] md:h-[35vh]";

  return (
    <section className={`relative w-full overflow-hidden bg-gray-900 ${responsiveAspect}`}>
      <img 
        src={bgImage} 
        alt="Banner Inmobiliaria" 
        // Usamos object-contain en pantallas muy críticas y cover en las demás
        // pero con el aspect-ratio ya no se debería cortar casi nada.
        className="absolute inset-0 w-full h-full object-cover md:object-center opacity-100"
      />
    </section>
  );
}