import React from 'react'

import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { AlcoholSelect } from '../../components/alcoholselect/AlcoholSelect'
import { Footer } from '../../components/footer/Footer'


export const Alcohol = ({ drinks, cocktails, baseAlcohol, fetchAlcoholType, navLinkText, allDrknksBackgroundPic }) => {

  let { alcohol} = useParams()


  return (
    <>  
        <Navigation 
          drinks={drinks} 
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          navLinkText={navLinkText}
          alcohol={alcohol}
          cocktails={cocktails}
          />
        <AlcoholSelect 
          cocktails={cocktails} 
          baseAlcohol={baseAlcohol} 
          navLinkText={navLinkText} 
          alcohol={alcohol}
          allDrknksBackgroundPic={allDrknksBackgroundPic}
        />
        <Footer/>
    </>
  )
}
