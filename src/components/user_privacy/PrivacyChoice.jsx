import React from 'react'
import { Logo } from '../../components/LogoNavFooterPageComponents/logo/Logo'
import './user_privacy.css'

export const PrivacyChoice = (props) => {

    // console.log('props', props, 'test props testing')
    return (props.trigger) ? (
        <section className="privacyChoiceSection privacyPopup">
            <div className="logoDiv">
                <Logo />
                <button onClick={() => props.setTrigger(false)} className="closeButton">X</button>
                {props.children}
            </div>
            <div className="privacyChoiceContainer">
                <h3>Your Privacy Choices</h3>
                <p>
                    Under applicable U.S. state privacy laws (e.g., those in California, Colorado,
                    Connecticut, Utah, and Virginia), residents of these states have the right to opt-out
                    of "sales" and "shares" of personal information, "targeted advertising," and certain
                    use/disclosure of "sensitive" personal information. For more information about our
                    privacy practices, see our Privacy Policy.
                </p>
                <p>
                    To opt-out, you must (1) submit the "Opt-Out Form" using the link below or send an
                    email pblackdevdemo@gmail.com with the subject line, "Opt-Out of Sales" and (2)
                    opt-out of Targeting Cookies as instructed below. We will process your opt-out
                    request in accordance with applicable U.S. state privacy laws.
                </p>
            </div>
            <a href="/">Go To Opt Out Form</a>
            <button className="privacyChoiceConfirmChoice">Confirm My Choices</button>

        </section>
    ) : "";
}
