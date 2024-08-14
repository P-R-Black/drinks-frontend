import React from 'react'
import { TheAbout } from '../../components/theabout/TheAbout';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';



export const AboutUs = () => {
  const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();

  return (
    <>

      <TheAbout />
      <CoockieBar
        showCookieBanner={showCookieBanner}
        cookiesConsent={cookiesConsent}
        acceptCookies={acceptCookies}
        declineCookies={declineCookies}
      />
    </>
  )
}
