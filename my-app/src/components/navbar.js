import React from 'react';
import logo from '../img/logo.jpeg'

function navbar() {

    return (
        
        <div className='navbar'>
            
         <img src={logo} alt-="NexaCable Logo" className='navbarLogo'/> 
            <div><a className='navItem nav1' href='#home'>Home</a></div>
            <div><a className='navItem nav2' href='#about'>About</a></div>
            <div><a className='navItem nav3' href='#services'>Services </a></div>
            <div><a className='navItem nav4' href='#reviews'>Reviews</a></div>
            <div><a className='navItem nav5' href='#contact'>Contact</a></div>
        </div>
    );
}

export default navbar