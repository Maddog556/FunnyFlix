import React from "react";
import NavBar from "./Navbar";
import '../styles/About.css'

function About(){
   
    return(
        <div className="About-wrapper">
            <NavBar/>
            <div className="about">    
                <h1 className="about-title">FunnyFlix</h1>
                <p className="P1">FunnyFlix, was our way of bring the Newest Movies and TV show rating to you.
                We plan to make more changes and to bring you more options in the near future.
                </p>

                <h2 className="Thank-you">We hope that you love our Website 
                Thank You for Visting.</h2>
                    <div className="contact">
                        <p>Contact infomation</p>
                        <p> Email: FunnyFlix@Gmail.com</p>
                        <p> Phone: 555-555-5555</p>
                    </div>
            </div>
        </div>
    )
}

export default About