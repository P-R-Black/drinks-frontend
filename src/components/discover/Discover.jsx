import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './discover.css'
import { Parallax, Background } from 'react-parallax';
import discoverImage from '../../assets/sergio-alves-santos-PeDrafNlY2Y-unsplash.jpg'
import altImage from '../../assets/pexels-lime-mint-drinks.jpg'
import { ToolTip } from '../tooltip/ToolTip';
import slugify from 'react-slugify';

export const Discover = ({ drinks, cocktails }) => {

    const discoverRef = useRef();
    const [ discElementVisible, setDiscElementVisible ] = useState();
    const [ mainAlcohols, setMainAlcohols ] = useState([])

    useEffect(() => {
        const allAlcohol = async () => {
            let filteredBase = []
            let base = await cocktails.map((ba) => ba.base_alcohol)
            let base_two = await base.map((bw) => bw[0])
            for (let b = 0; b < base_two.length; b++){
                if (!filteredBase.includes(base_two[b])){
                    filteredBase.push(base_two[b])
                }
            }
         
            setMainAlcohols(filteredBase.sort())
        }
        allAlcohol()
    },[])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        setDiscElementVisible(entry.isIntersecting)
        
        })
        observer.observe(discoverRef.current)
    },[drinks])

    return (
        <section id="discoverSection" className="discoverSection">
            <Parallax 
                blur={5} 
                bgImageAlt={altImage}
                strength={500}>
                <Background>
                <img src={discoverImage} 
                    className='parallaxImageDod' style={{position: "absolute", height: "100%", width: "100vw", 
                    backfaceVisibility: "hidden", transform: 'translate3d(-50%, -49.5868px, 0px)', left:"50%", 
                    transformStyle: 'preserve-3d', backgroundSize: "cover"}}
              />
                </Background>
                <div className="container">
                    <div className="discoverContainer">
                        <div className="discoverTitleContainer" ref={discoverRef} >
                            <h1 className={discElementVisible ? `discoverTitleContainerH1 show` : `discoverTitleContainerH1 hidden`} >Discover</h1>
                            <h2 className={discElementVisible ? `discoverTitleContainerH2 show` : `discoverTitleContainerH2 hidden`}>Your Next Cocktail</h2> 
                        </div>
                        <div className="discLinksToDrinkContainer">
                            {mainAlcohols.map((ad) => (
                                <>
                                    <ToolTip text={ad}>
                                        <Link
                                            key={ad.toLowerCase()}
                                            className="linktoRecipeThree" 
                                            to={`/${slugify(ad)}`}
                                            > 
                                            {ad.length < 18 ? ad : ad.slice(0, 15) + "..."}
                                        </Link>
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
