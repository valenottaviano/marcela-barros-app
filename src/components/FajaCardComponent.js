import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FajaCardStyle from "./FajaCardStyle.scss";
import axios from "axios";

export default function FajaCard(props) {
  //leveling up state
  const dataRaise = (size, color) => {
    props.dataRaise(size, color);
  };
  // color and size handlers
  let history = useHistory();
  const [data, setData] = useState({});

  const [sizeSelected, setSizeSelected] = useState("s");
  const [colorSelected, setColorSelected] = useState("pink");

  let selection;

  const handleSelectedProduct = () => {
    if (data.size !== undefined) {
      selection = String("data.size." + sizeSelected + "." + colorSelected);
    }
  };

  handleSelectedProduct();

  const isInStock = () => {
    if (selection && data.size && sizeSelected && colorSelected) {
      return eval(selection);
    }
  };

  useEffect(() => {
    const productRequest = async () => {
      const data = await axios.get(
        "https://marcela-barros.herokuapp.com/api/product/faja"
      );
      setData(data.data);
    };
    productRequest();
  }, []);

  const sizeHandler = (size) => {
    setSizeSelected(size);
  };

  const colorHandler = (color) => {
    setColorSelected(color);
  };

  // const checkAval = () => {
  //   setSelectedProduct(eval(selectedProduct));
  // };

  return (
    <div id="faja-card">
      <div className={`product-container ${isInStock() ? "" : "no-stock"}`}>
        <img src="img/faja-product.png" alt="faja card" />
        <div className="gradient"></div>
        <h3>SIN STOCK</h3>
      </div>
      <h4>{data.name}</h4>
      <p>Sistema único en el mercado</p>
      <div className="talles-container">
        Talles:
        <div
          className={`talle ${sizeSelected === "s" ? "selected" : ""}`}
          onClick={() => {
            sizeHandler("s");
          }}
        >
          S
        </div>
        <div
          className={`talle ${sizeSelected === "m" ? "selected" : ""}`}
          onClick={() => {
            sizeHandler("m");
          }}
        >
          M
        </div>
        <div
          className={`talle ${sizeSelected === "l" ? "selected" : ""}`}
          onClick={() => {
            sizeHandler("l");
          }}
        >
          L
        </div>
      </div>
      <div className="colors-container">
        <div
          className={`color ${colorSelected === "pink" ? "selected" : ""}`}
          onClick={() => {
            colorHandler("pink");
          }}
        >
          Rosa
        </div>
        <div
          className={`color ${colorSelected === "blue" ? "selected" : ""}`}
          onClick={() => {
            colorHandler("blue");
          }}
        >
          Azul
        </div>
      </div>
      <a href="https://api.whatsapp.com/send/?phone=5493814661789&text=Hola%21+Necesito+informaci%C3%B3n+sobre+talles+especiales.&app_absent=0">
        Consultar talles especiales.
      </a>
      <button
        onClick={
          isInStock()
            ? () => {
                dataRaise(sizeSelected, colorSelected);
                history.push("/confirmacion");
              }
            : null
        }
        className={`comprar-button ${isInStock() ? "" : "no-stock"}`}
      >
        Comprar
      </button>
    </div>
  );
}
