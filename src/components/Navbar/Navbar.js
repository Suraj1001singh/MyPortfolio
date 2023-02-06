import React from "react";
import "./styles.css";
import { Link,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const onClickHandle = () => {
    console.log("i am clicked");
    setClick(!click);
  };

  useEffect(() => {
    console.log(click);
  }, [click]);

  const closeMenu = () => {
    console.log("close menu clicked");
    setClick(false);
  };
  // -------------------------------------------Dark Mode---------------------------
  const ActivateDarkMode = () => {
    var element = document.body;
    element.classList.add("dark-theme");
  };
  const DeactivateDarkMode = () => {
    var element = document.body;
    element.classList.remove("dark-theme");
  };
  const OnCickDarkMode = () => {
    if (!isDarkModeActive) {
      ActivateDarkMode();
    } else {
      DeactivateDarkMode();
    }
    setIsDarkModeActive(!isDarkModeActive);
  };

  // -----------------------------------------Theme Change---------------------------
  // Get the root element
  var r = document.querySelector(":root");

  // Create a function for setting a variable value
  const myFunction_set = (color) => {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty("--hue-color", color);
  };

  const onClickChangeTheme = (event) => {
    let color = event.target.value;
    myFunction_set(color);
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { hash } = location;
  console.log("pathname",hash);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <HashLink to="#home" className="nav_logo">
          DRACO
        </HashLink>
        <div className={click ? "nav_menu nav_show" : "nav_menu"} id="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <HashLink
                
                to="#home"
                
               className={hash==='#home'? "nav_link active-link" : "nav_link"}
                onClick={onClickHandle}
              >
                <i className="uil uil-estate nav_icon"></i>Home
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink
                to="/#about"
                
                className={hash==='#about'? "nav_link active-link" : "nav_link"}
                onClick={onClickHandle}
              >
                <i className="uil uil-user nav_icon"></i>About
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink
                to="/#skills"
                
                className={hash==='#skills'? "nav_link active-link" : "nav_link"}
                onClick={onClickHandle}
              >
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink
                to="/#services"
                
                className={hash==='#services'? "nav_link active-link" : "nav_link"}
                onClick={onClickHandle}
              >
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink
                to="/#portfolio"
                
                className={hash==='#portfolio'? "nav_link active-link" : "nav_link"}
                onClick={onClickHandle}
              >
                <i className="uil uil-scenery nav_icon"></i>Portfolio
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink
                to="/#contact"
                
                className={hash==='#contact'? "nav_link active-link" : "nav_link"}
                onClick={onClickHandle}
              >
                <i className="uil uil-message nav_icon"></i>Contact Me
              </HashLink>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            id="nav_close"
            onClick={closeMenu}
          ></i>
        </div>
        {/* for toglling navbar  */}
        <div className="nav_btns">
          <button
            className="color_pink"
            value="350"
            onClick={(e) => onClickChangeTheme(e)}
          ></button>
          <button
            className="color_green"
            value="120"
            onClick={(e) => onClickChangeTheme(e)}
          ></button>
          <button
            className="color_blue"
            value="240"
            onClick={(e) => onClickChangeTheme(e)}
          ></button>

          {/* ----------Change Theme------------- */}

          <i
            class={
              isDarkModeActive
                ? "uil uil-sun change-theme"
                : "uil uil-moon change-theme"
            }
            id="change-theme"
            onClick={OnCickDarkMode}
          ></i>
          <div className="nav_toggle" id="nav_toggle">
            <i className="uil uil-apps" onClick={onClickHandle}></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
