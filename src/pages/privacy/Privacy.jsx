import React from 'react'
import { Navigation } from '../../components/navigation/Navigation';
import { PrivacyPolicy } from '../../components/user_privacy/PrivacyPolicy';
import { Footer } from '../../components/footer/Footer';


export const Privacy = ({drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {
  return (
    <>
       <Navigation 
        baseAlcohol={baseAlcohol} 
        fetchAlcoholType={fetchAlcoholType} 
        navLinkText={navLinkText} 
        drinks={drinks}
      />
      <PrivacyPolicy />
      < Footer />
    </>
  )
}
