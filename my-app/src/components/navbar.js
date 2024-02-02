import React from 'react';
import logo from '../img/NexaCableWhite.png';

function navbar() {

    return (
        
        <div className='navbar'>
            
         <img src={logo} alt-="NexaCable Logo" className='navbarLogo'/> 
         <div className='navtabs'>
            <a className='nav1'> Home</a>
            <a className='nav2'> About</a>
            <a className='nav3'> Services </a>
            <a className='nav4'> Testimonials</a>
            <a className='nav5'> Contact</a>
            <p className='phone-number'> Call Us: (706)-477-5170</p>
         </div>
 
        </div>
    );
}

export default navbar