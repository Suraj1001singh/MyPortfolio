import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollTop/>
      </Router>
    </>
  );
}

export default App;

{
  /* <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/services' component={Services}></Route>
                    <Route exact path='/skills' component={Skills}></Route>
                    <Route exact path='/portfolio' component={Portfolio}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                    <Route exact path='/footer' component={Footer}></Route>
                </Switch> */
}
