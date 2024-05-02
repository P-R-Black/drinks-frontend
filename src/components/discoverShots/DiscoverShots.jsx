import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './discovershots.css'
import { Parallax, Background } from 'react-parallax';
import discoverShotsImage from '../../assets/pexels-shots.jpg'
import altImage from '../../assets/pexels-lime-mint-drinks.jpg'
import { ToolTip } from '../tooltip/ToolTip';


export const DiscoverShots = ({ allShots }) => {

    const discoverShotRef = useRef();
    const [ discElementVisible, setDiscElementVisible ] = useState();
    const [ shotBase, setShotBase ] = useState([])

    useEffect(() => {
        const allAlcohol = async () => {
            let filteredBase = []
            let base = await allShots.map((ba) => ba.base_alcohol)
            let base_two = await base.map((bw) => bw[0])
            for (let b = 0; b < base_two.length; b++){
                if (!filteredBase.includes(base_two[b])){
                    filteredBase.push(base_two[b])
                }
            }
         
            setShotBase(filteredBase.sort())
        }
        allAlcohol()
    },[])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        setDiscElementVisible(entry.isIntersecting)
        
        })
        observer.observe(discoverShotRef.current)
    },[])


  return (
    <section className="discoverShotsSection">
        <Parallax 
                blur={5} 
                bgImageAlt={altImage}
                strength={500}>
                <Background>
                    <img src={discoverShotsImage} 
                        className='parallaxImageDod' style={{position: "absolute", height: "100%", width: "100vw", 
                        backfaceVisibility: "hidden", transform: 'translate3d(-50%, -49.5868px, 0px)', left:"50%", 
                        transformStyle: 'preserve-3d', backgroundSize: "cover"}}
                    />
                </Background>
                <div className="container">
                    <div className="discoverShotsContainer">
                        <div className="discoverShotsTitleContainer" ref={discoverShotRef}>
                            <h1 className={discElementVisible ? `discoverShotsTitleContainerH1 show` : `discoverShotsTitleContainerH1 hidden`} >Shots</h1>
                        </div>
                        <div className="discShotsLinksToDrinkContainer">
                            {shotBase.map((ad) => (
                                    <>
                                        <ToolTip text={ad}>
                                            <Link
                                                key={ad.toLowerCase()}
                                                className="linktoRecipeFour" 
                                                to={`/${ad.toLowerCase().replaceAll(" ","")}/shot`}
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
