import { useEffect, useRef } from "react";
import "./css/ContactForm.css";

export default function ContactForm({ open, onClose }) {
    const overlayRef = useRef(null);
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        closeBtnRef.current?.focus();

        const escClose = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", escClose);
        return () => document.removeEventListener("keydown", escClose);
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="contact-modal-overlay"
            ref={overlayRef}
            onMouseDown={(e) => e.target === overlayRef.current && onClose()}
        >
            <div className="contact-modal">
                <header className="contact-modal-head">
                    <h3>Contact Form</h3>
                    <button
                        ref={closeBtnRef}
                        className="package-modal__close"
                        onClick={onClose}
                        aria-label="Close dialog"
                        title="Close"
                    >
                        ✕
                    </button>
                </header>

                <form
                    action="https://formsubmit.co/nishantjadhav.cs@gmail.com"
                    method="POST"
                    className="contact-form"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="New Website Enquiry" />

                    <input type="hidden" name="_next" value="https://www.contrivedesigns.com/" />

                    <label>
                        Name
                        <input type="text" name="name" placeholder="Enter your name" required />
                    </label>

                    <label>
                        Email
                        <input type="email" name="_replyto" placeholder="Enter your email address" required />
                    </label>

                    <label>
                        Contact Number
                        <input type="tel" name="phone" placeholder="Enter your phone number" required />
                    </label>

                    <label>
                        Query
                        <textarea
                            name="query"
                            rows="4"
                            placeholder="Enter your message or requirement"
                            required
                        ></textarea>
                    </label>

                    {/* styled like PackageModal CTA */}
                    <button type="submit" className="button send-btn-like-modal">
                        <span className="button__icon-wrapper" aria-hidden="true">
                            <svg className="button__icon-svg" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                            </svg>

                            <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                            </svg>
                        </span>

                        <span className="button__text">Send Message</span>
                    </button>

                </form>
            </div>
        </div>
    );

}
