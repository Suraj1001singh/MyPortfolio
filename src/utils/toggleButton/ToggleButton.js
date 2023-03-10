import React from "react";
import "./styles.css";

function ToggleButton({ onClick, isDarkModeActive }) {
  return (
    <div class="container">
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
