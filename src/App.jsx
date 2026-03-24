import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-light flex flex-col">
        <Navbar />

        {/* Quitamos el padding global para que el banner ocupe todo el ancho */}
        <main className="flex-grow flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/propiedades" element={<Catalogo />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;