import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import { Navigation } from '../../components/navigation/Navigation';
import { Hero } from '../../components/hero/Hero';
import { DailyDrink } from '../../components/daily_drink/DailyDrink';
import { MustKnows } from '../../components/must_knows/MustKnows';
import { MidSection } from '../../components/midsection/MidSection';
import { MidSectionTwo } from '../../components/midsection/MidSection';
import { Discover } from '../../components/discover/Discover';
import { DiscoverShots } from '../../components/discoverShots/DiscoverShots';
import { Mocktails } from '../../components/mocktails/Mocktails';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';

import { Footer } from '../../components/footer/Footer';



const DB_ENDPOINT = process.env.REACT_APP_DB_GET_KEY
const DB_LAST_ENTRY = process.env.REACT_APP_DB_LAST_KEY

export const Home = ({ drinks, cocktails, baseAlcohol, fetchAlcoholType, navLinkText, mustKnows,
  allShots, allDrinksBackgroundPic, updateBackgroundPicture, isCookieSet, cookiesAccept,
  coockiesDeclined, showCookieBanner
}) => {




  var date = new Date()
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var dd = String(day).padStart(2, '0');
  var mm = String(month + 1).padStart(2, '0'); //January is 0!

  const [drinkOfTheDay, setDrinkOfTheDay] = useState([])
  const [lastDrinkOfTheDay, setLastDrinkOfTheDay] = useState([])
  const [currentDrink, setCurrentDrink] = useState([])
  const [dateLookup, setDateLookup] = useState()
  const [drinkLookup, setDrinkLookup] = useState()

  const calendarYear = year
  const calendarMonth = month

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "Novenber", "December"
  ];


  const getFullDrinkInfo = useCallback(async (theLastDod) => {
    let ldod = await drinks.find((drink) => drink.drink_name === theLastDod)
    setCurrentDrink([ldod])
  }, [drinks]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(DB_ENDPOINT)
        setDrinkOfTheDay(response)
      } catch (error) {
        console.error(error.message)

      }
    }

    const fetchLastRecord = async () => {
      try {
        const { data: resp } = await axios.get(DB_LAST_ENTRY)
        setLastDrinkOfTheDay(resp['name'])
        getFullDrinkInfo(resp['name'])
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchData()
    fetchLastRecord()
  }, [getFullDrinkInfo]);

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

      if (getClassNames.includes('lastMonthDays')) {
        clickedMonth = calendarMonth
      } else if (getClassNames.includes('nextMonthDays')) {
        clickedMonth = calendarMonth + 2
      } else {
        clickedMonth = calendarMonth + 1
      }

      if (String(clickedMonth).length < 2) {
        clickedMonth = "0" + String(clickedMonth)
      }

      let clickedDate = `${calendarYear}-${clickedMonth}-${cd.innerHTML.length === 1 ? '0' + cd.innerHTML : cd.innerHTML}`
      let monthInText = months[Number(clickedMonth - 1)]

      handleDateClick(clickedDate)
      let changedDate = `${monthInText} ${clickedDay}, ${clickedYear}`
      setDateLookup(changedDate)

    })
  })


  // const getFullDrinkInfo = async (theLastDod) => {
  //   let ldod = await drinks.find((drink) => drink.drink_name === theLastDod)
  //   setCurrentDrink([ldod])
  // }



  return (
    <>
      <Navigation
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        cocktails={cocktails}
        drinks={drinks}
        allDrinksBackgroundPic={allDrinksBackgroundPic}
      />
      <Hero />
      <MidSection />
      <DailyDrink
        drinks={drinks} date={date} year={year} month={month} dd={dd} mm={mm}
        lastDrinkOfTheDay={lastDrinkOfTheDay}
        currentDrink={currentDrink}
        drinkLookup={drinkLookup}
        dateLookup={dateLookup}
        months={months}
      />
      <Discover
        drinks={drinks}
        cocktails={cocktails}
        updateBackgroundPicture={updateBackgroundPicture}
        allDrinksBackgroundPic={allDrinksBackgroundPic}
      />
      <MidSectionTwo />
      <DiscoverShots
        allShots={allShots}
        updateBackgroundPicture={updateBackgroundPicture}
        allDrinksBackgroundPic={allDrinksBackgroundPic}
      />
      <Mocktails
        drinks={drinks}
        updateBackgroundPicture={updateBackgroundPicture}
      />
      <MustKnows mustKnows={mustKnows} />
      <CoockieBar
        showCookieBanner={showCookieBanner}
        isCookieSet={isCookieSet}
        cookiesAccept={cookiesAccept}
        coockiesDeclined={coockiesDeclined}
      />
      <Footer />
    </>
  )
}