import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';

import './mocktails.css'
import { Parallax, Background } from 'react-parallax';
import mocktailImage from '../../../assets/pexels-mocktails.jpg'
import altImage from '../../../assets/pexels-lime-mint-drinks.jpg'
import slugify from 'react-slugify';


export const Mocktails = ({ cocktails }) => {

    const mocktailTitleRef = useRef();
    const tooTipCardRef = useRef();
    const [mocktailElementVisible, setMocktailElementVisible] = useState();
    const [toolTipCardVisible, seToolTipCardtVisible] = useState();
    const [mocktails, setMocktails] = useState([])


    const nonAlcoholicDrinks = useCallback(async () => {
        let nonAlcBase = await cocktails.filter((nab) => nab.base_alcohol[0] === "non-alcoholic")
        setMocktails(nonAlcBase.sort().slice(0, 3));
    }, [cocktails, setMocktails])


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMocktailElementVisible(entry.isIntersecting)
            seToolTipCardtVisible(entry.isIntersecting)

        })
        observer.observe(mocktailTitleRef.current)

        // Call nonAlcoholicDrinks as a dependency
        nonAlcoholicDrinks();

        return () => {
            observer.disconnect();
        };


    }, [nonAlcoholicDrinks])


    // normal screen => medium screen => small screen
    return (
        <section id="mocktailSection" className="moctailSection" aria-label="Non-Alcoholic Drink Options">
            <Parallax>
                <Background>
                    {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (<img
                        src={mocktailImage} className='parallaxDiscoverImage' style={{
                            position: "absolute",
                            height: "auto", width: "100vw", backfaceVisibility: "hidden",
                            transform: 'translate3d(-50%, -49.5868px, 0px)', left: "50%", transformStyle: 'preserve-3d',
                            backgroundSize: "cover"
                        }} alt=""
                    />) : (<img
                        src={mocktailImage} className='parallaxDiscoverImage' style={{
                            position: "absolute",
                            height: "auto", width: "auto", backfaceVisibility: "hidden",
                            transform: 'translate3d(-50%, -49.5868px, 0px)', left: "50%", transformStyle: 'preserve-3d',
                            backgroundSize: "cover"
                        }} alt=""
                    />) : (<img
                        src={mocktailImage} className='parallaxDiscoverImage' style={{
                            position: "absolute",
                            height: "auto", width: "auto", backfaceVisibility: "hidden",
                            transform: 'translate3d(-50%, -49.5868px, 0px)', left: "50%", transformStyle: 'preserve-3d',
                            backgroundSize: "cover"
                        }} alt=""
                    />)}

                </Background>
                <div className="container">
                    <div className="mocktailContainer">
                        <div className="mocktailTitleContainer" ref={mocktailTitleRef}>
                            <>
                                <h1 className={mocktailElementVisible ? `mocktailTitleH1 show` : `mocktailTitleH1 hidden`} aria-live="polite">Mocktails</h1>
                                <h2 className={mocktailElementVisible ? `mocktailTitleH2 show` : `mocktailTitleH2 hidden`} aria-live="polite">No Alcohol, No Problem</h2>
                            </>
                        </div>
                        <div className="MockLinksToDrinksContainerCard">
                            {mocktails.map((mt) => (
                                <div
                                    ref={tooTipCardRef}
                                    className={toolTipCardVisible ? `toolTipCards show` : `toolTipCards hidden`}
                                    key={mt.id}
                                    aria-live="polite"
                                >

                                    <Link className="linktoRecipeThreeCard"
                                        to={`/${slugify(mt.base_alcohol)}/${slugify(mt.drink_name)}`}
                                        aria-label={`View the recipe for ${mt.drink_name}`}
                                    >
                                        {mt.drink_name}
                                    </Link>
                                    <ol className="mockIngredientContainer">
                                        {mt.ingredients.map((min, minIndex) => (
                                            <li key={minIndex} className="mockIngredients">
                                                {min.replace(min.split(" ")[0], "").replace(min.split(" ")[1], "")
                                                    .trim()}</li>
                                        ))}
                                    </ol>

                                    <Link
                                        className="linktoRecipe"
                                        to={`/${slugify(mt.base_alcohol)}/${slugify(mt.drink_name)}`}
                                        aria-label={`Get the full recipe for ${mt.drink_name}`}
                                    >
                                        Recipe
                                    </Link>

                                </div >
                            ))}
                            <Link className={toolTipCardVisible ? `mocktailMore show` : `mocktailMore hidden`}
                                to={"/non-alcoholic"}
                                aria-label="See more non-alcoholic drinks"
                            >
                                More
                            </Link>

                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}
