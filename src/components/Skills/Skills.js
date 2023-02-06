import React from "react";
import "./styles.css";
import { useState } from "react";

function Skills() {
  // -----for frontend developer arrow
  const [clickArrow1, setClickArrow1] = useState(true);
  const onClickHandleArrow1 = () => {
    setClickArrow1(!clickArrow1);
  };
  // -----for backend developer arrow
  const [clickArrow2, setClickArrow2] = useState(false);
  const onClickHandleArrow2 = () => {
    setClickArrow2(!clickArrow2);
  };
  // -----for designer  arrow
  const [clickArrow3, setClickArrow3] = useState(false);
  const onClickHandleArrow3 = () => {
    setClickArrow3(!clickArrow3);
  };
  const [activeBtn1, setActiveBtn1]=useState(true);
  const onClickHandle1=()=>{
      if (!activeBtn1){
        setActiveBtn1(!activeBtn1);
        setActiveBtn2(!activeBtn2);
        
      }
     
  }
  const [activeBtn2, setActiveBtn2]=useState(false);
  const onClickHandle2=()=>{
      if (!activeBtn2){
        setActiveBtn2(!activeBtn2);
        setActiveBtn1(!activeBtn1)
      }
    }
     


  return (
    <>
      <section className="skills section" id='skills'>
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
        <div className="skills_container container grid">
         
            {/* -------------------skills container----------------- */}
            {/* --------------skill 1 (frontend)------------------ */}
            <div
              className={
                clickArrow1
                  ? "skills_content skills_open"
                  : "skills_content skills_close"
              }
            >
              <div className="skills_header">
                <i className="uil uil-brackets-curly skills_icon"></i>
                <div>
                  <h1 className="skills_title">Frontend developer</h1>
                  <span className="skills_subtitle">More than 5 years</span>
                </div>
                <i
                  class="uil uil-angle-down skills_arrow"
                  onClick={onClickHandleArrow1}
                ></i>
              </div>

              <div
                className={
                  clickArrow1
                    ? "skills_list grid"
                    : "skills_close skills_list grid"
                }
              >
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_html"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Css</h3>
                    <span className="skills_number">80%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_css"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills_number">60%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_js"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">React</h3>
                    <span className="skills_number">85%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_react"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------skill 2 (backend)------------------ */}
            <div
              className={
                clickArrow2
                  ? "skills_content skills_open"
                  : "skills_content skills_close"
              }
            >
              {/* <div className="skills_content skills_close"> */}
              <div className="skills_header">
                <i className="uil uil-server-network skills_icon"></i>
                <div>
                  <h1 className="skills_title">Backend developer</h1>
                  <span className="skills_subtitle">More than 3 years</span>
                </div>
                <i
                  class="uil uil-angle-down skills_arrow"
                  onClick={onClickHandleArrow2}
                ></i>
              </div>

              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Php</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_php"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Node Js</h3>
                    <span className="skills_number">70%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_node"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Firebase</h3>
                    <span className="skills_number">85%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_firebase"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Python</h3>
                    <span className="skills_number">60%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_python"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------skill 3 (designer)------------------ */}
            <div
              className={
                clickArrow3
                  ? "skills_content skills_open"
                  : "skills_content skills_close"
              }
            >
              <div className="skills_header">
                <i className="uil uil-swatchbook skills_icon"></i>
                <div>
                  <h1 className="skills_title">Designer</h1>
                  <span className="skills_subtitle">More than 4 years</span>
                </div>
                <i
                  class="uil uil-angle-down skills_arrow"
                  onClick={onClickHandleArrow3}
                ></i>
              </div>

              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Figma</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_figma"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Sketch</h3>
                    <span className="skills_number">85%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_sketch"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Photoshop</h3>
                    <span className="skills_number">70%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_photoshop"></span>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxx---skills container---xxxxxxxxxxxxxxxxxxxxxxx*/}
      </section>
      <section class="qualification section">
        <h2 class="section_title">Qualification</h2>
        <span class="section_subtitle">My personal journey</span>
        <div class="qualification_container container">
          <div class="qualification_tabs">
            <div class={activeBtn1? "qualification_button button--flex qualification_button_active":"qualification_button button--flex "} onClick={onClickHandle1}>
              <i class="uil uil-graduation-cap qualification_icon"></i>Education
            </div>
            <div class={activeBtn2? "qualification_button button--flex qualification_button_active":"qualification_button button--flex "} onClick={onClickHandle2}>
              <i class="uil uil-briefcase-alt qualification_icon "></i>Work
            </div>
          </div>
          <div class="qualification_section">
            {/* =================== qualification content 1 */}
            <div class={activeBtn1? "qualification-content":"qualification-content qualification_inactive"}
              data-content
              id="education"
            >
              {/* --------qualification -1 */}
              <div class="qualification_data">
                <div>
                  <h3 class="qualification_title">Computer Enginnering</h3>
                  <span class="qualification_subtitle">Delhi University</span>
                  <div class="qualification_calender">
                    <i class="uil uil-calendar-alt">2017 - 2021</i>
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
                  <h3 class="qualification_title">Web Design</h3>
                  <span class="qualification_subtitle">Paris Institute</span>
                  <div class="qualification_calender">
                    <i class="uil uil-calendar-alt">2021 - 2022</i>
                  </div>
                </div>
              </div>
              {/* --------qualification -3 */}
              <div class="qualification_data">
                <div>
                  <h3 class="qualification_title">Web Development</h3>
                  <span class="qualification_subtitle">
                    University of California-San Diego{" "}
                  </span>
                  <div class="qualification_calender">
                    <i class="uil uil-calendar-alt">2021 - 2022</i>
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
                  <h3 class="qualification_title">Backend Development</h3>
                  <span class="qualification_subtitle">Purdue University</span>
                  <div class="qualification_calender">
                    <i class="uil uil-calendar-alt">2022 - 2024</i>
                  </div>
                </div>
              </div>
            </div>
            {/* =================== qualification content 2 */}
            <div class={activeBtn2? "qualification-content" : "qualification-content qualification_inactive"} >
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills
