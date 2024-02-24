import React from 'react';
import logo from '../img/banner.png'
import logo2 from '../img/about.png'
function about() {
    return (
        <div className='about'>
            <img src={logo} alt-="NexaCable About" className='aboutlogo' />
            <img src={logo2} alt="About Image" className='aboutPic' />

            <div className='about2'>
                <h3 className='aboutUsHeader'> ABOUT US</h3>
                
                <div className='aboutblackheaders'>
                    <h1 className='networkHeader'>Network and Security</h1>
                    <h1 className='systemHeader'>System Installation</h1>
                </div>


                <p className='about-text'>
                    We are excited to provide networking and security installations and maintenance solutions to Atlanta and the surrounding areas. Commercial and new residential construction service.
                </p>
                <b className='specialtiesHeader'>OUR SPECIALTIES</b>

                <p className='about-text2'>
                    We offer specialized services in
                    networking, security systems and other low voltage wiring solutions to businesses of all sizes. Our commitment to excellence ensures that our clients receive the highest standard of service. Your satisfaction is our foremost priority.
                </p>
                <p className='about-text3'>We provide commercial network and security systems installation for large and small businesses or new residential constructions. We are here to help you expand your network infrastructure or build it from the ground up, NexaCable Technologies can handle it all.</p>
                <button type="onclick" className='callUs'> Call US</button>
            </div>



        </div>
    )


}

export default about;