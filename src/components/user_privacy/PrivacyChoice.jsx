import React, { useEffect, useState, useRef } from 'react'
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
    const googleAnalyticsScriptRef = useRef(null);
    const closeButtonRef = useRef(null)

    useEffect(() => {
        if (props.trigger) {
            closeButtonRef.current.focus();
        }
        setHasConsentValue(!!isCookieSet);
        if (isCookieSet === "true") {
            loadGoogleAnalytics()
        }
    }, [isCookieSet, props.trigger])


    const loadGoogleAnalytics = () => {
        setHasConsentValue(true)
        googleAnalyticsScriptRef.current = document.createElement('script');
        googleAnalyticsScriptRef.current.async = true;
        googleAnalyticsScriptRef.current.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ANALYTICS}`

        document.head.appendChild(googleAnalyticsScriptRef.current)

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
        if (googleAnalyticsScriptRef.current) {
            document.head.removeChild(googleAnalyticsScriptRef.current);
            googleAnalyticsScriptRef.current = null;
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
        <section
            className="privacyChoiceSection privacyPopup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
        >

            <div className="logoDiv">
                <Logo />
                <button
                    onClick={() => props.setTrigger(false)}
                    className="closeButton"
                    aria-label="Close Privacy Choices"
                    ref={closeButtonRef}
                >
                    X
                </button>
                {props.children}
            </div>
            <div className="privacyChoiceContainer">
                <div className="privacyText">
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
                <button
                    className="privacyChoiceOptButton"
                    onClick={cookiesAccept}
                    aria-label="Accept Cookies Targeting">
                    Accept Cookies Targeting
                </button>
                <button
                    className="privacyChoiceOptButton"
                    onClick={coockiesDeclined}
                    aria-label="Opt Out of Cookies Targeting">
                    Opt Out of Cookies Targetig
                </button>
            </div>
        </section>
    ) : "";
}
