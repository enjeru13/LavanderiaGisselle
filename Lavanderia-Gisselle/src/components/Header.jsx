import { useState } from "react";
import logo from "../images/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-pink-400 font-OpenSans border-b-2 border-pink-400">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo de la lavandería"
              className="h-[75px] w-[200px]"
            />
          </a>
        </div>

        {/* Navegación en pantallas grandes */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Otros enlaces centrados */}
          <nav className="flex space-x-8 mx-auto text-2xl">
            <a href="#servicios" className="hover:text-pink-600">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-pink-600">
              Nosotros
            </a>
          </nav>

          {/* Contacto alineado a la derecha */}
          <a
            href="#contacto"
            className="hover:text-pink-600 mr-4 text-2xl"
          >
            Contacto
          </a>
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-pink-400 hover:text-pink-600"
          >
            <span className="text-3xl px-4">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="bg-white md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#servicios" className="hover:text-pink-600">
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-pink-600">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-pink-600">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
