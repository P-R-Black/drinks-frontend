import React, { useState, useEffect } from 'react'
import { Cron } from 'react-js-cron'
import './dailyDrink.css'



export const DailyDrink = ({ drinks }) => {
  const [ drinkOfTheDay, setDrinkOfTheDay ] = useState()
  const [ isLoading, setIsLoading] = useState(true)

  const [ dod, setDod ] = useState([])


const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

  let today = new Date()
  let day = today.getDate()
  let year = today.getFullYear();
  let month = today.getMonth();
  month = monthsNames[month]

  const saveDrinkOfTheDay = () => {
    setIsLoading(true)
    let dodMain = Math.floor(Math.random() * (drinks.length - 1))
    let dailyDrnk = drinks[dodMain] ? drinks[dodMain].drink_name : dodMain = Math.floor(Math.random() * (drinks.length - 1))
    let baseAlc = drinks[dodMain].base_alcohol 

    console.log(`dodMain ${dodMain} | dailyDrnk ${dailyDrnk} | ${month} ${day}, ${year}`)

    setDod((prevState) => [
      // ...prevState,
      {
        id: dodMain,
        date: `${month} ${day}, ${year}`,
        drink: dailyDrnk,
        base: baseAlc,
      }
  
    ]);
    setIsLoading(false)
  }
  console.log('dod', dod)
  useEffect(() =>{
    saveDrinkOfTheDay()
    // setInterval(() => saveDrinkOfTheDay(), 55000)
  },[])


  return (
      <section className="dodSection">
        <div className="container">
          <div className="dodContainer">
            <h1 className="drinkOfDayTitle">Drink of the Day</h1>
              {isLoading ? <p className="drinkOfDayDrink">Loading...</p> : dod.map((dd) => {
                return (
                  <>
                    <h2 className="drinkOfDayDrink" key={dd.id}>{dd.drink}</h2>
                      <a href={`/alcohol/${dd.base}/${dd.drink.toLowerCase()}`}  
                          className="recipeButton">Recipe</a>
                    <h3 className="drinkOftheDateDate">{dd.date}</h3> 
                  </>
                )
              })}
          </div>
        </div>
      </section>
  )
}
