import React, { useState, useEffect } from 'react';
import { ToolTip } from '../tooltip/ToolTip';
import './drinks_all.css';

export const DrinksAll = ({drinks, alcohol, allDrknksBackgroundPic}) => {
  const [alldrinks, setallDrinks ] = useState([])
  const [alcFontSize, setAlcFontSize] = useState(200)

    console.log('alcohol DrinksAll', alcohol)
    console.log('allDrinks DrinksAll', alldrinks)


  // format alcohol name
  if (alcohol === "punt e mes"){
    alcohol = "Punt e Mes"
} else if (alcohol === "sloe gin"){
    alcohol = "Sloe Gin"
} else if (alcohol === "white wine apéritif"){
    alcohol = "White Wine Apéritif"
} else if (alcohol === "rosé wine apéritif"){
    alcohol = "Rosé Wine Apéritif"
} else if (alcohol === "rum (dark)"){
  alcohol = "Rum (Dark)"
} else if (alcohol === "rum (gold)"){
  alcohol = "Rum (Gold)"
} else if (alcohol === "rum (light)"){
  alcohol = "Rum (Light)"
} else if (alcohol === "amaretto"){
  alcohol = "Amaretto"
} else if (alcohol === "non-alcoholic"){
  alcohol = "Non-Alcoholic"
} else {
  let alcoholFirstLetter = alcohol.charAt(0)
  let alcoholFirstLetterCap = alcoholFirstLetter.toUpperCase()
  let alcoholFirstLetterRemainingLetters = alcohol.slice(1)
  alcohol = alcoholFirstLetterCap + alcoholFirstLetterRemainingLetters
}

  const getAllDrinks = () => {
    let sortedList = []
    let fileDrinks = drinks.map((fd) => {
      if(fd.base_alcohol[0] === alcohol){
          if (fd.drink_name){
            sortedList.push(fd.drink_name)
          }
        return fd.drink_name;
      }
    })
    setallDrinks(sortedList.sort())

  }

  const adjustFontSize = () => {
    let baseAlcoholName = document.getElementById('baseAlcoholName').innerText
    if(baseAlcoholName.length >= 18){
      setAlcFontSize(120)
    } else {
      setAlcFontSize(200)
    }
  }


  useEffect(() => {
    getAllDrinks()
    adjustFontSize()
  },[getAllDrinks])


  return (
    <section className="allDrinksBackground" style={{backgroundImage: allDrknksBackgroundPic}}>
      <div className="container">
        <div className="allDrinksContainer">
          <div className="baseAlcTitleContainerTwo">
            <h1 id="baseAlcoholName" style={{fontSize: alcFontSize}}>{alcohol}</h1>
            <h2>Drinks & Cocktails</h2>
          </div>
          <div className="linksToDrinksContainer">
            {alldrinks.map((ad) => (
               <>
                 <ToolTip text={ad}>
                        <a 
                          className="linktoRecipeTwo"
                          href={`/alcohol/${ad.base_alcohol}/${ad.toLowerCase()}`}>
                        {ad.length < 18 ? ad : ad.slice(0, 15) + "..."}
                        </a>
                  </ToolTip> 
               </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
