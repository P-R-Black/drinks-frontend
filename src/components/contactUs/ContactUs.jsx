import React,  { useRef, useState } from 'react'

import './contactus.css' 

import { CgSpinnerTwo } from 'react-icons/cg'

import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const reactAppServiceID = process.env.REACT_APP_SERVICE_ID
    const reactAppTemplateID = process.env.REACT_APP_TEMPLATE_ID
    const reactPublicEmailJSKey = process.env.REACT_APP_PUBLIC_EMALJS_KEY


    const isPending = () => {
        setIsLoading(true);
        
    }
  
    const sendEmail = async (e) => {
        e.preventDefault();

      emailjs.sendForm(reactAppServiceID, reactAppTemplateID, form.current, reactPublicEmailJSKey)
        .then((result) => {
            console.log('result', result)
            // setEmailSent('Your email has been sent successfully.');
            // setIsLoading(false);
            // console.log('result.text', result.text);
        }, (error) => {
            console.log('error', error)
            // setEmailSent('There was an issue, the email was not sent.')
            // setIsLoading(false);
            // console.log('error.text', error.text);
        });

        e.target.reset();
     
    };
  
    return (
        <section id="contact" className='contactSection'>
            <div className="container">
                <div className="contactContainer">
                    <div className="contactTitleContainer">
                        <h1>Contact Us</h1>
                        <h3>Have a suggestion, critique, or drink recipe, contact us here.</h3>
                    </div>
                    <div className="formContainer">
                        <form ref={form} onSubmit={sendEmail} className="contactForm">
                            <input type="text" name="name" placeholder="Your Name" required/>
                            <input type="email" name="email" placeholder="Your Email" required/>
                            <textarea name="message" placeholder="Your Message" cols="30" 
                            rows="10" required/>

                            <div className="emailSent">{emailSent}</div>
                            {isLoading ? <CgSpinnerTwo className="spinner" /> : ""}
                            <button type="submit" className="buttonLight" onClick={isPending}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
      </section>
    );
}
