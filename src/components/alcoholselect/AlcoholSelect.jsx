import React, { useState, useEffect } from 'react'
import './alcoholselect.css'

export const AlcoholSelect = ({drinks, navLinkText, alcohol }) => {
  const [filteredDrink, setFilteredDrink ] = useState([])

  // format alcohol name
  if (alcohol == "punt e mes"){
      alcohol = "Punt e Mes"
  } else if (alcohol == "sloe gin"){
      alcohol = "Sloe Gin"
  } else if (alcohol == "white wine apéritif"){
      alcohol = "White Wine Apéritif"
  } else {
    let alcoholFirstLetter = alcohol.charAt(0)
    let alcoholFirstLetterCap = alcoholFirstLetter.toUpperCase()
    let alcoholFirstLetterRemainingLetters = alcohol.slice(1)
    alcohol = alcoholFirstLetterCap + alcoholFirstLetterRemainingLetters
  }
  console.log('alcohol and length', alcohol, alcohol.length)
  

  let imgUrlLime = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lisa-f.jpg') + ')'
  let imgUrlOrange = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-j-lewis.jpg') + ')'
  let imgUrlLemon = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lukas.jpg')  + ')'
  let imgUrlColaUp = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-cola-up.jpg') + ')'
  let imgUrlColaDown = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-cola-down.jpg') + ')'
  let imgUrlBloodOrange = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-blood-orange-wedge.jpg') + ')'
  let imgUrlRedLemonSlice = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-red-lemon-slice.jpg') + ')'
  let imgUrlChampagneBot = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-champagne-bottles.jpg') + ')'
  let imgUrlMojito = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lime-mint-drinks.jpg') + ')'
  let imgUrlScotchTopDown = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-scotch-topdown.jpg') + ')'
  let imgUrlOrangeSlices = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-orange-slices.jpg') + ')'
  let imgUrlWhiteWine = 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-white-wine.jpg') + ')'

  const [backgroundPic, setBackgroundPic] = useState()

  let picByDrink = {
    "Gin": [imgUrlLime, imgUrlLemon, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Rum": [imgUrlColaUp, imgUrlMojito],
    "Rum (Dark)": [imgUrlColaUp], 
    "Rum (White)": [imgUrlColaUp, imgUrlMojito],
    "Whiskey": [imgUrlScotchTopDown],
    "Sloe Gin": [imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Tequila": [imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Bourbon": [imgUrlScotchTopDown],
    "Scotch": [imgUrlScotchTopDown],
    "Brandy": [imgUrlScotchTopDown],
    "Vodka":[imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Punt e Mes": [imgUrlOrange, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Vermouth": [imgUrlBloodOrange],
    "White Wine Apéritif": [imgUrlWhiteWine, imgUrlChampagneBot],
    "Apéritif": [imgUrlBloodOrange],
    "Aquavit": [imgUrlBloodOrange],
    "Mezcal":[imgUrlOrangeSlices]

  }

  
  
  const filterDrink = () =>{
    let fileDrinks = drinks.map((gd) => {
      return gd;
    }).filter((dt) => {return dt.base_alcohol == alcohol})
    setFilteredDrink(fileDrinks)

  }


  useEffect(() => {
    filterDrink()
    setBackgroundPic(picByDrink[alcohol][Math.floor(Math.random() * picByDrink[alcohol].length)])
  },[])


  return (
    <section className="ginBackground" style={{backgroundImage: backgroundPic}}>
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
