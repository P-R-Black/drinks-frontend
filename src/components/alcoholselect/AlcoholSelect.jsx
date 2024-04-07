import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './alcoholselect.css';
import styled, { keyframes } from 'styled-components';

export const AlcoholSelect = ({ drinks, alcohol }) => {

  console.log('alcohol as', alcohol)

  const [filteredDrink, setFilteredDrink ] = useState([])
  const [backgroundPic, setBackgroundPic] = useState()
  const [alcFontSize, setAlcFontSize] = useState(200)

  
  // format alcohol name
  if (alcohol === "puntemes"){
      alcohol = "Punt e Mes"
  } else if (alcohol === "elderflowerliqueur"){
      alcohol = "Elderflower Liqueur"
  } else if (alcohol === "sloegin"){
      alcohol = "Sloe Gin"
  } else if (alcohol === "whitewineapéritif"){
      alcohol = "White Wine Apéritif"
  } else if (alcohol === "roséwineapéritif"){
      alcohol = "Rosé Wine Apéritif"
  } else if (alcohol === "rum(dark)"){
    alcohol = "Rum (Dark)"
  } else if (alcohol === "rum(gold)"){
    alcohol = "Rum (Gold)"
  } else if (alcohol === "rum(light)"){
    alcohol = "Rum (Light)"
  } else if (alcohol === "non-alcoholic"){
    alcohol = "Non-Alcoholic"
  } else if (alcohol === "sparklingwhitewine"){
    alcohol = "Sparkling White Wine"
  } else {
    let alcoholFirstLetter = alcohol.charAt(0)
    let alcoholFirstLetterCap = alcoholFirstLetter.toUpperCase()
    let alcoholFirstLetterRemainingLetters = alcohol.slice(1)
    alcohol = alcoholFirstLetterCap + alcoholFirstLetterRemainingLetters
  }

  let imgUrlDefault = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-rachel-default.jpg') + ')'
  let imgUrlLime = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-lisa-f.jpg') + ')'
  let imgUrlOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-j-lewis.jpg') + ')'
  let imgUrlLemon = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-lukas.jpg')  + ')'
  let imgUrlColaUp = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-cola-up.jpg') + ')'
  let imgUrlColaDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-cola-down.jpg') + ')'
  let imgUrlBloodOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-blood-orange-wedge.jpg') + ')'
  let imgUrlRedLemonSlice = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-red-lemon-slice.jpg') + ')'
  let imgUrlChampagneBot = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-champagne-bottles.jpg') + ')'
  let imgUrlMojito = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-lime-mint-drinks.jpg') + ')'
  let imgUrlScotchTopDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-scotch-topdown.jpg') + ')'
  let imgUrlOrangeSlices = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-orange-slices.jpg') + ')'
  let imgUrlWhiteWine = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-white-wine.jpg') + ')'
  let imgUrlRoseWine = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-polina-rose-over.jpg') + ')'
  let imgUrlRumGold = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-eva-gold.jpg') + ')'
  

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
    "Rosé Wine Apéritif": [imgUrlRoseWine],
    "Rum": [imgUrlColaUp, imgUrlMojito],
    "Rum (Dark)": [imgUrlColaUp],
    "Rum (Gold)": [imgUrlRumGold],
    "Rum (Light)": [imgUrlColaUp, imgUrlMojito],
    "Scotch": [imgUrlScotchTopDown],
    "Sloe Gin": [imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Tequila": [imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vodka":[imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vermouth": [imgUrlBloodOrange],
    "Whiskey": [imgUrlScotchTopDown],
    "White Wine Apéritif": [imgUrlWhiteWine, imgUrlChampagneBot],
  }


  const filterDrink = () => {
    let sortedList = []
    let fileDrinks = drinks.map((fd) => {
      if(fd.base_alcohol[0] == alcohol){
          if (fd.drink_name){
            sortedList.push(fd.drink_name)
          }
        return fd.drink_name;
      }
    })
    setFilteredDrink(sortedList.sort())

  }

  console.log('filtered Drink', filteredDrink)
  

  const adjustFontSize = () => {
    let baseAlcoholName = document.getElementById('baseAlcoholName').innerText
    if (baseAlcoholName.length >= 20){
      setAlcFontSize(115)
    }else if(baseAlcoholName.length >= 18){
      setAlcFontSize(120)
    } else if (baseAlcoholName.length >= 12) {
      setAlcFontSize(180)

      } else {
      setAlcFontSize(200)
    }
  }


  useEffect(() => {
    filterDrink()
    adjustFontSize()
    setBackgroundPic(picByDrink[alcohol] != undefined ? picByDrink[alcohol][Math.floor(Math.random() * picByDrink[alcohol].length)]: imgUrlDefault)
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
              {filteredDrink.map((fd) => {
                return (
                  <Scroll className="nameButtonContainer">
                    <li className="drinkListLi" key={fd.id}>{fd.length < 19 ? fd : fd.slice(0, 19) + "..."}</li>
                    <Link to={`/${alcohol.toLowerCase().replaceAll(" ","")}/${fd.toLowerCase().replaceAll(" ","")}`} className="linktoRecipe">Recipe</Link>
                  </Scroll>
                )
              })}
              
            </ul>
              <div className="moreDrinkLinkContainer">
                <Link to={`/${alcohol.toLowerCase().replaceAll(" ","")}/all_drinks`} className="linktoRecipeLarge">All {alcohol} Drinks</Link>
              </div>
          </div>
        </div>
      </div>
    </section>

    
  )
}