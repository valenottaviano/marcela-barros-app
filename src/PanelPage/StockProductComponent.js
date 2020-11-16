import React from "react";
import ProductStyle from "./StockProductStyle.scss";

export default function StockProduct(props) {
  return (
    <div className="product-card">
      <h3>{props.productName}</h3>
      <select>
        <option value="true">En Stock</option>
        <option value="false">Sin Stock</option>
      </select>
    </div>
  );
}
