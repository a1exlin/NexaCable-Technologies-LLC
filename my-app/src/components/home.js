import React from "react"
import { GoArrowRight } from "react-icons/go";
import logo from '../img/home-img.jpg';

// const button = document.querySelector("#button");

// button.addEventListener("click", function() {
//   // Your code here
// });

function home() {
    return (

        <div >

            <img src={logo} alt-="home-image" className='home-img' />

            <div className="home">
                <h1 className="header1">NexaCable</h1>
                <h1 className="header2">Technologies</h1>
                <p1 className="provide-txt">We provide commercial network and security systems installation </p1>
                <p className="provide-txt2">for large and small businesses or new residential constructions </p>
                <button className="quote"> REQUEST A QUOTE <GoArrowRight className="arrow" /></button>
            </div>



            <div className="home2">

                <div className="home2-text">
                    <h1> Quick service Request </h1>

                    <h1> Send Inspection Request</h1>

                </div>


                <div className="home3">
                    <input type="name" placeholder="Full Name" className="name"></input>

                    <input type="email" placeholder="Email" className="email"></input>

                    <button type="button" className="sendbtn">SEND</button>

                </div>




            </div>



        </div>



    )
}



export default home;

