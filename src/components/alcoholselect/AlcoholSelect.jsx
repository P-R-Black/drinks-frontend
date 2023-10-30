import React, { useState, useEffect } from 'react'; 
import './alcoholselect.css';
import styled, { keyframes } from 'styled-components';


export const AlcoholSelect = ({ drinks, alcohol }) => {

  console.log('alcohol as', alcohol)

  const [filteredDrink, setFilteredDrink ] = useState([])
  const [backgroundPic, setBackgroundPic] = useState()
  const [alcFontSize, setAlcFontSize] = useState(200)
  
  // format alcohol name
  if (alcohol == "punt e mes"){
      alcohol = "Punt e Mes"
  } else if (alcohol == "sloe gin"){
      alcohol = "Sloe Gin"
  } else if (alcohol == "white wine apéritif"){
      alcohol = "White Wine Apéritif"
  } else if (alcohol == "rosé wine apéritif"){
      alcohol = "Rosé Wine Apéritif"
  } else if (alcohol == "rum (dark)"){
    alcohol = "Rum (Dark)"
  } else if (alcohol == "rum (light)"){
    alcohol = "Rum (Light)"
  } else {
    let alcoholFirstLetter = alcohol.charAt(0)
    let alcoholFirstLetterCap = alcoholFirstLetter.toUpperCase()
    let alcoholFirstLetterRemainingLetters = alcohol.slice(1)
    alcohol = alcoholFirstLetterCap + alcoholFirstLetterRemainingLetters
  }

  let imgUrlLime = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lisa-f.jpg') + ')'
  let imgUrlOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-j-lewis.jpg') + ')'
  let imgUrlLemon = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lukas.jpg')  + ')'
  let imgUrlColaUp = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-cola-up.jpg') + ')'
  let imgUrlColaDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-cola-down.jpg') + ')'
  let imgUrlBloodOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-blood-orange-wedge.jpg') + ')'
  let imgUrlRedLemonSlice = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-red-lemon-slice.jpg') + ')'
  let imgUrlChampagneBot = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-champagne-bottles.jpg') + ')'
  let imgUrlMojito = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lime-mint-drinks.jpg') + ')'
  let imgUrlScotchTopDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-scotch-topdown.jpg') + ')'
  let imgUrlOrangeSlices = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-orange-slices.jpg') + ')'
  let imgUrlWhiteWine = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-white-wine.jpg') + ')'

  

  let picByDrink = {
    "Amaretto": [imgUrlScotchTopDown],
    "Apéritif": [imgUrlBloodOrange],
    "Aquavit": [imgUrlBloodOrange],
    "Brandy": [imgUrlScotchTopDown],
    "Bourbon": [imgUrlScotchTopDown],
    "Cognac": [imgUrlScotchTopDown],
    "Gin": [imgUrlLime, imgUrlLemon, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Mezcal":[imgUrlOrangeSlices],
    "Punt e Mes": [imgUrlOrange, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Rosé Wine Apéritif": [imgUrlChampagneBot],
    "Rum": [imgUrlColaUp, imgUrlMojito],
    "Rum (Dark)": [imgUrlColaUp], 
    "Rum (Light)": [imgUrlColaUp, imgUrlMojito],
    "Scotch": [imgUrlScotchTopDown],
    "Sloe Gin": [imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Tequila": [imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vodka":[imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vermouth": [imgUrlBloodOrange],
    "Whiskey": [imgUrlScotchTopDown],
    "White Wine Apéritif": [imgUrlWhiteWine, imgUrlChampagneBot],
  }



  const filterDrink = () =>{
    let fileDrinks = drinks.map((gd) => {
      return gd;
    }).filter((dt) => {return dt.base_alcohol == alcohol})
    setFilteredDrink(fileDrinks)
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
    filterDrink()
    adjustFontSize()
    setBackgroundPic(picByDrink[alcohol][Math.floor(Math.random() * picByDrink[alcohol].length)])
  },[alcohol])

  
  let scrollLength =  filteredDrink.length
  let scrollDuration = (scrollLength * 100) / 18


  const drinkScroll = keyframes`
    0% { transform: translate3d(100%, 0, 0);}
  100% { transform: translate3d(${scrollLength * -100}%, 0, 0); }`

  const Scroll = styled.div`
   animation: ${drinkScroll} ${scrollDuration}s linear infinite;

    &:hover{
      animation-play-state: paused;
      color: yellow;
    }

   `;

  return (
    <section className="ginBackground" style={{backgroundImage: backgroundPic}}>
      <div className="container">
        <div className="baseAlcoholContainer">
          <div className="baseAlcTitleContainer">
            <h1 id="baseAlcoholName" style={{fontSize: alcFontSize}}>{alcohol}</h1>
            <h2>Drinks & Cocktails</h2>
          </div>
          <div className="drinkListContainer">
            <ul className="drinkListUl">
              {filteredDrink.map(fd => {
                return (
                  <Scroll className="nameButtonContainer">
                    <li className="drinkListLi" key={fd.id}>{fd.drink_name}</li>
                    <a href={`/alcohol/${fd.base_alcohol}/${fd.drink_name.toLowerCase()}`} className="linktoRecipe">Recipe</a>
                  </Scroll>
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