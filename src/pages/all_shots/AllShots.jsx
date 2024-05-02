import React from 'react'
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { ShotsAll } from '../../components/shots_all/ShotsAll'
import { Footer } from '../../components/footer/Footer'

export const AllShots = ({ drinks, allShots, baseAlcohol, fetchAlcoholType, navLinkText, allDrknksBackgroundPic }) => {
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
    <ShotsAll
        alcohol={alcohol}
        allShots={allShots}
        allDrknksBackgroundPic={allDrknksBackgroundPic}
    />
    <Footer/>
   </>
  )
}
