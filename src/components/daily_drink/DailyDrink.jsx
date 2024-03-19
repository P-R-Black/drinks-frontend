import React, { useState, useEffect } from 'react'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'

import { MdUpdate } from 'react-icons/md'

import { Parallax, Background } from 'react-parallax';
import dodImage from '../../assets/pexels-ron-lach.jpg'



export const DailyDrink = ({ generateCalendar, adjustMonth, date, year, month, mm, dd, lastDrinkOfTheDay, 
  currentDrink, dateLookup, months }) => {

  // const [ isLoading, setIsLoading] = useState(true)
  // const [ dateUpdate, setDateUpdate ] = useState()
  // const [ drinkUpdate, setDrinkUpdate ] = useState()


  let today = `${months[Number(mm) - 1]} ${dd.replace(/^0+/, "")}, ${year}`
  let lookUpDate = new Date(dateLookup).getTime()
  let lookUpToday = new Date(today).getTime()
  

    return (
      <section id="dodSection" className="dodSection">
        <Parallax 
          blur={5} 
          // bgImage={dodImage} 
          bgImageAlt={dodImage}
          strength={500}
        >
        <Background>
              <img src={dodImage} className='parallaxImageDod' style={{position: "absolute", height: "auto", width: "1486.28px", backfaceVisibility: "hidden",
                transform: 'translate3d(-50%, -49.5868px, 0px)',  left: "50%", transformStyle: 'preserve-3d',
                backgroundSize: "cover"         
            }}/>
            </Background>
          <div className="container">
   

          <h1 className="drinkOfDayTitle">Drink of the Day</h1>

            <div className="dodContainer">
              <div className="dodLeftSide">
              {dateLookup !== undefined && lookUpDate < lookUpToday  ? (
              <>
                <h2 className="todaysDrink">{dateLookup === today ? "Today's Drink": dateLookup}</h2>
                <h3 className="todaysDrinkofDay" style={{color: "white"}}>{dateLookup === today ? "" : "Drink of the Day"}</h3>
                {currentDrink.map((cd) => (
                  <>
                    <div key={cd.id} className='dailyDrink'>{cd.drink_name}</div>
                    <a key={cd.drink_name} href={`/alcohol/${cd.base_alcohol}/${cd.drink_name.toLowerCase()}`} className="linktoRecipe">Recipe</a>
                  </>
                  
                ))}
              </>
              ): (
                <>
                <h2 className="todaysDrink">{"Today's Drink"}</h2>
                {currentDrink.map((cd) => (
                  <>
                    <div key={cd.id} className='dailyDrink'>{lastDrinkOfTheDay}</div>
                    <a key={cd.drink_name} href={`/alcohol/${cd.base_alcohol}/${lastDrinkOfTheDay.toLowerCase()}`} className="linktoRecipe">Recipe</a> 
                  </>
                ))}
                
                </>
              )}
              </div>

              <div className="dodRightSide">
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
