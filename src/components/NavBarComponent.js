import React, { useState } from "react";
import style from "./NavBarStyle.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const onBurgerClick = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <div className="nav-container">
        <nav>
          <div className="logo-container">
            <Link to="/">
              <h1 id="logo">Marcela Barros IFBB PRO</h1>
            </Link>
          </div>
          <ul className={`nav-links ${navActive ? "active" : ""}`}>
            <Link to="/biografia">
              <li className="nav-link">Biografía</li>
            </Link>
            <Link to="/faja">
              <li className="nav-link">Productos</li>
            </Link>
            <Link to="/galeria">
              <li className="nav-link">Galería</li>
            </Link>
          </ul>
          <div className="burger" onClick={onBurgerClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
