import React, { Component } from "react";
import "./App.css";
import Footer from "./footer";
import Projects from "./Projects";
import WhatMakesUSDifferent from "./WhatMakesUsDifferent";
import NavbarLight from "./navbarLight";
import Slider from "./slider";
import Service from "./Services";
import About from "./About";
import NavEnd from "./navEnd";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarLight />
        <NavEnd />
        <Slider />
        <About />
        <Service />
        <WhatMakesUSDifferent />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
