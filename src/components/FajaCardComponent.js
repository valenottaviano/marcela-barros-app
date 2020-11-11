import React from "react";
import FajaCardStyle from "./FajaCardStyle.scss";

export default function FajaCard() {
  return (
    <div id="faja-card">
      <div className="image-container">
        <img src="img/faja-product.png" />
        <div className="gradient"></div>
      </div>
      <h4>Faja Modeladora</h4>
      <p>Sistema único en el mercado</p>
      <div className="talles-container">
        Talles:
        <div className="talle">S</div>
        <div className="talle">M</div>
        <div className="talle">L</div>
      </div>
      <div className="colors-container">
        <div className="color">Rosa</div>
        <div className="color">Azul</div>
      </div>
    </div>
  );
}
