import React from 'react'
import './styles.css'

function Footer() {
    return (
        <>
        <footer class="footer">
            <div class="footer_bg">
                <div class="footer_container container grid">
                    <div>
                        <h1 class="footer_title">Draco
                        </h1>
                        <span class="footer_subtitle">Frontend developer</span>

                    </div>
                    <ul class="footer_links">
                        <li>
                            <a href="#services" class="footer_link">Services
                                
                            </a>
                            
                        </li>
                        <li>
                            <a href="#portfolio" class="footer_link">Portfolio</a>

                        </li>
                        <li>
                            <a href="#contact" class="footer_link">Contact Me</a>

                        </li>
                    </ul>
                    <div class="footer_socials">
                        <a href="https://www.facebook.com/" target='_blank' class="footer_social"><i class="uil uil-facebook-f"></i></a>
                        <a href="https://www.instagram.com/" target='_blank' class="footer_social"><i class="uil uil-instagram"></i></a>
                        <a href="https://twitter.com/" target='_blank' class="footer_social"><i class="uil uil-twitter-alt"></i></a>
                    </div>
                </div>
                <p class="footer_copy">&#169; Dracko. All right reserved</p>
            </div>
        </footer>
        </>
    )
}

export default Footer
