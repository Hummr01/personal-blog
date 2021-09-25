import React from "react";
import {Link} from "react-router-dom";


import "./Navbar.css"



export default function Navbar() {
    return(
<nav>
        <ul>
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