import React from "react";
import ButtonStyle from "./ButtonStyle.scss";
export default function ButtonComponent({ background, text, border, color }) {
  const myStyle = {
    backgroundColor: `${background}`,
    color: `${color}`,
    border: `${border}`,
  };

  return (
    <button className="button-component" style={myStyle}>
      {text}
    </button>
  );
}
