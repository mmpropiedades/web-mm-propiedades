export default function Banner({ titulo, subtitulo, isHome = false }) {
  const bgImage = "/Images/Banner.png";
  
  // Ajustamos las alturas: más pequeñas en móvil (h-[25vh]) y normales en desktop (md:h-[60vh])
  const heightClass = isHome 
    ? "h-[25vh] min-h-[180px] md:h-[60vh] md:min-h-[400px]" 
    : "h-[20vh] min-h-[150px] md:h-[35vh] md:min-h-[250px]";

  return (
    <section className={`relative w-full flex items-center justify-center bg-gray-900 ${heightClass}`}>
      <img 
        src={bgImage} 
        alt="Banner Inmobiliaria" 
        // En móviles usamos 'object-contain' para no cortar el texto
        // En tablets hacia arriba (md:) usamos 'object-cover' para estética
        className="absolute inset-0 w-full h-full object-contain md:object-cover opacity-100"
      />
    </section>
  );
}