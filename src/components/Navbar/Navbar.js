import React from "react";
import "./style.css";
import Logo from "./logo/mwlogo.png"

function Navbar() {
    return (
        <nav className="mb-1 navbar navbar-expand-lg danger-color-dark lighten-1" style={{ color: "#fafafa" }}>
            <h5 className="navbar-brand" style={{ fontSize: "33px" }}>Education Analytics Assessment</h5>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>Schools
                        </a>

                        <div className="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
                            <a className="dropdown-item" href="/">University of Wisconsin-Madison</a>
                            <a className="dropdown-item" href="#">Up and coming schools!</a>
                        </div>
                    </li>
                </ul>
                <img src={Logo}
                    alt="avatar image" height="130"></img>
            </div>
        </nav>
    )
}

export default Navbar;