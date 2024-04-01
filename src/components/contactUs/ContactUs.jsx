import React,  { useRef, useState } from 'react'

import './contactus.css' 

import { CgSpinnerTwo } from 'react-icons/cg'

import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const isPending = () => {
        setIsLoading(true);
        
    }
  
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            setIsLoading(false);
            setEmailSent('Your email has been sent successfully.');
            console.log(result.text);
        }, (error) => {
            setEmailSent('There was an issue, the email was not sent.')
            console.log(error.text);
        });

        e.target.reset();
     
    };
  
    return (
        <section id="contact" className='contact_section'>
            <h5>Get in Touch
            <   span className='animate scroll' style={{'--i':"1"}}></span>
            </h5>
            <h2>Contact Me
                <span className='animate scroll' style={{'--i':"2"}}></span>
            </h2>
        <form ref={form} onSubmit={sendEmail} className="contact_form">

            <input type="text" name="name" placeholder="Your Name" required/>
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" id="" cols="30" rows="10" required/>

            <div className='email_sent'>{emailSent}</div>
            { isLoading &&  <CgSpinnerTwo className='spinner'/> }

            <button type="submit" className='button_light' 
            onClick={isPending}>
                Send Message
            </button>

            <span className='animate scroll' style={{'--i':"2"}}></span> 
        </form>
      </section>
    );
}
