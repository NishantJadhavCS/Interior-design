import { useState, useEffect, useRef } from "react";
import "./css/Hero.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

export default function Hero() {
    const slides = [
        {
            image: hero1,
            title: "Affordable 1 & 2 BHK Interiors — Ready in Just 40 Days.",
            buttonText: "View Packages",
            buttonLink: "#packages",
        },
        {
            image: hero2,
            title: "Preset or Custom Interior Solutions for Every Budget.",
            buttonText: "Get Free Consultation",
            buttonLink: "#contact",
        },
    ];

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const nextSlide = () =>
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    // Auto-slide logic
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(nextSlide, 6000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    // Handle hover events to pause/resume auto sliding
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <section
            className="hero-section"
            id="home"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <h1 className="hero-title">{slide.title}</h1>
                        <a href={slide.buttonLink} className="hero-btn">
                            {slide.buttonText}
                        </a>
                    </div>
                </div>
            ))}

            {/* Navigation arrows */}
            <button className="hero-arrow left" onClick={prevSlide} aria-label="Previous slide">
                &#10094;
            </button>
            <button className="hero-arrow right" onClick={nextSlide} aria-label="Next slide">
                &#10095;
            </button>
        </section>
    );
}
