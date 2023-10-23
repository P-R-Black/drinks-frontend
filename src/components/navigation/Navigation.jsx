import React from 'react'
import './navigation.css'

import { Logo } from '../logo/Logo'
import { Search } from '../search/Search'
import { NavLink } from 'react-router-dom'



export const Navigation = ({ baseAlcohol, fetchAlcoholType, navLinkText, alcohol }) => {
    
    let chosenAlochol = alcohol
    console.log('chosenAlc', chosenAlochol)
    
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
                <div className="navDropdown">
                    <NavLink className="dodNav">Drink of the Day</NavLink>
                    <hr className='navline'/>
                    <h2>Find Cocktail By Alcohol</h2>
                    <ul className="navDropdownByDrink" data-visible="false">
                        {baseAlcohol.map(ba => {
                        return (
                            <NavLink
                            className="navbarLinks" 
                            to={`/alcohol/${ba.toLowerCase()}`}
                            onClick={showNavMenu}>{ba}</NavLink>
                            )
                        })}
                    </ul>
                    <hr className='navline'/>
                    <NavLink className="dodNav">Bartender Must Know Drinks</NavLink>
                </div>
                <div className="navBarMenu" id="navBarMenu" aria-controls="navbar_menu" aria-expanded="false"
                     onClick={()=> { showNavMenu(); fetchAlcoholType()}}>
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

  