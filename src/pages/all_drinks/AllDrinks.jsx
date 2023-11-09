import React from 'react'
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { DrinksAll } from '../../components/drinks_all/DrinksAll';

export const AllDrinks = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText, allDrknksBackgroundPic }) => {
    let { alcohol } = useParams()
  return (
   <>
    <Navigation 
        drinks={drinks} 
        baseAlcohol={baseAlcohol} 
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        alcohol={alcohol}
    />
    <DrinksAll
        alcohol={alcohol}
        drinks={drinks}
        allDrknksBackgroundPic={allDrknksBackgroundPic}
    />
   </>
  )
}
