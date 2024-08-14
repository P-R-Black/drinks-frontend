import React from 'react'
import { TermsAndConditions } from '../../components/terms_conditions/TermsAndConditions';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';


export const Terms = () => {
  const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();
  return (
    <>

      <TermsAndConditions />
      <CoockieBar
        showCookieBanner={showCookieBanner}
        cookiesConsent={cookiesConsent}
        acceptCookies={acceptCookies}
        declineCookies={declineCookies}
      />

    </>
  )
}
