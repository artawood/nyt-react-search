import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <div>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                        }
                    >
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/saved"
                        className={
                        window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
                        }
                    >
                        Saved Articles
                    </Link>
                </li>
            </ul>
        </nav>
    </div>

);

export default Navbar;