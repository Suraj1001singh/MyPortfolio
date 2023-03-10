import React, { useState } from "react";
import aboutImage from "../../assets/img/myphoto2.png";
import cvvPdf from "../../assets/pdf/suraj_singh_resume.pdf";
import "./styles.css";

function About() {
  const [activeBtn1, setActiveBtn1] = useState(true);
  const onClickHandle1 = () => {
    // if (!activeBtn1) {
    //   setActiveBtn1(!activeBtn1);
    // //   setActiveBtn2(!activeBtn2);
    // }
  };
  const [activeBtn2, setActiveBtn2] = useState(false);
  const onClickHandle2 = () => {
    //   if (!activeBtn2) {
    //     setActiveBtn2(!activeBtn2);
    //     setActiveBtn1(!activeBtn1);
    //   }
  };
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
        <div className="about_container container grid">
          <div className="about_data">
            <img src={aboutImage} alt="about image" className="about_img glowing_border"></img>
            <p className="about_description">Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.</p>
            <div className="about_info">
              <div>
                <span className="about_info-title">02+</span>
                <span className="about_info-name">
                  Years
                  <br />
                  experience
                </span>
              </div>
              <div>
                <span className="about_info-title">20+</span>
                <span className="about_info-name">
                  Completed
                  <br />
                  project
                </span>
              </div>
              <div>
                <span className="about_info-title">10+</span>
                <span className="about_info-name">
                  Frameworks and 
                  <br />
                  Languages worked with
                </span>
              </div>
            </div>
            <div className="about_button">
              <a download="" href={cvvPdf} className="button button--flex">
                Download CV<i className="uil uil-download-alt button_icon"></i>
              </a>
            </div>
          </div>

          {/* <h2 class="section_title">Qualification</h2> */}

          <div class="qualification_container container">
            <div class="qualification_tabs">
              <div class={activeBtn1 ? "qualification_button button--flex qualification_button_active" : "qualification_button button--flex "} onClick={onClickHandle1}>
                <i class="uil uil-graduation-cap qualification_icon"></i>My Journey
              </div>
              {/* <div class={activeBtn2 ? "qualification_button button--flex qualification_button_active" : "qualification_button button--flex "} onClick={onClickHandle2}>
              <i class="uil uil-briefcase-alt qualification_icon "></i>Work
            </div> */}
            </div>
            <div class="qualification_section">
              {/* =================== qualification content 1 */}
              <div class={activeBtn1 ? "qualification-content" : "qualification-content qualification_inactive"} data-content id="education">
                {/* --------qualification -1 */}
                <div class="qualification_data">
                  <div>
                    <h3 class="qualification_title">Higher Secondary Education</h3>
                    <span class="qualification_subtitle">Army Public School, Almora, Uttrakhand</span>
                    <div class="qualification_calender">
                      <i class="uil uil-calendar-alt">2017 - 2018</i>
                    </div>
                  </div>
                  <div>
                    <span class="qualification_rounder"></span>
                    <span class="qualification_line"></span>
                  </div>
                </div>
                {/* --------qualification -2 */}
                <div class="qualification_data">
                  <div></div>
                  <div>
                    <span class="qualification_rounder"></span>
                    <span class="qualification_line"></span>
                  </div>
                  <div>
                    <h3 class="qualification_title">Bsc(Hons) Electronics</h3>
                    <span class="qualification_subtitle">Delhi University, Delhi</span>
                    <div class="qualification_calender">
                      <i class="uil uil-calendar-alt">2018 - 2021</i>
                    </div>
                  </div>
                </div>
                {/* --------qualification -3 */}
                <div class="qualification_data">
                  <div>
                    <h3 class="qualification_title">Masters of Computer Application</h3>
                    <span class="qualification_subtitle">NIT Kurukshetra, Haryana </span>
                    <div class="qualification_calender">
                      <i class="uil uil-calendar-alt">2021 - 2024</i>
                    </div>
                  </div>
                  <div>
                    <span class="qualification_rounder"></span>
                    <span class="qualification_line"></span>
                  </div>
                </div>
                {/* --------qualification -4 */}
                <div class="qualification_data">
                  <div></div>
                  <div>
                    <span class="qualification_rounder"></span>
                    {/* <span class="qualification_line"></span> */}
                  </div>
                  <div>
                    <h3 class="qualification_title">Frontend Internship</h3>
                    <span class="qualification_subtitle">Iqueue</span>
                    <div class="qualification_calender">
                      <i class="uil uil-calendar-alt">2021 - 2022</i>
                    </div>
                  </div>
                </div>
              </div>
              {/* =================== qualification content 2 */}
              {activeBtn2 && (
                <div class={activeBtn2 ? "qualification-content" : "qualification-content qualification_inactive"}>
                  {/* --------qualification -1 */}
                  <div class="qualification_data">
                    <div>
                      <h3 class="qualification_title">Software Developer</h3>
                      <span class="qualification_subtitle">Square Space</span>
                      <div class="qualification_calender">
                        <i class="uil uil-calendar-alt">2021 - 2024</i>
                      </div>
                    </div>
                    <div>
                      <span class="qualification_rounder"></span>
                      <span class="qualification_line"></span>
                    </div>
                  </div>
                  {/* --------qualification -2 */}
                  <div class="qualification_data">
                    <div></div>
                    <div>
                      <span class="qualification_rounder"></span>
                      <span class="qualification_line"></span>
                    </div>
                    <div>
                      <h3 class="qualification_title">Frontend Developer</h3>
                      <span class="qualification_subtitle">Square Space</span>
                      <div class="qualification_calender">
                        <i class="uil uil-calendar-alt">2021 - 2022</i>
                      </div>
                    </div>
                  </div>
                  {/* --------qualification -3 */}
                  <div class="qualification_data">
                    <div>
                      <h3 class="qualification_title">UI Designer</h3>
                      <span class="qualification_subtitle">Figma-paris </span>
                      <div class="qualification_calender">
                        <i class="uil uil-calendar-alt">2022 - 2023</i>
                      </div>
                    </div>
                    <div>
                      <span class="qualification_rounder"></span>
                      {/* <span class="qualification_line"></span> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
