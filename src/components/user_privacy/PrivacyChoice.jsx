import React, { useEffect, useState } from 'react'
import { Logo } from '../../components/LogoNavFooterPageComponents/logo/Logo'
import { Link } from 'react-router-dom'
import './user_privacy.css'
import Cookies from 'js-cookie';
import ReactGA from 'react-ga';


const GA_UA_ID = process.env.REACT_APP_GOOGLE_UA_ID; // OUR_TRACKING_ID
const GA_ANALYTICS = process.env.REACT_APP_GOOGLE_MEASUREMENT_ID;

export const PrivacyChoice = (props) => {

    const [hasConsetValue, setHasConsentValue] = useState(false);
    const [isCookieSet, setCookie] = useState(false);
    let googleAnalyticsScript;


    // console.log('props', props, 'test props testing')
    useEffect(() => {
        setHasConsentValue(!!isCookieSet)
        if (isCookieSet === "true") {
            loadGoogleAnalytics();
        }

    }, [isCookieSet])


    const loadGoogleAnalytics = () => {
        setHasConsentValue(true)
        googleAnalyticsScript = document.createElement('script');
        googleAnalyticsScript.async = true;
        googleAnalyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ANALYTICS}`;

        document.head.appendChild(googleAnalyticsScript);

        let dataLayer = window.dataLayer || [];

        function gtag(...args) {
            dataLayer.push(args)
        }
        gtag("js", new Date());
        gtag("config", `${GA_ANALYTICS}`, {
            page_path: window.location.pathme,
        });
    }

    const removeGoogleAnalytics = () => {
        if (googleAnalyticsScript) {
            document.head.removeChild(googleAnalyticsScript);
            googleAnalyticsScript = null;
            if (window.dataLayer) {
                window.dataLayer = [];
            }
        }
    }

    const cookiesAccept = () => {
        Cookies.set("cookiesConsent", true)
        loadGoogleAnalytics()
        setCookie(true);
        ReactGA.initialize(GA_UA_ID);
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,

        });
        props.setTrigger(false)
    }

    const coockiesDeclined = () => {
        Cookies.remove("cookiesConsent");
        setCookie(false);
        setHasConsentValue(false)
        removeGoogleAnalytics()
        props.setTrigger(false)


    }

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
                    To opt-out, you must <span className="privacyChoiceSpan">( <span>1 </span>)</span> submit
                    the "Opt-Out Form" using the link below or send an email<Link to="mailto:pblackdevdemo@gmail.com">pblackdevdemo@gmail.com</Link> with the
                    subject line, "Opt-Out of Sales" and <span className="privacyChoiceSpan">( <span>2 </span>)</span> opt-out of Targeting
                    Cookies as instructed below. We will process your opt-out
                    request in accordance with applicable U.S. state privacy laws.
                </p>
            </div>
            <Link to="mailto:pblackdevdemo@gmail.com">Send Opt Out Email</Link>
            {/* <button className="privacyChoiceConfirmChoice">Confirm My Choices</button> */}
            <button className="privacyChoiceOptButton" onClick={cookiesAccept}>Accept Cookies Targeting</button>
            <button className="privacyChoiceOptButton" onClick={coockiesDeclined}>Opt Out of Cookies Targetig</button>
        </section>
    ) : "";
}
