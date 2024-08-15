import React, { createContext, useContext, useState, useEffect } from 'react'

import Cookies from 'js-cookie';
import ReactGA from 'react-ga';

const CookiesContext = createContext();

export const useCookies = () => useContext(CookiesContext);

const GA_UA_ID = process.env.REACT_APP_GOOGLE_UA_ID; // OUR_TRACKING_ID
const GA_ANALYTICS = process.env.REACT_APP_GOOGLE_MEASUREMENT_ID;

export const CookiesProvider = ({ children }) => {
    const [cookiesConsent, setCookiesConsent] = useState(() => {
        const consent = Cookies.get('cookiesConsent')
        return consent === undefined ? null : consent === "true";
    })

    // const [hasConset, setHasConset] = useState(false);

    const [showCookieBanner, setShowCookieBanner] = useState(true)

    let googleAnalyticsScript;

    const loadGoogleAnalytics = () => {

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_UA_ID}`;

        document.head.appendChild(script);

        let dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments)
        }
        gtag("js", new Date());
        gtag("config", `${GA_ANALYTICS}`, {
            cookie_flags: 'SameSite=None;Secure',
            // page_path: window.location.pathme

        });
    };


    const removeGoogleAnalytics = () => {
        if (googleAnalyticsScript) {
            document.head.removeChild(googleAnalyticsScript);
            googleAnalyticsScript = null;
            if (window.dataLayer) {
                window.dataLayer = [];
            }
        }
    }

    const acceptCookies = () => {
        Cookies.set("cookiesConsent", true, {
            sameSite: 'None',
            secure: true
        })
        setCookiesConsent(true);
        setShowCookieBanner(false);
        loadGoogleAnalytics()

        ReactGA.initialize(GA_UA_ID);
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,

        });
    }

    const declineCookies = () => {
        Cookies.remove("cookiesConsent");
        setCookiesConsent(false);
        setShowCookieBanner(false)
        removeGoogleAnalytics()
    }
    return (
        <CookiesContext.Provider value={{ cookiesConsent, showCookieBanner, acceptCookies, declineCookies }}>
            {children}
        </CookiesContext.Provider>
    )
}
