import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTop/ScrollTop";
import Home from "../Home/Home";
function HomePage(props) {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default HomePage;
