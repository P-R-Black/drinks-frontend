import React from 'react'

import { Navigation } from '../../components/navigation/Navigation'
import { Hero } from '../../components/hero/Hero'
import { DailyDrink } from '../../components/daily_drink/DailyDrink'


export const Home = ({drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {

  return (
    <>
      <Navigation 
        baseAlcohol={baseAlcohol} 
        fetchAlcoholType={fetchAlcoholType} 
        navLinkText={navLinkText} 
        drinks={drinks}
      />
      <Hero/>
      <DailyDrink />
    </>
  )
}
