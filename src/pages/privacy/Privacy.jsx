import React from 'react'
import { PrivacyPolicy } from '../../components/user_privacy/PrivacyPolicy';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';



export const Privacy = () => {
  const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();
  return (
    <>

      <PrivacyPolicy />
      <CoockieBar
        showCookieBanner={showCookieBanner}
        cookiesConsent={cookiesConsent}
        acceptCookies={acceptCookies}
        declineCookies={declineCookies}
      />

    </>
  )
}
