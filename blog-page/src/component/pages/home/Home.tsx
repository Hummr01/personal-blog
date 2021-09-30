import React from "react";
import Profile from "../../ressources/images/HumDerp.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";

import "./Home.css"

export default function Home() {
    return (
        <section className="profile-section">

            <div className="profile">
                <img className="profile-pic" src={Profile} alt=""/>
                <p className="description">Student, Punk and Nerd.</p>
                <ul className="social-links">
                    <li className="social-logo">
                        <a href="https://github.com/hummr01" target={"_blank"} rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className={"icon"}/>
                        </a>
                    </li>
                    <li className="social-logo">
                        <a href="https://twitter.com/hummr01" target={"_blank"} rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="icon"/>
                        </a>
                    </li>
                    <li className="social-logo">
                        <a href="https://www.twitch.tv/hummr01" target={"_blank"} rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitch} className={"icon"}/>
                        </a>
                    </li>

                </ul>

            </div>

        </section>
    )
}