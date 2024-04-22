import React, { useState } from 'react'
import './footer.css'

import { Logo } from '../logo/Logo'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom';
import { PrivacyChoice } from '../user_privacy/PrivacyChoice';

export const Footer = () => {
    const [ buttonPopUp, setButtonPopUp ] = useState(false);

  return (
    <div className='footerSection'>
        <div className='footerContainer container'>
            <div className="footerLogoSocials">
                <Logo/>
                <div className="footerSocials">
                    <FaFacebookF/>
                    <FaXTwitter/>
                    <FaTumblr/>
                    <FaTiktok/>
                </div>
            </div>
            {window.innerWidth < 601 ? (  
            <div className="mobileDivisionContainer">
                <div className="footerSiteSections">
                    <HashLink to="/#dodSection">{"Drink of the Day"}</HashLink>
                    <HashLink to="/#discoverSection">{"Discover"}</HashLink>
                    <HashLink to="/#mocktailSection">{"Mocktails"}</HashLink>
                    <HashLink to="">{"Bartender Must Knows"}</HashLink>
                </div>
                <div className="footerSiteInfo">
                    <NavLink to="/about-us">{"About Us"}</NavLink>
                    <NavLink to="/contact-us">{"Contact"}</NavLink>
                    <NavLink onClick={() => setButtonPopUp(true)} to="">{"Privacy Choices"}</NavLink>
                    <PrivacyChoice trigger={buttonPopUp} setTrigger={setButtonPopUp}></PrivacyChoice>
                    <NavLink to="/privacy-policy">{"Privacy Policy"}</NavLink>
                    <NavLink to="/terms-and-conditions">{"Terms Of Service"}</NavLink>
                </div>
            </div>
            ):( 
                <>
                 <div className="footerSiteSections">
                    <HashLink to="/#dodSection">{"Drink of the Day"}</HashLink>
                    <HashLink to="/#discoverSection">{"Discover"}</HashLink>
                    <HashLink to="/#mocktailSection">{"Mocktails"}</HashLink>
                    <HashLink to="">{"Bartender Must Knows"}</HashLink>
                </div>
                <div className="footerSiteInfo">
                    <NavLink to="/about-us">{"About Us"}</NavLink>
                    <NavLink to="/contact-us">{"Contact"}</NavLink>
                    <NavLink onClick={() => setButtonPopUp(true)} to="">{"Privacy Choices"}</NavLink>
                    <PrivacyChoice trigger={buttonPopUp} setTrigger={setButtonPopUp}></PrivacyChoice>
                    <NavLink to="/privacy-policy">{"Privacy Policy"}</NavLink>
                    <NavLink to="/terms-and-conditions">{"Terms Of Service"}</NavLink>
                </div>
                </>
           )}
            
        </div> 
    </div>
  )
}
