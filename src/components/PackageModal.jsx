// PackageModal.jsx
import React, { useEffect, useRef } from "react";
import "./css/PackageModal.css";

const PHONE = "+919820555659";
const whatsappBase = (msg) =>
    `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

const PACKAGE_LIST = [
    {
        id: 0,
        title: "1 BHK Standard Package (Upto 500 Sq.Ft)",
        description: "Smart, space-saving preset themes curated for compact living.",
        price: "₹4,24,999/-",
        tableHeaders: ["Inclusion(s)", "Specification"],
        tableRows: [
            { "Inclusion(s)": "TV Unit", Specification: "Size - 8.5' x 6' - Merino Laminate, Century Ply" },
            { "Inclusion(s)": "Modular Kitchen", Specification: "Size - 6' x 2' - Merino PVC Laminate, Century Ply, Hettich channels" },
            { "Inclusion(s)": "Wardrobe", Specification: "Size - 6' x 7' - Merino Laminate, Century Ply" },
            { "Inclusion(s)": "Bed (with Headboard)", Specification: "Size - 6' x 5' & 3' x 5'(Headboard) - Merino Laminate, Century Ply" },
            { "Inclusion(s)": "Dressing Table", Specification: "Size - 6' x 1.5' - Merino Laminate, Century Ply" },
            { "Inclusion(s)": "False Ceiling", Specification: "GYPROC Gypsum board & Channels" },
            { "Inclusion(s)": "Painting", Specification: "Asian Paint (Putti + Primer +2 coat paint)" },
        ],
    },
    {
        id: 1,
        title: "2 BHK Standard Package (Upto 700 Sq.Ft)",
        description: "Turnkey preset designs curated by our team — built for style, function and fast delivery.",
        price: "₹5,94,999/-",
        tableHeaders: ["Inclusion(s)", "Specification"],
        tableRows: [
            {
                "Inclusion(s)": "TV Unit",
                Specification: "Size - 8.5' x 6' - Merino Laminate, Century Ply",
            },
            {
                "Inclusion(s)": "Modular Kitchen",
                Specification: "Size - 6' x 2' - Merino PVC Laminate, Century Ply, Hettich channels",
            },
            {
                "Inclusion(s)": "Wardrobe x2",
                Specification: "Size - 6' x 7' - Merino Laminate, Century Ply",
            },
            {
                "Inclusion(s)": "Bed (with Headboard) x2",
                Specification: "Size - 6' x 5' & 3' x 5'(Headboard) - Merino Laminate, Century Ply",
            },
            {
                "Inclusion(s)": "Dressing Table x2",
                Specification: "Size - 6' x 1.5' - Merino Laminate, Century Ply",
            },
            {
                "Inclusion(s)": "False Ceiling",
                Specification: "GYPROC Gypsum board & Channels",
            },
            {
                "Inclusion(s)": "Painting",
                Specification: "Asian Paint (Putti + Primer +2 coat paint)",
            }
        ]
    }
];

export default function PackageModal({ open, onClose, packageId }) {
    const overlayRef = useRef(null);
    const closeBtnRef = useRef(null);
    const previouslyFocused = useRef(null);

    useEffect(() => {
        if (!open) return;
        previouslyFocused.current = document.activeElement;
        document.body.style.overflow = "hidden";
        closeBtnRef.current && closeBtnRef.current.focus();
        return () => {
            document.body.style.overflow = "";
            try { previouslyFocused.current && previouslyFocused.current.focus(); } catch { }
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    const data = PACKAGE_LIST.find((p) => p.id === packageId) || PACKAGE_LIST[0];
    const rows = data.tableRows || [];

    function highlightText(text = "") {
        return text.replace(/\bx2\b/g, "<strong>x2</strong>");
    }

    return (
        <div
            className="package-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={data.title}
            ref={overlayRef}
            onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
            <div className="package-modal" role="document">
                <button
                    ref={closeBtnRef}
                    className="package-modal__close"
                    onClick={onClose}
                    aria-label="Close dialog"
                >
                    ✕
                </button>

                <div className="package-modal__header-content">
                    <h3 className="package-modal__title">{data.title}</h3>
                    <div className="package-modal__price-badge">
                        <span className="price-label">Just At</span>
                        <span className="price-value">{data.price}</span>
                        <span className="price-label">Only</span>
                    </div>
                </div>

                <div className="package-modal__body">
                    <div className="package-modal__table-wrap">
                        <table className="package-modal__table">
                            <thead>
                                <tr>
                                    <th>Inclusion</th>
                                    <th>Specifications</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, i) => (
                                    <tr key={i}>
                                        <td className="col-inclusion">
                                            {r["Inclusion(s)"].replace("x2", "")}
                                            {r["Inclusion(s)"].includes("x2") && <span className="tag-x2">x2</span>}
                                        </td>
                                        <td
                                            className="col-spec"
                                            dangerouslySetInnerHTML={{ __html: highlightText(r["Specification"]) }}
                                        />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="package-note">
                        <p className="note-text">
                            (Door Handle, T-Patti, Rafters and color selection of Paint and Laminate will be provided by the customer.)
                        </p>
                        <p className="highlight-note">
                            Note: Any work beyond the listed scope will be charged separately and will void the 40-day delivery guarantee.
                        </p>
                    </div>

                    <div className="package-modal__actions">
                        <a
                            className="button button-cta"
                            href={whatsappBase(`Hi, I'm interested in the ${data.title}. Please share inclusions, sample designs and pricing.`)}
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
                            <span className="button__text">Get In Touch</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
