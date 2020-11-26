import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar bg-info p-3">
            <Link className="react__link" to="/">
                <h4 style={{ color: "white" }}>Salim Mammadov</h4>
            </Link>
            <Link className="react__link" to="/blogs">
                Blogs
            </Link>
        </nav>
    );
}

export default Navbar;
