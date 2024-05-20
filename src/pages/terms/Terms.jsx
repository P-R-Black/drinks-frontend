import React from 'react'
import { Navigation } from '../../components/navigation/Navigation';
import { TermsAndConditions } from '../../components/terms_conditions/TermsAndConditions';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { Footer } from '../../components/footer/Footer';

export const Terms = ({ drinks, baseAlcohol, fetchAlcoholType, navLinkText,
  isCookieSet, cookiesAccept, coockiesDeclined, showCookieBanner }) => {
  return (
    <>
      <Navigation
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        drinks={drinks}
      />
      <TermsAndConditions />
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
