import React, {useState, useRef, useEffect } from 'react'

import './mocktails.css'
import { Parallax, Background } from 'react-parallax';
import discoverImage from '../../assets/pexels-rachel-default.jpg'
import { ToolTip } from '../tooltip/ToolTip';

export const Mocktails = ({ drinks }) => {

    const mocktailTitleRef = useRef();
    const [ mocktailElementVisible, setMocktailElementVisible ] = useState();
    const [ mocktails, setMocktails ] = useState([])

    const nonAlcoholicDrinks = async () => {
        let nonAlcBase = await drinks.filter((nab) => nab.base_alcohol[0] === "Non-Alcoholic")
        setMocktails(nonAlcBase.sort())
    }


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        setMocktailElementVisible(entry.isIntersecting)
        
        })
        observer.observe(mocktailTitleRef.current)
        nonAlcoholicDrinks()
    },[])


  return (
    <section id="mocktailSection" className="moctailSection">
        <Parallax>
            <Background>
                <img src={discoverImage}
                    className='parallaxDiscoverImage' 
                    style={{position: "absolute", height: "auto", width: "100vw", backfaceVisibility: "hidden",
                    transform: 'translate3d(-50%, -49.5868px, 0px)',  left: "50%", transformStyle: 'preserve-3d',
                    backgroundSize: "cover"}}
                />
            </Background>
            <div className="container">
                <div className="mocktailContainer">
                    <div className="mocktailTitleContainer" ref={mocktailTitleRef}>
                    {mocktailElementVisible ? (
                        <>
                            <h1 className="mocktailTitleH1 show">Mocktails</h1>
                            <h2 className="mocktailTitleH2 show">No Alcohol, No Problem</h2>
                        </>
                    ) : (
                        <>
                            <h1 className="mocktailTitleH1 hidden"></h1>
                            <h2 className="mocktailTitleH2 hidden"></h2>
                        </>
                    )}
                    </div>
                    <div className="linksToDrinksContainer">
                        {mocktails.map((mt) => (
                            <>
                                <ToolTip text={mt.drink_name}>
                                    <a className="linktoRecipeThree"
                                        href={`/alcohol/${mt.base_alcohol}/${mt.drink_name.toLowerCase()}`}>
                                            {mt.drink_name.length < 18 ? mt.drink_name : mt.drink_name.slice(0, 15) + "..."}
                                    </a>
                                </ToolTip>
                                    
                            </>
                            ))}
                    </div>
                </div>
            </div>
        </Parallax>
    </section>
  )
}
