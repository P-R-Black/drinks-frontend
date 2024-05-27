import React from 'react'
import './share.css';
import { BiShareAlt } from 'react-icons/bi';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaTumblrSquare } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookMessengerShareButton,
    WhatsappShareButton
} from 'react-share';

const FB_APP_ID = process.env.REACT_APP_FB_APP_ID




export const Share = ({ recipeInPlay, ingredientInPlay, garnishInPlay, directionsInPlay, glassInPlay }) => {

    let cocktailGlass = "/Users/paulblack/VS Code/drinks-app/src/assets/CocktailGlassTingPng.png"

    const urlShare = window.location.href;
    console.log('urlShare', urlShare)

    const showShareMenu = () => {
        let shareBarMenu = document.querySelector('.shareIcon')
        let shareVisibility = shareBarMenu.getAttribute('data-visible')
        let shareDropDown = document.querySelector('.shareDropDown');


        if (shareVisibility == null || shareVisibility === "false") {
            shareBarMenu.setAttribute('aria-expanded', 'true')
            shareBarMenu.setAttribute('data-visible', 'true')
            shareDropDown.classList.add('show')
        } else {
            shareBarMenu.setAttribute('aria-expanded', 'false')
            shareBarMenu.setAttribute('data-visible', 'false')
            shareDropDown.classList.remove('show')
        }
    }


    const getFacebookElement = () => {
        console.log('getFacebookElement Called');
        let sourceTag = "https://connect.facebook.net/en_US/sdk.js`"
        const metaUrlTag = document.createElement('meta');
        metaUrlTag.async = true;
        metaUrlTag.src = sourceTag;

        document.head.appendChild(metaUrlTag)
        metaUrlTag.setAttribute('property', 'og:url')
        metaUrlTag.content = urlShare
        console.log('metaUrlTag', metaUrlTag)

        const metaTypeTag = document.createElement('meta');
        metaTypeTag.async = true;
        metaTypeTag.src = sourceTag;

        document.head.appendChild(metaTypeTag)
        metaTypeTag.setAttribute('property', 'og:type')
        metaTypeTag.content = 'recipe'
        console.log('metaTypeTag', metaTypeTag)

        const metaTitleTag = document.createElement('meta');
        metaTitleTag.async = true;
        metaTitleTag.src = sourceTag;

        document.head.appendChild(metaTitleTag)
        metaTitleTag.setAttribute('property', 'og:title')
        metaTitleTag.content = recipeInPlay
        console.log('metaTitleTag', metaTitleTag)

        const metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.async = true;
        metaDescriptionTag.src = sourceTag;

        document.head.appendChild(metaDescriptionTag)
        metaDescriptionTag.setAttribute('property', 'og:description')
        metaDescriptionTag.content = `How to make a ${recipeInPlay}`
        console.log('metaDescriptionTag', metaDescriptionTag)

        const metaImageTag = document.createElement('meta');
        metaImageTag.async = true;
        metaImageTag.src = sourceTag;

        document.head.appendChild(metaImageTag);
        metaImageTag.setAttribute('property', 'og:image');
        metaImageTag.content = cocktailGlass;
        console.log('metaImageTag', metaImageTag);

    }



    const getTumbElement = () => {
        let drinkInstructions = directionsInPlay.split("\r\n")
        let tumblrLink = "https://www.tumblr.com/widgets/share/tool?" +
            "posttype=text" +
            "&tags=KeepsGuide," + encodeURIComponent(recipeInPlay.replace(/\s/g, "")) +
            "&title=" + encodeURIComponent("Keep's Guide Recipe:\n" + recipeInPlay) +
            "&content=" +
            "<b>Ingredients:</b>" +
            `<ul>${ingredientInPlay.map(iip => `<li>${encodeURIComponent(iip.replace(".00", ""))}</li>`).join('')}</ul>` +
            "<b>Garnish:</b>" +
            `<ul>${garnishInPlay.map(gip => `<li>${encodeURIComponent(gip.replace("0", "").trim())}</li>`).join('')}</ul>` +
            "<b>Serving Glass:</b>" + `<ul><li>${encodeURIComponent(glassInPlay)}</li></ul>` +
            "<b> Mixing Instructions:</b>" +
            `<ol>${drinkInstructions.map(dip => `<li>${encodeURIComponent(dip.replace(/[0-9]./, "").trim())}</li>`).join('')}</ol>` +
            `<b>Find More at <a>${encodeURIComponent(urlShare)}</a></b>` +
            "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
        document.getElementById("tumblr-quote").href = tumblrLink;
    }


    return (
        <div className='shareIcon' aria-controls="shareMenu" aria-expanded="false" onClick={showShareMenu}>
            <div className="shareIconShareText">
                <BiShareAlt className='iconHeart' />
                <span>Share</span>
            </div>


            <div className="shareDropDown">
                <FacebookShareButton url={"http://www.paulrblack.com"}>
                    <FaFacebookSquare
                        className='shareIcons'
                        id="facebookShare"
                        onClick={getFacebookElement}
                    />
                </FacebookShareButton>


                <TwitterShareButton>
                    <FaSquareXTwitter className='shareIcons' id="xShare" />
                </TwitterShareButton>

                <a href="https://www.tumblr.com/widgets/share/tool" className="button" id="tumblr-quote"
                    title="post this recipe" target="_blank" rel="noopener noreferrer">
                    <FaTumblrSquare className='shareIcons' id="tmblrShare"
                        onClick={getTumbElement} />
                </a>

                <FacebookMessengerShareButton>
                    <FaFacebookMessenger className='shareIcons' id="messengerShare" />
                </FacebookMessengerShareButton>

                <WhatsappShareButton>
                    <FaWhatsappSquare className='shareIcons' id="whatsAppShare" />
                </WhatsappShareButton>

                <a href={`mailto:email@mail.com?subject=Keep's Guide's recipe for a ${recipeInPlay}&body=Check out the recipe at http://www.keepsguide.com.`}
                    title="Share by Email" target="_blank" rel="noopener noreferrer">
                    <HiOutlineMail className='shareIcons' id="emailShare" />
                </a>
            </div>
        </div>
    )
}
