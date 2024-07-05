import React from 'react'
import { Navigation } from '../../components/LogoNavFooterPageComponents/navigation/Navigation';
import { PrivacyPolicy } from '../../components/user_privacy/PrivacyPolicy';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { Footer } from '../../components/LogoNavFooterPageComponents/footer/Footer';


export const Privacy = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText,
  isCookieSet, cookiesAccept, coockiesDeclined, showCookieBanner }) => {
  return (
    <>
      <Navigation
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        drinks={drinks}
      />
      <PrivacyPolicy />
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
