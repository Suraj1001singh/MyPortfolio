import React from "react";

function Card({ image, title, description }) {
  return (
    <div class="portfolio_content grid">
      <img src={image} alt="" class="portfolio_img" />
      <div class="portfolio_data">
        <h3 class="portfolio_title">{title}</h3>
        <p class="portfolio_description">{description}</p>
        <a href="" class="button button--flex button--small portfolio_button">
          Demo
          <i class="uil uil-arrow-right button_icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
