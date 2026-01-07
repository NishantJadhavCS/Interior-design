import React, { useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import "./css/testimonial.css";

export default function Testimonials() {

    useEffect(() => {
        let rafId = null;
        let ticking = false;

        // This function calculates proximity to center of viewport
        function tick() {
            ticking = false;

            // Only relevant for mobile layout where these are in a carousel
            // Check breakpoint matching CSS (max-width: 650px)
            if (window.innerWidth > 650) {
                // Clean up desktop view potentially
                document.querySelectorAll(".testimonial-card.in-view").forEach(el => el.classList.remove("in-view"));
                return;
            }

            const cards = Array.from(document.querySelectorAll(".testimonial-card"));
            if (!cards.length) return;

            const vwCenter = window.innerWidth / 2;

            // Map cards to their distance from horizontal center
            const distances = cards.map((el) => {
                const rect = el.getBoundingClientRect();
                // Horizontal center of the element
                const elCenter = rect.left + rect.width / 2;
                return {
                    el,
                    distance: Math.abs(elCenter - vwCenter)
                };
            });

            distances.sort((a, b) => a.distance - b.distance);
            const closest = distances[0];

            // Define threshold (e.g., if within 35% of screen width from center)
            const threshold = window.innerWidth * 0.40;

            // Remove class from all
            cards.forEach((c) => c.classList.remove("in-view"));

            // Add class to closest if within threshold
            if (closest && closest.distance <= threshold) {
                closest.el.classList.add("in-view");
            }
        }

        function onScrollOrResize() {
            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(tick);
            }
        }

        // Attach listeners
        // On mobile, the scroll is on the container ".testimonials-section"
        const scrollContainer = document.querySelector(".testimonials-section");

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", onScrollOrResize, { passive: true });
        }
        window.addEventListener("resize", onScrollOrResize);

        // Initial check
        onScrollOrResize();

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", onScrollOrResize);
            }
            window.removeEventListener("resize", onScrollOrResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div>
            {/* SECTION HEADER */}
            <div
                className="testimonials-header"
                id="testimonials"
                data-aos="fade-up"
                data-aos-duration="700"
            >
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">
                    Hear from some of our satisfied customers who have transformed their
                    spaces with our interior design expertise.
                </p>
            </div>

            {/* TESTIMONIALS */}
            <div className="testimonials-section">
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                >
                    <TestimonialCard
                        quote="Meeting the consultant alone gave me clear insights into the interior design process and helped me make confident decisions."
                        name="RUTUJA DESHMUKH"
                        city="Mumbai"
                        rating={5}
                    />
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    data-aos-duration="500"
                >
                    <TestimonialCard
                        quote="The team delivered thoughtful designs with smooth execution, making my 2BHK feel modern, spacious, and well within budget."
                        name="SANDEEP KULKARNI"
                        city="Navi Mumbai"
                        rating={4}
                    />
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="500"
                >
                    <TestimonialCard
                        quote="Their approach to design and space planning transformed my office into a premium workspace that feels productive and refined."
                        name="SUHASH SHIRDE"
                        city="Mumbai"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );

}