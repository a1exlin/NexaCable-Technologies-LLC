import React from "react"
import { GoArrowRight } from "react-icons/go";
import logo from '../img/home-img.jpg';

// const button = document.querySelector("#button");

// button.addEventListener("click", function() {
//   // Your code here
// });

function home() {
    return (

        <div>

            <div className="home-img-wrapper">
                <img src={logo} alt-="home-image" className='home-img'/>
            </div>
            
            <div className="home">
                <h1 className="header1">NexaCable</h1>
                <h1 className="header2">Technologies</h1>
                <p className="provide-txt">We provide commercial network and security systems installation</p>
                <p className="provide-txt2">for large and small businesses or new residential constructions</p>
            </div>
            
            <button className="quote">REQUEST A QUOTE<GoArrowRight className="arrow" /></button>
        </div>
    )
}



export default home;

