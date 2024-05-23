import React, { useState, useEffect, useCallback } from 'react';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import './alcoholselect.css';

import { BackgroundPics } from '../../BackgroundPics';


export const AlcoholSelect = ({ cocktails, alcohol, displayName }) => {

  const [filteredDrink, setFilteredDrink] = useState([])



  // removes display name from array
  let newDisplayName;

  for (let i of displayName) {
    newDisplayName = i[0]
  }


  const filterDrink = useCallback(() => {
    const sortedList = cocktails
      .filter((fd) => fd.base_alcohol[0] === newDisplayName)
      .map((fd) => fd.drink_name)
      .sort();
    setFilteredDrink(sortedList);
  }, [cocktails, newDisplayName]);

  useEffect(() => {
    filterDrink()
  }, [filterDrink]);



  const scrollers = document.querySelectorAll('.drinkListContainer')
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach(scroller => {
      let test = scroller.getAttribute("data-animated")

      if (test !== 'true') {
        scroller.setAttribute("data-animated", true)
        const scrollerInner = scroller.querySelector('.drinkListUl');
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicateItem = item.cloneNode(true);
          duplicateItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicateItem)
        })
      }
    });
  }



  return (
    <section className="ginBackground" style={{ backgroundImage: BackgroundPics(slugify(newDisplayName)) }}>
      <div className="container">
        <div className="baseAlcoholContainer">
          <div className="baseAlcTitleContainer">
            <h1 id="baseAlcoholName">{newDisplayName}</h1>
            <h2>Drinks & Cocktails</h2>
          </div>
          <div className="drinkListContainer">
            <ul className="drinkListUl" style={{ animationDuration: `${(filteredDrink.length * 100) / 20}s` }}>
              {filteredDrink.map((fd, fdIdx) => {
                return (
                  <React.Fragment key={fdIdx}>
                    <li className="drinkListLi">{fd}
                      <Link to={`/${slugify(alcohol)}/${slugify(fd)}`} className="linktoRecipe">Recipe</Link>
                    </li>
                  </React.Fragment>
                )
              })}

            </ul>
            <div className="moreDrinkLinkContainer">
              <Link to={`/${slugify(alcohol)}/drinks`} className="linktoRecipeLarge">All {newDisplayName} Drinks</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
