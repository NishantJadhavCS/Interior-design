import { useState } from "react";
import "./css/Navbar.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const whatsappNumber = "+911234567890"; 
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20Contrive%20Designs`;

    return (
        <header className="site-header">
            <div className="header-inner container">
                {/* Left: Logo */}
                <div className="header-left">
                    <a href="/" className="brand" aria-label="Contrive Designs home">
                        <img src={logo} alt="Contrive Designs" className="brand-logo" />
                    </a>
                </div>

                {/* Center: Navigation Links */}
                <nav className="header-center" role="navigation" aria-label="Primary">
                    <button
                        className="menu-toggle"
                        aria-expanded={open}
                        aria-controls="primary-menu"
                        onClick={() => setOpen((p) => !p)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" focusable="false">
                            <path
                                d="M0 1h20M0 7h20M0 13h20"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    <ul id="primary-menu" className={`nav-links ${open ? "open" : ""}`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </nav>

                {/* Right: Contact Button */}
                <div className="header-right">
                    <a
                        className="btn-contact tw-btn-contact"
                        href={whatsappLink}
                        aria-label="Contact us on WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </header>
    );
}
