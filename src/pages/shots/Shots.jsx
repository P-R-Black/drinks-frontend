import React from 'react'

import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { ShotSelect } from '../../components/shotSelect/ShotSelect';
import { Footer } from '../../components/footer/Footer'


export const Shots = ({ drinks, allShots, baseAlcohol, fetchAlcoholType, navLinkText, allDrknksBackgroundPic }) => {
  let { alcohol} = useParams()


  return (
    <>  
        <Navigation 
          drinks={drinks} 
          baseAlcohol={baseAlcohol} 
          fetchAlcoholType={fetchAlcoholType}
          navLinkText={navLinkText}
          alcohol={alcohol}
          />
        <ShotSelect 
          drinks={drinks} 
          allShots={allShots}
          baseAlcohol={baseAlcohol} 
          navLinkText={navLinkText} 
          alcohol={alcohol}
          allDrknksBackgroundPic={allDrknksBackgroundPic}
        />
        <Footer/>
    </>
  )
}
