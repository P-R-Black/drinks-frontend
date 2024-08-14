import React from 'react'
import { ContactUs } from '../../components/contactUs/ContactUs'
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';



export const Contact = () => {
  const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();

  return (
    <>

      <ContactUs />
      <CoockieBar
        showCookieBanner={showCookieBanner}
        cookiesConsent={cookiesConsent}
        acceptCookies={acceptCookies}
        declineCookies={declineCookies}
      />
    </>
  )
}
