import React from "react";
import "./BiografiaStyle.scss";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";

export default function Biografia() {
  return (
    <section id="biografia">
      <div className="image-container">
        <img src="img/marcela-retrato.png" alt="retrato de marcela" />
      </div>
      <div className="text-container">
        <h3>Quién es Marcela Barros</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum,
          eget proin sit sed fermentum in porttitor mattis. Cursus at augue
          curabitur faucibus nunc est id mattis donec. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Fermentum, eget proin sit sed
          fermentum
        </p>
        <Link
          to="/galeria"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <ButtonComponent
            background="#ce382c"
            text="Ver Galería"
            color="white"
            className="button-galeria"
          />
        </Link>
      </div>
    </section>
  );
}
