import React, {useState, useEffect } from 'react'

import './hero.css'

export const Hero = () => {
  let heroImage = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-chris-f-1283219.jpeg') + ')'
  let topImage = 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/BarTopImage.png')
  let middleImage = 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/BarMiddleImage.png')
  let bottomImage = 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/BarBottomImage.png')

  const [ offsetY, setOffSetY ] = useState(0)
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)

  }, []) 

    return (
      <section id="heroSection" className='indexBackground'>
        <div className="container">
          <div className="homePageContainer">
            <div 
              className="topImage"
              style={{backgroundImage: topImage,
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
              // transform: `translateY(${offsetY * 0.6}px)`
         
              }}>
            </div>
        
          <div className="mdlImage"
            style={{
              backgroundImage: middleImage,
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
              transform: `translateY(${offsetY * 0.2}px)`
            
            }}>

          </div>
          <div className="bottomImage"
            style={{
              backgroundImage: bottomImage,
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
              transform: `translateY(${offsetY * 0.1}px)`
            }}>

          </div>
          <div className="titleContainer">
                 <h2 style={{transform: `translateY(${offsetY * 0.8}px)`}} >Make Great</h2>
                 <h1 style={{transform: `translateY(${offsetY * 0.6}px)`}}>Cocktails</h1>
             </div>
             <div
              style={{transform: `translateY(${offsetY * 0.6}px)`}}
              className="horizonalDivider"></div>
              
            
          </div>
        </div>
      </section>
    
    )
}

