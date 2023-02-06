import React from "react";
import "./styles.css";
import SwiperPortfolio from "./SwiperPortfolio";
import SwiperTestimonial from "./SwiperTestimonial";
import projectImage from "../../assets/img/project.png";

function Portfolio() {
  return (
    <>
      {/* ---------------------------Portfolio-------------------------- */}
      <section class="portfolio section" id="portfolio">
        <h2 class="section_title">Portfolio</h2>
        <span class="section_subtitle">My most recent work</span>
        <div class="portfolio_container container ">
          <SwiperPortfolio></SwiperPortfolio>
        </div>
      </section>

      {/* ---------------------------Project In Minds-------------------------- */}
      <section class="project section">
        <div class="project_bg">
          <div class="project_container container grid">
            <div class="project_data">
              <h2 class="project_title">You have a new Project</h2>
              <p class="project_description">
                {" "}
                Contact me now and get a 30% discount on your new project
              </p>
              <a href="#contact" class="button button--flex button--white">
                Contact Me
                <i class="uil uil-message project_icon button_icon" />
              </a>
            </div>
            <img src={projectImage} alt="" class="project_img" />
          </div>
        </div>
      </section>

      {/* ---------------------------Testimonials-------------------------- */}
      <section class="testimonial section">
        <h2 class="section_title">Testimonial</h2>
        <span class="section_subtitle">My client saying</span>

        <div class="testimonial_container container">
          <div>
            <SwiperTestimonial></SwiperTestimonial>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
