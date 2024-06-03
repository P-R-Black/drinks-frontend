import React, { useState } from 'react'
import './footer.css'

import { Logo } from '../logo/Logo'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link'
import { NavLink, Link } from 'react-router-dom';
import { PrivacyChoice } from '../user_privacy/PrivacyChoice';

export const Footer = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    var date = new Date()
    var year = date.getFullYear();

    return (
        <>
            <section className='footerSection'>
                <div className='footerContainer container'>
                    <div className="footerLogoSocials">
                        <Logo />
                        <div className="footerSocials">
                            <FaFacebookF />
                            <FaXTwitter />
                            <FaTumblr />
                            <FaTiktok />
                        </div>
                    </div>
                    {window.innerWidth < 601 ? (
                        <div className="mobileDivisionContainer">
                            <div className="footerSiteSections">
                                <HashLink to="/#dodSection">{"Drink of the Day"}</HashLink>
                                <HashLink to="/#discoverSection">{"Discover Cocktails"}</HashLink>
                                <HashLink to="/#discoverShotsSection">{"Discover Shots"}</HashLink>
                                <HashLink to="/#mocktailSection">{"Mocktails"}</HashLink>
                                <HashLink to="/#mustKnowSection">{"Bartender Must Knows"}</HashLink>
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
                    ) : (
                        <>
                            <div className="footerSiteSections">
                                <HashLink to="/#dodSection">{"Drink of the Day"}</HashLink>
                                <HashLink to="/#discoverSection">{"Discover Cocktails"}</HashLink>
                                <HashLink to="/#discoverShotsSection">{"Discover Shots"}</HashLink>
                                <HashLink to="/#mocktailSection">{"Mocktails"}</HashLink>
                                <HashLink to="/#mustKnowSection">{"Bartender Must Knows"}</HashLink>
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
            </section>
            <section className='postFooter'>
                <div className="container">
                    <div className="postFooterContainer">
                        <div className="createBySection">Created By:
                            <Link
                                className="createdBy"
                                to="https://paulrblack.com/"
                            > Paul B
                            </Link>
                        </div>
                        <div className="copyrightSection">
                            <div className="copyrightYear">&copy; {year} Keep's Guide</div>
                        </div>
                        <div className="rightsReservedSection">
                            <div className="rightsReserved">All Rights Reserved.</div>
                        </div>
                        <div className="rightsReservedSection">
                            <Link className="apiBy" to="http://127.0.0.1:8000/">API</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
