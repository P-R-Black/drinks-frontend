import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './discovershots.css'
import { Parallax } from 'react-parallax';
import altImage from '../../../assets/pexels-rachel-default.jpg'
import { ToolTip } from '../../tooltip/ToolTip';
import slugify from 'react-slugify';


export const DiscoverShots = ({ allShots }) => {

    const discoverShotRef = useRef();
    const [discElementVisible, setDiscElementVisible] = useState();
    const [shotBase, setShotBase] = useState([])


    useEffect(() => {
        let filteredBase = []
        let base = allShots?.map((ba) => ba.base_alcohol)
        let base_two = base?.map((bw) => bw[0])
        for (let b = 0; b < base_two?.length; b++) {
            if (!filteredBase.includes(base_two[b])) {
                filteredBase.push(base_two[b])
            }
        }

        setShotBase(filteredBase.sort())

    }, [allShots])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setDiscElementVisible(entry.isIntersecting)

        })
        observer.observe(discoverShotRef.current)
    }, [])


    return (
        <section className="discoverShotsSection" id="discoverShotsSection" aria-label="Discoveer your next shot">
            <Parallax
                blur={5}
                strength={500}
                bgImageAlt={"background image of a shot glass with a lime next to the glass."}
            >
                <div className="container">
                    <div className="discoverShotsContainer">
                        <div className="discoverShotsTitleContainer" ref={discoverShotRef}>
                            <h1 className={discElementVisible ? `discoverShotsTitleContainerH1 show` : `discoverShotsTitleContainerH1 hidden`} >Shots</h1>
                        </div>
                        <div className={discElementVisible ? `discShotsLinksToDrinkContainer show` : `discShotsLinksToDrinkContainer hidden`}>
                            {shotBase.map((ad) => (
                                <div key={slugify(ad)} className={discElementVisible ? `shotsAlcLinkContainer show` : `shotsAlcLinkContainer hidden`}>
                                    <ToolTip text={ad}>
                                        <Link
                                            className="linktoRecipeFour"
                                            to={`/${slugify(ad)}/shot`}
                                            aria-label={`Explore shots with ${ad}`}
                                        >
                                            {ad.length < 18 ? ad : ad.slice(0, 15) + "..."}
                                        </Link>
                                    </ToolTip>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}