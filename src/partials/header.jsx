import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <>
            <header>
                <Link to="/">
                <img src="" alt="profile photo" />
                <span>Lalaine Hines</span>
                </Link>
                <span>
                    Crafting websites that are | simple | functional | beautiful
                </span>
                <div className="header-links">
                    <div>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <div className="background"></div>
                    </div>
                    <div>
                        <a
                        href="https:''github.com/LalaineHines"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="My Github"
                        >
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a
                        href="https://www.linkedin.com/in/LalaineHines"
                        target="_blank"
                        rel="noopener noreferrer"
                        arai-label="My Linkedin"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a
                        href="https://www.instragram.com/lalaine__hines/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="My Instagram"
                        >
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <div className="background"></div>
                    </div>
                </div>
            </header>
        </>
    );
}