import React from 'react'
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { DrinkRecipe } from '../../components/drinkrecipe/DrinkRecipe';
import { AllDrinks } from '../../components/alcoholselect/AllDrinks';

export const Drinks = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {

    // console.log("Drinks.jsx", useParams())
    let { drinkRecipe } = useParams()

  return (
    <>
        <Navigation
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          navLinkText={navLinkText}
        />
        <DrinkRecipe
          drinks={drinks} 
          drinkRecipe={drinkRecipe}
        />
         <AllDrinks
          drinks={drinks} 
          drinkRecipe={drinkRecipe}
          baseAlcohol={baseAlcohol}
        />
    </>
  )
}
