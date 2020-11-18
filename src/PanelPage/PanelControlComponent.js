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

  let renderedProducts;
  const handleRenderedProducts = () => {
    if (data.products !== undefined) {
      renderedProducts = data.products.size.map((size, index) => {
        return <StockProduct data={size} index={index} />;
      });
    }
  };
  handleRenderedProducts();

  return (
    <div>
      <div className="container">
        <form action="#">
          <div className="form-container">{renderedProducts}</div>
        </form>
        <OrdersList data={data.orders} />
      </div>
    </div>
  );
}
