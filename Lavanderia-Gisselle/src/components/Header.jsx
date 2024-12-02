const Header = () => {
  return (
    <header className="bg-pink-400 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">MiLogo</a>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-4">
          <a href="#inicio" className="hover:text-gray-400">Inicio</a>
          <a href="#servicios" className="hover:text-gray-400">Servicios</a>
          <a href="#nosotros" className="hover:text-gray-400">Nosotros</a>
          <a href="#contacto" className="hover:text-gray-400">Contacto</a>
        </nav>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button className="text-gray-400 hover:text-white">
            {/* Puedes usar un ícono aquí, como react-icons */}
            <span>☰</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
