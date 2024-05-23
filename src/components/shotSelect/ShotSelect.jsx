import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './shotselect.css';
import slugify from 'react-slugify';
import { BackgroundPics } from '../../BackgroundPics';


export const ShotSelect = ({ alcohol, allShots, displayName }) => {

  const [filteredDrink, setFilteredDrink] = useState([])

  // removes display name from array
  let newDisplayName;
  for (let i of displayName) {
    newDisplayName = i[0]
  }



  const filterDrink = useCallback(() => {
    const sortedList = allShots
      .filter((fd) => fd.base_alcohol[0] === newDisplayName)
      .map((fd) => fd.drink_name)
      .sort();
    setFilteredDrink(sortedList);
  }, [allShots, newDisplayName]);

  useEffect(() => {
    filterDrink()
  }, [filterDrink]);



  const scrollers = document.querySelectorAll('.shotListContainer')
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }


  function addAnimation() {
    scrollers.forEach(scroller => {
      let test = scroller.getAttribute("data-animated")

      if (test !== 'true') {
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


  return (
    <section className="shotSelectBackground" style={{ backgroundImage: BackgroundPics(slugify(newDisplayName)) }}>
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
                    <li className="shotListLi">{fd}
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

