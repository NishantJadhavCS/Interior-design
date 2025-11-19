import React from "react";
import "./css/Footer.css";
import logo from "../assets/logo.svg";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-container" role="contentinfo">
            <div className="footer-inner">

                {/* Left column: Logo + Tagline + Social */}
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

                        <a href="https://wa.me/919820555659" className="social" aria-label="WhatsApp" target="_blank">
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {/* Center column: Quick Links */}
                <div className="footer-col footer-center" aria-label="Footer navigation">
                    <h4 className="footer-heading">Quick Links</h4>

                    <ul className="footer-nav" role="list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>

                {/* Contact column */}
                <div className="footer-col footer-contact">
                    <h4 className="footer-heading">Contact Us</h4>

                    <ul className="footer-contact-list">
                        <li className="contact-item">
                            <a href="tel:+917208808435" aria-label="Call 7208808435">
                                <span className="contact-icon">
                                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                                </span>
                                <span className="contact-text">7208808435</span>
                            </a>
                        </li>

                        <li className="contact-item">
                            <a href="tel:+919820555659" aria-label="Call 9820555659">
                                <span className="contact-icon">
                                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                                </span>
                                <span className="contact-text">9820555659</span>
                            </a>
                        </li>

                    </ul>
                </div>


                {/* Right column: Google Maps */}
                <div className="footer-col footer-right">
                    <div className="map-wrap">
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
