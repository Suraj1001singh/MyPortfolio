import React from "react";
import "./styles.css";
import {useState} from 'react'


function Services() {
    const [activeService1 ,setActiveService1]=useState(false);
    const [activeService2 ,setActiveService2]=useState(false);
    const [activeService3 ,setActiveService3]=useState(false);
    const onClickHandle1=()=>{setActiveService1(!activeService1)}
    const onClickHandle2=()=>{setActiveService2(!activeService2)}
    const onClickHandle3=()=>{setActiveService3(!activeService3)}

  return (
    <>
      <section class="services section" id='services'>
        <h2 class="section_title">Services</h2>
        <span class="section_subtitle">What i offer</span>
        <div class="services_container container grid">
          {/* <!-- -------------------service 1------------------- --> */}
          <div class="services_content">
            <div>
              <i class="uil uil-window-grid services_icon"></i>
              <h3 class="services_title">
                Ui/Ux
                <br />
                Designer
              </h3>
            </div>
            <span class="button button--flex button--small button--link services_button" onClick={onClickHandle1}>
              View More<i class="uil uil-arrow-right button_icon"></i>
            </span>
            <div class={activeService1? "services_modal_active":"services_modal"}>
              <div class="services_modal-content">
                <h4 class="services_modal-title">
                  Ui/Ux
                  <br />
                  Designer
                </h4>
                <i class="uil uil-times services_modal-close" onClick={onClickHandle1}></i>
                <ul class="services_modal-services grid">
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I develop the user interface</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>Web Page development</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I create ux element interaction</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I position your company brand</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- -------------------service 2------------------- --> */}
          <div class="services_content">
            <div>
              <i class="uil uil-arrow services_icon"></i>
              <h3 class="services_title">
                Frontend
                <br />
                Developer
              </h3>
            </div>
            <span class="button button--flex button--small button--link services_button" onClick={onClickHandle2}>
              View More<i class="uil uil-arrow-right button_icon"></i>
            </span>
            <div class={activeService2? "services_modal_active":"services_modal"}>
              <div class="services_modal-content">
                <h4 class="services_modal-title">
                  Frontend
                  <br />
                  Developer
                </h4>
                <i class="uil uil-times services_modal-close" onClick={onClickHandle2}></i>
                <ul class="services_modal-services grid">
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I develop the user interface</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>Web Page development</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I create ux element interaction</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I position your company brand</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- -------------------service 3------------------- --> */}
          <div class="services_content">
            <div>
              <i class="uil uil-pen services_icon"></i>
              <h3 class="services_title">
                Branding
                <br />
                Designer
              </h3>
            </div>
            <span class="button button--flex button--small button--link services_button" onClick={onClickHandle3}>
              View More<i class="uil uil-arrow-right button_icon"></i>
            </span>
            <div class={activeService3? "services_modal_active":"services_modal"}>
              <div class="services_modal-content">
                <h4 class="services_modal-title">
                  Branding
                  <br />
                  Designer
                </h4>
                <i class="uil uil-times services_modal-close" onClick={onClickHandle3}></i>
                <ul class="services_modal-services grid">
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I develop the user interface</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>Web Page development</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I create ux element interaction</p>
                  </li>
                  <li class="services_modal-service">
                    <i class="uil uil-check-circle services_modal-icon"></i>
                    <p>I position your company brand</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
