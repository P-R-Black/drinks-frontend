import React, { useState, useEffect } from 'react'
import './drinks_all.css'

export const DrinksAll = ({drinks, alcohol}) => {
  const [alldrinks, setallDrinks ] = useState([])
  const [allDrknksBackgroundPic, setAllDrknksBackgroundPic] = useState()
  const [alcFontSize, setAlcFontSize] = useState(200)

  // format alcohol name
  if (alcohol === "punt e mes"){
    alcohol = "Punt e Mes"
} else if (alcohol === "sloe gin"){
    alcohol = "Sloe Gin"
} else if (alcohol === "white wine apéritif"){
    alcohol = "White Wine Apéritif"
} else if (alcohol === "rosé wine apéritif"){
    alcohol = "Rosé Wine Apéritif"
} else if (alcohol === "rum (dark)"){
  alcohol = "Rum (Dark)"
} else if (alcohol === "rum (gold)"){
  alcohol = "Rum (Gold)"
} else if (alcohol === "rum (light)"){
  alcohol = "Rum (Light)"
} else {
  let alcoholFirstLetter = alcohol.charAt(0)
  let alcoholFirstLetterCap = alcoholFirstLetter.toUpperCase()
  let alcoholFirstLetterRemainingLetters = alcohol.slice(1)
  alcohol = alcoholFirstLetterCap + alcoholFirstLetterRemainingLetters
}

  let imgUrlDefault = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-rachel-default.jpg') + ')'
  let imgUrlLime = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lisa-f.jpg') + ')'
  let imgUrlOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-j-lewis.jpg') + ')'
  let imgUrlLemon = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lukas.jpg')  + ')'
  let imgUrlColaUp = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-cola-up.jpg') + ')'
  let imgUrlColaDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-cola-down.jpg') + ')'
  let imgUrlBloodOrange = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-blood-orange-wedge.jpg') + ')'
  let imgUrlRedLemonSlice = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-red-lemon-slice.jpg') + ')'
  let imgUrlChampagneBot = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-champagne-bottles.jpg') + ')'
  let imgUrlMojito = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-lime-mint-drinks.jpg') + ')'
  let imgUrlScotchTopDown = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-scotch-topdown.jpg') + ')'
  let imgUrlOrangeSlices = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-orange-slices.jpg') + ')'
  let imgUrlWhiteWine = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-white-wine.jpg') + ')'
  let imgUrlRoseWine = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-polina-rose-over.jpg') + ')'
  let imgUrlRumGold = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-eva-gold.jpg') + ')'


  let picByDrink = {
    "Amaretto": [imgUrlScotchTopDown],
    "Apéritif": [imgUrlBloodOrange],
    "Aquavit": [imgUrlBloodOrange],
    "Brandy": [imgUrlScotchTopDown],
    "Bourbon": [imgUrlScotchTopDown],
    "Cognac": [imgUrlScotchTopDown],
    "Gin": [imgUrlLime, imgUrlLemon, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Mezcal":[imgUrlOrangeSlices],
    "Punt e Mes": [imgUrlOrange, imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Rosé Wine Apéritif": [imgUrlRoseWine],
    "Rum": [imgUrlColaUp, imgUrlMojito],
    "Rum (Dark)": [imgUrlColaUp],
    "Rum (Gold)": [imgUrlRumGold],
    "Rum (Light)": [imgUrlColaUp, imgUrlMojito],
    "Scotch": [imgUrlScotchTopDown],
    "Sloe Gin": [imgUrlBloodOrange, imgUrlRedLemonSlice],
    "Tequila": [imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vodka":[imgUrlLime, imgUrlOrange, imgUrlLemon],
    "Vermouth": [imgUrlBloodOrange],
    "Whiskey": [imgUrlScotchTopDown],
    "White Wine Apéritif": [imgUrlWhiteWine, imgUrlChampagneBot],
  }


  const getAllDrinks = () => {
    let sortedList = []
    let fileDrinks = drinks.map((fd) => {
      if(fd.base_alcohol[0] == alcohol){
          if (fd.drink_name){
            sortedList.push(fd.drink_name)
          }
        return fd.drink_name;
      }
    })
    setallDrinks(sortedList.sort())
    
    console.log('fileDrinks', fileDrinks)
    console.log('sortedList', sortedList)

  }

  const adjustFontSize = () => {
    let baseAlcoholName = document.getElementById('baseAlcoholName').innerText
    if(baseAlcoholName.length >= 18){
      setAlcFontSize(120)
    } else {
      setAlcFontSize(200)
    }
  }





  useEffect(() => {
    getAllDrinks()
    adjustFontSize()
    setAllDrknksBackgroundPic(picByDrink[alcohol] != undefined ? picByDrink[alcohol][Math.floor(Math.random() * picByDrink[alcohol].length)]: imgUrlDefault)
  },[alcohol])

    

  return (
    <section className="allDrinksBackground" style={{backgroundImage: allDrknksBackgroundPic}}>
      <div className="container">
        <div className="allDrinksContainer">
          <div className="baseAlcTitleContainerTwo">
            <h1 id="baseAlcoholName" style={{fontSize: alcFontSize}}>{alcohol}</h1>
            <h2>Drinks & Cocktails</h2>
          </div>
          <div className="linksToDrinksContainer">
            {alldrinks.map((ad) => {
              return (
                <a href={`/alcohol/${ad.base_alcohol}/${ad.toLowerCase()}`} 
                className="linktoRecipeTwo">{ad.length < 18 ? ad : ad.slice(0, 15) + "..."}</a>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}
