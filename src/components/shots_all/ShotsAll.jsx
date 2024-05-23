import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToolTip } from '../tooltip/ToolTip';
import { BackgroundPics } from '../../BackgroundPics';
import slugify from 'react-slugify';
import './shots_all.css';

export const ShotsAll = ({ allShots, alcohol, displayName }) => {
  const [allDrinks, setallDrinks] = useState([])

  // removes display name from array
  let newDisplayName;

  for (let i of displayName) {
    newDisplayName = i[0]
    break
  }

  // const getAllDrinks = () => {

  //   setallDrinks(preSetDrinks => {
  //     const sortedList = allShots.filter((sl) => sl.base_alcohol[0] === newDisplayName)
  //     .map(fd => fd.drink_name).sort();
  //     return sortedList
  //   })
  // }



  useEffect(() => {
    setallDrinks(preSetDrinks => {
      const sortedList = allShots.filter((sl) => sl.base_alcohol[0] === newDisplayName)
        .map(fd => fd.drink_name).sort();
      return sortedList
    })
    // getAllDrinks()

  }, [newDisplayName, allShots])


  return (
    <section className="allDrinksBackground" style={{ backgroundImage: BackgroundPics(slugify(newDisplayName)) }}>
      <div className="container">
        <div className="allDrinksContainer">
          <div className="baseAlcTitleContainerTwo">
            <h1 id="baseAlcoholName">{newDisplayName}</h1>
            <h2>Shots</h2>
          </div>
          <div className="linksToDrinksContainer">
            {allDrinks.map((ad, adIdx) => (
              <React.Fragment key={adIdx}>
                {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (
                  <>
                    <ToolTip text={ad}>
                      <Link
                        key={ad}
                        className="linktoRecipeTwo"
                        to={`/${slugify(alcohol)}/${slugify(ad)}`}>
                        {ad.length < 18 && window.innerWidth > 1024 ? ad : ad.slice(0, 11) + "..."}
                      </Link>
                    </ToolTip>
                  </>
                ) : (<>
                  <ToolTip text={ad}>
                    <Link
                      key={ad}
                      className="linktoRecipeTwo"
                      to={`/${slugify(alcohol)}/${slugify(ad)}`}>
                      {ad.length < 13 && window.innerWidth > 601 ? ad : ad.slice(0, 11) + "..."}
                    </Link>
                  </ToolTip>
                </>) : (
                  <>
                    <ToolTip text={ad}>
                      <Link
                        key={ad}
                        className="linktoRecipeTwo"
                        to={`/${slugify(alcohol)}/${slugify(ad)}`}>
                        {ad.length < 11 && window.innerWidth < 601 ? ad : ad.slice(0, 11) + "..."}
                      </Link>
                    </ToolTip>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
