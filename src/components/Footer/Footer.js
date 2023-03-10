import React from "react";
import "./styles.css";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer_bg">
          <div class="footer_container container grid">
            <div>
              <h1 class="footer_title">Suraj Singh</h1>
              <span class="footer_subtitle">Fullstack web developer</span>
            </div>
            <ul class="footer_links">
              <li>
                <a href="#services" class="footer_link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" class="footer_link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" class="footer_link">
                  Contact Me
                </a>
              </li>
            </ul>
            <div class="footer_socials">
              <a href="https://www.linkedin.com/in/suraj-singh-166bb5134/" target="_blank" class="footer_social">
                <i class="uil uil-linkedin-alt"></i>
              </a>
              <a href="https://www.instagram.com/suraj_singh1001/" target="_blank" class="footer_social">
                <i class="uil uil-instagram"></i>
              </a>
              <a href="https://twitter.com/suraj1001singh" target="_blank" class="footer_social">
                <i class="uil uil-twitter-alt"></i>
              </a>
            </div>
          </div>

          <div class="footer_copy">
            Made with &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            &nbsp; by Suraj Singh
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
