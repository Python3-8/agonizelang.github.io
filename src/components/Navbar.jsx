import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Agonize
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/how-to">
                                How-To
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/install">
                                Installation
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                id="try-it-link"
                                className="nav-link"
                                to="/try-it"
                            >
                                Try It
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        document.getElementById("try-it-link").click()
                    }
                >
                    Try <strong>Agonize</strong> Online
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
