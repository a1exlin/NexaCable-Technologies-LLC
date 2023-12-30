import React from "react"
import { GoArrowRight } from "react-icons/go";
function home() {
    return (
        <div className="home">

            <div className="home2">
                <h1>NexaCable Technologies</h1>
                <p1>We provide commercial network and security systems installation for large and small businesses or new residential constructions </p1>
            </div>
            <div>
                <button className="quote"> Request a Quote <GoArrowRight className="arrow" /></button>

            </div>



            <div className="service">

            <div class="elementor-widget-container">
			<h6 class="elementor-heading-title elementor-size-default">Quick Service Request</h6>		</div>
                <p className="quicktxt"> Quick service Request </p>

                <div className="sendtxt"> Send Inspection Request </div>

                <div className="name">
                    <input type="email" placeholder="Full Name"></input>
                </div>
                <div className="email">
                    <input type="email" placeholder="Email"></input>
                </div>
                
                    <button type="button" className="sendbtn"  > Send</button>
                
           


            </div>

        


        </div>




    )
}

export default home;

