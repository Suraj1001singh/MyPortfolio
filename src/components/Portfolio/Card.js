import React from "react";

function Card({ image, title, description, project_link, github_link }) {
  return (
    <div class="portfolio_content grid">
      <img src={image} alt="" class="portfolio_img" />
      <div class="portfolio_data">
        <h3 class="portfolio_title">{title}</h3>
        <p class="portfolio_description">{description}</p>
        <div class="portfolio_links">
          <a href={project_link} target="_blank" class="portfolio_icon">
            <i class="uil uil-eye"></i>
          </a>
          <a href={github_link} target="_blank" class="portfolio_icon">
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
