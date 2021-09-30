import React from "react";
import {Link} from "react-router-dom";


import "./Navbar.css"


let menuOpen: boolean = true;


function menuClick() {

    menuOpen = !menuOpen;

}

export default function Navbar() {
    return (
        <nav>
            <div className={`${menuOpen ? "open" : ""} hamburger-menu`} onClick={() => menuClick()}>
                <span className="hamburger"/>
            </div>
            <ul className={`${menuOpen ? "open" : ""} nav-links`}>
                <li className="list-item">
                    <Link to='/' className="link">
                        Home
                    </Link>
                </li>
                <li className="list-item">
                    <Link to='/about' className="link">
                        About
                    </Link>
                </li>
                <li className="list-item">
                    <Link to='/blog' className="link">
                        Blog
                    </Link>
                </li>
                <li className="list-item">
                    <Link to='/contact' className="link">
                        Contact
                    </Link>
                </li>

        </ul>

</nav>
    )

}