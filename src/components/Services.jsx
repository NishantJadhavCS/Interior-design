import "./css/Services.css";
import React, { useEffect, useState } from "react";

import img1 from "../assets/1bhk.jpg";
import img2 from "../assets/2bhk.jpg";
import img3 from "../assets/budget.jpg";
import FloatingEstimator from "./FloatingEstimator";

export default function Services() {
    const [estimatorOpen, setEstimatorOpen] = useState(false);

    // helper for whatsapp links
    const whatsappBase = (msg) =>
        `https://wa.me/${"+918928755993".replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

    useEffect(() => {
        // only activate behavior on small screens where cards are stacked
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

        if (idx === 0) {
            const msg = "Hi, I'm interested in the 1 BHK Starter Package. Please share inclusions, sample designs and pricing.";
            window.open(whatsappBase(msg), "_blank", "noopener,noreferrer");
        } else if (idx === 1) {
            const msg = "Hi, I want details about the 2 BHK Signature Package — timeline, inclusions and pricing.";
            window.open(whatsappBase(msg), "_blank", "noopener,noreferrer");
        } else if (idx === 2) {
            setEstimatorOpen(true);
        }
    };

    // keyboard support: Enter / Space activates the card
    const onCardKeyDown = (e, idx) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onCardActivate(e, idx);
        }
    };

    return (
        <section className="services-section" id="packages" aria-labelledby="services-title">
            <div className="services-inner">
                <header className="services-head">
                    <h2 id="services-title">Interior Design Packages</h2>
                    <p className="services-sub">
                        Preset, budget-friendly interior solutions for 1 & 2 BHK homes. Choose a ready design for fast delivery or build a custom plan to fit
                        your budget.
                    </p>
                </header>

                <div className="cards">
                    {/* 1 BHK */}
                    <article
                        className="card"
                        role="button"
                        tabIndex={0}
                        aria-label="Open 1 BHK details"
                        onClick={(e) => onCardActivate(e, 0)}
                        onKeyDown={(e) => onCardKeyDown(e, 0)}
                    >
                        <div className="card-media" role="img" aria-label="1 BHK sample image" style={{ backgroundImage: `url(${img1})` }} />
                        <div className="card-body">
                            <h3 className="card-title">1 BHK — Starter Package</h3>
                            <p className="card-desc">Smart, space-saving preset themes: Modern · Minimal · Cozy — optimized for compact living.</p>
                            <p className="card-price">Packages starting at <strong>₹1,25,000</strong></p>

                            <div className="card-actions">
                                <a
                                    className="button"
                                    href={whatsappBase("Hi, I'm interested in the 1 BHK Starter Package. Please share inclusions, sample designs and pricing.")}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="button__icon-wrapper" aria-hidden="true">
                                        <svg className="button__icon-svg" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                        </svg>

                                        <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                        </svg>
                                    </span>

                                    <span className="button__text">Get 1BHK Details</span>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* 2 BHK */}
                    <article
                        className="card"
                        role="button"
                        tabIndex={0}
                        aria-label="Open 2 BHK details"
                        onClick={(e) => onCardActivate(e, 1)}
                        onKeyDown={(e) => onCardKeyDown(e, 1)}
                    >
                        <div className="card-media" role="img" aria-label="2 BHK sample image" style={{ backgroundImage: `url(${img2})` }} />
                        <div className="card-body">
                            <h3 className="card-title">2 BHK — Signature Package</h3>
                            <p className="card-desc">Turnkey preset designs curated by our team — built for style, function and fast delivery.</p>
                            <p className="card-price">Fixed packages from <strong>₹ 2,50,000</strong></p>

                            <div className="card-actions">
                                <a
                                    className="button"
                                    href={whatsappBase("Hi, I want details about the 2 BHK Signature Package — timeline, inclusions and pricing.")}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="button__icon-wrapper" aria-hidden="true">
                                        <svg className="button__icon-svg" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                        </svg>
                                        <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                        </svg>
                                    </span>
                                    <span className="button__text">Request 2BHK Details</span>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Build in your budget */}
                    <article
                        className="card"
                        role="button"
                        tabIndex={0}
                        aria-label="Open estimator"
                        onClick={(e) => onCardActivate(e, 2)}
                        onKeyDown={(e) => onCardKeyDown(e, 2)}
                    >
                        <div className="card-media" role="img" aria-label="Build in your budget sample image" style={{ backgroundImage: `url(${img3})` }} />
                        <div className="card-body">
                            <h3 className="card-title">Build To Your Budget</h3>
                            <p className="card-desc">Choose your budget and instantly see what scope of work is possible for your home.</p>

                            <div className="card-actions">
                                <button
                                    className="button"
                                    type="button"
                                    onClick={() => setEstimatorOpen(true)}
                                >
                                    <span className="button__icon-wrapper" aria-hidden="true">
                                        <svg className="button__icon-svg" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                        </svg>
                                        <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                        </svg>
                                    </span>
                                    <span className="button__text">Calculate My Estimate</span>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {/* Render the FloatingEstimator when open */}
            {estimatorOpen && <FloatingEstimator onClose={() => setEstimatorOpen(false)} />}
        </section>
    );
}
