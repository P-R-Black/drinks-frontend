import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import slugify from 'react-slugify';
import { Navigation } from '../../components/navigation/Navigation'
import { ShotsAll } from '../../components/shots_all/ShotsAll'
import { CoockieBar } from '../../components/CookieComponents/cookies/CoockieBar';
import { Footer } from '../../components/footer/Footer'

export const AllShots = ({ drinks, allShots, baseAlcohol, fetchAlcoholType, navLinkText,
  allDrinksBackgroundPic, updateBackgroundPicture, showCookieBanner,
  isCookieSet, cookiesAccept, coockiesDeclined }) => {

  let { alcohol } = useParams()
  const [displayName, setDisplayName] = useState("")

  // gets base alcoohl as it appears from API
  const findParenthesis = (text) => {
    let findAlcohol = allShots.filter((as) => slugify(text) === alcohol)
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
    let findAlcohol = allShots.filter((as) => needsToBeConverted === slugify(as.base_alcohol) ? as.base_alcohol : "")
    let finalText = findAlcohol.map((fa) => fa.base_alcohol)
    finalText.map(function (word) {
      return word !== "De" ? word.base_alcohol : word.replace('De', 'de') + word.slice(1)
    }).join(' ')
    return findAlcohol.map((fa) => fa.base_alcohol)
  }

  // console.log(convertText("Creme de Cacao Dark"))
  const convertAlcoholName = (alcohol) => {
    let alcoholConvert = alcohol.toLowerCase().split('-').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    if (findParenthesis(alcoholConvert)) {
      setDisplayName(convertText(alcoholConvert))
    } else {
      setDisplayName(alcoholConvert)
    }

  }


  useEffect(() => {
    convertAlcoholName(alcohol)
  }, [])

  return (
    <>
      <Navigation
        drinks={drinks}
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
        alcohol={alcohol}
      />
      <ShotsAll
        alcohol={alcohol}
        allShots={allShots}
        allDrinksBackgroundPic={allDrinksBackgroundPic}
        updateBackgroundPicture={updateBackgroundPicture}
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
