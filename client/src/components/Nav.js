import React from "react";
import "../App.css"
function Nav() {
    return (
        <nav className="navbar">
            <h3 className="navbar-brand" href="/">
                React Books
            </h3>
            <a className="navbar-brand" href="/">
                Search
            </a>
            <a className="navbar-brand" href="/saved">
                Saved
            </a>
        </nav>
    );
}

export default Nav;
