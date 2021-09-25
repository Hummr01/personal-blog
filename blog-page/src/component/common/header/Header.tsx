import React from "react";
import { Navbar } from "../../common"

import "./Header.css"

export default function Header (){

    return(

        <header>
       <section className="top">
           <section className="logo">
               <p>Hummr</p>
           </section>

           <section className="navbar">
               {<Navbar/>}
           </section>
       </section>

        </header>
            )


}