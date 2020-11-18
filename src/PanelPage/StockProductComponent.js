import React, { useEffect, useState } from "react";
import SelectorComponent from "./SelectorComponent";
import "./StockProductStyle.scss";

export default function StockProduct(props) {
  let sizeName = props.data[1].name;
  let temp = String(`props.data[0].${sizeName}`);

  const renderedColors = eval(temp).map((color, index, Rest) => {
    let colorName = Object.keys(color);
    let colorStatus = Object.values(color);
    colorName = colorName[0];

    return (
      <SelectorComponent
        size={sizeName}
        name={colorName}
        status={colorStatus}
      />
    );
  });

  return (
    <div className="product-card">
      <h3>Talle: {props.data[1].name.toUpperCase()}</h3>
      <div>{renderedColors}</div>
      <button type="submit">Actualizar Stock</button>
    </div>
  );
}
