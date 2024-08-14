import React, { useState, useEffect, useCallback } from 'react'
import slugify from 'react-slugify';
import { useParams } from 'react-router-dom';

import { DrinksAll } from '../../components/drinks_all/DrinksAll';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';

import { useOutletContext } from 'react-router-dom';

import { convertAlcoholNameUtils } from '../pagesUtilities/Utilities';
import { convertText } from '../pagesUtilities/Utilities';

export const AllDrinks = () => {
  const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();

  let { alcohol } = useParams()
  const [displayName, setDisplayName] = useState("")
  const { cocktails } = useOutletContext()

  convertAlcoholNameUtils(alcohol, cocktails)
  convertText(alcohol, cocktails)

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
      <DrinksAll
        alcohol={alcohol}
        cocktails={cocktails}
        displayName={displayName}
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
