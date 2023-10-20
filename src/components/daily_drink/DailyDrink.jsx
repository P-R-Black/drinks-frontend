import React, { useState, useEffect } from 'react'
import { Cron } from 'react-js-cron'
import './dailyDrink.css'

export const DailyDrink = ({ drinks }) => {
  const [ drinkOfTheDay, setDrinkOfTheDay ] = useState()
  const [ yesterdaysDrink, setYesterdaysDrink] = useState('Whiskey')




  const getDailyDrink = () => {
    let dod = Math.floor(Math.random() * (drinks.length - 1))
    // console.log('dod', dod)
    let dailyD = drinks[dod] ? drinks[dod].drink_name : dod = Math.floor(Math.random() * (drinks.length - 1))
    setDrinkOfTheDay(dailyD)

    // console.log('dailyD', dailyD)

    // need to setup like notes app, where useEffect function remembers the notes that
    // were saved and loads the saved notes until deleted
   
    //console.log('dod', dod, drinks[dod].drink_name)

    // console.log('drinkOfTheDay', drinkOfTheDay)

  }


    setInterval(getDailyDrink,55000)
    // setInterval(getDailyDrink, 1000 * 60 * 60 * 24);
  // getDailyDrink()
  return (
      <section className="dodSection">
        <div className="container">
          <div className="dodContainer">
            <h2 className="drinkOfDayTitle">Drink of the Day</h2>
            <h3 className="drinkOfDayDrink">{drinkOfTheDay ? drinkOfTheDay:yesterdaysDrink}</h3>
            <button className="recipeButton">Recipe</button>
          </div>
        </div>
      </section>
  )
}
