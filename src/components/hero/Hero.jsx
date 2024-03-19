import React, {useState, useEffect } from 'react'

import './hero.css'
import { Parallax, Background } from 'react-parallax';
import heroImage from '../../assets/pexels-chris-f-1283219.jpeg'


export const Hero = () => {

  const heroImage2 = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-chris-f-1283219.jpeg') + ')'
  const heroImage3 = '/../../assets/pexels-chris-f-1283219.jpeg'


  return (
    
    <section id="heroSection" className='indexBackground'>
        <Parallax 
          blur={5} 
          // bgImage={heroImage}

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
                <h2>Make Great</h2>
                <h1>Cocktails</h1>
            </div>
            <div className="horizonalDivider"></div>
          </div>
        </div>
      </Parallax>
    </section>
    
  )
}

