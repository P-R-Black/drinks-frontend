import React, { useRef, useState } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg'
import './contactus.css'
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const isPending = () => {
        setIsLoading(true);

    }


    const sendEmail = async (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,
            form.current, process.env.REACT_APP_PUBLIC_KEY_TWO)
            .then((result) => {
                setEmailSent('Your email has been sent successfully.');
                setIsLoading(false);
            }, (error) => {
                setEmailSent('There was an issue, the email was not sent.')
                setIsLoading(false);
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
                            <label htmlFor="name">Your Name</label>
                            <input className="contactFormInput" type="text" name="name" placeholder="Your Name" required />

                            <label htmlFor="email">Your Email</label>
                            <input className="contactFormInput" type="email" name="email" placeholder="Your Email" required />

                            <label htmlFor="message">Your Message</label>
                            <textarea name="message" placeholder="Your Message" id="" cols="30" rows="10" required />

                            <div className="emailSent" aria-live="polite">{emailSent}</div>
                            {isLoading && <CgSpinnerTwo className="spinner" aria-live="polite" />}
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
