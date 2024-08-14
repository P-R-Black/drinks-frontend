import React from 'react'
import { useParams } from 'react-router-dom';

import { DrinkRecipe } from '../../components/drinkrecipe/DrinkRecipe';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { useOutletContext } from 'react-router-dom';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';



export const Drinks = () => {
  const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();

  let { drinkRecipe } = useParams()
  const { drinks } = useOutletContext()

  return (
    <>

      <DrinkRecipe
        drinks={drinks}
        drinkRecipe={drinkRecipe}
      />
      <CoockieBar
        showCookieBanner={showCookieBanner}
        cookiesConsent={cookiesConsent}
        acceptCookies={acceptCookies}
        declineCookies={declineCookies}
      />
    </>
  )
}
