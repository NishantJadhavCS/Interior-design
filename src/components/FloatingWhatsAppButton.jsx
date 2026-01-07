import React from "react";
import "./css/FloatingWhatsAppButton.css";

export default function FloatingWhatsAppButton() {
    const phone = "919820555659";
    const message = "Hi Contrive Designs, I would like to know more.";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
}
