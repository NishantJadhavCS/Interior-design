import React from "react";
import "./css/Footer.css";
import logo from "../assets/logo_footer.png";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-container" role="contentinfo">

            <div className="footer-inner">

                {/* LEFT COLUMN */}
                <div
                    className="footer-col footer-left"
                    data-aos="fade-right"
                    data-aos-duration="600"
                >
                    <div className="brand-footer">
                        <img
                            src={logo}
                            alt="Contrive Designs"
                            className="brand-logo-footer"
                        />
                        <p className="brand-tagline">
                            Clever Designs Made Affordable.
                        </p>
                    </div>

                    <div className="socials" aria-label="Follow us on social media">
                        <a
                            href="https://www.instagram.com/contrivedesigns_in/"
                            className="social"
                            aria-label="Instagram"
                            target="_blank"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>

                        <a
                            href="https://www.facebook.com/share/1H2tJvq5vB/"
                            className="social"
                            aria-label="Facebook"
                            target="_blank"
                        >
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>

                        <a
                            href="https://wa.me/919820555659"
                            className="social"
                            aria-label="WhatsApp"
                            target="_blank"
                        >
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {/* CENTER COLUMN */}
                <div
                    className="footer-col footer-center"
                    aria-label="Footer navigation"
                    data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="600"
                >
                    <h4 className="footer-heading">Quick Links</h4>

                    <ul className="footer-nav" role="list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>

                {/* RIGHT COLUMN */}
                <div
                    className="footer-col footer-contact"
                    data-aos="fade-left"
                    data-aos-delay="240"
                    data-aos-duration="600"
                >
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
            </div>

            {/* FOOTER BOTTOM */}
            <div
                className="footer-bottom"
                role="note"
                data-aos="fade-up"
                data-aos-delay="360"
                data-aos-duration="500"
            >
                <div className="footer-bottom-inner">
                    <span>© {year} Contrive Designs - All Rights Reserved</span>
                </div>
            </div>

        </footer>

    );
}
