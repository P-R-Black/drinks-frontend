import React from 'react'
import slugify from 'react-slugify';
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { DrinksAll } from '../../components/drinks_all/DrinksAll';
import { Footer } from '../../components/footer/Footer'

export const AllDrinks = ({ drinks, cocktails, baseAlcohol, fetchAlcoholType, navLinkText, allDrknksBackgroundPic }) => {
    let { alcohol } = useParams()

    console.log('alcohol, AllDrinks', alcohol, 'alcohol slugify:', slugify(alcohol))
    
    // format alcohol name
    if (alcohol === "sloe-gin"){
        alcohol = "Sloe Gin"
    } else if (alcohol === "white-wine-aperitif"){
        alcohol = "White Wine Apéritif"
    } else if (alcohol === "rose-wine-aperitif"){
        alcohol = "Rosé Wine Apéritif"
    } else if (alcohol === "rum-dark"){
    alcohol = "Rum (Dark)"
    } else if (alcohol === "rum-gold"){
    alcohol = "Rum (Gold)"
    } else if (alcohol === "rum-light"){
    alcohol = "Rum (Light)"
    } else if (alcohol === "rum-spiced"){
    alcohol = "Rum (Spiced)"
    } else if (alcohol === "non-alcoholic"){
    alcohol = "Non-Alcoholic"
    } else if (alcohol === "sparkling-white-wine"){
    alcohol = "Sparkling White Wine"
    } else if (alcohol === "irish-cream-liqueur"){
    alcohol = "Irish Cream Liqueur"
    } else if (alcohol === "creme-de-cacao-dark"){
    alcohol = "Crème de Cacao (Dark)"
    } else if (alcohol === "green-melon-liqueur"){
    alcohol = "Green Melon Liqueur"
    } else if (alcohol === "elderflower-liqueur"){
    alcohol = "Elderflower Liqueur"
    } else if (alcohol === "creme-de-menthe-green"){
    alcohol = "Crème de Menthe (Green)"
    } else if (alcohol === "jagermeister"){
    alcohol = "Jägermeister"
    } else if (alcohol === "butterscotchliqueur"){
    alcohol = "Butterscotch Liqueur"
    } else if (alcohol === "sweetherballiqueur"){
    alcohol = "Sweet Herbal Liqueur"
    } else if (alcohol === "irishcreamliqueur"){
    alcohol = "Irish Cream Liqueur"
    } else {
    let alcoholFirstLetter = alcohol.charAt(0)
    let alcoholFirstLetterCap = alcoholFirstLetter.toUpperCase()
    let alcoholFirstLetterRemainingLetters = alcohol.slice(1)
    alcohol = alcoholFirstLetterCap + alcoholFirstLetterRemainingLetters
    }


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
        cocktails={cocktails}
        allDrknksBackgroundPic={allDrknksBackgroundPic}
    />
    <Footer/>
   </>
  )
}
