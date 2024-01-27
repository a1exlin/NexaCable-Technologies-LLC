import React from 'react';
import logo from '../img/logo.jpeg'

function navbar() {

    return (
        
        <div className='navbar'>
            
         <img src={logo} alt-="NexaCable Logo" className='navbarLogo'/> 
         <div className='navtabs'>
            <a> Home</a>
            <a> About</a>
            <a> Services </a>
            <a> Testimonials</a>
            <a> Contact</a>
         </div>
 
        </div>
    );
}

export default navbar