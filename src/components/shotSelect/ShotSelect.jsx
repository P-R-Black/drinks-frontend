import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shotselect.css';
import styled, { keyframes } from 'styled-components';
import slugify from 'react-slugify';


export const ShotSelect = ({ alcohol, allShots, displayName, allDrinksBackgroundPic }) => {

  const [filteredDrink, setFilteredDrink ] = useState([])

  // removes display name from array
  let newDisplayName;

  for (let i of displayName){
    newDisplayName = i[0]
  }

  
  const filterDrink = () => {
   //  gets all drinks that share base alcohol and puts in array for scroll.
    setFilteredDrink(prevFilteredDrink => {
      const sortedList = allShots.filter((fd) => fd.base_alcohol[0] === newDisplayName)
        .map(fd => fd.drink_name)
        .sort();
      return sortedList;
    });


  };
  
  useEffect(() => {
  filterDrink();


  }, [displayName]);
  

  
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
            <h2>Shots</h2>
          </div>
          <div className="drinkListContainer">
            <ul className="drinkListUl">
              {filteredDrink.map((fd, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <Scroll className="nameButtonContainer" key={fd.id}>
                      <li className="drinkListLi">{fd.length < 19 ? fd : fd.slice(0, 19) + "..."}</li>
                      <Link to={`/${slugify(alcohol)}/${slugify(fd)}`} className="linktoRecipe">Recipe</Link>
                    </Scroll>
                  </React.Fragment>
                )
              })}
              
            </ul>
              <div className="moreDrinkLinkContainer">
                <Link to={`/${slugify(displayName[0])}/all_shots`} className="linktoRecipeLarge">All {displayName[0]} Shots</Link>
              </div>
          </div>
        </div>
      </div>
    </section>

    
  )
}

