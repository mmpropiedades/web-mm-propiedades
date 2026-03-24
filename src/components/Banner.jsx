export default function Banner({ titulo, subtitulo, isHome = false }) {
  // Aquí va la URL de tu imagen de la montaña (o ciudad de Bello/Medellín)
  const bgImage = "/Images/Banner.png";
  
  // Si es la página de inicio, el banner es más alto
  const heightClass = isHome ? "h-[60vh] min-h-[400px]" : "h-[35vh] min-h-[250px]";

  return (
    <section className={`relative w-full flex items-center justify-center bg-gray-900 ${heightClass}`}>
      <img 
        src={bgImage} 
        alt="Banner Inmobiliaria" 
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />

    </section>
  );
}