import React from 'react'

import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { AlcoholSelect } from '../../components/alcoholselect/AlcoholSelect'
import { Footer } from '../../components/footer/Footer'


export const Alcohol = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText, allDrknksBackgroundPic }) => {

  let { alcohol} = useParams()
 
  console.log('alcohol useParams', alcohol) //  alcohol useParams rum (gold)

  console.log('baseAlc', baseAlcohol)


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
          allDrknksBackgroundPic={allDrknksBackgroundPic}
        />
        <Footer/>
    </>
  )
}
