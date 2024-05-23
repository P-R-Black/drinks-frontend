import React, { useState, useEffect, useCallback } from 'react'
import slugify from 'react-slugify';
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/navigation/Navigation'
import { DrinksAll } from '../../components/drinks_all/DrinksAll';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';

import { Footer } from '../../components/footer/Footer'

export const AllDrinks = ({ drinks, cocktails, baseAlcohol, fetchAlcoholType, navLinkText,
  isCookieSet, cookiesAccept, coockiesDeclined, showCookieBanner }) => {


  let { alcohol } = useParams()

  const [displayName, setDisplayName] = useState("")



  const convertAlcoholName = useCallback((alcohol) => {
    // gets base alcoohl as it appears from API
    const findParenthesis = (text) => {
      let findAlcohol = cocktails.filter((as) => slugify(text) === alcohol)
        .map((fd) => fd.base_alcohol)
      var regExp = /\(([^)]+)\)/;
      if (regExp.test(findAlcohol)) {
        return true
      } else {
        return false
      }
    }

    // console.log('getOrigTest', findParenthesis("Creme de Cacao Dark"))
    const convertText = (text) => {
      let needsToBeConverted = slugify(text)
      let findAlcohol = cocktails.filter((as) => needsToBeConverted === slugify(as.base_alcohol) ? as.base_alcohol : "")
      let finalText = findAlcohol.map((fa) => fa.base_alcohol)
      finalText.map(function (word) {
        return word !== "De" ? word.base_alcohol : word.replace('De', 'de') + word.slice(1)
      }).join(' ')
      return findAlcohol.map((fa) => fa.base_alcohol)
    }

    let alcoholConvert = alcohol.toLowerCase().split('-').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    if (findParenthesis(alcoholConvert)) {
      setDisplayName(convertText(alcoholConvert))
    } else {
      setDisplayName(alcoholConvert)
    }
  }, [cocktails])

  useEffect(() => {

    convertAlcoholName(alcohol)
  }, [alcohol, convertAlcoholName])

  return (
    <>
      <Navigation
        drinks={drinks}
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        alcohol={alcohol}
      />
      <DrinksAll
        alcohol={alcohol}
        cocktails={cocktails}
        displayName={displayName}
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
