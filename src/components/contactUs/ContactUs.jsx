import React,  { useRef, useState } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg'
import './contactus.css' 
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

const reactAppServiceID = process.env.REACT_APP_SERVICE_ID
const reactAppTemplateID = process.env.REACT_APP_TEMPLATE_ID
const reactPublicEmailJSKey = process.env.REACT_APP_PUBLIC_KEY_TWO

export const ContactUs = () => {
    const form = useRef(null);
    const [emailSent, setEmailSent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const isPending = () => {
        setIsLoading(true);
        
    }
  
    const sendEmail = (e) => {
        e.preventDefault();

      emailjs.sendForm(reactAppServiceID, reactAppTemplateID, form.current, {publicKey: reactPublicEmailJSKey,})
        
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
                            <input required type="text" name="name" placeholder="Your Name" />
                            <input required type="email" name="email" placeholder="Your Email" />
                            <textarea required name="message" placeholder="Your Message" cols="30" 
                            rows="10" />

                            <div className="emailSent">{emailSent}</div>
                            {isLoading && <CgSpinnerTwo className="spinner" />}
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
