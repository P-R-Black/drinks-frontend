import React, { useState, useEffect } from 'react'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

import Cookies from 'js-cookie';
import ReactGA from 'react-ga';


import axios from 'axios';

import { Home } from './pages/home/Home';
import { Alcohol } from './pages/alcohol/Alcohol';
import { Drinks } from './pages/drinks/Drinks';
import { AllDrinks } from './pages/all_drinks/AllDrinks';
import { Shots } from './pages/shots/Shots';
import { AllShots } from './pages/all_shots/AllShots';
import { BuildDrinkPage } from './pages/buildDrinkPage/BuildDrinkPage';
import { PageNotFound } from './pages/notFound/NotFound';
import { AboutUs } from './pages/about/About';
import { Contact } from './pages/contact/Contact'
import { Terms } from './pages/terms/Terms';
import { Privacy } from './pages/privacy/Privacy';
import { SuperUserPage } from './pages/superUserPage/SuperUserPage';
import { DashboardPage } from './pages/dashboardPage/DashboardPage';

import { Query, QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';


const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
const mustKnowApi = process.env.REACT_APP_MUST_KNOW_KEY
const allShotsEndpoint = process.env.REACT_APP_ALL_SHOTS_KEY
const allCocktailsEndpoint = process.env.REACT_APP_COCKTAILS_KEY
const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY
const GA_UA_ID = process.env.REACT_APP_GOOGLE_UA_ID; // OUR_TRACKING_ID
const GA_ANALYTICS = process.env.REACT_APP_GOOGLE_MEASUREMENT_ID;


const fetchPaginatedData = async (url, headers) => {
  let results = [];
  let nextUrl = url;

  while (nextUrl) {
    try {
      const response = await axios.get(nextUrl, { headers });
      results = [...results, ...response.data.results];
      nextUrl = response.data.next;

    } catch (error) {
      console.error("Error fetching paginated data", error);
      nextUrl = null
    }

  }
  return results
}



const App = () => {

  const [drinks, setDrinks] = useState([])
  const [cocktails, setCocktails] = useState([])
  const [mustKnows, setMustKnows] = useState([])
  const [allShots, setAllShots] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState()
  const [baseAlcohol, setBaseAlcohol] = useState([])

  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isCookieSet, setCookie] = useState(false);
  const [hasConsetValue, setHasConsentValue] = useState(false);




  useEffect(() => {
    setHasConsentValue(!!isCookieSet)
    if (isCookieSet === "true") {
      loadGoogleAnalytics();
    }
  }, [])


  const loadGoogleAnalytics = () => {
    setHasConsentValue(true)
    setShowCookieBanner(true)
    console.log('loading ga googlanalytics');
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ANALYTICS}`;

    document.head.appendChild(script);

    let dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments)
    }
    gtag("js", new Date());
    gtag("config", `${GA_ANALYTICS}`, {
      page_path: window.location.pathme

    });
  }

  const cookiesAccept = () => {
    Cookies.set("cookiesConsent", true)
    loadGoogleAnalytics()
    setCookie(true);
    setShowCookieBanner(true)

    ReactGA.initialize(GA_UA_ID);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,

    });

  }

  const coockiesDeclined = () => {
    Cookies.remove("cookiesConsent");
    setCookie(false);
    setShowCookieBanner(true)
  }

  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true)
      const headers = {
        'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
        'Content-type': 'application/json'
      }
      try {
        const drinksData = await fetchPaginatedData(drinksApi, headers)
        const mustKnowDaa = await fetchPaginatedData(mustKnowApi.toString(), headers)
        const allShotsData = await fetchPaginatedData(allShotsEndpoint.toString(), headers)
        const cocktailsData = await fetchPaginatedData(allCocktailsEndpoint, headers)
        setDrinks(drinksData);
        setMustKnows(mustKnowDaa);
        setAllShots(allShotsData);
        setCocktails(cocktailsData);
        setLoading(false)

      } catch (error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          config: error.config,
          code: error.code,
        });
      }
    };
    fetchDrinks()
  }, [drinksApi, mustKnowApi, allShotsEndpoint, allCocktailsEndpoint, drinksAPIKeyProduction]);


  const fetchAlcoholType = async () => {
    let filteredBase = []
    for (let d = 0; d < cocktails.length; d++) {
      let base = cocktails.map((ba) => ba.base_alcohol)
      for (let b = 0; b < base.length; b++) {
        let baseText = await base[b][0]
        if (!filteredBase.includes(baseText)) {
          filteredBase.push(baseText)

        }
      }
      setBaseAlcohol(filteredBase.sort())
    }
  }


  const PageLoader = () => {
    if (loading) {
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

  const needToShowCookiesBanner = (bool = true) => {
    return bool
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
            needToShowCookiesBanner={needToShowCookiesBanner}
            isCookieSet={isCookieSet}
            showCookieBanner={showCookieBanner}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />
        <Route
          path="/:alcohol"
          element={<Alcohol
            drinks={drinks}
            cocktails={cocktails}
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />
        <Route
          path="/:alcohol/:drinkRecipe"
          element={<Drinks
            drinks={drinks}
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />

        <Route
          path="/:alcohol/drinks"
          element={<AllDrinks
            drinks={drinks}
            cocktails={cocktails}
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />

        <Route
          path="/:alcohol/shot"
          element={<Shots
            drinks={drinks}
            allShots={allShots}
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />

        <Route
          path="/:alcohol/all_shots"
          element={<AllShots
            drinks={drinks}
            allShots={allShots}
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />
        <Route
          path="/build-drink"
          element={<BuildDrinkPage
            drinks={drinks}
            allShots={allShots}
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />

        <Route
          path="/about-us"
          element={<AboutUs
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />

        <Route
          path="/contact-us"
          element={<Contact
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}

          />}
        />

        <Route
          path="/terms-and-conditions"
          element={<Terms
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />

        <Route
          path="/privacy-policy"
          element={<Privacy
            baseAlcohol={baseAlcohol}
            fetchAlcoholType={fetchAlcoholType}
            drinks={drinks}
            showCookieBanner={showCookieBanner}
            isCookieSet={isCookieSet}
            cookiesAccept={cookiesAccept}
            coockiesDeclined={coockiesDeclined}
          />}
        />

        <Route
          path="/keep-user-admin"
          element={<SuperUserPage
            drinks={drinks}
          />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage
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
      {
        loading ? (<PageLoader />) : (<RouterProvider router={router} />)
      }

    </div >
  )
}

export default App


