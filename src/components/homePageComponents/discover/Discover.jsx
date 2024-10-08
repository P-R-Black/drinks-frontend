import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './discover.css'
import { Parallax } from 'react-parallax';
import altImage from '../../../assets/pexels-rachel-default.jpg'
import { ToolTip } from '../../tooltip/ToolTip';
import slugify from 'react-slugify';

export const Discover = ({ cocktails }) => {

    const discoverRef = useRef();
    const [discElementVisible, setDiscElementVisible] = useState();
    const [mainAlcohols, setMainAlcohols] = useState([])



    useEffect(() => {
        const allAlcohol = async () => {
            let filteredBase = []
            let base = await cocktails?.map((ba) => ba.base_alcohol)
            let base_two = await base?.map((bw) => bw[0])
            for (let b = 0; b < base_two?.length; b++) {
                if (!filteredBase.includes(base_two[b])) {
                    filteredBase.push(base_two[b])
                }
            }

            setMainAlcohols(filteredBase.sort())
        }
        allAlcohol()
    }, [cocktails])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setDiscElementVisible(entry.isIntersecting)

        })
        observer.observe(discoverRef.current)
    })

    return (
        <section id="discoverSection" className="discoverSection" aria-label="Discover your next cocktail">
            <Parallax
                blur={5}
                bgImageAlt={"background picture of a darkly lit bar shelf with alcohol bottles."}
                strength={500}>

                <div className="container">
                    <div className="discoverContainer">
                        <div className="discoverTitleContainer" ref={discoverRef} >
                            <h1 className={discElementVisible ? `discoverTitleContainerH1 show` : `discoverTitleContainerH1 hidden`} >Discover</h1>
                            <h2 className={discElementVisible ? `discoverTitleContainerH2 show` : `discoverTitleContainerH2 hidden`}>Your Next Cocktail</h2>
                        </div>
                        <div className="discLinksToDrinkContainer">
                            {mainAlcohols.map((ad) => (
                                <React.Fragment key={`/${slugify(ad)}`}>
                                    <div key={slugify(ad)} className={discElementVisible ? `discAlcLinkContainer show` : `discAlcLinkContainer hidden`}>
                                        <ToolTip text={ad}>
                                            <Link
                                                className="linktoRecipeThree"
                                                to={`/${slugify(ad)}`}
                                                aria-label={`Explore cocktails with ${ad}`}
                                            >
                                                {ad.length < 18 ? ad : ad.slice(0, 15) + "..."}
                                            </Link>
                                        </ToolTip>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}
