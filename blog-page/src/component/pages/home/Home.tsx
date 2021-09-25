import React from "react";
import Profile from "../../ressources/images/HumDerp.png"

import "./Home.css"

export default function Home() {
    return(
        <section className="profile-section">

            <div className="profile">
                <img className="profile-pic" src={Profile} alt=""/>
                <p className="description">Student, Punk and Nerd.</p>
            <ul className="social-links">
                <li>
                    <a href="https://github.com/hummr01">Github</a>
                </li>
                <li>
                    <a href="https://twitter.com/hummr01">Twitter</a>
                </li>
                <li>
                    <a href="https://www.twitch.tv/hummr01">Twitch</a>
                </li>

            </ul>

            </div>

        </section>
    )
}