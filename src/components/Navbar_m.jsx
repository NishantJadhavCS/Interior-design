import "./css/Navbar_m.css";
import logo from "../assets/logo.png";

export default function Navbar_m() {
    return (
        <header className="maintenance-header">
            <div className="maintenance-inner">
                <a href="/" className="maintenance-brand">
                    <img src={logo} alt="Contrive Designs" className="maintenance-logo" />
                </a>
            </div>
        </header>
    );
}
