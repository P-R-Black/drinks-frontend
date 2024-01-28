import React from 'react'
import { BiShareAlt } from 'react-icons/bi';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaTumblrSquare } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import './share.css';

export const Share = ({ recipeInPlay, ingredientInPlay, garnishInPlay, directionsInPlay, glassInPlay }) => {

    const showShareMenu = () => {
        let shareBarMenu = document.querySelector('.shareIcon')
        let shareVisibility = shareBarMenu.getAttribute('data-visible')
        let shareDropDown = document.querySelector('.shareDropDown');
        

        if (shareVisibility == null || shareVisibility == "false"){
            console.log('Hey, Let\'s share this recipe')
            shareBarMenu.setAttribute('aria-expanded', 'true')
            shareBarMenu.setAttribute('data-visible', 'true')
            shareDropDown.classList.add('show')
        } else {
            shareBarMenu.setAttribute('aria-expanded', 'false')
            shareBarMenu.setAttribute('data-visible', 'false')
            shareDropDown.classList.remove('show')
            console.log('Need to close')
        }
    }


    const getTumbElement = () => {
        let drinkInstructions = directionsInPlay.split("\r\n")
        let tumblrLink = "https://www.tumblr.com/widgets/share/tool?posttype=text&tags=KeepsGuide," +
        encodeURIComponent(recipeInPlay) +  "&title=" + encodeURIComponent("Keep's Guide Recipe:\n" + recipeInPlay) +
        "&content=" + 
        "<b>Ingredients:</b>" +
        `<ul>${ingredientInPlay.map((iip => { return `<li>${encodeURIComponent(iip.replace(".00",""))}</li>`}))}</ul>`+ 
        "<b>Garnish:</b>" + 
        `<ul>${garnishInPlay.map((gip => { return `<li>${encodeURIComponent(gip.replace("0", "").trim())}</li>`}))}</ul>` +
        "<b>Serving Glass:</b>" + `<ul><li>${encodeURIComponent(glassInPlay)}</li></ul>`+
        "<b> Mixing Instructions:</b>" 
        + `<ol>${drinkInstructions.map((dip => { return `<li>${encodeURIComponent(dip.replace(/[0-9]./, "").trim())}</li>`}))}</ol>`+
       
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
        document.getElementById("tumblr-quote").href = tumblrLink;
    }


  return (
    <div className='shareIcon' aria-controls="shareMenu" aria-expanded="false" onClick={showShareMenu}>
        <BiShareAlt className='iconHeart'/>
        <span>Share</span>
        <div className="shareDropDown">
            <a href="https://www.facebook.com/share.php?u=paulrblack.com" target="_blank">
                <FaFacebookSquare className='shareIcons' id="facebookShare"/>
            </a>

            
            <FaSquareXTwitter className='shareIcons' id="xShare"/>
    
            <a href="https://www.tumblr.com/widgets/share/tool" class="button" id="tumblr-quote" title="post this quote" target="_blank">
                <FaTumblrSquare className='shareIcons' id="tmblrShare"
                onClick={getTumbElement}/>
            </a>
            
            <FaFacebookMessenger className='shareIcons' id="messengerShare"/>
            <a href="whatsapp://send?text=Check out the recipe at http://www.keepsguiide.com." 
                data-action="share/whatsapp/share"  target="_blank">
                <FaWhatsappSquare className='shareIcons' id="whatsAppShare"/>
            </a>
            
            
            <a href={`mailto:email@mail.com?subject=Keep's Guide's recipe for a ${recipeInPlay}&body=Check out the recipe at http://www.keepsguide.com.`}
                title="Share by Email" target="_blank">
                <HiOutlineMail className='shareIcons' id="emailShare"/>
            </a>
        </div>
    </div>
  )
}
