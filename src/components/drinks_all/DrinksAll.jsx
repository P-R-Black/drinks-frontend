import React, { useState, useEffect } from 'react';
import slugify from 'react-slugify';

import { Link } from 'react-router-dom';
import { ToolTip } from '../tooltip/ToolTip';
import './drinks_all.css';

export const DrinksAll = ({cocktails, alcohol, allDrknksBackgroundPic}) => {

  const [alldrinks, setallDrinks ] = useState([])



  const getAllDrinks = () => {
    let sortedList = []
    cocktails.map((fd) => {
      if(fd.base_alcohol[0] === alcohol){
          if (fd.drink_name){
            sortedList.push(fd.drink_name)
          }
        return fd.drink_name;
      }
    })
    setallDrinks(sortedList.sort())

  }



  useEffect(() => {
    getAllDrinks()
  
  },[]) //getAllDrinks, alcohol, alldrinks

  return (
    <section className="allDrinksBackground" style={{backgroundImage: allDrknksBackgroundPic}}>
      <div className="container">
        <div className="allDrinksContainer">
          <div className="baseAlcTitleContainerTwo">
            <h1 id="baseAlcoholName">{alcohol}</h1>
            <h2>Drinks & Cocktails</h2>
          </div>
          <div className="linksToDrinksContainer">
            {alldrinks.map((ad) => (
              <>
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
              ):(<>
                <ToolTip text={ad}>
                  <Link
                    key={ad}
                    className="linktoRecipeTwo"
                    to={`/${slugify(alcohol)}/${slugify(ad)}`}>
                    {ad.length < 13 && window.innerWidth > 601 ? ad : ad.slice(0, 11) + "..."}
                  </Link>
                </ToolTip> 
              </>):(
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
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
