import React from "react";
import FajaCard from "./FajaCardComponent";
import FajaSectionStyle from "./FajaSectionStyle.scss";

export default function FajaSection() {
  return (
    <section id="faja-section">
      <div className="section-container">
        <div className="image-container">
          <img src="img/faja-modelos.png" alt="modelos de faja modeladora" />
        </div>
        <div className="card-container">
          <FajaCard />
        </div>
      </div>
    </section>
  );
}
