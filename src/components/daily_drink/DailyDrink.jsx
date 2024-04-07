import React, { useState, useEffect, useRef } from 'react'
import { Calendar } from '../calendar/Calendar'
import './dailyDrink.css'

import { MdUpdate } from 'react-icons/md'

import { Parallax, Background } from 'react-parallax';
import dodImage from '../../assets/pexels-ron-lach.jpg'



export const DailyDrink = ({ currentDrink, generateCalendar, adjustMonth, date, year, 
  month, mm, dd, lastDrinkOfTheDay, dateLookup, months }) => {
  
  const titleRefTwo = useRef();
  const dodRefLeftSide = useRef()
  const dodRefRightSide = useRef()

  const [ dodElementVisible, setDodElementVisible ] = useState();
  const [ loading, setLoading ] = useState(true)
  

  console.log('currentDrink', currentDrink, 'lastDrinkOfTheDay', lastDrinkOfTheDay)


  let today = `${months[Number(mm) - 1]} ${dd.replace(/^0+/, "")}, ${year}`
  let lookUpDate = new Date(dateLookup).getTime()
  let lookUpToday = new Date(today).getTime()

  

  useEffect(() => {
    const dodObserver = new IntersectionObserver((entries) => {
      const dodEntry = entries[0]
      setDodElementVisible(dodEntry.isIntersecting)
     
    })
    dodObserver.observe(titleRefTwo.current)
  },[])


    return (
      <section id="dodSection" className="dodSection">
        <Parallax 
          blur={5} 
          bgImageAlt={dodImage}
          strength={500}>
          <Background>
              <img src={dodImage} className='parallaxImageDod' style={{position: "absolute", height: "100%", width: "100vw", backfaceVisibility: "hidden",
                transform: 'translate3d(-50%, -49.5868px, 0px)', left:"50%", transformStyle: 'preserve-3d',
                backgroundSize: "cover"}}
              />
          </Background>
               
          <div className="container">
            <div ref={titleRefTwo}>
              {dodElementVisible ? ( 
                <h1 className={"drinkOfDayTitle show"}>Drink of the Day</h1>) : (

                <h1 className={"drinkOfDayTitle hidden"}></h1>
              )}

            </div>
          
            <div className="dodContainer">
              {dodElementVisible ? (<div className="dodLeftSide show" ref={dodRefLeftSide}>
                {dateLookup !== undefined && lookUpDate < lookUpToday  ? (
                <>
                  <h2 className="todaysDrink">{dateLookup === today ? "Today's Drink": dateLookup}</h2>
                  {currentDrink.map((cd) => (
                    <>
                      <div key={cd.id} className='dailyDrink'>{cd.drink_name}</div>
                      <a key={cd.drink_name} href={`/alcohol/${cd.base_alcohol}/${cd.drink_name.toLowerCase()}`} className="recipeButton">Recipe</a>
                    </>
                    
                  ))}
                </>
                ):(
                  <>
                  <h2 className="todaysDrink">{"Today's Drink"}</h2>
                  {currentDrink.map((cd) => (
                    <>
                      <div key={cd.id} className='dailyDrink'>{lastDrinkOfTheDay}</div>
                      <a key={cd.drink_name} href={`/alcohol/${cd.base_alcohol}/${lastDrinkOfTheDay.toLowerCase()}`} className="recipeButton">Recipe</a> 
                    </>
                  ))}
                  
                  </>
                )}
              </div>) : (<div className="dodLeftSide hidden" ref={dodRefLeftSide}>
                {dateLookup !== undefined && lookUpDate < lookUpToday  ? (
                <>
                  <h2 className="todaysDrink">{dateLookup === today ? "Today's Drink": dateLookup}</h2>
                  {currentDrink.map((cd) => (
                    <>
                      <div key={cd.id} className='dailyDrink'>{cd.drink_name}</div>
                      <a key={cd.drink_name} href={`/alcohol/${cd.base_alcohol}/${cd.drink_name.toLowerCase()}`} className="recipeButton">Recipe</a>
                    </>
                    
                  ))}
                </>
                ): (
                  <>
                  <h2 className="todaysDrink">{"Today's Drink"}</h2>
                  {currentDrink.map((cd) => (
                    <>
                      <div key={cd.id} className='dailyDrink'>{lastDrinkOfTheDay}</div>
                      <a key={cd.drink_name} href={`/alcohol/${cd.base_alcohol}/${lastDrinkOfTheDay.toLowerCase()}`} className="recipeButton">Recipe</a> 
                    </>
                  ))}
                  
                  </>
                )}
              </div>)}
              
              {dodElementVisible ? (
                <div className="dodRightSide show" ref={dodRefRightSide}>
                <h2 className="boxTitle">Past Drink of the Day</h2>
                  <Calendar 
                    date={date}
                    year={year} 
                    month={month} 
                    generateCalendar={generateCalendar}
                    adjustMonth={adjustMonth}

                  />
              </div>
                  ) : (
                  <div className="dodRightSide hidden" ref={dodRefRightSide}>
                  <h2 className="boxTitle">Past Drink of the Day</h2>
                    <Calendar 
                      date={date}
                      year={year} 
                      month={month} 
                      generateCalendar={generateCalendar}
                      adjustMonth={adjustMonth}

                    />
                </div>
                )}
            </div>
          </div>
        </Parallax>
      </section>
  )
}
