import React, {useState} from "react";
import {Link} from "react-router-dom";


import "./Navbar.css"


export default function Navbar() {

    const [openMenu, setMenu] = useState(false);


    return (
        <nav>
            <div className={` ${openMenu ? "hamburger-menu open" : "hamburger-menu"}`}
                 onClick={() => setMenu(!openMenu)}>
                <span className="hamburger"/>
            </div>
            <ul className={`${openMenu ? "open" : ""} nav-links`}>
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
