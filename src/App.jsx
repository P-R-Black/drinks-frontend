import React, { useState, useEffect } from 'react'
import './index.css'


import { Navigation } from './components/LogoNavFooterPageComponents/navigation/Navigation';
import { Footer } from './components/LogoNavFooterPageComponents/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Loading } from './components/loadingComponents/loading/Loading';

import { DrinksAPI } from './api/allDrinksApi/DrinksAPI'

import { GetBackendApi } from './api/getSetDrinkAndDates/GetSetDodApi';
import { GetTodaysDrinkOfTheDay } from './api/getSetDrinkAndDates/GetSetDodApi'

// // import { isError } from 'lodash';


const App = () => {

  const [drinks, setDrinks] = useState([])
  const [cocktails, setCocktails] = useState([])
  const [allShots, setAllShots] = useState([])
  const [mustKnows, setMustKnows] = useState([])

  const [lastDrinkOfTheDay, setLastDrinkOfTheDay] = useState([])
  const [drinkOfTheDay, setDrinkOfTheDay] = useState([])


  const { initialData, fullData, isLoading, numOfRecipes, error } = DrinksAPI();
  const { data: backendApi } = GetBackendApi()
  const { data: currDrinkOfTheDay } = GetTodaysDrinkOfTheDay()


  // const { data: mustKnows } = MustKnowAPI()


  const filterCocktails = async (arr) => {
    let getCocktails = await arr.filter((ct) => ct.drink_type === "cocktail")
    setCocktails(getCocktails)
  }


  const filterShots = async (arr) => {
    let getShot = await arr.filter((ct) => ct.drink_type !== "cocktail")
    setAllShots(getShot)

  }

  const filterMustKnows = async (arr) => {
    let getMustKnow = await arr.filter((ct) => ct.must_know_drink === true)
    setMustKnows(getMustKnow)
  }


  useEffect(() => {
    if (initialData) {
      setDrinks(initialData)
    }
    if (fullData) {
      setDrinks(fullData)
    }
    if (currDrinkOfTheDay) {
      setLastDrinkOfTheDay(currDrinkOfTheDay)
    }
    if (backendApi) {
      setDrinkOfTheDay(backendApi)
    }
    if (drinks) {
      filterCocktails(drinks)
      filterShots(drinks)
      filterMustKnows(drinks)
    }

  }, [backendApi, currDrinkOfTheDay, drinks, fullData, initialData])


  const PageLoader = () => {
    if (isLoading && !initialData) {
      return (
        <Loading />
      )
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
          <Navigation drinks={drinks} numOfRecipes={numOfRecipes} />
          <Outlet context={{ cocktails, drinks, allShots, mustKnows, lastDrinkOfTheDay, drinkOfTheDay }} />   {/* backendApi, currDrinkOfTheDay  */}
          <Footer />
        </>
      )}


    </div >
  )
}

export default App


