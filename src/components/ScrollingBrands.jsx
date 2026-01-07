import React from "react";
import "./css/ScrollingBrands.css";
import BirlaWhite from "../assets/brands/birla-white.png";
import Berger from "../assets/brands/berger.png";
import CenturyPly from "../assets/brands/century-ply.png";
import Hettich from "../assets/brands/hettich.png";
import AsianPaints from "../assets/brands/asian-paints.png";
import Polycab from "../assets/brands/polycab.png";
import Jaguar from "../assets/brands/jaguar.png";
import Kohler from "../assets/brands/kohler.png";
import Greenply from "../assets/brands/greenply.png";
import Nerolac from "../assets/brands/nerolac.png";

const brands = [
    { src: BirlaWhite, alt: "Birla White", w: 180, h: 100 },
    { src: Berger, alt: "Berger", w: 120, h: 100 },
    { src: CenturyPly, alt: "Century Ply", w: 150, h: 100 },
    { src: Hettich, alt: "Hettich", w: 130, h: 100 },
    { src: AsianPaints, alt: "Asian Paints", w: 150, h: 100 },
    { src: Polycab, alt: "Polycab", w: 135, h: 100 },
    { src: Jaguar, alt: "Jaguar", w: 135, h: 100 },
    { src: Kohler, alt: "Kohler", w: 135, h: 100 },
    { src: Greenply, alt: "Greenply", w: 140, h: 160 },
    { src: Nerolac, alt: "Nerolac", w: 140, h: 160 },
];



export default function ScrollingBrands() {
    return (
        <section className="scrolling-brands">

            {/* SECTION TITLE */}
            <h3
                className="scrolling-brands__title"
                data-aos="fade-up"
                data-aos-duration="600"
            >
                Our Trusted Brands
            </h3>

            {/* SCROLLING WRAPPER */}
            <div
                className="scrolling-brands__wrapper"
                data-aos="fade-up"
                data-aos-delay="120"
                data-aos-duration="600"
            >
                <div className="scrolling-brands__track">
                    {Array.from({ length: 6 })
                        .flatMap(() => brands)
                        .map((brand, idx) => (
                            <div className="scrolling-brands__item" key={idx}>
                                <img
                                    src={brand.src}
                                    alt={brand.alt}
                                    loading="lazy"
                                    style={{
                                        width: `${brand.w}px`,
                                        height: `${brand.h}px`,
                                    }}
                                />
                            </div>
                        ))}
                </div>
            </div>

        </section>
    );

}