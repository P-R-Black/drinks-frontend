import React, { useState, useEffect } from 'react'
import slugify from 'react-slugify';
import './navigation.css'


import { Logo } from '../logo/Logo';
import { Search } from '../search/Search';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'



export const Navigation = ({ fetchAlcoholType, drinks, drinkRecipe }) => {
    const [numofRecipes, setNumOfRecipes] = useState(0)

    const dropDownSelection = [
        'Bourbon', 'Brandy', 'Gin', 'Mezcal', 'Non-Alcoholic', 'Rum', 'Rum (Dark)', 'Rum (Gold)',
        'Rum (Light)', 'Rum (Spiced)', 'Scotch', 'Sparkling White Wine', 'Tequila', 'Vermouth',
        'Vodka', 'Whiskey'
    ]



    const showNavMenu = () => {


        let navBarMenu = document.querySelector('.navBarMenu')
        let visibility = navBarMenu.getAttribute('data-visible')
        let navBarDropdown = document.querySelector('.navDropdown');

        if (visibility === "false" || visibility == null) {
            navBarMenu.setAttribute('aria-expanded', 'true')
            navBarMenu.setAttribute('data-visible', 'true')
            navBarDropdown.classList.add('show')

        } else {
            navBarMenu.setAttribute('aria-expanded', 'false')
            navBarMenu.setAttribute('data-visible', 'false')
            navBarDropdown.classList.remove('show')
        }

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
    }, [drinks.length])

    return (
        <>
            <div className="bannerContainer">
                <div className="container">
                    <div className="bannerContainerTitle">{numofRecipes}</div>
                </div>
            </div>
            {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (
                <nav className="navbar">
                    <div className="container">
                        <div className="navbarContainer">
                            <div id="logoId">
                                <Logo className="navbarLogo"></Logo>
                            </div>
                            <search className="searchId">
                                <Search
                                    drinks={drinks}
                                    drinkRecipe={drinkRecipe}
                                    className="navSearch"
                                />
                            </search>
                            <div className="navBarMenu" id="navBarMenu" aria-controls="navbar_menu"
                                aria-expanded="false"
                                onClick={() => { showNavMenu(); fetchAlcoholType() }}>
                                <span className="bar kg-only"></span>
                                <span className="bar kg-only"></span>
                                <span className="bar kg-only"></span>
                                <span className="bar kg-only"></span>
                            </div>
                            <ul className="navDropdown">
                                <HashLink
                                    onClick={showNavMenu}
                                    to="/#dodSection"
                                    className="dodNav">Drink of the Day
                                </HashLink>
                                <hr className='navline' />
                                <HashLink
                                    onClick={showNavMenu}
                                    to="/#discoverSection"
                                    className="dodNav">Discover Cocktail By Alcohol
                                </HashLink>
                                <ul className="navDropdownByDrink" data-visible="false">
                                    {dropDownSelection.map(ba => {
                                        return (
                                            <Link
                                                key={slugify(ba)}
                                                className="navbarLinks"
                                                to={`/${slugify(ba)}`}
                                                onClick={showNavMenu}
                                            >{ba}
                                            </Link>
                                        )
                                    })}
                                </ul>
                                <hr className='navline' />
                                <HashLink onClick={showNavMenu}
                                    to="/#discoverShotsSection"
                                    className="dodNav">Discover Shots By Alcohol
                                </HashLink>
                                <hr className='navline' />
                                <HashLink onClick={showNavMenu}
                                    to="/#mocktailSection"
                                    className="dodNav">Mocktails
                                </HashLink>
                                <hr className='navline' />
                                <HashLink
                                    onClick={showNavMenu}
                                    to="/#mustKnowSection"
                                    className="dodNav">Bartender Must Know Drinks
                                </HashLink>

                            </ul>
                        </div>
                    </div>
                </nav>
            ) : (<nav className="navbar">
                <div className="container">
                    <div className="navbarContainer">
                        <div id="logoId">
                            <Logo className="navbarLogo"></Logo>
                        </div>
                        <search className="searchId">
                            <Search drinks={drinks} drinkRecipe={drinkRecipe} className="navSearch" />
                        </search>
                        <div className="navBarMenu" id="navBarMenu" aria-controls="navbar_menu"
                            aria-expanded="false"
                            onClick={() => { showNavMenu(); fetchAlcoholType() }}>
                            <span className="bar kg-only"></span>
                            <span className="bar kg-only"></span>
                            <span className="bar kg-only"></span>
                            <span className="bar kg-only"></span>
                        </div>
                        <ul className="navDropdown">
                            <HashLink
                                onClick={showNavMenu}
                                to="/#dodSection"
                                className="dodNav">Drink of the Day
                            </HashLink>
                            <hr className='navline' />
                            <HashLink
                                onClick={showNavMenu}
                                to="/#discoverSection"
                                className="dodNav">Discover Cocktail By Alcohol
                            </HashLink>
                            <ul className="navDropdownByDrink" data-visible="false">
                                {dropDownSelection.map(ba => {
                                    return (
                                        <Link
                                            key={slugify(ba)}
                                            className="navbarLinks"
                                            to={`/${slugify(ba)}`}
                                            onClick={showNavMenu}
                                        >{ba}
                                        </Link>
                                    )
                                })}
                            </ul>
                            <hr className='navline' />
                            <HashLink onClick={showNavMenu}
                                to="/#discoverShotsSection"
                                className="dodNav">Discover Shots By Alcohol
                            </HashLink>
                            <hr className='navline' />
                            <HashLink onClick={showNavMenu}
                                to="/#mocktailSection"
                                className="dodNav">Mocktails
                            </HashLink>
                            <hr className='navline' />
                            <HashLink
                                onClick={showNavMenu}
                                to="/#mustKnowSection"
                                className="dodNav">Bartender Must Know Drinks
                            </HashLink>

                        </ul>
                    </div>
                </div>
            </nav>) : (
                <>
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbarContainer">
                                <div id="logoId">
                                    <Logo className="navbarLogo"></Logo>
                                </div>
                                <div className="navBarMenu" id="navBarMenu" aria-controls="navbar_menu"
                                    aria-expanded="false"
                                    onClick={() => { showNavMenu(); fetchAlcoholType() }}>
                                    <span className="bar kg-only"></span>
                                    <span className="bar kg-only"></span>
                                    <span className="bar kg-only"></span>
                                    <span className="bar kg-only"></span>
                                </div>
                                <ul className="navDropdown">
                                    <HashLink
                                        onClick={showNavMenu}
                                        to="/#dodSection"
                                        className="dodNav">Drink of the Day
                                    </HashLink>
                                    <hr className='navline' />
                                    <HashLink
                                        onClick={showNavMenu}
                                        to="/#discoverSection"
                                        className="dodNav">Discover Cocktail By Alcohol
                                    </HashLink>
                                    <ul className="navDropdownByDrink" data-visible="false">
                                        {dropDownSelection.map(ba => {
                                            return (
                                                <Link
                                                    key={slugify(ba)}
                                                    className="navbarLinks"
                                                    to={`/${slugify(ba)}`}
                                                    onClick={showNavMenu}
                                                >{ba}
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                    <hr className='navline' />
                                    <HashLink onClick={showNavMenu}
                                        to="/#discoverShotsSection"
                                        className="dodNav">Discover Shots By Alcohol
                                    </HashLink>
                                    <hr className='navline' />
                                    <HashLink onClick={showNavMenu}
                                        to="/#mocktailSection"
                                        className="dodNav">Mocktails
                                    </HashLink>
                                    <hr className='navline' />
                                    <HashLink
                                        onClick={showNavMenu}
                                        to="/#mustKnowSection"
                                        className="dodNav">Bartender Must Know Drinks
                                    </HashLink>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="mobileNavContainer">
                        <Search drinks={drinks} drinkRecipe={drinkRecipe} className="navSearch" />
                    </div>
                </>
            )}
        </>

    )
}

