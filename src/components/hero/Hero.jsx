import React, {useState, useEffect, useRef } from 'react'

import './hero.css'
import { Parallax, Background } from 'react-parallax';
import heroImage from '../../assets/pexels-chris-f-1283219.jpeg'
import altImage from '../../assets/pexels-lime-mint-drinks.jpg'

export const Hero = () => {

  const titleRefOne = useRef();
  const [ elementVisible, setElementVisible ] = useState();


  useEffect(() => {
    // const observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0]
    //   setElementVisible(entry.isIntersecting)
     
    // })
    // observer.observe(titleRefOne.current)
  },[])

  console.log('window.innerWidth', window.innerWidth)

  return (
    <>
     {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (
      <section id="heroSection" className="indexBackground">
          <Parallax blur={{ min: -15, max: 15 }} strength={500} style={{marginTop: "-5rem"}}
            bgImage={require ('../../assets/pexels-chris-f-1283219.jpeg')}
          > 
            <div className="container">
              <div className="homePageContainer">
                  <div className="titleContainer">
                    <h2 ref={titleRefOne} className={`${elementVisible} ? titleContainerH2 show : titleContainerH2 hidden`}>Make Great</h2>
                    <h1 ref={titleRefOne} className={`${elementVisible} ? titleContainerH1 show : titleContainerH1 hidden`}>Cocktails</h1>
                </div>
                <div ref={titleRefOne} className={`${elementVisible} ? horizonalDivider show : horizonalDivider hidden`}></div>
              </div>
            </div>
              
            <div className="custom_bg"/>
          </Parallax>
        </section>) :(console.log('medium')) : (
          <section id="heroSection" className="indexBackground">
          <Parallax blur={{ min: -15, max: 15 }} strength={500} style={{marginTop: "5rem"}}
            bgImage={require ('../../assets/pexels-chris-f-1283219.jpeg')}
          > 
            <div className="container">
              <div className="homePageContainer">
                  <div className="titleContainer">
                    <h2 ref={titleRefOne} className={`${elementVisible} ? titleContainerH2 show : titleContainerH2 hidden`}>Make Great</h2>
                    <h1 ref={titleRefOne} className={`${elementVisible} ? titleContainerH1 show : titleContainerH1 hidden`}>Cocktails</h1>
                </div>
                <div ref={titleRefOne} className={`${elementVisible} ? horizonalDivider show : horizonalDivider hidden`}></div>
              </div>
            </div>
            <div className="custom_bg" />
          </Parallax>
        </section>
        )}

    </>
 
  )
}
