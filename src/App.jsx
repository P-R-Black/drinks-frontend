import React, { useState, useEffect } from 'react'
import './index.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {createRoutesFromElements} from 'react-router-dom'

import axios from 'axios'

import { Home } from './pages/home/Home';
import { Alcohol } from './pages/alcohol/Alcohol';
import { Drinks } from './pages/drinks/Drinks';
import { AllDrinks } from './pages/all_drinks/AllDrinks';
import { PageNotFound } from './pages/notFound/NotFound';
import { AboutUs } from './pages/about/About';
import { Contact } from './pages/contact/Contact'
import { Terms } from './pages/terms/Terms';
import { Privacy } from './pages/privacy/Privacy';

const API_ENDPOINT=process.env.REACT_APP_PUBLIC_KEY
const API_ENDPOINT_TWO=process.env.REACT_APP_DRINKS_KEY



const App = () => {
 
  const [ drinks, setDrinks ] = useState([])
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState()
  const [ baseAlcohol, setBaseAlcohol ] = useState([])
  const [ allDrknksBackgroundPic, setAllDrknksBackgroundPic] = useState()
  const [ navLinkText, setNavLinkText] = useState("")

  
  // const [ newDrinks, setNewDrinks] = useState([])
  // console.log('newDrinks', newDrinks)


  // const findAPIData = async () => {
  //   const drinksAPI = <DrinksAPI/>
  //   const apiData = await drinksAPI._owner.memoizedState.queue.lastRenderedState
  //   // console.log('newDrinks', newDrinks)
  //   setNewDrinks(apiData)
   
  // }


  let imgUrlDefault = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-rachel-default.jpg') + ')'
  let imgUrlLime = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-lisa-f.jpg') + ')'
  let imgUrlOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-j-lewis.jpg') + ')'
  let imgUrlLemon = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-lukas.jpg')  + ')'
  let imgUrlColaUp = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-cola-up.jpg') + ')'
  let imgUrlColaDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-cola-down.jpg') + ')'
  let imgUrlBloodOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-blood-orange-wedge.jpg') + ')'
  let imgUrlRedLemonSlice = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-red-lemon-slice.jpg') + ')'
  let imgUrlChampagneBot = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-champagne-bottles.jpg') + ')'
  let imgUrlMojito = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-lime-mint-drinks.jpg') + ')'
  let imgUrlScotchTopDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-scotch-topdown.jpg') + ')'
  let imgUrlOrangeSlices = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-orange-slices.jpg') + ')'
  let imgUrlWhiteWine = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-white-wine.jpg') + ')'
  let imgUrlRoseWine = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-polina-rose-over.jpg') + ')'
  let imgUrlRumGold = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/DrinksApp/drinks-app/src/assets/pexels-eva-gold.jpg') + ')'


  let picByDrink = {
    "Amaretto": [imgUrlScotchTopDown],
    "Apéritif": [imgUrlBloodOrange],
    "Aquavit": [imgUrlBloodOrange],
    "Brandy": [imgUrlScotchTopDown],
    "Bourbon": [imgUrlScotchTopDown],
    "Cognac": [imgUrlScotchTopDown],
    "Gin": [imgUrlLime, imgUrlLemon, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Mezcal":[imgUrlOrangeSlices],
    "Punt e Mes": [imgUrlOrange, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Rosé Wine Apéritif": [imgUrlRoseWine],
    "Rum": [imgUrlColaUp, imgUrlMojito],
    "Rum (Dark)": [imgUrlColaUp],
    "Rum (Gold)": [imgUrlRumGold],
    "Rum (Light)": [imgUrlColaUp, imgUrlMojito],
    "Scotch": [imgUrlScotchTopDown],
    "Sloe Gin": [imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Tequila": [imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vodka":[imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vermouth": [imgUrlBloodOrange],
    "Whiskey": [imgUrlScotchTopDown],
    "White Wine Apéritif": [imgUrlWhiteWine, imgUrlChampagneBot],
  }
  
  useEffect(() => {

    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(API_ENDPOINT_TWO);
        setDrinks(response);
      } catch (e) {
        setError(e)
        console.error(e.message);
      } finally {
        setLoading(false);
      }
     
    }
    navBarLinkText()
    fetchData();
    fetchAlcoholType();
    setAllDrknksBackgroundPic(picByDrink[baseAlcohol] != undefined ? picByDrink[baseAlcohol][Math.floor(Math.random() * picByDrink[baseAlcohol].length)]: imgUrlDefault)
   
  }, []);



  const fetchAlcoholType = async () => {
    let filteredBase = []
    for (let d = 0; d < drinks.length; d++){
        let base = drinks.map((ba) => ba.base_alcohol)
        for (let b = 0; b < base.length; b++){
            let baseText = await base[b][0]
            if (!filteredBase.includes(baseText)){
                filteredBase.push(baseText)

            }
        }
        setBaseAlcohol(filteredBase.sort())
    }
    
  }

  const navBarLinkText = async () => {
    let navvyLink = await document.querySelectorAll('.navbarLinks')
    navvyLink.forEach(nl => {
      nl.addEventListener('click', ()=> {
        setNavLinkText(nl.innerHTML)
        
      })
    })
  }

  const PageLoader = () => {
    if (loading){
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
   
  if (error){
    return ( 
          <section className='loadErrorSection'>
            <div className="container">
                <div className="loadErrorContainer">
                  <div className="loadErrorTitleContainer">
                    <h1>{"Sorry"}</h1>
                    <h2>{"We're Closed"}</h2>
                    <h3>{"Refresh to Reopen"}</h3>
                  </div>

                </div>
            </div>
            
          </section>)
  }
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
  
        <Route 
          index 
          element={<Home
          drinks={drinks} 
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          navLinkText={navLinkText}
          />}
        />
        <Route
          path="/:alcohol"
          element={<Alcohol  
          drinks={drinks} 
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          navLinkText={navLinkText}
          allDrknksBackgroundPic={allDrknksBackgroundPic}
          />}
        />
        <Route
          path="/:alcohol/:drinkRecipe"
          element={<Drinks 
          drinks={drinks}
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          navLinkText={navLinkText}
          />}
        />

        <Route
            path="/:alcohol/all_drinks"
            element={<AllDrinks 
            drinks={drinks}
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            navLinkText={navLinkText}
            allDrknksBackgroundPic={allDrknksBackgroundPic}
          />}
        />

          <Route
            path="/about-us"
            element={<AboutUs
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            navLinkText={navLinkText}
            drinks={drinks}
            />}
          />

          <Route
            path="/contact-us"
            element={<Contact
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            navLinkText={navLinkText}
            drinks={drinks}
            />}
          />

          <Route
            path="/terms-and-conditions"
            element={ <Terms
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            navLinkText={navLinkText}
            drinks={drinks}
            />}
          />

          <Route
            path="/privacy-policy"
            element={ <Privacy
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            navLinkText={navLinkText}
            drinks={drinks}
          />}
          />

        <Route 
              path="*" 
              element={<PageNotFound
              baseAlcohol={baseAlcohol} 
              fetchAlcoholType={fetchAlcoholType}
              navLinkText={navLinkText}
              drinks={drinks}
            />}
          />
      </Route>
    )
  )

  

  return (
    <div className="app">
      {loading ? (<PageLoader/>): (<RouterProvider router={router} />)}
            {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default App