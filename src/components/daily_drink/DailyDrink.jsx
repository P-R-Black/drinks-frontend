import React, { useState, useEffect, useRef } from 'react'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'

import { Link } from 'react-router-dom'

import { Parallax } from 'react-parallax';
import dodImage from '../../assets/pexels-ron-lach.jpg'
import altImage from '../../assets/pexels-lime-mint-drinks.jpg'


export const DailyDrink = ({ currentDrink, generateCalendar, adjustMonth, date, year, 
  month, mm, dd, lastDrinkOfTheDay, dateLookup, months }) => {
  
  const titleRefTwo = useRef();

  const [ dodElementVisible, setDodElementVisible ] = useState();  


  let today = `${months[Number(mm) - 1]} ${dd.replace(/^0+/, "")}, ${year}`


  useEffect(() => {
    const dodObserver = new IntersectionObserver((entries) => {
      const dodEntry = entries[0]
      setDodElementVisible(dodEntry.isIntersecting)
     
    })
    dodObserver.observe(titleRefTwo.current)
    
  },[])


    return (
      <section id="dodSection" className="dodSection">
        <Parallax 
          blur={{ min: -15, max: 15 }}
          bgImage={dodImage}
          bgImageAlt={altImage}
          strength={500}>
               
          <div className="container dodOuterContainer">
            <div ref={titleRefTwo}>  
                <h1 className={dodElementVisible? `drinkOfDayTitle show` : `drinkOfDayTitle hidden`}>Drink of the Day</h1>
            </div>
            <div className="dodContainer">
              <div className={dodElementVisible ? `dodLeftSide show`: `dodLeftSide hidden`}>
                <h2 className="todaysDrink">{!dateLookup || dateLookup === today ? "Today's Drink": dateLookup}</h2>
                {currentDrink.map((cd) => (
                  <>
                     <div key={cd.id} className="dailyDrink">{!dateLookup ? lastDrinkOfTheDay : cd.drink_name}</div>
                     <Link className="recipeButton" to={`/${cd.base_alcohol}/${cd.drink_name.toLowerCase()}`}>
                          Recipe
                      </Link>
                  </>
                ))}
              </div>
              
              <div className={dodElementVisible ? `dodRightSide show` : `dodRightSide hidden`}>
                <h2 className="boxTitle">Past Drink of the Day</h2>
                  <Calendar 
                    date={date}
                    year={year} 
                    month={month} 
                    generateCalendar={generateCalendar}
                    adjustMonth={adjustMonth}
                  />
              </div> 
            </div>
          </div>
        </Parallax>
      </section>
  )
}
