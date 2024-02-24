import React from 'react';
import logo from '../img/NexaCableWhite.png';

function navbar() {

    return (
        <div className='navbar'>
            <img src={logo} alt-="NexaCable Logo" className='navbarLogo'/> 
            <div className='navLinks'>
                <a className='nav-link' href="#home">Home</a>
                <a className='nav-link' href="#about">About</a>
                <a className='nav-link' href="#services">Services</a>
                <a className='nav-link reviews-nav-link' href="#reviews">Reviews</a>
                <a className='nav-link contact-nav-link' href="#contact">Contact</a>
            </div>
            <div className='phone-number'>
                <a className='nav-link phone-number-link' href='tel:7064775170'>Call Us: (706)-477-5170</a>
            </div>

        </div>
    );
}

export default navbar