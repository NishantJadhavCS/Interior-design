import React from "react";
import "./css/Services.css";
import { useEffect } from "react";

// Replace these imports with your real assets
import img1 from "../assets/1bhk.jpg";
import img2 from "../assets/2bhk.jpg";
import img3 from "../assets/budget.jpg";

export default function Services() {
    const whatsappBase = (msg) =>
        `https://wa.me/${"+918928755993".replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    useEffect(() => {
        // only activate behavior on small screens where cards are stacked
        const mobileBreakpoint = 980;

        let rafId = null;
        let ticking = false;

        function tick() {
            ticking = false;
            // pick all visible cards
            const cards = Array.from(document.querySelectorAll(".cards .card"));
            if (!cards.length) return;

            const vhCenter = window.innerHeight / 2;

            // compute distance from each card's center to viewport center
            const distances = cards.map((el) => {
                const rect = el.getBoundingClientRect();
                const elCenter = rect.top + rect.height / 2;
                return { el, distance: Math.abs(elCenter - vhCenter), rectTop: rect.top, rectHeight: rect.height };
            });

            // choose the closest card to center
            distances.sort((a, b) => a.distance - b.distance);
            const closest = distances[0];

            // threshold: only activate if the card center is within some px of center
            // tweak threshold as needed (I recommend ~window.innerHeight * 0.28)
            const threshold = Math.max(120, window.innerHeight * 0.28);

            // remove class from all, then add to the chosen one if within threshold
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
    return (
        <section className="services-section" id="packages" aria-labelledby="services-title">
            <div className="services-inner">
                <header className="services-head">
                    <h2 id="services-title">Interior Design Packages</h2>
                    <p className="services-sub">
                        Preset, budget-friendly interior solutions for 1 & 2 BHK homes. Choose a ready design for fast delivery or build a custom plan to fit your budget.
                    </p>
                </header>

                <div className="cards">
                    {/* 1 BHK */}
                    <article className="card">
                        <div className="card-media" role="img" aria-label="1 BHK sample image" style={{ backgroundImage: `url(${img1})` }} />
                        <div className="card-body">
                            <h3 className="card-title">1 BHK — Starter Package</h3>
                            <p className="card-desc">Smart, space-saving preset themes: Modern · Minimal · Cozy — optimized for compact living.</p>
                            <p className="card-price">Packages starting at <strong>₹1,25,000</strong></p>

                            <div className="card-actions">
                                <a
                                    className="button"
                                    href={`https://wa.me/918928755993?text=${encodeURIComponent("Hi, I'm interested in the 1 BHK Starter Package. Please share inclusions, sample designs and pricing.")}`}
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
                    <article className="card">
                        <div className="card-media" role="img" aria-label="2 BHK sample image" style={{ backgroundImage: `url(${img2})` }} />
                        <div className="card-body">
                            <h3 className="card-title">2 BHK — Signature Package</h3>
                            <p className="card-desc">Turnkey preset designs curated by our team — built for style, function and fast delivery.</p>
                            <p className="card-price">Fixed packages from <strong>₹ 2,50,000</strong></p>

                            <div className="card-actions">
                                <a
                                    className="button"
                                    href={`https://wa.me/918928755993?text=${encodeURIComponent("Hi, I want details about the 2 BHK Signature Package — timeline, inclusions and pricing.")}`}
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
                    <article className="card">
                        <div className="card-media" role="img" aria-label="Build in your budget sample image" style={{ backgroundImage: `url(${img3})` }} />
                        <div className="card-body">
                            <h3 className="card-title">Build To Your Budget</h3>
                            <p className="card-desc">Choose your budget and instantly see what scope of work is possible for your home.</p>
                            {/* <p className="card-price">Choose your budget and instantly see what scope of work is possible for your home.</p> */}

                            <div className="card-actions">
                                <a
                                    className="button"
                                    href={`https://wa.me/918928755993?text=${encodeURIComponent("Hi, I'd like an estimate for my home budget")}`}
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
                                    <span className="button__text">Calculate My Estimate</span>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
