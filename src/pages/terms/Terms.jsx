import React from 'react'
import { Navigation } from '../../components/navigation/Navigation';
import { TermsAndConditions } from '../../components/terms_conditions/TermsAndConditions';
import { Footer } from '../../components/footer/Footer';

export const Terms = ({drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {
  return (
    <>
       <Navigation 
        baseAlcohol={baseAlcohol} 
        fetchAlcoholType={fetchAlcoholType} 
        navLinkText={navLinkText} 
        drinks={drinks}
      />
      <TermsAndConditions />
      < Footer />
    </>
  )
}
