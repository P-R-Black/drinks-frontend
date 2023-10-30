import React, { useState, useEffect } from 'react'
import './hero.css'

export const Hero = ({ drinks }) => {
  const [numofRecipes, setNumOfRecipes] = useState(40)

  useEffect(() => {
    const drinksCount = () => {
      let recipeLengthRounded = Math.round(drinks.length / 5) * 5;
      if (drinks.length % 10 <= 5) {
        setNumOfRecipes(`Over ${recipeLengthRounded} recipes, with more added daily`)
      } else {
        setNumOfRecipes(`Nearly ${recipeLengthRounded} recipes, with more added daily`)
      }
      
    }
    drinksCount()
  },[])
 
  
  return (
    <section className='indexBackground'>
      <div className="container">
        <div className="homePageContainer">
            <div className="titleContainer">
                <h2>Make Great</h2>
                <h1>Cocktails</h1>
            </div>
            <div className="horizonalDivider"></div>
            <div className="bannerContainer">{numofRecipes}</div>
        </div>
      </div>
       {/* <DailyDrink drinks={drinks}/> */}
    </section>
  )
}
