import React from "react";
import aboutImage from '../../assets/img/about.jpg'
import cvvPdf from '../../assets/pdf/Alexa-Cv.pdf'
import './styles.css'

function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>
            <div className="about_container container grid">
                <img src={aboutImage} alt="about image" className="about_img"></img>
                <div className="about_data">
                    <p className="about_description">Web developer, with extensive knowledge and years of 
                        experience, working in web technologies and UI/UX design, delivering quality work.</p>
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">08+</span>
                            <span className="about_info-name">Years<br/>experience</span>
                        </div>
                        <div>
                            <span className="about_info-title">20+</span>
                            <span className="about_info-name">Completed<br/>project</span>
                        </div>
                        <div>
                            <span className="about_info-title">05+</span>
                            <span className="about_info-name">Companies<br/>worked</span>
                        </div>
                    </div>
                    <div className="about_button">
                        <a download="" href={cvvPdf} className="button button--flex">
                           Download CV<i className="uil uil-download-alt button_icon"></i></a>
                    </div>
                </div>
           </div>
      </section>
    </>
  );
}

export default About
