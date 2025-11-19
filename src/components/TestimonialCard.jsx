import React from "react";
import "./css/testimonial.css";

export default function TestimonialCard({
    quote,
    name,
    city,
    rating = 5, // developer sets this
}) {
    return (
        <div className="testimonial-card">
            <div className="quote-icon">❝</div>

            <p className="quote">{quote}</p>

            {/* Stars (not editable) */}
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= rating ? "filled" : ""}`}
                    >
                        ★
                    </span>
                ))}
            </div>

            <div className="profile">
                <div className="name">{name}</div>
                <div className="city">{city}</div>
            </div>
        </div>
    );
}