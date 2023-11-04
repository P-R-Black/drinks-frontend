import React, { useState, useEffect } from 'react'
import './index.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'

import { Home } from './pages/home/Home';
import { Alcohol } from './pages/alcohol/Alcohol';
import { Drinks } from './pages/drinks/Drinks';
import { AllDrinks } from './pages/all_drinks/AllDrinks';


const API_ENDPOINT=process.env.REACT_APP_PUBLIC_KEY

const App = () => {

  const [ drinks, setDrinks ] = useState([])
  const [ loading, setLoading ] = useState(true);
  const [ baseAlcohol, setBaseAlcohol ] = useState([])
  

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(API_ENDPOINT);
        setDrinks(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    fetchAlcoholType()
  }, []);

  const fetchAlcoholType = () => {
    let filteredBase = []
    for (let d = 0; d < drinks.length; d++){
        let base = drinks.map((ba) => ba.base_alcohol)
        for (let b = 0; b < base.length; b++){
            let baseText = base[b][0]
            if (!filteredBase.includes(baseText)){
                filteredBase.push(baseText)

            }
        }
        setBaseAlcohol(filteredBase.sort())
    }
    
  }

  const [navLinkText, setNavLinkText] = useState("")

  const navBarLinkText = () => {
    let navvyLink = document.querySelectorAll('.navbarLinks')
    navvyLink.forEach(nl => {
      nl.addEventListener('click', ()=> {
        setNavLinkText(nl.innerHTML)
        
      })
    })
    
  }
  navBarLinkText()

  
  return (
    <div className="app">
      <Router>
          <React.StrictMode>
            {loading ? (
              <p>Loading...</p>
            ):(
              <Routes>
                <Route exact path="/" element={<Home 
                  drinks={loading ? (<p>Loading...</p>):(drinks)} 
                  baseAlcohol={loading ? (<p>Loading...</p>):(baseAlcohol)} 
                  fetchAlcoholType={fetchAlcoholType}
                  navLinkText={navLinkText}
                  />} />
                <Route exact path="alcohol/:alcohol" name="alcohol"
                  element={<Alcohol 
                  drinks={drinks}
                  baseAlcohol={loading ? (<p>Loading...</p>):(baseAlcohol)} 
                  fetchAlcoholType={fetchAlcoholType}
                  navLinkText={navLinkText}

                />} />
                <Route exact path="alcohol/:alcohol/:drinkRecipe" name="drinkRecipe"
                  element={<Drinks 
                  drinks={drinks}
                  baseAlcohol={loading ? (<p>Loading...</p>):(baseAlcohol)} 
                  fetchAlcoholType={fetchAlcoholType}
                  navLinkText={navLinkText}
                />} />
                <Route exact path="alcohol/:alcohol/all_drinks" name="alcohol"
                  element={<AllDrinks 
                  drinks={drinks}
                  baseAlcohol={loading ? (<p>Loading...</p>):(baseAlcohol)} 
                  fetchAlcoholType={fetchAlcoholType}
                  navLinkText={navLinkText}
                />} />
            </Routes>
            )}
          </React.StrictMode>
      </Router>
      
    </div>
  )
}

export default App