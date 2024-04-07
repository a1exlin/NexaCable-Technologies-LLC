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
                <div className='contact-box'>
                    <h1 className='contact-header'> We are looking forward to hearing from you</h1>
                    <div className='line'>
                        <MdHorizontalRule />
                    </div>
                    <p className="contact-subheader"> Use the form below to submit requests and/or questions. We will get back to you as soon as possible. </p>
                   <div className='contact-form'>
                   <input placeholder='First Name' className='firstname-input' type='firstname' onChange={(e) => setFirstname(e.target.value)}></input>
                    <input placeholder='Last Name' className='lastname-input' type='lastname' autoComplete="off" onChange={(e) => setLastname(e.target.value)}></input>
                    <input placeholder='Email' className='email-input' type='email' autoComplete="off" onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder='Phone Number' className='phone-input' type='phonenumber' autoComplete="off" onChange={(e) => setNumber(e.target.value)}></input>
                    <input placeholder='Message' className='message-input' type='message' autoComplete="off" onChange={(e) => setMessage(e.target.value)}></input>
                    <button type='submit' className='contactbtn'> Send</button>

                   </div>
                </div>

            </form>
           
        </div>
    );
}

export default Contact;
