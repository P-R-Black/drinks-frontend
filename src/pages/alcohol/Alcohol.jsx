import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { AlcoholSelect } from '../../components/alcoholselect/AlcoholSelect'
import { DrinkRecipe } from '../../components/drinkrecipe/DrinkRecipe';
import { Drinks } from '../drinks/Drinks';

export const Alcohol = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText }) => {

  console.log(useParams())
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
        <AlcoholSelect 
          drinks={drinks} 
          baseAlcohol={baseAlcohol} 
          navLinkText={navLinkText} 
          alcohol={alcohol}
        />
    </>
  )
}
