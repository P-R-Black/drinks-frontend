import React, { useState, useEffect } from 'react'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'
import axios from 'axios'


export const DailyDrink = ({drinks}) => {
  const [ isLoading, setIsLoading] = useState(true)
  const [ drinkOfTheDay, setDrinkOfTheDay ] = useState([])
  const [ lastDrinkOfTheDay, setLastDrinkOfTheDay ] = useState([])
  const [ currentDrink, setCurrentDrink ] = useState([])


  const DB_ENDPOINT=process.env.REACT_APP_DB_GET_KEY
  const DB_LAST_ENTRY=process.env.REACT_APP_DB_LAST_KEY


  let dodImage = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-ron-lach.jpg') + ')'


  var date = new Date()
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var dd = String(day).padStart(2, '0');
  var mm = String(month + 1).padStart(2, '0'); //January is 0!
  let today = `${year}-${mm}-${dd}`


   // 3. Has Dod Been Updated Today?
  //  const isTodaysDrinkUpdated = () => {

  //   let lastDodInDB = lastDrinkOfTheDay['name']
  //   let dateOfToday = lastDrinkOfTheDay['theDate']
  //   console.log('lastDodInDB', lastDodInDB, 'dateOfToday', dateOfToday)
  //   let cleanDate = String(dateOfToday)
  //   cleanDate = cleanDate.split('T')[0]
    //       if (today === cleanDate && lastDodInDB === newDrink){
    //   return true // drink of day already on file
    // } else {
    //   return false // drink of day needed
    // }
  // }

  

  useEffect(() => {

    const fetchData = async () => {
      try {
        const {data: response} = await axios.get(DB_ENDPOINT)
        setDrinkOfTheDay(response)
        console.log('last response', response)
      } catch (error) {
        console.error(error.message)

      }
    }

    const fetchLastRecord = async () => {
      try {
        const {data: resp} = await axios.get(DB_LAST_ENTRY)
        console.log('resp', resp)
        setLastDrinkOfTheDay(resp['name'])
        getFullDrinkInfo(resp['name'])
      } catch (error){
        console.error(error.message)
      }
    }

    fetchData()
    fetchLastRecord()
  },[])

  const getFullDrinkInfo = async (theLastDod) => {
    let ldod = await drinks.find((drink) => drink.drink_name === theLastDod)
    console.log('ldod', ldod)
    setCurrentDrink([ldod])
    
  }

  
  useEffect(() => {
    const loadDrink = JSON.parse(localStorage.getItem("ITEMS"))
    if (loadDrink) setCurrentDrink((prevDrink) => prevDrink)
  },[])

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(currentDrink))
  },[currentDrink])

  
  
    

  return (
      <section className="dodSection" style={{backgroundImage: dodImage}}>
        <div className="container">
        <h1 className="drinkOfDayTitle">Drink of the Day</h1>
            <div className="dodContainer">

              <div className="dodLeftSide">
                <h2 className="todaysDrink">Today's Drink</h2>
                <div className='dailyDrink'>{lastDrinkOfTheDay}</div>
                {currentDrink.map((cd) => (
                   <a href={`/alcohol/${cd.base_alcohol}/${lastDrinkOfTheDay.toLowerCase()}`} className="linktoRecipe">Recipe</a> 
                ))}
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
