import React from "react";
import globalStyle from "./globalStyle.scss";
import FajaSection from "./components/FajaSectionComponent";
import Hero from "./components/HeroComponent";
import NavBar from "./components/NavBarComponent";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        {/* <FajaSection /> */}
      </>
    );
  }
}

export default App;
