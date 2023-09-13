import { useState } from "react";
import retrashLogo from "./assets/retrash.png";
import "./Header.css";

// Hacer que desaparezca la navegacion en mobile !
// Hacer que el padding del header coincida con el de main-section
// Hacer que aparezca la navegacion al hacerse mas grande !

function Header() {
  return (
    <header className="header">
      <h2 className="logo">ReTrash</h2>
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
