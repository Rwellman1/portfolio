import React from "react"
import linkedIn from "./images/linkedin-icon.png"
export default function WhatIDo() {

    return(
        <section id="wid" className="page-container wid-container">
           <div className="nav-container ">
                <h2 className="nav-title title2">What I do</h2>
                <nav className="navbar wid-nav">
                    <ul className>
                        <a href="#portfolio"><li>Portfolio</li></a>
                        <a href="#about"><li>About Me</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                    <div className="nav-logo">
                        <h3>CV</h3>
                        <a href="https://www.linkedin.com/in/ryan-wellman-04952b227/"> 
                            <img src={linkedIn} alt="linkedin logo"/>
                        </a>
                    </div>
                </nav>
            </div> 
            <div className="wid-text">
                <h3>Frontend development</h3>

                <p>I specialise in React.</p>
            </div>
        </section>

    )
}