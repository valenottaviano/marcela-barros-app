import React from "react";
import HeroStyle from "./HeroStyle.scss";
import Button from "./ButtonComponent";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h4>Atleta IFBB PRO</h4>
          <h2>WE ARE STRONGER</h2>
          <h3>WHEN WE ARE TOGETHER.</h3>
          <div className="buttons-container">
            <Link to="/faja">
              <Button
                text="Tienda"
                background="#ce382c"
                border="none"
                color="white"
              />
            </Link>
            <Link to="/biografia">
              <Button
                text="Conoceme"
                background="white"
                border="none"
                color="#626262"
              />
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img src="img/marcela.png" alt="marcela barros" />
        </div>
      </div>
      <img className="ifbb-text" src="img/IFBB-PRO.png" alt="ifbb pro" />
      {/* <InfoCard /> */}
    </section>
  );
}

export function InfoCard() {
  return (
    <div className="info-card">
      <h3>Campeona</h3>
      <h2>Absoluta</h2>
    </div>
  );
}
