import React from 'react'

import { ContactUs } from '../../components/contactUs/ContactUs'
import { Footer } from '../../components/footer/Footer'
import { Navigation } from '../../components/navigation/Navigation'

export const Contact = ({drinks, baseAlcohol, fetchAlcoholType, navLinkText}) => {
  return (
    <>
    <Navigation 
      baseAlcohol={baseAlcohol} 
      fetchAlcoholType={fetchAlcoholType} 
      navLinkText={navLinkText} 
      drinks={drinks}
   />
   <ContactUs />
   < Footer />
 </>
  )
}
