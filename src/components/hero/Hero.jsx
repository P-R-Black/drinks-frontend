import React, {useState, useEffect, useRef } from 'react'

import './hero.css'
import { Parallax, Background } from 'react-parallax';
import heroImage from '../../assets/pexels-chris-f-1283219.jpeg'



export const Hero = () => {

  const titleRefOne = useRef();
  const [ elementVisible, setElementVisible ] = useState();

  console.log('elementVisible', elementVisible)
  console.log('titleRefOne', titleRefOne)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setElementVisible(entry.isIntersecting)
     
    })
    observer.observe(titleRefOne.current)
  },[])


  return (
    
    <section id="heroSection" className='indexBackground'>
        <Parallax 
          blur={5} 
          bgImageAlt={heroImage}
          strength={500}>
            <Background>
              <img src={heroImage} className='parallaxImage' style={{position: "absolute", height: "auto", width: "1486.28px", backfaceVisibility: "hidden",
                transform: 'translate3d(-50%, -49.5868px, 0px)',  left: "50%", transformStyle: 'preserve-3d',
                backgroundSize: "cover"         
            }}/>
            </Background>
        <div className="container">
          <div className="homePageContainer">
            <div className="titleContainer">
                <h2  ref={titleRefOne} className={`${elementVisible} ? titleContainerH2 show : titleContainerH2 hidden`}>Make Great</h2>
                <h1 ref={titleRefOne} className={`${elementVisible} ? titleContainerH1 show : titleContainerH1 hidden`}>Cocktails</h1>
            </div>
            <div ref={titleRefOne} className={`${elementVisible} ? horizonalDivider show : horizonalDivider hidden`}></div>
          </div>
        </div>
      </Parallax>
    </section>
    
  )
}

