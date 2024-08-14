import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';

import { ShotsAll } from '../../components/shots_all/ShotsAll'
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import slugify from 'react-slugify';
import { useOutletContext } from 'react-router-dom';
import { useCookies } from '../../providers/cookiesProvider/CookiesProvider';



export const AllShots = () => {
  const { cookiesConsent, acceptCookies, declineCookies, showCookieBanner } = useCookies();

  let { alcohol } = useParams()
  const [displayName, setDisplayName] = useState("")
  const { allShots } = useOutletContext()

  const convertAlcoholName = useCallback((alcohol) => {
    // gets base alcoohl as it appears from API
    const findParenthesis = (text) => {
      let findAlcohol = allShots.filter((as) => slugify(text) === alcohol)
        .map((fd) => fd.base_alcohol)
      findAlcohol = findAlcohol.length > 1 ? findAlcohol[0] : findAlcohol
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
      let findAlcohol = allShots.filter((as) => needsToBeConverted === slugify(as.base_alcohol) ? as.base_alcohol : "")
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
  }, [allShots])

  useEffect(() => {

    convertAlcoholName(alcohol)
  }, [alcohol, convertAlcoholName])


  return (
    <>

      <ShotsAll
        alcohol={alcohol}
        allShots={allShots}
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
