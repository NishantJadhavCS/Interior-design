import { useState } from "react";
import "./css/Navbar.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const whatsappNumber = "+911234567890";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20Contrive%20Designs`;

    return (
        <>
            {/* ===== HEADER ===== */}
            <header className="site-header">
                <div className="header-inner container">

                    {/* MOBILE: HAMBURGER */}
                    <button
                        className="menu-toggle-mobile"
                        onClick={() => setOpen(true)}
                    >
                        <svg width="26" height="20" viewBox="0 0 20 14">
                            <path
                                d="M0 1h20M0 7h20M0 13h20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    {/* LOGO (center on mobile, normal on desktop) */}
                    <a href="/" className="brand">
                        <img src={logo} alt="Contrive Designs" className="brand-logo" />
                    </a>

                    {/* RIGHT: Desktop Contact */}
                    {/* DESKTOP NAVIGATION (center column) */}
                    <nav className="header-center desktop-only">
                        <ul className="nav-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#packages">Packages</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                    </nav>

                    {/* DESKTOP NAVIGATION */}
                    {/* RIGHT: Desktop Contact Button */}
                    <div className="header-right desktop-only">
                        <a
                            className="btn-contact"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </header>

            {/* ===== OVERLAY (for drawer) ===== */}
            <div
                className={`nav-overlay ${open ? "show" : ""}`}
                onClick={() => setOpen(false)}
            />

            {/* ===== MOBILE DRAWER ===== */}
            <aside className={`mobile-drawer ${open ? "open" : ""}`}>
                <button className="drawer-close-btn" onClick={() => setOpen(false)}>
                    ✕
                </button>

                <ul className="drawer-links">
                    <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="#packages" onClick={() => setOpen(false)}>Packages</a></li>
                    <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                    <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
                </ul>

                <a
                    href={whatsappLink}
                    target="_blank"
                    className="drawer-contact-btn"
                    rel="noopener noreferrer"
                >
                    Contact Us
                </a>
            </aside>
        </>
    );
}