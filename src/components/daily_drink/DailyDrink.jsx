import React, { useState, useEffect } from 'react'
import { Cron } from 'react-js-cron'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'




export const DailyDrink = ({ drinks }) => {
  const [ drinkOfTheDay, setDrinkOfTheDay ] = useState()
  const [ isLoading, setIsLoading] = useState(true)
  const [ dod, setDod ] = useState([])

  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth();

  

  return (
      <section className="dodSection">
        <div className="container">
        <h1 className="drinkOfDayTitle">Drink of the Day</h1>
            <div className="dodContainer">

              <div className="dodLeftSide">
                <h2 className="todaysDrink">Today's Drink</h2>
                <div className='dailyDrink'>Loaded Pistol</div>
                <a href={``} className="recipeButton">Recipe</a>
              </div>

              <div className="dodRightSide">
                <h2 className="boxTitle">Past Drink of the Day</h2>
                  <Calendar date={date} year={year} month={month}/>
              </div>

          </div>
        </div>
      </section>
  )
}
