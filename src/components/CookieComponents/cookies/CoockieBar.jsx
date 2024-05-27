import React from 'react';
import '../../CookieComponents/cookies/coockiebar.css';
import { NavLink } from 'react-router-dom';



export const CoockieBar = ({ cookiesAccept, coockiesDeclined, showCookieBanner }) => {

    // function getCookie(name) {
    //     const value = `; ${document.cookie}`;
    //     console.log('value', value)
    //     const parts = value.split(`; ${name}=`);
    //     console.log('parts', parts)
    //     if (parts.length === 2) {
    //         console.log('return', parts.pop().split(';').shift())
    //         return parts.pop().split(';').shift();
    //     }
    // }

    // console.log('getCookie', getCookie())


    return (
        !showCookieBanner ? (<section id="cookieBarSection" className="cookieBarSection">
            <div className="container">
                <div className="cookieBarContainer">
                    <div className="cookieBarContainerTextBox">
                        <p>We store cookies on your device to enhance site navigation,
                            analyze site usage, provide social media features, and assist
                            in our marketing efforts.  Some of these cookies also help improve
                            your user experience on our websites, assist with navigation and your
                            ability to provide feedback. By continuing to use our services, you agree
                            to the updated <NavLink to="/privacy-policy">Privacy Policy </NavLink>
                            and  <NavLink to="/terms-and-conditions">Terms of Service</NavLink>.
                        </p>
                    </div>
                    <div className="cookieBarContainerButtonBox">
                        <button onClick={cookiesAccept}>Accept</button>
                        <button onClick={coockiesDeclined}>Decline</button>
                    </div>
                </div>
            </div>
        </section>) : ("")

    )
}
