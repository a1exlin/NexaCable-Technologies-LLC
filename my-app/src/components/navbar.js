import React from 'react';
import { Link } from 'react-router-dom'

function navbar() {
    // const element = document.getElementById('navbar')
    // const x = element.getBoundingClientRect().left;
    // const y = element.getBoundingClientRect().right;
    // window.scrollTo(x,y);
    return (

        <div className="navbar">
            {/* <!-- Latest compiled and minified CSS --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

            {/* <!-- Optional theme --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"></link>

            {/* <ul className="nav nav-tabs" style={{ marginLeft: 500 }}> */}

            <a aria-current="page" class="elementor-item elementor-item-active menu-link">Home   </a>
            <a href="#about" class="elementor-item elementor-item-anchor menu-link" aria-current="">About </a>
            <a href="#services" class="elementor-item elementor-item-anchor menu-link" aria-current="">Services</a>
            <a href="#reviews" class="elementor-item elementor-item-anchor menu-link" aria-current="">Testimonials</a>
            <a href="#contact" class="elementor-item elementor-item-anchor menu-link" tabindex="0">Contact Us</a>
                {/* <li>
                    <Link className='nav-item' to="/">Home  </Link>
                </li> */}
{/* 
                <li>
                    <Link className='nav-item' to="/about">About Us  </Link>
                </li> */}

                {/* <li>
                    <Link className='nav-item' to="/">Services </Link> */}
                {/* </li> */}

                {/* <li>
                    <Link className='nav-item' to="/">Testimonials  </Link>
                </li>
                <li>
                    <Link className='nav-item' to="/">Contact Us  </Link>
                </li> */}


                

            {/* </ul> */}


        </div>
    );
}

export default navbar;