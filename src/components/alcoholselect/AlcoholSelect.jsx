import React, { useState, useEffect } from 'react';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import './alcoholselect.css';
import styled, { keyframes } from 'styled-components';

import imgUrlDefault from '../../assets/pexels-rachel-default.jpg';
import imgUrlLime from '../../assets/pexels-lisa-f.jpg'
import imgUrlOrange from '../../assets/pexels-j-lewis.jpg'
import imgUrlLemon from '../../assets/pexels-lukas.jpg'
import imgUrlColaUp from '../../assets/pexels-cola-up.jpg'
// import imgUrlColaDown from '../src/assets/pexels-cola-down.jpg'
import imgUrlBloodOrange from '../../assets/pexels-blood-orange-wedge.jpg'
import imgUrlRedLemonSlice from '../../assets/pexels-red-lemon-slice.jpg'
import imgUrlChampagneBot from '../../assets/pexels-champagne-bottles.jpg'
import imgUrlMojito from '../../assets/pexels-lime-mint-drinks.jpg'
import imgUrlScotchTopDown from '../../assets/pexels-scotch-topdown.jpg'
import imgUrlOrangeSlices from '../../assets/pexels-orange-slices.jpg'
import imgUrlWhiteWine from '../../assets/pexels-white-wine.jpg'
import imgUrlRoseWine from '../../assets/pexels-polina-rose-over.jpg'
import imgUrlRumGold from '../../assets/pexels-eva-gold.jpg'


export const AlcoholSelect = ({ cocktails, alcohol, displayName }) => {

  const [ filteredDrink, setFilteredDrink ] = useState([])
  const [ backgroundPic, setBackgroundPic ] = useState()
  const [ newFilter, setNewFilter ] = useState([])

   // removes display name from array
   let newDisplayName;
   for (let i of displayName){
     newDisplayName = i[0]
   }
   
  let picChoiceScotchTopDown = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlScotchTopDown})`;
  let picChoiceBloodOrange = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlBloodOrange})`;
  let picChoiceLime = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlLime})`;
  let picChoiceLemon = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlLemon})`;
  let picChoiceRedLemon = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRedLemonSlice})`;
  let picChoiceOrange = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlOrange})`;
  let picChoiceOrangeSlice = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlOrangeSlices})`;
  let picImageRoseWine = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRoseWine})`;
  let picImageColaUp = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlColaUp})`;
  let picImageMojito = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlMojito})`;
  let picImageRumGold = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRumGold})`;
  let picImageWhiteWine = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlWhiteWine})`;
  let picImageChampagneBottle = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlChampagneBot})`;
  let picImageDefault = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlDefault})`;


  let picByDrink = {
    "Amaretto": [picChoiceScotchTopDown],
    "Apéritif": [picChoiceBloodOrange],
    "Aquavit": [imgUrlBloodOrange],
    "Brandy": [picChoiceScotchTopDown],
    "Bourbon": [picChoiceScotchTopDown],
    "Cognac": [picChoiceScotchTopDown],
    "Gin": [picChoiceLime, picChoiceLemon, picChoiceBloodOrange, picChoiceRedLemon],
    "Mezcal":[picChoiceOrangeSlice],
    "Punt e Mes": [picChoiceOrange, picChoiceBloodOrange, picChoiceRedLemon],
    "Rosé Wine Apéritif": [picImageRoseWine],
    "Rum": [picImageColaUp, picImageMojito],
    "rum-dark": [picImageColaUp],
    "Rum (Gold)": [picImageRumGold],
    "Rum (Spiced)": [picImageRumGold],
    "Rum (Light)": [picImageColaUp, picImageMojito],
    "Scotch": [picChoiceScotchTopDown],
    "Sloe Gin": [picChoiceBloodOrange, picChoiceRedLemon],
    "Tequila": [picChoiceLime, picChoiceOrange, picChoiceLemon],
    "Vodka":[picChoiceLime, picChoiceOrange, picChoiceLemon],
    "Vermouth": [picChoiceBloodOrange],
    "Whiskey": [picChoiceScotchTopDown],
    "White Wine Apéritif": [picImageWhiteWine, picImageChampagneBottle],
  }
  
  

  const filterDrink = async () => {

    setFilteredDrink(prevFilteredDrink => {
      const sortedList = cocktails.filter((fd) => fd.base_alcohol[0] === newDisplayName)
        .map(fd => fd.drink_name)
        .sort();
      return sortedList;
    });

    setBackgroundPic(prevBackgroundPic => {
      const pic = picByDrink[alcohol] !== undefined
        ? picByDrink[alcohol][Math.floor(Math.random() * picByDrink[alcohol].length)]
        : picImageDefault;
      return pic;
    });

  };
  
  useEffect(() => {
  filterDrink();

  return () => {
    filterDrink();
  }
  }, [newDisplayName]);
  

  
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

   console.log(`AlcoholSelect -> alcohol: ${alcohol} | alcohol slugify: ${slugify(alcohol)}`)

  return (
    <section className="ginBackground" style={{backgroundImage: backgroundPic}}>
      <div className="container">
        <div className="baseAlcoholContainer">
          <div className="baseAlcTitleContainer">
            <h1 id="baseAlcoholName">{newDisplayName}</h1>
            <h2>Drinks & Cocktails</h2>
          </div>
          <div className="drinkListContainer">
            <ul className="drinkListUl">
              {filteredDrink.map((fd) => {
                return (
                  <Scroll className="nameButtonContainer">
                    <li className="drinkListLi" key={fd.id}>{fd.length < 19 ? fd : fd.slice(0, 19) + "..."}</li>
                    <Link to={`/${slugify(alcohol)}/${slugify(fd)}`} className="linktoRecipe">Recipe</Link>
                  </Scroll>
                )
              })}
              
            </ul>
              <div className="moreDrinkLinkContainer">
                <Link to={`/${slugify(alcohol)}/drinks`} className="linktoRecipeLarge">All {alcohol} Drinks</Link>
              </div>
          </div>
        </div>
      </div>
    </section>

    
  )
}

