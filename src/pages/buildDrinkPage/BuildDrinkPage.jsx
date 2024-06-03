import React from 'react'
import { BuildDrink } from '../../components/BuildDrinkComponents/buildDrink/BuildDrink'
import { useParams } from 'react-router-dom';
import { Navigation } from '../../components/navigation/Navigation'
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { Footer } from '../../components/footer/Footer'
import { buldDrinkBGPic } from '../../../src/assets/pexels-overhead.jpg'


export const BuildDrinkPage = ({ drinks, allShots, baseAlcohol, fetchAlcoholType,
    showCookieBanner, isCookieSet, cookiesAccept, coockiesDeclined }) => {

    let { alcohol } = useParams()

    return (
        <>
            <Navigation
                drinks={drinks}
                fetchAlcoholType={fetchAlcoholType}
                alcohol={alcohol}
            />
            <BuildDrink
                drinks={drinks}
                allShots={allShots}
                baseAlcohol={baseAlcohol}
                fetchAlcoholType={fetchAlcoholType}
                showCookieBanner={showCookieBanner}
                isCookieSet={isCookieSet}
                cookiesAccept={cookiesAccept}
                coockiesDeclined={coockiesDeclined}
            />
            {!isCookieSet ? (
                <CoockieBar
                    showCookieBanner={showCookieBanner}
                    isCookieSet={isCookieSet}
                    cookiesAccept={cookiesAccept}
                    coockiesDeclined={coockiesDeclined}
                />
            ) : ""}
            <Footer />
        </>
    )
}
