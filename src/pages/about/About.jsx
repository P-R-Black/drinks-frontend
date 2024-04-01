import React from 'react'
import { Navigation } from '../../components/navigation/Navigation';
import { TheAbout } from '../../components/theabout/TheAbout';
import { Footer } from '../../components/footer/Footer';


export const AboutUs = ({drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {
  return (
    <>
       <Navigation 
        baseAlcohol={baseAlcohol} 
        fetchAlcoholType={fetchAlcoholType} 
        navLinkText={navLinkText} 
        drinks={drinks}
      />
      <TheAbout />
      < Footer />
    </>
  )
}
