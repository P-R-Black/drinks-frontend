import React from 'react'
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { DrinkRecipe } from '../../components/drinkrecipe/DrinkRecipe';
import { Footer } from '../../components/footer/Footer'


export const Drinks = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {

    // console.log("Drinks.jsx", useParams())
    let { drinkRecipe } = useParams()

  return (
    <>
        <Navigation
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          navLinkText={navLinkText}
          drinks={drinks}
          drinkRecipe={drinkRecipe}
        />
        <DrinkRecipe
          drinks={drinks} 
          drinkRecipe={drinkRecipe}
        />
        <Footer/>
    </>
  )
}
