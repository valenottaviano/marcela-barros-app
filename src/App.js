import React, { Fragment, useEffect, useState } from "react";
import "./globalStyle.scss";
import FajaSection from "./components/FajaSectionComponent";
import Hero from "./components/HeroComponent";
import NavBar from "./components/NavBarComponent";
import Banner from "./components/BannerComponent";
import PanelControl from "./PanelPage/PanelControlComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biografia from "./components/BiografiaComponent";
import Testimonios from "./components/TestimoniosSection";
import Confirmacion from "./components/ConfirmationComponent";
import GallerySection from "./components/GallerySection";

// selection data
let selection = {
  size: {},
  color: {},
};

const dataRaise = (sizeSelected, colorSelected) => {
  selection.size = sizeSelected;
  selection.color = colorSelected;
};

export default function App() {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => (
          <Fragment>
            <NavBar />
            <Hero />
            <Banner />
            <Biografia />
            <FajaSection dataRaise={dataRaise} />
            <Testimonios />
          </Fragment>
        )}
      />
      <Route
        path="/faja"
        render={(props) => (
          <Fragment>
            <NavBar />
            <FajaSection dataRaise={dataRaise} />
          </Fragment>
        )}
      />
      <Route
        path="/panel"
        render={(props) => (
          <Fragment>
            <NavBar />
            <PanelControl selection={selection} />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/biografia"
        render={(props) => (
          <Fragment>
            <NavBar />
            <Biografia />
            <Testimonios />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/galeria"
        render={(props) => (
          <Fragment>
            <NavBar />
            <GallerySection />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/confirmacion"
        render={(props) => (
          <Fragment>
            <Confirmacion selection={selection} />
          </Fragment>
        )}
      />
    </Router>
  );
}
