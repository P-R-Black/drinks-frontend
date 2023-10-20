import React, { useState, useEffect } from 'react'
import './alcoholselect.css'

export const AlcoholSelect = ({drinks, navLinkText, alcohol }) => {


  // format alcohol name
  if (alcohol != "punt e mes") {
    let alcoholFirstLetter = alcohol.charAt(0)
    let alcoholFirstLetterCap = alcoholFirstLetter.toUpperCase()
    let alcoholFirstLetterRemainingLetters = alcohol.slice(1)
    alcohol = alcoholFirstLetterCap + alcoholFirstLetterRemainingLetters

  } else {
    alcohol = "Punt e Mes"
  }
  
  

  const [filteredDrink, setFilteredDrink ] = useState([])

  const filterDrink = () =>{
    let fileDrinks = drinks.map((gd) => {
      return gd;
    }).filter((dt) => {return dt.base_alcohol == alcohol})
    setFilteredDrink(fileDrinks)

  }

  useEffect(() => {
    filterDrink()
  },[])

  

  return (
    <section className="ginBackground">
      <div className="container">
        <div className="baseAlcoholContainer">
          <div className="baseAlcTitleContainer">
            <h1>{alcohol}</h1>
            <h2>Cocktails</h2>
          </div>
          <div className="drinkListContainer">
            <ul className="drinkListUl">
              {filteredDrink.map(fd => {
                return (
                  <div className="nameButtonContainer">
                    <li className="drinkListLi" key={fd.id}>{fd.drink_name}</li>
                    <a href="" className="linktoRecipe">Recipe</a>
                  </div>
                )
              })}
              
            </ul>
            <div className="moreDrinkLinkContainer">
                <a href="" className="linktoRecipeLarge">More {alcohol} Drinks</a>
              </div>
          </div>
        </div>
      </div>
    </section>

    
  )
}
