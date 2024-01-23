import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";
import html_logo from "../../assets/img/html_logo.svg";
import adobe_logo from "../../assets/img/adobe_logo.svg";
import bootstrap_logo from "../../assets/img/bootstrap_logo.svg";
import chakra_logo from "../../assets/img/chakra_logo.png";
import css_logo from "../../assets/img/css_logo.svg";
import django_logo from "../../assets/img/django_logo.svg";
import eth_logo from "../../assets/img/eth_logo.svg";
import express_logo from "../../assets/img/express_logo.png";
import figma_logo from "../../assets/img/figma_logo.svg";
import firebase_logo from "../../assets/img/firebase_logo.svg";
import git_logo from "../../assets/img/git_logo.svg";
import github_logo from "../../assets/img/github_logo.svg";
import java_logo from "../../assets/img/java_logo.svg";
import js_logo from "../../assets/img/js_logo.svg";
import mongodb_logo from "../../assets/img/mongodb_logo.svg";
import mui_logo from "../../assets/img/mui_logo.svg";
import nextjs_logo from "../../assets/img/nextjs_logo.svg";
import nodejs_logo from "../../assets/img/nodejs_logo.svg";
import python_logo from "../../assets/img/python_logo.svg";
import react_logo from "../../assets/img/react_logo.svg";
import redux_logo from "../../assets/img/redux_logo.svg";
import solidity_logo from "../../assets/img/solidity_logo.svg";
import tailwindcss_logo from "../../assets/img/tailwindcss_logo.svg";
import typescript_logo from "../../assets/img/typescript_logo.svg";

function Skills() {
  // -----for frontend developer arrow
  // const [clickArrow1, setClickArrow1] = useState(true);
  // const onClickHandleArrow1 = () => {
  //   setClickArrow1(!clickArrow1);
  // };
  // -----for backend developer arrow
  // const [clickArrow2, setClickArrow2] = useState(false);
  // const onClickHandleArrow2 = () => {
  //   setClickArrow2(!clickArrow2);
  // };
  // -----for designer  arrow
  // const [clickArrow3, setClickArrow3] = useState(false);
  // const onClickHandleArrow3 = () => {
  //   setClickArrow3(!clickArrow3);
  // };
  const [activeTab, setActiveTab] = useState({ tab1: true, tab2: false, tab3: false, tab4: false });
  const onClickTab = (tab) => {
    setActiveTab({ tab1: false, tab2: false, tab3: false, tab4: false, [tab]: true });
  };
  const [skills, setSkills] = useState([]);

  const skills_array = [
    {
      name: "react js",
      cat: "frontend",
      img: react_logo,
    },
    {
      name: "next js",
      cat: "frontend",
      img: nextjs_logo,
    },
    {
      name: "javascript",
      cat: "frontend",
      img: js_logo,
    },
    {
      name: "html",
      cat: "frontend",
      img: html_logo,
    },
    {
      name: "css",
      cat: "frontend",
      img: css_logo,
    },

    {
      name: "node js",
      cat: "backend",
      img: nodejs_logo,
    },
    {
      name: "express js",
      cat: "backend",
      img: express_logo,
    },
    {
      name: "mongodb",
      cat: "backend",
      img: mongodb_logo,
    },
    {
      name: "firebase",
      cat: "backend",
      img: firebase_logo,
    },
    {
      name: "figma",
      cat: "tools",
      img: figma_logo,
    },
    {
      name: "adobe xd",
      cat: "tools",
      img: adobe_logo,
    },
    {
      name: "redux",
      cat: "frontend",
      img: redux_logo,
    },
    {
      name: "material ui",
      cat: "frontend",
      img: mui_logo,
    },
    {
      name: "chakra ui",
      cat: "frontend",
      img: chakra_logo,
    },
    {
      name: "tailwind css",
      cat: "frontend",
      img: tailwindcss_logo,
    },
    {
      name: "bootstrap",
      cat: "frontend",
      img: bootstrap_logo,
    },
    {
      name: "django",
      cat: "backend",
      img: django_logo,
    },
    {
      name: "ethereum",
      cat: "others",
      img: eth_logo,
    },
    {
      name: "solidity",
      cat: "others",
      img: solidity_logo,
    },
    {
      name: "git",
      cat: "tools",
      img: git_logo,
    },
    {
      name: "github",
      cat: "tools",
      img: github_logo,
    },
    {
      name: "python",
      cat: "others",
      img: python_logo,
    },
    {
      name: "java",
      cat: "others",
      img: java_logo,
    },
    {
      name: "typescript",
      cat: "frontend",
      img: typescript_logo,
    },
  ];
  
  useEffect(() => {
    setSkills(skills_array);
  }, []);
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
        <div className="skills_container container">
          {/* -------------------skills container----------------- */}
          {/* ---------tabes */}
          <div class="skills_tabs">
            <div
              className={activeTab?.tab1 ? "skills_tab_active skills_tab" : "skills_tab"}
              onClick={() => {
                onClickTab("tab1");
                setSkills(skills_array);
              }}
            >
              <i className="uil uil-globe skills_icon"></i>
              <h1 className="skills_title">All</h1>
            </div>
            <div
              className={activeTab?.tab2 ? "skills_tab_active skills_tab" : "skills_tab"}
              onClick={() => {
                onClickTab("tab2");
                setSkills(skills_array.filter((skill) => skill.cat == "backend"));
              }}
            >
              <i className="uil uil-database skills_icon"></i>
              <h1 className="skills_title">Backend</h1>
            </div>
            <div
              className={activeTab?.tab3 ? "skills_tab_active skills_tab" : "skills_tab"}
              onClick={() => {
                onClickTab("tab3");
                setSkills(skills_array.filter((skill) => skill.cat == "frontend"));
              }}
            >
              <i className="uil uil-browser skills_icon "></i>
              <h1 className="skills_title">Frontend</h1>
            </div>
            <div
              className={activeTab?.tab4 ? "skills_tab_active skills_tab" : "skills_tab"}
              onClick={() => {
                onClickTab("tab4");
                setSkills(skills_array.filter((skill) => skill.cat == "tools"));
              }}
            >
              <i className="uil uil-wrench skills_icon "></i>
              <h1 className="skills_title">Tools</h1>
            </div>
          </div>
          <div className="skills_list grid">
            {skills.map((skill, ind) => (
              <div key={ind} className="skills_data">
                <div className="skills_blob">
                  <img className="skills_img" src={`${skill?.img}`}></img>
                </div>

                <h3 className="skills_name">{skill?.name}</h3>
              </div>
            ))}
          </div>
          {/* --------------skill 1 (frontend)------------------ */}
          {/* <div className={clickArrow1 ? "skills_content skills_open" : "skills_content skills_close"}>
            <div className="skills_header">
              <i className="uil uil-brackets-curly skills_icon"></i>
              <div>
                <h1 className="skills_title">Frontend developer</h1>
                <span className="skills_subtitle">More than 5 years</span>
              </div>
              <i class="uil uil-angle-down skills_arrow" onClick={onClickHandleArrow1}></i>
            </div>

            <div className={clickArrow1 ? "skills_list grid" : "skills_close skills_list grid"}>
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
          </div> */}
          {/* --------------skill 2 (backend)------------------ */}
          {/* <div className={clickArrow2 ? "skills_content skills_open" : "skills_content skills_close"}>
            {/* <div className="skills_content skills_close"> */}
          {/* <div className="skills_header">
              <i className="uil uil-server-network skills_icon"></i>
              <div>
                <h1 className="skills_title">Backend developer</h1>
                <span className="skills_subtitle">More than 3 years</span>
              </div>
              <i class="uil uil-angle-down skills_arrow" onClick={onClickHandleArrow2}></i>
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
          </div>  */}
          {/* --------------skill 3 (designer)------------------ */}
          {/* <div className={clickArrow3 ? "skills_content skills_open" : "skills_content skills_close"}>
            <div className="skills_header">
              <i className="uil uil-swatchbook skills_icon"></i>
              <div>
                <h1 className="skills_title">Designer</h1>
                <span className="skills_subtitle">More than 4 years</span>
              </div>
              <i class="uil uil-angle-down skills_arrow" onClick={onClickHandleArrow3}></i>
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
          </div> */}
        </div>
        {/* xxxxxxxxxxxxxxxxxxxxxxxxxxx---skills container---xxxxxxxxxxxxxxxxxxxxxxx*/}
      </section>
    </>
  );
}

export default Skills;
