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
    const [dragOffset, setDragOffset] = useState(0);
    const intervalRef = useRef(null);

    // pointer refs
    const pointerStartX = useRef(0);
    const pointerStartY = useRef(0);
    const pointerIdRef = useRef(null);
    const isPointerDown = useRef(false);
    const isDragging = useRef(false);

    const sectionRef = useRef(null);
    const slideCount = slides.length;

    const nextSlide = () => setCurrent((p) => (p === slideCount - 1 ? 0 : p + 1));
    const prevSlide = () => setCurrent((p) => (p === 0 ? slideCount - 1 : p - 1));

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(nextSlide, 6000);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isPaused]);

    const containerWidth = () => (sectionRef.current ? sectionRef.current.clientWidth : window.innerWidth);

    // --- Helper to detect interactive targets. If user pressed an interactive element,
    //     we DON'T start a drag (so arrow clicks, links, inputs, etc. remain functional).
    const isInteractiveTarget = (target) => {
        if (!target) return false;
        const interactive = target.closest && (target.closest("button, a, input, textarea, select, label"));
        return !!interactive;
    };

    const onPointerDown = (e) => {
        // Ignore right-click
        if (e.pointerType === "mouse" && e.button !== 0) return;

        // If user pressed a button/link/form control — don't start a drag.
        if (isInteractiveTarget(e.target)) return;

        pointerIdRef.current = e.pointerId;
        isPointerDown.current = true;
        isDragging.current = false;
        pointerStartX.current = e.clientX;
        pointerStartY.current = e.clientY;
        setIsPaused(true);
        setDragOffset(0);

        // capture on the section itself (if available)
        if (sectionRef.current && sectionRef.current.setPointerCapture) {
            try {
                sectionRef.current.setPointerCapture(e.pointerId);
            } catch (err) {
                // ignore
            }
        }

        sectionRef.current && sectionRef.current.classList.add("is-dragging");
    };

    const onPointerMove = (e) => {
        if (!isPointerDown.current) return;
        if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;

        const dx = e.clientX - pointerStartX.current;
        const dy = e.clientY - pointerStartY.current;

        if (!isDragging.current) {
            if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
                isDragging.current = true;
            } else {
                return;
            }
        }

        e.preventDefault();

        const width = containerWidth() || 1;
        const leftEdge = current === 0;
        const rightEdge = current === slideCount - 1;
        let offset = dx;
        if ((leftEdge && dx > 0) || (rightEdge && dx < 0)) offset = dx * 0.35;

        setDragOffset(offset);
    };

    const finishPointer = (e) => {
        isPointerDown.current = false;
        pointerIdRef.current = null;
        isDragging.current = false;
        setDragOffset(0);
        sectionRef.current && sectionRef.current.classList.remove("is-dragging");
        setTimeout(() => setIsPaused(false), 80);
        if (sectionRef.current && sectionRef.current.releasePointerCapture) {
            try {
                sectionRef.current.releasePointerCapture(e?.pointerId);
            } catch (err) { }
        }
    };

    const onPointerUp = (e) => {
        // ignore if not the capturing pointer
        if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;

        const dx = e.clientX - pointerStartX.current;
        const threshold = Math.max(50, (containerWidth() || 300) * 0.12);

        if (isDragging.current) {
            if (dx > threshold) prevSlide();
            else if (dx < -threshold) nextSlide();
        }

        finishPointer(e);
    };

    const onPointerCancel = (e) => finishPointer(e);
    const onLostPointerCapture = (e) => finishPointer(e);

    // Render slides positioned horizontally using translateX + dragOffset (js sets style)
    const renderSlides = () => {
        const width = containerWidth() || 1;
        const dragPercent = (dragOffset / width) * 100;

        return slides.map((slide, index) => {
            let relative = index - current;
            if (relative > slideCount / 2) relative -= slideCount;
            if (relative < -slideCount / 2) relative += slideCount;

            const translate = relative * 100 + dragPercent;
            const style = {
                transform: `translateX(${translate}%)`,
                backgroundImage: `url(${slide.image})`,
            };

            return (
                <div
                    key={index}
                    className={`hero-slide ${index === current ? "active" : ""}`}
                    style={style}
                    aria-hidden={index === current ? "false" : "true"}
                >
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <h1 className="hero-title">{slide.title}</h1>
                        <a href={slide.buttonLink} className="hero-btn">
                            {slide.buttonText}
                        </a>
                    </div>
                </div>
            );
        });
    };

    return (
        <section
            className="hero-section"
            id="home"
            ref={sectionRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onLostPointerCapture={onLostPointerCapture}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Home hero carousel"
        >
            {renderSlides()}

            {/* arrows — note: click/press on these are interactive so onPointerDown ignores them */}
            <button className="hero-arrow left" onClick={prevSlide} aria-label="Previous slide" type="button">
                &#10094;
            </button>
            <button className="hero-arrow right" onClick={nextSlide} aria-label="Next slide" type="button">
                &#10095;
            </button>

            {/* dots */}
            <div className="hero-dots" role="tablist" aria-label="Slide indicators">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`hero-dot ${idx === current ? "active" : ""}`}
                        aria-label={`Go to slide ${idx + 1}`}
                        aria-selected={idx === current}
                        type="button"
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </section>
    );
}
