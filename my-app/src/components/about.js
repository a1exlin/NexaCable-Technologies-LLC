import React from 'react';
import logo from '../img/banner.png'
function about() {
    return (
        <div className='about'>
            <img src={logo} alt-="NexaCable About" className='aboutlogo' />
<img src="https://ijm.vmw.mybluehost.me/wp-content/uploads/2023/11/section-img.png" className='aboutPic'></img>
            <div className='aboutheader'>
                <b className='about1'> ABOUT US</b>
                <h1 className='networkHeader'>Network and Security</h1>
                <h1 className='systemHeader'>System Installation</h1>
                <p className='about-text3'>
                    We are excited to provide networking and security installations and maintenance solutions to Atlanta and the surrounding areas. Commercial and new residential construction service.
                </p>
                <b className='specialtiesHeader'>OUR SPECIALTIES</b>
                <p className='about-text'>
                We offer specialized services in networking, security systems and other low voltage wiring solutions to businesses of all sizes. Our commitment to excellence ensures that our clients receive the highest standard of service. Your satisfaction is our foremost priority.
                </p>
                <p className='about-text2'>We provide commercial network and security systems installation for large and small businesses or new residential constructions. We are here to help you expand your network infrastructure or build it from the ground up, NexaCable Technologies can handle it all. Call</p>
<button type="onclick" className='callUs'> Call US</button>
            </div>



        </div>
    )


}

export default about;