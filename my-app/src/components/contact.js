import React from 'react'
// import logo from '../img/black-logo.jpeg';
import { MdHorizontalRule } from "react-icons/md";
function contact() {
    return (
        <div className='contact'>
            <div>
                <h1 className='contact-header'> We are looking foward to hearing from you</h1>
                <div className='line'>
                    <MdHorizontalRule />
                </div>

                <p1 className="contact-subheader"> Use the form below to submit requests and/or questions. We will get back to you as soon as possible. </p1>

                <div className='contact1'>
                    <h5 className='contact1-header'> First Name</h5>
                    <input placeholder='First Name' className='firstname-input'></input>
                </div>


                <div className='contact2'>
                    <h5 className='contact2-header'> Last Name</h5>
                    <input placeholder='Last Name' className='lastname-input'></input>
                </div>

                <div className='contact3'>
                    <h5 className='contact3-header'> Email</h5>
                    <input placeholder='Email' className='email-input'></input>
                </div>
                <div className='contact4'>
                    <h5 className='contact4-header'> Phone Number</h5>
                    <input placeholder='Phone Number' className='phone-input'></input>
                </div>
                <div className='contact5'>
                    <h5 className='contact5-header'> Message </h5>
                    <input placeholder='Message' className='message-input'></input>
                </div>
            </div>

            <div>
                <button type='onclick' className='contactbtn'> Send</button>
            </div>

            <div className='copyright'>
                {/* <img src={logo} alt-="black-NexaCable Logo" className='blackLogo'/> */}
                <img src="https://ijm.vmw.mybluehost.me/wp-content/uploads/2023/11/footer-logo.png" className='black-logo'></img>
                <p className='commercial-txt'>We provide commercial network and security systems</p>
                <p className='commercial-txt2'> installation for large and small businesses or new residential</p>
                <p className='commercial-txt3'>constructions.</p>
                <h4 className='visit-header'> VISIT US</h4>
                <p className='address-txt'>
                </p>
                <p className='address-txt2'>(706) 477-5170</p>
                <p className='address-txt3'>   contact@nexacable.net</p>
                <h4 className='hour-header'>OPENING HOURS
                </h4>
                <p className='hour-txt'>Monday - Friday:
                </p>
                <p className='hour-txt2'> 09:00AM - 05:00PM</p>
                <p className='hour-txt3'>    Saturday - Sunday:</p>
                <p className='hour-txt4'>Closed</p>
            </div>
<div className='copyright1'>
<p className='copyright2'>Copyright © 2023 NexaCable Technologies</p>
<p className='sitemap'>Sitemap</p>
</div>
        </div>
    )
}

export default contact;