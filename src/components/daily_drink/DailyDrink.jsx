import React, { useState, useEffect } from 'react'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'
import axios from 'axios'

const schedule = require('node-schedule')



export const DailyDrink = () => {
  const [ isLoading, setIsLoading] = useState(true)
  const [ drinkOfTheDay, setDrinkOfTheDay ] = useState([])
  const [ newDrinkName, setNewDrinkName ] = useState("California Surfer")
  const [ newDate, setNewDate ] = useState("2024-02-14")


  const DB_ENDPOINT=process.env.REACT_APP_DB_GET_KEY
  const DB_POST_ENDPOINT=process.env.REACT_APP_DB_PUT_KEY

  let dodImage = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-ron-lach.jpg') + ')'


  schedule.scheduleJob('0 0 * * *', function(){
    console.log("It's 12:00")
  })


  var date = new Date()
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();

  var dd = String(day).padStart(2, '0');
  var mm = String(month + 1).padStart(2, '0'); //January is 0!

  let today = `${year}-${mm}-${dd}`

  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate((today) => {
        console.log('today', today)
        return today
      })
    }, 20000)
    return () => {
      clearInterval(interval)
    }
  })
  console.log('newDate', newDate)


  useEffect(() => {
    const fetchDbData = async () =>{
      setIsLoading(true)
      try {
        const {data: response} = await axios.get(DB_ENDPOINT);
        console.log('data', response)
        setDrinkOfTheDay(response);
        setIsLoading(false)
      } catch (error) {
        console.error(error.message);
        setIsLoading(false)
      }
    }
    fetchDbData()
  }, [DB_ENDPOINT])

  // need a way to call updateDod() once, after selecting the drink for the day from the drinks API
  // Also need to check, db to verify today hasn't been filled, if not then update with new Dod
  // How to prevent duplicates? 
  const updateDod = () => {
    axios.post(DB_POST_ENDPOINT, {
      name: newDrinkName,
      theDate: newDate
    }).then((response) => {
      alert('New Drink Added to Dod DB')
    })

  }

  // updateDod()

  // const getTodaysDrinkFromDb = () => {
  //   drinkOfTheDay.find((dod) => dod['theDate'] == "2024-02-18T05:00:00.000Z")
  // }

  // getTodaysDrinkFromDb()
  

  return (
      <section className="dodSection" style={{backgroundImage: dodImage}}>
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
