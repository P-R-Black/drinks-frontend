import React, { useState, useEffect } from 'react'

import { Navigation } from '../../components/navigation/Navigation';
import { Hero } from '../../components/hero/Hero';
import { DailyDrink } from '../../components/daily_drink/DailyDrink';
import { MustKnows } from '../../components/must_knows/MustKnows';
import { MidSection } from '../../components/midsection/MidSection';
import { Discover } from '../../components/discover/Discover';
import { Mocktails } from '../../components/mocktails/Mocktails';
import { Footer } from '../../components/footer/Footer';

import axios from 'axios'


export const Home = ({drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {

  var date = new Date()
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var dd = String(day).padStart(2, '0');
  var mm = String(month + 1).padStart(2, '0'); //January is 0!

  const [ drinkOfTheDay, setDrinkOfTheDay ] = useState([])
  const [ lastDrinkOfTheDay, setLastDrinkOfTheDay ] = useState([])
  const [ currentDrink, setCurrentDrink ] = useState([])

  const [ calendarDate, setCalendarDate ] = useState(date)
  const [ calendarYear, setCalendarYear ] = useState(year)
  const [ calendarMonth, setCalendarMonth ] = useState(month)
  const [ calendarHTML, setCalendarHTML ] = useState("")

  const [ dateLookup, setDateLookup ] = useState()
  const [ drinkLookup, setDrinkLookup ] = useState()


  const DB_ENDPOINT=process.env.REACT_APP_DB_GET_KEY
  const DB_LAST_ENTRY=process.env.REACT_APP_DB_LAST_KEY

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "Novenber", "December"
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get(DB_ENDPOINT)
        setDrinkOfTheDay(response)
      } catch (error) {
        console.error(error.message)

      }
    }

    const fetchLastRecord = async () => {
      try {
        const {data: resp} = await axios.get(DB_LAST_ENTRY)
        setLastDrinkOfTheDay(resp['name'])
        getFullDrinkInfo(resp['name'])
      } catch (error){
        console.error(error.message)
      }
    }

    fetchData()
    fetchLastRecord()
  },[])


  // Create a mapping from dates to event names
  const eventMap = {};
  drinkOfTheDay.forEach(event => {
    const date = event.theDate.split('T')[0];
    eventMap[date] = event.name;
    
  });
  
    
  const handleDateClick = async (date) => {
    const event = await eventMap[String(date)];
    if (event) {
        setDrinkLookup(event)
        getFullDrinkInfo(event)
    }
  };


  const calDate = document.querySelectorAll('.calDate')
  calDate.forEach((cd) => {
    cd.addEventListener('click', async () => {
      let getClassNames = await cd.getAttribute('class')
      let clickedDay = await cd.innerHTML
      let clickedYear = await calendarYear
      let clickedMonth;

      if (getClassNames.includes('lastMonthDays')){
          clickedMonth = calendarMonth
      } else if (getClassNames.includes('nextMonthDays')){
          clickedMonth = calendarMonth + 2
      } else {
          clickedMonth = calendarMonth + 1
      }

      if (String(clickedMonth).length < 2){
        clickedMonth = "0" + String(clickedMonth)
    }
    
    let clickedDate = `${calendarYear}-${clickedMonth}-${cd.innerHTML.length === 1 ? '0'+cd.innerHTML : cd.innerHTML}`
    let monthInText = months[Number(clickedMonth - 1)]

    handleDateClick(clickedDate)
    let changedDate = `${monthInText} ${clickedDay}, ${clickedYear}`
    setDateLookup(changedDate)
    
    })
  })


  const getFullDrinkInfo = async (theLastDod) => {
    let ldod = await drinks.find((drink) => drink.drink_name === theLastDod)
    setCurrentDrink([ldod])
  }

  
  return (
    <>
      <Navigation 
        baseAlcohol={baseAlcohol} 
        fetchAlcoholType={fetchAlcoholType} 
        navLinkText={navLinkText} 
        drinks={drinks}
      />
      <Hero/>
      <MidSection/>
      <DailyDrink 
        drinks={drinks} date={date} year={year} month={month} dd={dd} mm={mm}
        lastDrinkOfTheDay={lastDrinkOfTheDay}
        currentDrink={currentDrink}
        dateLookup={dateLookup}
        months={months}
      />
      <Discover 
        drinks={drinks}
      />
      <Mocktails
         drinks={drinks}
      />
      <Footer/>
    </>
  )
}