import React,  { useState } from 'react';
import emailjs from 'emailjs-com';

// Installed Email Js: npm install emailjs-com --save

export default function ContactUs() {
  
    // State of Form Submission Message Display
    const [TYP, setTYP] = useState('none')

    // Send Email Function - https://www.emailjs.com/docs/examples/reactjs/
    function sendEmail(evt) {
        evt.preventDefault();

        emailjs.sendForm('gmail', 'Portfolio_Contact_Form', evt.target, 'user_fbEPQAZQYUrpTTsYg6zGZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setTYP('flex')
        evt.target.reset();
    }

    // Close Form Submission Message 
    function closeThanksPop() {
        setTYP('none')
    }

  return (
      <>
        <div id="formContainer">
            {/* Page Headers */}
            <h1 className='centerFormPop'>Contact Me</h1>
            <h3 className='centerFormPop'> Please Provide as much Information as possible with your request.</h3>
            {/* Contact Form */}
            <form className="contact-form" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Phone</label>
                <input type="tel" name="phone" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
                {/* Adds Time of Submission to Email */}
                <input type="hidden" name="date" value={Date()} />
            </form>
        </div>
        {/* Form Submission Message */}
        <div className="formPop" style={{display:TYP}}>
            <h1>Thanks for submitting my form!</h1>
            <h2>I look forward to speaking with <span id='turqColor'>You!</span></h2>
            <button id='formPopButton' onClick={closeThanksPop}>Close</button>
        </div>
    </>
  );
}
