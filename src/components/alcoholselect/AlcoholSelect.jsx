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


export const AlcoholSelect = ({ cocktails, alcohol, displayName, allDrinksBackgroundPic }) => {

  const [ filteredDrink, setFilteredDrink ] = useState([])
  const [ backgroundPic, setBackgroundPic ] = useState()
  const [ newFilter, setNewFilter ] = useState([])

   // removes display name from array
   let newDisplayName;
   for (let i of displayName){
     newDisplayName = i[0]
   }
   

  const filterDrink = async () => {

    setFilteredDrink(prevFilteredDrink => {
      const sortedList = cocktails.filter((fd) => fd.base_alcohol[0] === newDisplayName)
        .map(fd => fd.drink_name)
        .sort();
      return sortedList;
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


  return (
    <section className="ginBackground" style={{backgroundImage: allDrinksBackgroundPic}}>
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

