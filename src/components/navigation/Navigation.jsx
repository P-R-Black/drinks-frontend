import React from 'react'
import './navigation.css'

import { Logo } from '../logo/Logo'
import { Search } from '../search/Search'
import { NavLink } from 'react-router-dom'



export const Navigation = ({ baseAlcohol, fetchAlcoholType, navLinkText, alcohol }) => {
    
    console.log('naveLinkText Nav', navLinkText)
    console.log('alcohol Nav', alcohol)
    let chosenAlochol = alcohol
    console.log('chosenAlochol Nav', chosenAlochol)


    const showNavMenu = () => {
        let navBarMenu = document.querySelector('.navBarMenu')
        let visibility = navBarMenu.getAttribute('data-visible')

        let navBarDropdown = document.querySelector('.navDropdown');

        if (visibility === "false" || visibility == null){
            navBarMenu.setAttribute('aria-expanded', 'true')
            navBarMenu.setAttribute('data-visible', 'true')
            navBarDropdown.classList.add('show')

        } else {
            navBarMenu.setAttribute('aria-expanded', 'false')
            navBarMenu.setAttribute('data-visible', 'false')
            navBarDropdown.classList.remove('show')
        }   
    }


  return (
    <nav className="navbar">
        <div className="navbarContainer container">
            <div id="logoId">
                <Logo className="navbarLogo"></Logo>
            </div>
            <search className="searchId">
                <Search className="navSearch"></Search>
            </search>
            <div className="navbarItems">
                <ul className="navDropdown" data-visible="false">
               {baseAlcohol.map(ba => {
                    return (
                        <NavLink className="navbarLinks" to={`alcohol/${ba.toLowerCase()}`}>{ba}</NavLink>
                    )
                })}
                </ul>
                <div className="navBarMenu" id="navBarMenu" aria-controls="navbar_menu" aria-expanded="false"
                     onClick={()=> {showNavMenu(); fetchAlcoholType()}}>
                    <span className="bar kg-only"></span>
                    <span className="bar kg-only"></span>
                    <span className="bar kg-only"></span>
                    <span className="bar kg-only"></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

  