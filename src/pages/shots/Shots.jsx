import React, { useState, useEffect, useCallback } from 'react';

import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/LogoNavFooterPageComponents/navigation/Navigation';
import { ShotSelect } from '../../components/shotSelect/ShotSelect';
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { Footer } from '../../components/LogoNavFooterPageComponents/footer/Footer';
import slugify from 'react-slugify';


export const Shots = ({ drinks, allShots, baseAlcohol, fetchAlcoholType, navLinkText,
  showCookieBanner, isCookieSet, cookiesAccept, coockiesDeclined }) => {

  let { alcohol } = useParams()
  console.log('alcohol Shots.jsx', alcohol)

  const [displayName, setDisplayName] = useState("")


  const convertAlcoholName = useCallback((alcohol) => {

    // gets base alcohol as it appears from API
    const findParenthesis = (text) => {
      console.log('text', text)
      // let findAlcohol = allShots.filter((as) => slugify(text) === alcohol)
      //   .map((fd) => fd.base_alcohol)
      let findAlcohol = allShots.filter((as) => as.base_alcohol[0] === text.toLowerCase())
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

    console.log('displayName', displayName)
  }, [allShots, displayName])

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
        displayName={displayName}
      />
      <ShotSelect
        drinks={drinks}
        allShots={allShots}
        baseAlcohol={baseAlcohol}
        navLinkText={navLinkText}
        alcohol={alcohol}
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
