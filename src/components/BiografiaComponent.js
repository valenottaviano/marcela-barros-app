import React from "react";
import "./BiografiaStyle.scss";

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
      </div>
    </section>
  );
}
