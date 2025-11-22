import "./css/Footer_m.css";

export default function Footer_m() {
    const year = new Date().getFullYear();

    return (
        <footer className="maintenance-footer" role="contentinfo">
            <div className="maintenance-footer-bottom">
                © {year} Contrive Designs — All Rights Reserved
            </div>
        </footer>
    );
}
