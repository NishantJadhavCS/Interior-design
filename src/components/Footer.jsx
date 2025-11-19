import React from "react";
import "./css/Footer.css";
import logo from "../assets/logo.svg";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-container" role="contentinfo">
            <div className="footer-inner">
                {/* Left column: Logo (left) + Tagline below + Socials */}
                <div className="footer-col footer-left">
                    <div className="brand-footer">
                        <img src={logo} alt="Contrive Designs" className="brand-logo-footer" />
                        
                        <p className="brand-tagline">Thoughtful interiors crafted for modern living.</p>
                    </div>

                    <div className="socials" aria-label="Follow us on social media">
                        <a href="#" className="social" aria-label="Instagram">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>

                        <a href="#" className="social" aria-label="Facebook">
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>

                        <a href="#" className="social" aria-label="WhatsApp">
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {/* Center column: Nav (vertical) */}
                <div className="footer-col footer-center" aria-label="Footer navigation">
                    <ul className="footer-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>

                {/* Right column: Google Maps */}
                <div className="footer-col footer-right">
                    <div className="map-wrap" aria-hidden={false}>
                        <iframe
                            title="Studio location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610091347!2d72.74109925!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63bf4297e41%3A0xa0422b6d04b2d30b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                            className="footer-map"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom copyright row */}
            <div className="footer-bottom" role="note">
                <div className="footer-bottom-inner">
                    <span>© {year} Contrive Designs — All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}
