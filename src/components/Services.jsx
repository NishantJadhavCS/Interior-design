import "./css/Services.css";
import React, { useEffect, useState } from "react";

import img1 from "../assets/1bhk.jpg";
import img2 from "../assets/2bhk.jpg";
import img3 from "../assets/budget.jpg";
import PackageModal from "./PackageModal";
import ContactForm from "./ContactForm";

export default function Services() {
    const [estimatorOpen, setEstimatorOpen] = useState(false);

    const whatsappBase = (msg) =>
        `https://wa.me/${"+919820555659".replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

    const [modalOpen, setModalOpen] = useState(false);
    const [modalPackageId, setModalPackageId] = useState(null);

    useEffect(() => {
        const mobileBreakpoint = 980;

        let rafId = null;
        let ticking = false;

        function tick() {
            ticking = false;
            const cards = Array.from(document.querySelectorAll(".cards .card"));
            if (!cards.length) return;

            const vhCenter = window.innerHeight / 2;

            const distances = cards.map((el) => {
                const rect = el.getBoundingClientRect();
                const elCenter = rect.top + rect.height / 2;
                return { el, distance: Math.abs(elCenter - vhCenter), rectTop: rect.top, rectHeight: rect.height };
            });

            distances.sort((a, b) => a.distance - b.distance);
            const closest = distances[0];

            const threshold = Math.max(120, window.innerHeight * 0.28);

            cards.forEach((c) => c.classList.remove("in-view"));

            if (closest && closest.distance <= threshold) {
                closest.el.classList.add("in-view");
            }
        }

        function onScrollOrResize() {
            if (window.innerWidth > mobileBreakpoint) {
                // ensure no mobile in-view left on desktop
                document.querySelectorAll(".cards .card.in-view").forEach((c) => c.classList.remove("in-view"));
                return;
            }

            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(tick);
            }
        }

        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize);

        // initial check (in case user lands mid-page)
        onScrollOrResize();

        return () => {
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // If the direct target is interactive, don't treat the card click as the CTA.
    const isDirectInteractive = (target) => {
        if (!target || !target.tagName) return false;
        const tag = target.tagName.toLowerCase();
        return ["a", "button", "input", "textarea", "select", "label"].includes(tag);
    };

    // Card click handler — idx is card index (0,1,2)
    const onCardActivate = (e, idx) => {
        // if click started on an interactive element, let that element handle it
        if (isDirectInteractive(e.target)) return;

        if (idx === 0 || idx === 1) {
            setModalPackageId(idx);
            setModalOpen(true);
        } else if (idx === 2) {
            setEstimatorOpen(true);
        };
    };
    // keyboard support: Enter / Space activates the card
    const onCardKeyDown = (e, idx) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onCardActivate(e, idx);
        }
    };


    return (
        <section
            className="services-section"
            id="packages"
            aria-labelledby="services-title"
        >
            <div className="services-inner">

                {/* SECTION HEADER */}
                <header
                    className="services-head"
                    data-aos="fade-up"
                    data-aos-duration="700"
                >
                    <h2 id="services-title">Interior Design Packages</h2>
                    <p className="services-sub">
                        Preset, budget-friendly interior solutions for 1 & 2 BHK homes or build a Custom plan to design your Dream home.
                    </p>
                </header>

                {/* CARDS */}
                <div className="cards">

                    {/* TOP ROW */}
                    <div
                        className="cards-top"
                        role="list"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {/* 1 BHK */}
                        <article
                            className="card"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="600"
                            role="button"
                            tabIndex={0}
                            aria-label="Open 1 BHK details"
                            onClick={(e) => onCardActivate(e, 0)}
                            onKeyDown={(e) => onCardKeyDown(e, 0)}
                        >
                            <div
                                className="card-media"
                                role="img"
                                aria-label="1 BHK sample image"
                                style={{ backgroundImage: `url(${img1})` }}
                            />
                            <div className="card-body">
                                <h3 className="card-title">1 BHK Standard Package</h3>
                                <p className="card-desc">
                                    Smart, space-saving preset themes: Modern · Minimal · Cozy optimized for compact living.
                                </p>

                                <div className="card-actions">
                                    <button
                                        className="button"
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setModalPackageId(0);
                                            setModalOpen(true);
                                        }}
                                    >
                                        <span className="button__icon-wrapper" aria-hidden="true">
                                            <svg className="button__icon-svg" viewBox="0 0 14 15">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                            </svg>
                                            <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                            </svg>
                                        </span>
                                        <span className="button__text">1BHK Details and Cost</span>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* 2 BHK */}
                        <article
                            className="card"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            data-aos-duration="600"
                            role="button"
                            tabIndex={0}
                            aria-label="Open 2 BHK details"
                            onClick={(e) => onCardActivate(e, 1)}
                            onKeyDown={(e) => onCardKeyDown(e, 1)}
                        >
                            <div
                                className="card-media"
                                role="img"
                                aria-label="2 BHK sample image"
                                style={{ backgroundImage: `url(${img2})` }}
                            />
                            <div className="card-body">
                                <h3 className="card-title">2 BHK Standard Package</h3>
                                <p className="card-desc">
                                    Smart, space-saving preset themes: Same Design Philosophy just for bigger homes.
                                </p>

                                <div className="card-actions">
                                    <button
                                        className="button"
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setModalPackageId(1);
                                            setModalOpen(true);
                                        }}
                                    >
                                        <span className="button__icon-wrapper" aria-hidden="true">
                                            <svg className="button__icon-svg" viewBox="0 0 14 15">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                            </svg>
                                            <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                            </svg>
                                        </span>
                                        <span className="button__text">2BHK Details and Cost</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* BOTTOM CARD */}
                    <div
                        className="cards-bottom"
                        role="list"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="650"
                    >
                        <article
                            className="card card--single"
                            role="button"
                            tabIndex={0}
                            aria-label="Open estimator"
                            onClick={(e) => onCardActivate(e, 2)}
                            onKeyDown={(e) => onCardKeyDown(e, 2)}
                        >
                            <div
                                className="card-media"
                                role="img"
                                aria-label="Build in your budget sample image"
                                style={{ backgroundImage: `url(${img3})` }}
                            />
                            <div className="card-body">
                                <h3 className="card-title">Build To Your Budget</h3>
                                <p className="card-desc">
                                    Choose your budget and instantly see what scope of work is possible for your home.
                                </p>

                                <div className="card-actions">
                                    <button
                                        className="button"
                                        type="button"
                                        onClick={() => setEstimatorOpen(true)}
                                    >
                                        <span className="button__icon-wrapper" aria-hidden="true">
                                            <svg className="button__icon-svg" viewBox="0 0 14 15">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                            </svg>
                                            <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                            </svg>
                                        </span>
                                        <span className="button__text">Get In Touch</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            {/* Modals (NO AOS) */}
            <ContactForm
                open={estimatorOpen}
                onClose={() => setEstimatorOpen(false)}
            />

            <PackageModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                packageId={modalPackageId}
            />
        </section>

    );

}
