import React from 'react'
import './footer.css'

import { Logo } from '../logo/Logo'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HashLink, NavHashLink } from 'react-router-hash-link'

export const Footer = () => {
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
            <div className="footerSiteSections">
                <HashLink to="/#dodSection">{"Drink of the Day"}</HashLink>
                <HashLink to="/#discoverSection">{"Discover"}</HashLink>
                <HashLink to="">{"Mocktails"}</HashLink>
                <HashLink to="">{"Bartender Must Knows"}</HashLink>
            </div>
            <div className="footerSiteInfo">
                <div className="siteInfoLeft">
                    <HashLink to="">{"About Us"}</HashLink>
                    <HashLink to="">{"Contact"}</HashLink>
                    <HashLink to="">{"Privacy Choices"}</HashLink>
                    <HashLink to="">{"Privacy Policy"}</HashLink>
                    <HashLink to="">{"Terms Of Service"}</HashLink>
                </div>
            </div>
        </div> 
    </div>
  )
}
