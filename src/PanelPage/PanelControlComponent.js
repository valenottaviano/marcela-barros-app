import React, { useState, useEffect } from "react";
import panelStyle from "./PanelControlStyle.scss";
import StockProduct from "./StockProductComponent";
import axios from "axios";
import OrdersList from "./OrdersListComponent";

export default function PanelControl() {
  const [data, setData] = useState({});

  useEffect(() => {
    const request = async () => {
      let req = {
        products: {},
        orders: {},
      };
      const products = await axios.get(
        "https://marcela-barros.herokuapp.com/api/product/faja"
      );
      req.products = products.data;
      const orders = await axios.get(
        "https://marcela-barros.herokuapp.com/api/product/orders"
      );
      req.orders = orders.data;
      setData(req);
    };
    request();
  }, []);

  return (
    <div>
      <div className="container">
        <form action="#">
          <div>
            <StockProduct productName="Faja Azul S" color="blue" size="s" />
            <StockProduct productName="Faja Rosa S" color="pink" size="s" />
            <StockProduct productName="Faja Azul M" color="blue" size="m" />
            <StockProduct productName="Faja Rosa M" color="pink" size="m" />
            <StockProduct productName="Faja Azul L" color="blue" size="l" />
            <StockProduct productName="Faja Rosa L" color="blue" size="l" />
          </div>
          <button type="submit">Actualizar Stock</button>
        </form>
        <OrdersList data={data} />
      </div>
    </div>
  );
}
