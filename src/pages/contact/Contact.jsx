import React from 'react'
import { ContactUs } from '../../components/contactUs/ContactUs'
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { Footer } from '../../components/LogoNavFooterPageComponents/footer/Footer'
import { Navigation } from '../../components/LogoNavFooterPageComponents/navigation/Navigation'


export const Contact = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText,
  isCookieSet, cookiesAccept, coockiesDeclined }) => {

  return (
    <>
      <Navigation
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        drinks={drinks}
      />
      <ContactUs />
      {!isCookieSet ? (
        <CoockieBar
          isCookieSet={isCookieSet}
          cookiesAccept={cookiesAccept}
          coockiesDeclined={coockiesDeclined}
        />
      ) : ""}
      < Footer />
    </>
  )
}
