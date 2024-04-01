import React, {useState, useEffect, useRef } from 'react'

import './hero.css'
import { Parallax, Background } from 'react-parallax';
import heroImage from '../../assets/pexels-chris-f-1283219.jpeg'


export const Hero = () => {

  const titleRefOne = useRef();
  const [ elementVisible, setElementVisible ] = useState();


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setElementVisible(entry.isIntersecting)
     
    })
    observer.observe(titleRefOne.current)
  },[])


  console.log('window.innerWidth', window.innerWidth)

  return (
    
    <section id="heroSection" className='indexBackground'>
        <Parallax 
          blur={5} 
          bgImageAlt={heroImage}
          strength={500}>
            <Background>
            {(window.innerWidth > 600) ? (window.innerWidth > 1080) ?(<img src={heroImage} className='parallaxImage' 
                    style={{position: "absolute", height: "auto", 
                    width: "100vw", backfaceVisibility: "hidden", 
                    transform: 'translate3d(-50%, -49.5868px, 0px)', top: "0", left: "0", 
                    transformStyle: 'preserve-3d', backgroundSize: "cover"         
              }}/>) :(<img src={heroImage} className='parallaxImage' 
                  style={{position: "absolute", height: "auto", 
                  width: "100vw", backfaceVisibility: "hidden", 
                  transform: 'translate3d(-50%, -49.5868px, 0px)', top: "0", left: "0", 
                  transformStyle: 'preserve-3d', backgroundSize: "cover"         
              }}/>) : (<img src={heroImage} className='parallaxImage' 
                  style={{position: "absolute", height: "100vh", 
                  width: "auto", backfaceVisibility: "hidden", 
                  transform: 'translate3d(-50%, -49.5868px, 0px)', top: "0", left: "0", 
                  transformStyle: 'preserve-3d', backgroundSize: "cover"         
              }}/>)}
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

