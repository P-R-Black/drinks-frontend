import React, { useState, useEffect } from 'react'
import './navigation.css'

import { Logo } from '../logo/Logo';
import { Search } from '../search/Search';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link'



export const Navigation = ({ baseAlcohol, fetchAlcoholType, drinks,  drinkRecipe }) => {
    const [numofRecipes, setNumOfRecipes] = useState(40)
    

    
    const showNavMenu = () => {
        
        let navBarMenu = document.querySelector('.navBarMenu')
        let visibility = navBarMenu.getAttribute('data-visible')
        let dodNave = document.querySelector('.dodNav')

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

        navBarDropdown.addEventListener('click', () => {
            navBarMenu.setAttribute('aria-expanded', 'false')
            navBarMenu.setAttribute('data-visible', 'false')
            navBarDropdown.classList.remove('show')

           
        })
        
    }
     
    

    useEffect(() => {
        const drinksCount = () => {
        let recipeLengthRounded = Math.round(drinks.length / 5) * 5;
        if (drinks.length % 5 <= 5) {
            setNumOfRecipes(`Over ${recipeLengthRounded} recipes, with more added daily`)
        } else {
            setNumOfRecipes(`Nearly ${recipeLengthRounded} recipes, with more added daily`)
        }
        
        }
        drinksCount()
    },[drinks.length])

  return (
    <>  
        <div className="bannerContainer">{numofRecipes}</div>
        <nav className="navbar">
        <div className="navbarContainer container">
            <div id="logoId">
                <Logo className="navbarLogo"></Logo>
            </div>
            <search className="searchId">
                <Search drinks={drinks} drinkRecipe={drinkRecipe} className="navSearch" />
            </search>
            
            <div className="navbarItems">
                <div className="navDropdown">
                    <HashLink to="/#dodSection" className="dodNav">Drink of the Day</HashLink>
                    <hr className='navline'/>
                    <h2>Find Cocktail By Alcohol</h2>
                    <ul className="navDropdownByDrink" data-visible="false">
                        {baseAlcohol.map(ba => {
                        return (
                            <NavLink
                                className="navbarLinks" 
                                to={`/alcohol/${ba.toLowerCase()}`}
                                onClick={showNavMenu}
                            >{ba}
                            </NavLink>
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
    </>
    
  )
}

  