import React, { useState, useEffect } from 'react'
import './index.css'
import { Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {createRoutesFromElements} from 'react-router-dom'

import imgUrlDefault from '../src/assets/pexels-rachel-default.jpg';
import imgUrlLime from '../src/assets/pexels-lisa-f.jpg'
import imgUrlOrange from '../src/assets/pexels-j-lewis.jpg'
import imgUrlLemon from '../src/assets/pexels-lukas.jpg'
import imgUrlColaUp from '../src/assets/pexels-cola-up.jpg'
// import imgUrlColaDown from '../src/assets/pexels-cola-down.jpg'
import imgUrlBloodOrange from '../src/assets/pexels-blood-orange-wedge.jpg'
import imgUrlRedLemonSlice from '../src/assets/pexels-red-lemon-slice.jpg'
import imgUrlChampagneBot from '../src/assets/pexels-champagne-bottles.jpg'
import imgUrlMojito from '../src/assets/pexels-lime-mint-drinks.jpg'
import imgUrlScotchTopDown from '../src/assets/pexels-scotch-topdown.jpg'
import imgUrlOrangeSlices from '../src/assets/pexels-orange-slices.jpg'
import imgUrlWhiteWine from '../src/assets/pexels-white-wine.jpg'
import imgUrlRoseWine from '../src/assets/pexels-polina-rose-over.jpg'
import imgUrlRumGold from '../src/assets/pexels-eva-gold.jpg'

import axios from 'axios'

import { Home } from './pages/home/Home';
import { Alcohol } from './pages/alcohol/Alcohol';
import { Drinks } from './pages/drinks/Drinks';
import { AllDrinks } from './pages/all_drinks/AllDrinks';
import { Shots } from './pages/shots/Shots';
import { AllShots } from './pages/all_shots/AllShots';
import { PageNotFound } from './pages/notFound/NotFound';
import { AboutUs } from './pages/about/About';
import { Contact } from './pages/contact/Contact'
import { Terms } from './pages/terms/Terms';
import { Privacy } from './pages/privacy/Privacy';
import { SuperUserPage } from './pages/superUserPage/SuperUserPage';
import { DashboardPage } from './pages/dashboardPage/DashboardPage';



// const API_ENDPOINT=process.env.REACT_APP_PUBLIC_KEY
const API_ENDPOINT_ALLDRINKS=process.env.REACT_APP_DRINKS_KEY
const API_ENDPOINT_COCKTAILS=process.env.REACT_APP_COCKTAILS_KEY
const API_ENDPOINT_MUST_KNOW=process.env.REACT_APP_MUST_KNOW_KEY
const API_ENDPOINT_SHOTS=process.env.REACT_APP_ALL_SHOTS_KEY



const App = () => {
  
  const [ drinks, setDrinks ] = useState([])
  const [ cocktails, setCocktails ] = useState([])
  const [ mustKnows, setMustKnows ] = useState([])
  const [ allShots, setAllShots ] = useState([])
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState()
  const [ baseAlcohol, setBaseAlcohol ] = useState([])
  const [ allDrknksBackgroundPic, setAllDrknksBackgroundPic] = useState()


  let picChoiceScotchTopDown = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlScotchTopDown})`;
  let picChoiceBloodOrange = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlBloodOrange})`;
  let picChoiceLime = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlLime})`;
  let picChoiceLemon = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlLemon})`;
  let picChoiceRedLemon = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRedLemonSlice})`;
  let picChoiceOrange = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlOrange})`;
  let picChoiceOrangeSlice = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlOrangeSlices})`;
  let picImageRoseWine = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRoseWine})`;
  let picImageColaUp = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlColaUp})`;
  let picImageMojito = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlMojito})`;
  let picImageRumGod = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRumGold})`;
  let picImageWhiteWine = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlWhiteWine})`;
  let picImageChampagneBottle = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlChampagneBot})`;
  let picImageDefault = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlDefault})`;

  let picByDrink = {
    "Amaretto": [picChoiceScotchTopDown],
    "Apéritif": [picChoiceBloodOrange],
    "Aquavit": [picChoiceBloodOrange],
    "Brandy": [picChoiceScotchTopDown],
    "Bourbon": [picChoiceScotchTopDown],
    "Cognac": [picChoiceScotchTopDown],
    "Gin": [picChoiceLime, picChoiceLemon, picChoiceBloodOrange, picChoiceRedLemon],
    "Mezcal":[picChoiceOrangeSlice],
    "Punt e Mes": [picChoiceOrange, picChoiceBloodOrange, picChoiceRedLemon],
    "Rosé Wine Apéritif": [picImageRoseWine],
    "Rum": [picImageColaUp, picImageMojito],
    "Rum (Dark)": [picImageColaUp],
    "Rum (Gold)": [picImageRumGod],
    "Rum (Spiced)": [picImageRumGod],
    "Rum (Light)": [picImageColaUp, picImageMojito],
    "Scotch": [picChoiceScotchTopDown],
    "Sloe Gin": [picChoiceBloodOrange, picChoiceRedLemon],
    "Tequila": [picChoiceLime, picChoiceOrange, picChoiceLemon],
    "Vodka":[picChoiceLime, picChoiceOrange, picChoiceLemon],
    "Vermouth": [picChoiceBloodOrange],
    "Whiskey": [picChoiceScotchTopDown],
    "White Wine Apéritif": [picImageWhiteWine, picImageChampagneBottle],
    
  }
  

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(API_ENDPOINT_COCKTAILS);
        const {data: responseThree} = await axios.get(API_ENDPOINT_MUST_KNOW);
        const {data: responseFour} = await axios.get(API_ENDPOINT_SHOTS);
        const {data: responseFive} = await axios.get(API_ENDPOINT_ALLDRINKS);

        setCocktails(response);
        setMustKnows(responseThree)
        setAllShots(responseFour)
        setDrinks(responseFive)
      } catch (e) {
        setError(e)
        console.error(e.message);
      } finally {
        setLoading(false);
      }
     
    }
    fetchData();
    // fetchAlcoholType();
    setAllDrknksBackgroundPic(picByDrink[baseAlcohol] !== undefined ? picByDrink[baseAlcohol][Math.floor(Math.random() * picByDrink[baseAlcohol].length)]: picImageDefault)
    
  },[]);

  
  const fetchAlcoholType = async () => {
    let filteredBase = []
    for (let d = 0; d < cocktails.length; d++){
        let base = cocktails.map((ba) => ba.base_alcohol)
        for (let b = 0; b < base.length; b++){
            let baseText = await base[b][0]
            if (!filteredBase.includes(baseText)){
                filteredBase.push(baseText)

            }
        }
        setBaseAlcohol(filteredBase.sort())
    }
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
                    <h3 className="minorh3">{"or experiencing a technical problem"}</h3>
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
          cocktails={cocktails}
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          mustKnows={mustKnows}
          allShots={allShots}
          />}
        />
        <Route
          path="/:alcohol"
          element={<Alcohol  
          drinks={drinks} 
          cocktails={cocktails}
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          allDrknksBackgroundPic={allDrknksBackgroundPic}
          />}
        />
        <Route
          path="/:alcohol/:drinkRecipe"
          element={<Drinks 
          drinks={drinks}
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          />}
        />

        <Route
            path="/:alcohol/drinks"
            element={<AllDrinks 
            drinks={drinks}
            cocktails={cocktails}
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            allDrknksBackgroundPic={allDrknksBackgroundPic}
          />}
        />

        <Route
            path="/:alcohol/shot"
            element={<Shots 
            drinks={drinks}
            allShots={allShots}
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            allDrknksBackgroundPic={allDrknksBackgroundPic}
          />}
        />

        <Route
            path="/:alcohol/all_shots"
            element={<AllShots
            drinks={drinks}
            allShots={allShots}
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            allDrknksBackgroundPic={allDrknksBackgroundPic}
          />}
        />

          <Route
            path="/about-us"
            element={<AboutUs
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
            />}
          />

          <Route
            path="/contact-us"
            element={<Contact
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
            />}
          />

          <Route
            path="/terms-and-conditions"
            element={ <Terms
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
            />}
          />

          <Route
            path="/privacy-policy"
            element={ <Privacy
            baseAlcohol={baseAlcohol} 
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
          />}
          />

          <Route
            path="/keep-user-admin"
            element={ <SuperUserPage
            drinks={drinks}
            />}
          />

          <Route
            path="/dashboard"
            element={ <DashboardPage
            drinks={drinks}
            />}
          />

        <Route 
              path="*" 
              element={<PageNotFound
              baseAlcohol={baseAlcohol} 
              fetchAlcoholType={fetchAlcoholType}
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