import React, { useEffect } from 'react'
import './footer.css'

import { Logo } from '../logo/Logo'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom';

export const Footer = () => {

    const ScrollToTop = () => {
        const { pathname } = useLocation();
        console.log('pathname', pathname)
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

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
                    <ScrollToTop/>
                    <HashLink to="/#dodSection">{"Drink of the Day"}</HashLink>
                    <HashLink to="/#discoverSection">{"Discover"}</HashLink>
                    <HashLink to="/#mocktailSection">{"Mocktails"}</HashLink>
                    <HashLink to="">{"Bartender Must Knows"}</HashLink>
                </div>
                <div className="footerSiteInfo">
                    <HashLink to="/about-us">{"About Us"}</HashLink>
                    <HashLink to="">{"Contact"}</HashLink>
                    <HashLink to="">{"Privacy Choices"}</HashLink>
                    <HashLink to="/privacy-policy">{"Privacy Policy"}</HashLink>
                    <HashLink to="/terms-and-conditions">{"Terms Of Service"}</HashLink>
                </div>
            </div>
            ):( 
                <>
                 <div className="footerSiteSections">
                    <ScrollToTop/>
                    <HashLink to="/#dodSection">{"Drink of the Day"}</HashLink>
                    <HashLink to="/#discoverSection">{"Discover"}</HashLink>
                    <HashLink to="/#mocktailSection">{"Mocktails"}</HashLink>
                    <HashLink to="">{"Bartender Must Knows"}</HashLink>
                </div>
                <div className="footerSiteInfo">
                    <HashLink to="/about-us">{"About Us"}</HashLink>
                    <HashLink to="/contact-us">{"Contact"}</HashLink>
                    <HashLink to="">{"Privacy Choices"}</HashLink>
                    <HashLink to="/privacy-policy">{"Privacy Policy"}</HashLink>
                    <HashLink to="/terms-and-conditions">{"Terms Of Service"}</HashLink>
                </div>
                </>
           )}
            
        </div> 
    </div>
  )
}
