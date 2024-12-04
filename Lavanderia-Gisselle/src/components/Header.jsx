import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pink-400 text-white font-OpenSans">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-4xl font-bold">
          <a href="/">MiLogo</a>
        </div>

        {/* Navegación en pantallas grandes */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Otros enlaces centrados */}
          <nav className="flex space-x-4 mx-auto text-xl">
            <a href="#servicios" className="hover:text-gray-400">Servicios</a>
            <a href="#nosotros" className="hover:text-gray-400">Nosotros</a>
          </nav>

          {/* Contacto alineado a la derecha */}
          <a href="#contacto" className="hover:text-gray-400 mr-4 text-xl">Contacto</a>
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-white"
          >
            <span>{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav className="bg-pink-400 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#inicio" className="hover:text-gray-400">Inicio</a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-gray-400">Servicios</a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-gray-400">Nosotros</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-gray-400">Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
