import React from "react";
import "./styles.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function ScrollTop() {
  const [scrollActive, SetScrollActive] = useState(false);

  window.onscroll = function (e) {
    if (window.scrollY >= 568) {
      SetScrollActive(true);
    //   console.log("condition", window.scrollY);
    } else {
      SetScrollActive(false);
    }

   
  };

  return (
    <>
      <HashLink
        to="#home"
        class={scrollActive ? "scrollup_active" : "scrollup"}
        id="scrollup"
      >
        <i class="uil uil-arrow-up scrollup_icon"></i>
      </HashLink>
    </>
  );
}

export default ScrollTop;
