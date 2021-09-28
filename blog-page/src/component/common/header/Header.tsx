import React from "react";
import {Navbar} from "../../common"
import {Link} from "react-router-dom";

import "./Header.css"

export default function Header() {

    return (

        <header>
            <section className="top">
                <section className="logo">
                    <Link to='/' className="logo-link">
                        Hummr
                    </Link>
                </section>

           <section className="navbar">
               {<Navbar/>}
           </section>
       </section>

        </header>
            )


}