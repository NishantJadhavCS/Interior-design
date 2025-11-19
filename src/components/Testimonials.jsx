import TestimonialCard from "./TestimonialCard";
import "./css/testimonial.css";

export default function Testimonials() {
    return (
        <div>
            <div className="testimonials-header" id="testimonials">
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">
                    Hear from some of our satisfied customers who have transformed their
                    spaces with our interior design expertise.
                </p>
            </div>

            <div className="testimonials-section">
                <TestimonialCard
                    quote="The team completely transformed my living room. Their attention to detail and understanding of my style was outstanding."
                    name="RAHUL MEHTA"
                    city="Mumbai"
                    rating={5}
                />

                <TestimonialCard
                    quote="Beautiful designs and great execution. They made my 2BHK feel more spacious and modern without overspending."
                    name="PRIYA SHARMA"
                    city="Bangalore"
                    rating={4}
                />

                <TestimonialCard
                    quote="Their sense of aesthetics and space planning is unmatched. My office looks premium and has improved productivity."
                    name="SUHASH SHIRDE"
                    city="Mumbai"
                    rating={5}
                />

            </div>
        </div>
    );
}