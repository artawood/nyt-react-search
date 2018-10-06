import React from "react";
import 'Navbar.css';

const Navbar = () => (
    <div>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Saved Articles</a>
                </li>
            </ul>
        </nav>
    </div>

);

export default Navbar;