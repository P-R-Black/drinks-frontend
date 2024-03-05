import React, { useState, useEffect } from 'react'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'

import { MdUpdate } from 'react-icons/md'


export const DailyDrink = ({ generateCalendar, adjustMonth, date, year, month, lastDrinkOfTheDay, 
  currentDrink, dateLookup }) => {

  // const [ isLoading, setIsLoading] = useState(true)
  // const [ dateUpdate, setDateUpdate ] = useState()
  // const [ drinkUpdate, setDrinkUpdate ] = useState()


  // let today = `${year}-${mm}-${dd}`
  let dodImage = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-ron-lach.jpg') + ')'

  return (
      <section className="dodSection" style={{backgroundImage: dodImage}}>
        <div className="container">
        <h1 className="drinkOfDayTitle">Drink of the Day</h1>
            <div className="dodContainer">

              <div className="dodLeftSide">
              <h2 className="todaysDrink">{dateLookup != undefined ? dateLookup : "Today's Drink"}</h2>
              {currentDrink.map((cd) => (
                <>
                  <div key={cd.id} className='dailyDrink'>{cd.drink_name != undefined ? cd.drink_name : lastDrinkOfTheDay}</div>
                  <a  href={!lastDrinkOfTheDay ? `/alcohol/${cd.base_alcohol}/${cd.drink_name.toLowerCase}`:  `/alcohol/${cd.base_alcohol}/${lastDrinkOfTheDay.toLowerCase()}`} 
                    className="linktoRecipe">Recipe</a> 
                </>
              
                  
              ))}
              
                {/* <h2 className="todaysDrink">{dateUpdate != undefined ? dateUpdate : "Today's Drink"}</h2>
                <div className='dailyDrink'>{drinkUpdate != undefined ? drinkUpdate : lastDrinkOfTheDay}</div> */}
               
                {/* {currentDrink.map((cd) => (
                   <a key={cd.id} href={`/alcohol/${cd.base_alcohol}/${lastDrinkOfTheDay.toLowerCase()}`} className="linktoRecipe">Recipe</a> 
                ))} */}
              </div>

              <div className="dodRightSide">
                <h2 className="boxTitle">Past Drink of the Day</h2>
                  <Calendar 
                    date={date}
                    year={year} 
                    month={month} 
                    // drinkOfTheDay={drinkOfTheDay}
                    // months={months}
                    // changeDate={dateUpdate => setDateUpdate(dateUpdate)}
                    // changeDrink={drinkUpdate => setDrinkUpdate(drinkUpdate)}
                    // eventMap={eventMap}
                    generateCalendar={generateCalendar}
                    adjustMonth={adjustMonth}

                  />
              </div>

          </div>
        </div>
      </section>
  )
}
