import React from 'react'
import './hero.css'

export const Hero = () => {
  let heroImage = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-chris-f-1283219.jpeg') + ')'
  
  return (
    <section className='indexBackground' style={{backgroundImage: heroImage}}>
      <div className="container">
        <div className="homePageContainer">
            <div className="titleContainer">
                <h2>Make Great</h2>
                <h1>Cocktails</h1>
            </div>
            <div className="horizonalDivider"></div>
        </div>
      </div>
    </section>
  )
}
