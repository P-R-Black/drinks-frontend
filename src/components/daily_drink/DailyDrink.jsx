import React, { useState, useEffect } from 'react'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'

import { MdUpdate } from 'react-icons/md'


export const DailyDrink = ({ generateCalendar, adjustMonth, date, year, month, mm, dd, lastDrinkOfTheDay, 
  currentDrink, dateLookup, months }) => {

  // const [ isLoading, setIsLoading] = useState(true)
  // const [ dateUpdate, setDateUpdate ] = useState()
  // const [ drinkUpdate, setDrinkUpdate ] = useState()


  let today = `${months[Number(mm) - 1]} ${dd.replace(/^0+/, "")}, ${year}`
  let dodImage = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-ron-lach.jpg') + ')'

  let lookUpDate = new Date(dateLookup).getTime()
  let lookUpToday = new Date(today).getTime()


  return (
      <section id="dodSection" className="dodSection" style={{backgroundImage: dodImage}}>
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
      </section>
  )
}
