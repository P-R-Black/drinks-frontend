import React, { useState, useEffect } from 'react';
import slugify from 'react-slugify';

import { Link } from 'react-router-dom';
import { ToolTip } from '../tooltip/ToolTip';
import './drinks_all.css';
import { BackgroundPics } from '../../BackgroundPics';

export const DrinksAll = ({ cocktails, alcohol, displayName }) => {

  const [alldrinks, setAllDrinks] = useState([])

  // removes display name from array
  let newDisplayName;
  for (let i of displayName) {
    newDisplayName = i[0]
  }


  useEffect(() => {
    setAllDrinks(prevFilteredDrink => {
      const sortedList = cocktails.filter((fd) => fd.base_alcohol[0] === newDisplayName)
        .map(fd => fd.drink_name)
        .sort();
      return sortedList;
    });
    // getAllDrinks()

  }, [newDisplayName, cocktails])

  return (
    <section className="allDrinksBackground" style={{ backgroundImage: BackgroundPics(slugify(newDisplayName)) }}>
      <div className="container">
        <div className="allDrinksContainer">
          <div className="baseAlcTitleContainerTwo">
            <h1 id="baseAhotName">{newDisplayName}</h1>
            <h2>Drinks & Cocktails</h2>
          </div>
          <ul className="linksToDrinksContainer">
            {alldrinks.map((ad, adIdx) => (
              <React.Fragment key={adIdx}>
                {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (
                  <li>
                    <ToolTip text={ad}>
                      <Link
                        key={ad.id}
                        className="linktoRecipeTwo"
                        to={`/${slugify(alcohol)}/${slugify(ad)}`}
                        aria-label={`View the recipe for ${ad}`}
                      >
                        {ad.length < 16 && window.innerWidth > 1024 ? ad : ad.slice(0, 14) + "..."}
                      </Link>
                    </ToolTip>
                  </li>
                ) : (<li>
                  <ToolTip text={ad}>
                    <Link
                      key={ad.id}
                      className="linktoRecipeTwo"
                      to={`/${slugify(alcohol)}/${slugify(ad)}`}
                      aria-label={`View the recipe for ${ad}`}
                    >
                      {ad.length < 13 && window.innerWidth > 601 ? ad : ad.slice(0, 11) + "..."}
                    </Link>
                  </ToolTip>
                </li>) : (
                  <Link>
                    <ToolTip text={ad}>
                      <Link
                        key={ad.id}
                        className="linktoRecipeTwo"
                        to={`/${slugify(alcohol)}/${slugify(ad)}`}
                        aria-label={`View the recipe for ${ad}`}
                      >
                        {ad.length < 11 && window.innerWidth < 601 ? ad : ad.slice(0, 11) + "..."}
                      </Link>
                    </ToolTip>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
