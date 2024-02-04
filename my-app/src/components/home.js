import React from "react"
import { GoArrowRight } from "react-icons/go";
import logo from '../img/home-img.jpg';

// const button = document.querySelector("#button");

// button.addEventListener("click", function() {
//   // Your code here
// });

function home() {
    return (

        <div className="home" >

    <img src={logo} alt-="home-image" className='home-img'/>
  
            <div className="home2">
                <h1 className="header1">NexaCable</h1>
                <h1 className="header2">Technologies</h1>
                <p1 className="provide-txt">We provide commercial network and security systems installation </p1>
                <p className="provide-txt2">for large and small businesses or new residential constructions </p>
                
            </div>
    
            <div className="service">


                <p className="quicktxt"> Quick service Request </p>

                <div className="sendtxt"> Send Inspection Request </div>

            </div>
            <div>
                <input type="name" placeholder="Full Name" className="name"></input>


                <input type="email" placeholder="Email" className="email"></input>


                <button type="button" className="sendbtn">SEND</button>
                <button className="quote"> Request a Quote <GoArrowRight className="arrow" /></button>
                
            </div>



        </div>



    )
}



export default home;

