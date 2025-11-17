import React, { useEffect, useState } from "react";
import "./css/Highlights.css";

// Import GIF assets (adjust path if needed)
import ClockGif from "../assets/clock.gif";
import WalletGif from "../assets/wallet.gif";
import PalleteGif from "../assets/pallete.gif";
import PackageGif from "../assets/package.gif";

export default function Highlights() {
    const items = [
        {
            id: "delivery",
            icon: ClockGif,
            title: "40-Day Delivery Guarantee",
            desc: "On-time delivery or your money back.",
        },
        {
            id: "budget",
            icon: WalletGif,
            title: "Budget-Friendly Packages",
            desc: "Plans for every budget without compromise.",
        },
        {
            id: "curated",
            icon: PalleteGif,
            title: "Professionally Curated Designs",
            desc: "Designs made by experienced interior stylists.",
        },
        {
            id: "overview",
            icon: PackageGif,
            title: "Packages Overview",
            desc: "Clear scope, deliverables and pricing.",
        },
    ];

    // repeat more times on desktop for a smooth, fast loop
    const loopItems = Array(8).fill(items).flat(); // 4 * 8 = 32 cards

    // detect mobile viewport and update on resize
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // match the CSS breakpoint: mobile <= 599px
        const checkMobile = () => setIsMobile(window.innerWidth <= 599);

        // initial check
        checkMobile();

        // listener to keep things in sync when resizing
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // choose which set to render
    const displayedItems = isMobile ? items.slice(0, 4) : loopItems;

    return (
        <section className="highlights" aria-label="Highlights Section">
            {/* Heading */}
            <div className="highlights-heading">
                <h2 className="hi-title">Why Choose Us</h2>
                <p className="hi-subtitle">Experience a seamless and professional interior design process.</p>
            </div>

            <div className="highlights-inner">
                <div className="scroll-track" role="list">
                    {displayedItems.map((it, idx) => (
                        <article className="highlight-card" role="listitem" key={it.id + "-" + idx}>
                            {/* GIF ICON */}
                            <div className="icon-wrap">
                                <img src={it.icon} alt="" className="hi-gif" />
                            </div>

                            <div className="card-text">
                                <h3 className="card-title">{it.title}</h3>
                                <p className="card-desc">{it.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
