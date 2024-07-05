import React from 'react'
import { Navigation } from '../../components/LogoNavFooterPageComponents/navigation/Navigation';
import { TheAbout } from '../../components/theabout/TheAbout';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { Footer } from '../../components/LogoNavFooterPageComponents/footer/Footer';



export const AboutUs = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText,
  showCookieBanner, isCookieSet, cookiesAccept, coockiesDeclined
}) => {
  return (
    <>
      <Navigation
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        drinks={drinks}
      />
      <TheAbout />
      {!isCookieSet ? (
        <CoockieBar
          showCookieBanner={showCookieBanner}
          isCookieSet={isCookieSet}
          cookiesAccept={cookiesAccept}
          coockiesDeclined={coockiesDeclined}
        />
      ) : ""}

      < Footer />
    </>
  )
}
