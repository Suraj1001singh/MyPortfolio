import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import ToggleButton from "../../utils/toggleButton/ToggleButton";
import Toggle from "react-styled-toggle";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [themeColor, setThemeColor] = useState();
  var r = document.querySelector(":root");
  const onClickHandle = () => {
    console.log("i am clicked");
    setClick(!click);
  };
  function hslToHex(hue) {
    // Set saturation and lightness to default values

    const saturation = 0.69;
    const lightness = 0.61;

    // Convert hue to degrees
    hue = hue % 360;
    if (hue < 0) {
      hue += 360;
    }

    // Calculate chroma and intermediate values
    let c = (1 - Math.abs(2 * lightness - 1)) * saturation;
    let x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    let m = lightness - c / 2;

    // Calculate RGB values
    let r, g, b;
    if (hue >= 0 && hue < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (hue >= 60 && hue < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (hue >= 120 && hue < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (hue >= 180 && hue < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (hue >= 240 && hue < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (hue >= 300 && hue < 360) {
      r = c;
      g = 0;
      b = x;
    }

    // Convert RGB values to hexadecimal string
    let rHex = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, "0");
    let gHex = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, "0");
    let bHex = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, "0");

    // Concatenate hexadecimal values and return as string
    return `#${rHex}${gHex}${bHex}`;
  }

  useEffect(() => {
    console.log(click);
    setThemeColor(r.style.getPropertyValue("--hue-color"));
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
  // Create a function for setting a variable value
  const myFunction_set = (color) => {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty("--hue-color", color);
    console.log(r.style.getPropertyValue("--hue-color"));
  };

  const onClickChangeTheme = (event) => {
    let color = event.target.value;
    setThemeColor(color);
    console.log("color is", color);
    myFunction_set(color);
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { hash } = location;
  console.log("pathname", hash);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <HashLink to="/#home">
          <svg className="home_logo" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3693 22.4125L31.2162 0L47.9729 37.0623L19.3693 22.4125Z" />
            <path d="M0 60L18.9189 24.2218L47.6126 38.8132L0 60Z" />
            <path d="M60 60L30.8559 48.1517L48.7838 39.6887L60 60Z" />
          </svg>
        </HashLink>
        <div className={click ? "nav_menu nav_show" : "nav_menu"} id="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <HashLink to="/#home" className={hash === "#home" ? "nav_link active-link" : "nav_link"} onClick={onClickHandle}>
                <i className="uil uil-estate nav_icon"></i>Home
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink to="/#about" className={hash === "#about" ? "nav_link active-link" : "nav_link"} onClick={onClickHandle}>
                <i className="uil uil-user nav_icon"></i>About
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink to="/#skills" className={hash === "#skills" ? "nav_link active-link" : "nav_link"} onClick={onClickHandle}>
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink to="/#services" className={hash === "#services" ? "nav_link active-link" : "nav_link"} onClick={onClickHandle}>
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink to="/#portfolio" className={hash === "#portfolio" ? "nav_link active-link" : "nav_link"} onClick={onClickHandle}>
                <i className="uil uil-scenery nav_icon"></i>Portfolio
              </HashLink>
            </li>
            <li className="nav_item">
              <HashLink to="/#contact" className={hash === "#contact" ? "nav_link active-link" : "nav_link"} onClick={onClickHandle}>
                <i className="uil uil-message nav_icon"></i>Contact Me
              </HashLink>
            </li>
          </ul>
          <i className="uil uil-times nav_close" id="nav_close" onClick={closeMenu}></i>
        </div>
        {/* for toglling navbar  */}
        <div className="nav_btns">
          <button className="color_pink" value="350" onClick={(e) => onClickChangeTheme(e)}></button>
          <button className="color_green" value="120" onClick={(e) => onClickChangeTheme(e)}></button>
          <button className="color_blue" value="240" onClick={(e) => onClickChangeTheme(e)}></button>

          {/* ----------Change Theme------------- */}

          {/* <i
            class={
              isDarkModeActive
                ? "uil uil-sun change-theme"
                : "uil uil-moon change-theme"
            }

            id="change-theme"
            onClick={OnCickDarkMode}
          ></i> */}
          <Toggle height={27} width={54} sliderHeight={20} sliderWidth={20} checked={isDarkModeActive} onChange={OnCickDarkMode} backgroundColorUnchecked={() => hslToHex(themeColor)} backgroundColorChecked="#ffffff" backgroundColorButton={isDarkModeActive ? () => hslToHex(themeColor) : "#ffffff"} />
          <div className="nav_toggle" id="nav_toggle">
            <i className="uil uil-apps" onClick={onClickHandle}></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
