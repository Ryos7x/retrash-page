import "./Header.css";

// Hacer un menu en el navegador responsive
// Agregar imagen propia de ReTrash
// Agregar imágenes de bell
// Consultar con Lucho que nuevos pasos realizar

function Header() {
  return (
    <header className="header">
      <img src="src/assets/logo.svg" alt="logo" className="logo" />
      <img src="src/assets/nav-menu.svg" alt="menu" className="nav-menu" />
      <nav class="navigation">
        <a class="navigation-link" href="#">
          INICIO
        </a>
        <a class="navigation-link" href="#">
          PRODUCTOS
        </a>
        <a class="navigation-link" href="#">
          CONTACTOS
        </a>
      </nav>
    </header>
  );
}

export default Header;
