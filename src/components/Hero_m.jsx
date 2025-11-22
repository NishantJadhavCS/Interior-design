import "./css/Hero_m.css";
import hero1 from "../assets/hero2.jpg";

export default function Hero_m() {
    const whatsappNumber = "+919820555659";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20Contrive%20Designs`;

    return (
        <section className="maintenance-hero" id="home">
            {/* Background Image */}
            <div
                className="maintenance-hero-bg"
                style={{ backgroundImage: `url(${hero1})` }}
            />

            {/* Overlay */}
            <div className="maintenance-hero-overlay" />

            {/* Content */}
            <div className="maintenance-hero-inner">
                <div className="maintenance-card">
                    <p className="maintenance-eyebrow">Welcome to Contrive Designs</p>

                    <h1 className="maintenance-title">
                        Thoughtful Interiors for Modern Living.
                    </h1>

                    <p className="maintenance-text">
                        We are currently upgrading our website to serve you better.
                        Our team is still available for enquiries, consultations,
                        and new project discussions during this downtime.
                    </p>

                    <p className="maintenance-text">
                        Meanwhile, feel free to reach out to us anytime.
                    </p>

                    <a
                        href={whatsappLink}
                        className="maintenance-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
