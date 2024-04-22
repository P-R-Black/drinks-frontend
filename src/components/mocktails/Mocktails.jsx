import React, {useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';

import './mocktails.css'
import { Parallax, Background } from 'react-parallax';
import mocktailImage from '../../assets/pexels-mocktails.jpg'
import altImage from '../../assets/pexels-lime-mint-drinks.jpg'

export const Mocktails = ({ drinks }) => {

    const mocktailTitleRef = useRef();
    const tooTipCardRef = useRef();

    const [ mocktailElementVisible, setMocktailElementVisible ] = useState();
    const [ toolTipCardVisible, seToolTipCardtVisible ] = useState();

    const [ mocktails, setMocktails ] = useState([])


    const nonAlcoholicDrinks = useCallback(async () => {
        let nonAlcBase = await drinks.filter((nab) => nab.base_alcohol[0] === "Non-Alcoholic")
        setMocktails(nonAlcBase.sort().slice(0, 3));
    }, [drinks, setMocktails])
       


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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(() => {
    //     nonAlcoholicDrinks();

    // },[])

    

// normal screen => medium screen => small screen
  return (
    <section id="mocktailSection" className="moctailSection"> 
        <Parallax>
            <Background>
                {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? ( <img 
                    src={mocktailImage} className='parallaxDiscoverImage' style={{position: "absolute", 
                    height: "auto", width: "100vw", backfaceVisibility: "hidden",
                    transform: 'translate3d(-50%, -49.5868px, 0px)', left:"50%", transformStyle: 'preserve-3d',
                    backgroundSize: "cover"}} alt={altImage}
                />):(<img 
                    src={mocktailImage} className='parallaxDiscoverImage' style={{position: "absolute", 
                    height: "auto", width: "auto", backfaceVisibility: "hidden",
                    transform: 'translate3d(-50%, -49.5868px, 0px)', left:"50%", transformStyle: 'preserve-3d',
                    backgroundSize: "cover"}} alt={altImage}
                />):(<img 
                    src={mocktailImage} className='parallaxDiscoverImage' style={{position: "absolute", 
                    height: "auto", width: "auto", backfaceVisibility: "hidden",
                    transform: 'translate3d(-50%, -49.5868px, 0px)', left:"50%", transformStyle: 'preserve-3d',
                    backgroundSize: "cover"}} alt={altImage}
                />)}
             
            </Background>
            <div className="container">
                <div className="mocktailContainer">
                    <div className="mocktailTitleContainer" ref={mocktailTitleRef}>
                        <>
                            <h1 className={mocktailElementVisible ? `mocktailTitleH1 show`:`mocktailTitleH1 hidden`}>Mocktails</h1>
                            <h2 className={mocktailElementVisible ? `mocktailTitleH2 show`:`mocktailTitleH2 hidden`}>No Alcohol, No Problem</h2>
                        </>
                    </div>
                    <div className="MockLinksToDrinksContainerCard">
                        {mocktails.map((mt) => (
                            <div ref={tooTipCardRef} className={toolTipCardVisible ? `toolTipCards show` : `toolTipCards hidden`}  key={mt.id}>
                
                                <Link className="linktoRecipeThreeCard"
                                    to={`/${mt.base_alcohol}/${mt.drink_name.toLowerCase().replaceAll(" ","")}`}>
                                        {mt.drink_name}
                                </Link>
                                <ol className="mockIngredientContainer">
                                    {mt.ingredient_name.map((min, minIndex) => (
                                        <li key={minIndex} className="mockIngredients">
                                            {min.replace(min.split(" ")[0], "").replace(min.split(" ")[1], "")
                                        .trim()}</li>
                                    ))}
                                </ol>
                                
                                <Link className="linktoRecipe" to={`/${mt.base_alcohol}/${mt.drink_name.toLowerCase().replaceAll(" ","")}`}>
                                    Recipe</Link>

                            </div >
                            ))}
                            <Link className={toolTipCardVisible ? `mocktailMore show` : `mocktailMore hidden`}
                                to={`/non-alcoholic`}>
                                More
                            </Link>
                    </div>
                </div>
            </div>
        </Parallax>
    </section>
  )
}
