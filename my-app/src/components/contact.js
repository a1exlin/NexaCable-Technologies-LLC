import React, { useState } from 'react';
import { MdHorizontalRule } from "react-icons/md";
import axios from 'axios';


function Contact() {
    const [fname, setFirstname] = useState();
    const [lname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setNumber] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(null);

   
    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post('https://nexacable.net/api/contactForm.php', { fname, lname, email, phone, message })
            .then(response => {
                console.log('Inquiry sent successfully!', response.data);
            })
            .catch(error => {
                console.error('Error submitting inquiry:', error.message);
                setSubmitError('Error submitting inquiry. Please try again.');
            });
    };
    
    return (
        <div className='contact'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className='contact-header'> We are looking forward to hearing from you</h1>
                    <div className='line'>
                        <MdHorizontalRule />
                    </div>
                    <p className="contact-subheader"> Use the form below to submit requests and/or questions. We will get back to you as soon as possible. </p>
                    <div className='contact1'>
                        <input placeholder='First Name' className='firstname-input'type='firstname' onChange={(e) => setFirstname(e.target.value)}></input>
                    </div>
                    <div className='contact2'>
                        <input placeholder='Last Name' className='lastname-input' type='lastname'autoComplete="off"onChange={(e) => setLastname(e.target.value)}></input>
                    </div>
                    <div className='contact3'>
                        <input placeholder='Email' className='email-input'type='email'autoComplete="off" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='contact4'>
                        <input placeholder='Phone Number' className='phone-input'type='phonenumber'autoComplete="off" onChange={(e) => setNumber(e.target.value)}></input>
                    </div>
                    <div className='contact5'>
                        <input placeholder='Message' className='message-input'type='message'autoComplete="off" onChange={(e) => setMessage(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <button type='submit' className='contactbtn'> Send</button>
                </div>
            </form>
            <div className='copyright'>
                <img src="https://ijm.vmw.mybluehost.me/wp-content/uploads/2023/11/footer-logo.png" className='black-logo' alt="black-NexaCable Logo" />
                <p className='commercial-txt'>We provide commercial network and security systems</p>
                <p className='commercial-txt2'> installation for large and small businesses or new residential</p>
                <p className='commercial-txt3'>constructions.</p>
                <h4 className='visit-header'> VISIT US</h4>
                <p className='address-txt'></p>
                <p className='address-txt2'>(706) 477-5170</p>
                <p className='address-txt3'>   contact@nexacable.net</p>
                <h4 className='hour-header'>OPENING HOURS</h4>
                <p className='hour-txt'>Monday - Friday:</p>
                <p className='hour-txt2'> 09:00AM - 05:00PM</p>
                <p className='hour-txt3'>    Saturday - Sunday:</p>
                <p className='hour-txt4'>Closed</p>
            </div>
            <div className='copyright1'>
                <p className='copyright2'>Copyright © 2023 NexaCable Technologies</p>
                <p className='sitemap'>Sitemap</p>
            </div>
        </div>
    );
}

export default Contact;
