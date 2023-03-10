import React from "react";
import "./styles.css";

function Contact() {
  return (
    <>
      <section class="contact section" id="contact">
        <h2 class="section_title">Contact Me</h2>
        <span class="section_subtitle">Get in touch</span>
        <div class="contact_container container grid">
          <div>
            <div class="contact_information">
              <i class="uil uil-phone contact_icon"></i>

              <div>
                <h3 class="contact_title">Call Me</h3>
                <span class="contact_subtitle">+917456077167</span>
              </div>
            </div>
            <div class="contact_information">
              <i class="uil uil-envelope-add contact_icon"></i>

              <div>
                <h3 class="contact_title">Email</h3>
                <span class="contact_subtitle">suraj1771singh@gmail.com</span>
              </div>
            </div>
            <div class="contact_information">
              <i class="uil uil-map-marker contact_icon"></i>

              <div>
                <h3 class="contact_title">Location</h3>
                <span class="contact_subtitle">Almora(263601) - Uttrakhand,India</span>
              </div>
            </div>
          </div>
          <form action="" class="contact_form grid">
            <div class="contact_inputs grid">
              <div class="contact_content">
                <label for="" class="contact_label">
                  Name
                </label>
                <input type="text" class="contact_input" />
              </div>
              <div class="contact_content">
                <label for="" class="contact_label">
                  Email
                </label>
                <input type="email" class="contact_input" />
              </div>
            </div>
            <div class="contact_content">
              <label for="" class="contact_label">
                Project
              </label>
              <input type="text" class="contact_input" />
            </div>
            <div class="contact_content">
              <label for="" class="contact_label">
                Message
              </label>
              <textarea name="" id="" cols="0" rows="7" class="contact_input" />
            </div>
            <div>
              <a  class="button button--flex">
                Send Message<i class="uil uil-message button_icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
