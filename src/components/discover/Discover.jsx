import React, { useRef, useState, useEffect } from 'react'

import './discover.css'
import { Parallax, Background } from 'react-parallax';
import discoverImage from '../../assets/sergio-alves-santos-PeDrafNlY2Y-unsplash.jpg'
import { ToolTip } from '../tooltip/ToolTip';

export const Discover = ({ drinks }) => {

    const discoverRef = useRef();
    const [ discElementVisible, setDiscElementVisible ] = useState();
    const [ mainAlcohols, setMainAlcohols ] = useState([])

    const allAlcohol = async () => {
        let filteredBase = []
        for (let d = 0; d < drinks.length; d++){
        let base = drinks.map((ba) => ba.base_alcohol)
        for (let b = 0; b < base.length; b++){
            let baseText = await base[b][0]
            if (!filteredBase.includes(baseText)){
                filteredBase.push(baseText)

            }
        }
        setMainAlcohols(filteredBase.sort())
        }
    }


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        setDiscElementVisible(entry.isIntersecting)
        
        })
        observer.observe(discoverRef.current)
        allAlcohol()
    },[])

    return (
        <section id="discoverSection" className="discoverSection">
            <Parallax 
                blur={5} 
                bgImageAlt={discoverImage}
                strength={500}>
                <Background>
                    <img src={discoverImage} 
                        className='parallaxDiscoverImage' 
                        style={{position: "absolute", height: "auto", width: "100vw", backfaceVisibility: "hidden",
                        transform: 'translate3d(-50%, -49.5868px, 0px)',  left: "50%", transformStyle: 'preserve-3d',
                        backgroundSize: "cover"}}
                    />
                </Background>
                <div className="container">
                    <div className="discoverContainer">
                        <div className="discoverTitleContainer" ref={discoverRef} >
                            {discElementVisible ? (
                                    <>
                                     <h1 className={"discoverTitleContainerH1 show"} >Discover</h1>
                                     <h2 className={"discoverTitleContainerH2 show"}>Your Next Cocktail</h2> 
                                    </>
                                   
                            ):(
                                <>
                                    <h1 className={"discoverTitleContainerH1 hidden"}></h1>
                                    <h2 className={"discoverTitleContainerH2 hidden"}></h2>
                                </>
                                   
                            )}
                        </div>
                        <div className="linksToDrinksContainer">
                            {mainAlcohols.map((ad) => (
                            <>
                                <ToolTip text={ad}>
                                        <a 
                                        className="linktoRecipeThree"
                                        href={`/alcohol/${ad.toLowerCase()}`}>
                                        {ad.length < 18 ? ad : ad.slice(0, 15) + "..."}
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
