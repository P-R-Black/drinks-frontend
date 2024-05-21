import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shotselect.css';
import styled, { keyframes } from 'styled-components';
import slugify from 'react-slugify';


export const ShotSelect = ({ alcohol, allShots, displayName, allDrinksBackgroundPic }) => {

  const [filteredDrink, setFilteredDrink] = useState([])

  // removes display name from array
  let newDisplayName;
  for (let i of displayName) {
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



  const scrollers = document.querySelectorAll('.shotListContainer')
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }


  function addAnimation() {
    scrollers.forEach(scroller => {
      let test = scroller.getAttribute("data-animated")

      if (test != 'true') {
        scroller.setAttribute("data-animated", true)
        const scrollerInner = scroller.querySelector('.shotListUl');
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicateItem = item.cloneNode(true);
          duplicateItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicateItem)
        })
      }
    });
  }

  console.log('allDrinksBackgroundPic', allDrinksBackgroundPic)

  return (
    <section className="shotSelectBackground" style={{ backgroundImage: allDrinksBackgroundPic }}>
      <div className="container">
        <div className="baseShotAlcoholContainer">
          <div className="baseShotAlcTitleContainer">
            <h1 id="baseShotAlcoholName">{newDisplayName}</h1>
            <h2>Shots</h2>
          </div>
          <div className="shotListContainer">
            <ul className="shotListUl" style={{ animationDuration: `${(filteredDrink.length * 100) / 20}s` }}>
              {filteredDrink.map((fd, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <li className="shotListLi">{fd.length < 19 ? fd : fd.slice(0, 19) + "..."}
                      <Link to={`/${slugify(alcohol)}/${slugify(fd)}`} className="ShotlinktoRecipe">Recipe</Link>
                    </li>
                  </React.Fragment>
                )
              })}

            </ul>
            <div className="moreShotLinkContainer">
              <Link to={`/${slugify(displayName[0])}/all_shots`} className="linktoRecipeLarge">All {displayName[0]} Shots</Link>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

