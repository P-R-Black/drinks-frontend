import React from 'react'
import { BuildDrink } from '../../components/BuildDrinkComponents/buildDrink/BuildDrink'
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { useOutletContext } from 'react-router-dom';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';



export const BuildDrinkPage = () => {
    const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();

    const { drinks } = useOutletContext()


    return (
        <>

            <BuildDrink
                drinks={drinks}
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
