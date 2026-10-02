import "./Footer.css"
import { NavLink } from "react-router"

export default function Footer() {

    return (
        <footer className="main-footer test">
            <div className="left-footer">
                <img className="hand" src="src/assets/Magic Want.png"></img>
            </div>
            <div className="middle-footer">
                <div className="footer-title">
                    <div className="left-dash"></div>
                    <div className="footer-text">magic in more hands</div>
                    <div className="right-dash"></div>
                </div>
                <div className="footer-links">
                    <NavLink to="/" className="tos">TOS</NavLink> •
                    <NavLink to="/" className="privacy-policy">Privacy Policy</NavLink> •
                    <NavLink to="/" className="inquiries">Inquiries</NavLink>
                </div>
            </div>
            <div className="right-footer">
                <img className="note" src="src/assets/Footer Note.png"></img>
            </div>
        </footer>
    )
}