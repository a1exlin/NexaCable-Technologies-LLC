import React from 'react';
import logo from '../img/banner.png'
function about() {
    return (
        <div className='about'>
            <img src={logo} alt-="NexaCable About" className='aboutlogo' />

            <div className='aboutheader'>
                <h1> ABOUT US</h1>
                <p>Network and Security System Installation
                    We are excited to provide networking and security installations and maintenance solutions to Atlanta and the surrounding areas. Commercial and new residential construction service.
                    <h2>OUR SPECIALTIES</h2>
                    We offer specialized services in networking, security systems and other low voltage wiring solutions to businesses of all sizes. Our commitment to excellence ensures that our clients receive the highest standard of service. Your satisfaction is our foremost priority.
                    We provide commercial network and security systems installation for large and small businesses or new residential constructions. We are here to help you expand your network infrastructure or build it from the ground up, NexaCable Technologies can handle it all. Call </p>
            </div>



        </div>
    )


}

export default about;