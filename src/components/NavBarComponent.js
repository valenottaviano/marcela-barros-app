import React from "react";
import style from "./NavBarStyle.scss";

export default function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <nav>
          <div className="logo-container">
            <h1 id="logo">Marcela Barros IFBB PRO</h1>
          </div>
          <ul className="nav-links">
            <li className="nav-link">Biografía</li>
            <li className="nav-link">Competencias</li>
            <li className="nav-link">Productos</li>
            <li className="nav-link">Alumnos</li>
          </ul>
          <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
