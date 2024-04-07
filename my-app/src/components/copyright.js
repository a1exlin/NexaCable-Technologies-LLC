import React from "react";

function Copyright() {
    return (
        <div className='copyright'>
            <img src="https://ijm.vmw.mybluehost.me/wp-content/uploads/2023/11/footer-logo.png" className='black-logo' alt="black-NexaCable Logo" />
            <p className='commercial-txt'>We provide commercial network and security systems installation for
                large and small businesses or new residential constructions.</p>

            <h4 className='visit-header'> VISIT US</h4>
            <p className='address-txt'>
            1234 Apple Street, NY
            (706) 477-5170 contact@nexacable.net
            </p>

            <h4 className='hour-header'>OPENING HOURS</h4>
            <p className='hour-txt'>
            Monday - Friday: 09:00AM - 05:00PM 
            Saturday - Sunday:
            Closed
            </p>


            <div className='copyright2'>
                <p className='cr-txt'>Copyright © 2023 NexaCable Technologies</p>
                <p className='sitemap'>Sitemap</p>
            </div>
        </div>
    )
}

export default Copyright;