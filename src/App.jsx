import React, { useState, useEffect } from 'react'
import './index.css'


import { Navigation } from './components/LogoNavFooterPageComponents/navigation/Navigation';
import { Footer } from './components/LogoNavFooterPageComponents/footer/Footer';
import { Outlet } from 'react-router-dom';



import { DrinksAPI } from './api/allDrinksApi/DrinksAPI'
import { MustKnowAPI } from './api/mustKnowApi/MustKnowAPI';

import { GetBackendApi } from './api/getSetDrinkAndDates/GetSetDodApi';
import { GetTodaysDrinkOfTheDay } from './api/getSetDrinkAndDates/GetSetDodApi'

// // import { isError } from 'lodash';





const App = () => {

  const [cocktails, setCocktails] = useState([])
  const [allShots, setAllShots] = useState([])
  const [drinks, setDrinks] = useState([])


  const { initialData, fullData, isLoading, error } = DrinksAPI();

  // const { data: drinks, isLoading, error } = DrinksAPI()
  const { data: mustKnows } = MustKnowAPI()

  const { data: backendApi } = GetBackendApi()
  const { data: currDrinkOfTheDay } = GetTodaysDrinkOfTheDay()

  const filterCocktails = async (arr) => {
    let getCocktails = await arr.filter((ct) => ct.drink_type === "cocktail")
    setCocktails(getCocktails)
  }


  const filterShots = async (arr) => {
    let getShot = await arr.filter((ct) => ct.drink_type === "shot")
    setAllShots(getShot)

  }


  useEffect(() => {
    if (initialData) {
      setDrinks(initialData)
    }
    if (fullData) {
      setDrinks(fullData)
    }
    if (drinks) {
      filterCocktails(drinks)
      filterShots(drinks)
    }


  }, [drinks, fullData, initialData])


  const PageLoader = () => {
    if (isLoading && !initialData) {
      return (
        <>
          <div className="bannerContainer">{"Fetching A New Bottle"}</div>
          <div className="pageLoading">
            <div className="loadingText">Loading</div>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </>)
    }
  }

  if (error) {
    return (
      <section className='loadErrorSection'>
        <div className="container">
          <div className="loadErrorContainer">
            <div className="loadErrorTitleContainer">
              <h1>{"Sorry"}</h1>
              <h2>{"We're Closed"}</h2>
              <h3 className="minorh3">{"or experiencing a technical problem"}</h3>
              <h3>{"Refresh to Reopen"}</h3>
            </div>
          </div>
        </div>
      </section>)
  }


  return (
    <div className="app">

      {!initialData ? (<PageLoader />) : (
        <>
          <Navigation drinks={drinks} />
          <Outlet context={{ cocktails, drinks, allShots, mustKnows, backendApi, currDrinkOfTheDay }} />
          <Footer />
        </>
      )}


    </div >
  )
}

export default App


