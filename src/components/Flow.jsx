import React from "react";
import "./css/Flow.css";

import meet from "../assets/flow/consultation.png";
import clarity from "../assets/flow/clarity.png";
import book from "../assets/flow/booking.png";
import build from "../assets/flow/build.png";
import happy from "../assets/flow/happy.png";

const steps = [
    {
        icon: meet,
        title: "Meet an Interior Consultant",
        desc: "Discuss your needs with our interior consultant.",
    },
    {
        icon: clarity,
        title: "Gain Clarity",
        desc: "Get clarity on design, timeline, and pricing.",
    },
    {
        icon: book,
        title: "Book Your Package",
        desc: "Select a package that fits your space and budget.",
    },
    {
        icon: build,
        title: "Get Your Home Ready",
        desc: "We design and execute your interiors in 40 days.",
    },
    {
        icon: happy,
        title: "Become a Happy Customer",
        desc: "Enjoy your finished home with complete peace.",
    },
];

export default function Flow() {
    return (
        <section className="flow-section">

            {/* SECTION HEADER */}
            <header
                className="flow-header"
                data-aos="fade-up"
                data-aos-duration="700"
            >
                <h2 className="flow-title">How It Works</h2>
                <p className="flow-subtitle">
                    Your journey to a dream home in 5 simple steps.
                </p>
            </header>

            <div className="flow-container">
                <div
                    className="flow-stepper"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {/* The connecting line background (NO AOS) */}
                    <div className="stepper-line"></div>

                    {steps.map((step, idx) => (
                        <div
                            className="flow-step"
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            data-aos-duration="600"
                        >
                            <div className="step-marker">
                                <div className="step-icon-wrapper">
                                    <img
                                        src={step.icon}
                                        alt={step.title}
                                        className="step-icon"
                                    />
                                </div>
                                <div className="step-dot"></div>
                            </div>

                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}