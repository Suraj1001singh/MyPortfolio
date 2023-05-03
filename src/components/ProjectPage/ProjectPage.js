import React from "react";
import "./styles.css";
import projectImage from "../../assets/img/project.png";
import Cards from "../Portfolio/Card";
import project1 from "../../assets/img/project_devcube.png";
import project2 from "../../assets/img/project_easycart.png";
import project3 from "../../assets/img/project_crypto.png";
import project4 from "../../assets/img/project_timesnap.png";
const project_arr = [
  {
    title: "DevCube",
    description: "A web app for developers to create/join rooms and enhance skills.",
    image: project1,
    github_link: "https://github.com/suraj1771singh/devcube",
    project_link: "https://devcube.vercel.app/",
  },
  {
    title: "EasyCart",
    description: "An e-commerce web application that seamlessly integrates both customer and admin user interfaces.",
    image: project2,
    github_link: "https://github.com/suraj1771singh/easycartApp",
    project_link: "https://easycart.onrender.com/",
  },
  {
    title: "Crypto-Raptor",
    description: "NFT marketplace platform that allows creators to mint and sell their digital assets as NFTs.",
    image: project3,
    github_link: "https://github.com/suraj1771singh/crypto-raptor",
    project_link: "https://crypto-raptor.vercel.app/",
  },
  {
    title: "TimeSnap",
    description: "YouTube timestamp generator using machine learning algorithms to enable streamlined navigation.",
    image: project4,
    github_link: "https://github.com/suraj1771singh/timesnap",
    project_link: "https://timesnap.vercel.app/",
  },
];
function ProjectPage(props) {
  return (
    <>
      {/* ---------------------------Portfolio-------------------------- */}
      <section class="portfolio section" id="portfolio">
        <h2 class="section_title">Portfolio</h2>
        <span class="section_subtitle">My most recent work</span>
        <div class="pro_container container ">
          {project_arr.map((item, ind) => (
            <Cards image={item.image} title={item.title} description={item.description} github_link={item.github_link} project_link={item.project_link}></Cards>
          ))}

          {/* <Cards image={portfolioImage3} title="Brand Design" description=" Website adaptable to all devices, and animated interaction"></Cards>
          <Cards image={portfolioImage2} title="Online Store" description=" Website adaptable to all devices, and animated interaction"></Cards>
          <Cards image={portfolioImage3} title="Brand Design" description=" Website adaptable to all devices, and animated interaction"></Cards> */}
        </div>
      </section>

      {/* ---------------------------Project In Minds-------------------------- */}
      {/* <section class="project section">
        <div class="project_bg">
          <div class="project_container container grid">
            <div class="project_data">
              <h2 class="project_title">You have a new Project</h2>
              <p class="project_description"> Contact me now and get a 30% discount on your new project</p>
              <a href="#contact" class="button button--flex button--white">
                Contact Me
                <i class="uil uil-message project_icon button_icon" />
              </a>
            </div>
            <img src={projectImage} alt="" class="project_img" />
          </div>
        </div>
      </section> */}

      {/* ---------------------------Testimonials-------------------------- */}
      {/* <section class="testimonial section">
        <h2 class="section_title">Testimonial</h2>
        <span class="section_subtitle">My client saying</span>

        <div class="testimonial_container container">
          <div>
            <SwiperTestimonial></SwiperTestimonial>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default ProjectPage;
