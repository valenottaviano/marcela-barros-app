import React, { useState } from "react";
import axios from "axios";

export default function SelectorComponent({
  size,
  name,
  status,
  statusHandler,
}) {
  const [colorName, setColorName] = useState(name);
  const [colorStatus, setStatus] = useState(status);

  const handleOnStatusCHange = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const res = await axios.put(
      "https://marcela-barros.herokuapp.com//api/product/faja",
      {
        // size: "size",
        // color: "colorName",
        // status: "colorStatus",
      },
      config
    );
  };

  return (
    <h4
      onClick={() => {
        setStatus(!colorStatus);
        handleOnStatusCHange();
      }}
      className={`color-panel ${colorStatus}`}
    >
      {name.toUpperCase()}
    </h4>
  );
}
