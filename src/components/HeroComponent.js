import React from "react";
import HeroStyle from "./HeroStyle.scss";
import Button from "./ButtonComponent";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h4>Atleta IFBB PRO</h4>
          <h2>WE ARE STRONGER</h2>
          <h3>WHEN WE ARE TOGETHER.</h3>
          <div className="buttons-container">
            <Button
              text="Tienda"
              background="#ce382c"
              border="none"
              color="white"
            />
            <Button
              text="Conoceme"
              background="white"
              border="none"
              color="#626262"
            />
          </div>
        </div>
        <div className="image-container">
          <img src="img/marcela.png" alt="marcela barros" />
        </div>
      </div>
      <span>IFBB PRO</span>
      <InfoCard />
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
