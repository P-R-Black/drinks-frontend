import React, { useState, useEffect } from 'react'
import { BiShareAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'
import  { AiOutlineMinus } from 'react-icons/ai'

import { Share } from '../share/Share';
import './drinkrecipe.css'

export const DrinkRecipe = ({drinks, drinkRecipe}) => {


    const [ recipe, setRecipe ] = useState([])
    const [ backgroundRecipePic, setBackgroundRecipePic] = useState()
    let [ unitCount, setUnitCount ] = useState(1)
    
    let imgRecipeBG = 'radial-gradient(#25236E82, #4A5ECB75),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-kelly.jpg') + ')'
    let picByRecipe = [imgRecipeBG]


    // function to get drink recipe
    const getDrinkRecipe = () => {
        drinks.map((rec) => {
            if (rec.drink_name.toLowerCase() == drinkRecipe){
                console.log('drink recipe', drinkRecipe)
                setRecipe([rec])
                console.log('recipe', recipe)
            } 
        })
    }
    console.log('recipe', recipe)

    // removes zero before decimals
    const formatUnits = (unit) =>{
        let formattedUnit = unit.split(" ")[0] * unitCount
        let temp = formattedUnit.toString()
        formattedUnit = temp.replace(/^0+/,"")
        
        return formattedUnit  
    }


    useEffect(() => {
        getDrinkRecipe()
        setBackgroundRecipePic(picByRecipe[Math.floor(Math.random() * picByRecipe.length)])
        
    },[])



  return (
    <section className="recipeBackground" style={{backgroundImage: backgroundRecipePic}}>
        <div className="container">
            {recipe.map((dr) => {
                return (
                <div className="recipeContainer">
                    <div className="titleAndLikes">
                        <h2 className="recipeTitle">{dr.drink_name}</h2>
                        <div className="likesAndShare" style={{color:"white"}}> 
                            <Share recipeInPlay={dr.drink_name}
                                ingredientInPlay={dr.ingredient_name}
                                garnishInPlay={dr.garnish}
                                directionsInPlay={dr.mixing_direction}
                                glassInPlay={dr.serving_glass}
                            />
                        </div>
                    </div>
                    <div className="ingredientInstructionContainer">
                        <div className="allIngredientsContainer">
                            <h3 className="ingredientTitle">Ingredients</h3>
                            <ul>
                            {dr.ingredient_name.map((im) => {
                                return (
                                    <li className="ingredients" key={im.id}>
                                        <span className="ingredientUnit">{formatUnits(im)} </span>  
                                        <span className="ingredientMeasurement">{im.split(" ")[1]} </span>
                                        <span className="ingredentIngredient">
                                            {
                                            im.replace(im.split(" ")[0], "").replace(im.split(" ")[1], "")
                                            .trim()}
                                        </span>
                                    </li>
                                )
                            })}
                            </ul>
                        </div>
                        <div className="garnishAndGlassContainer">
                            <div className="garnishContainer">
                                <h3 className="garnishTitle">Garnish</h3>
                                {dr.garnish.map((mg) => {
                                    return (
                                        <h4 className="garnish">{mg != "0 None" ? mg: "None"}</h4>
                                    )
                                })}
                                
                            </div>
                            <div className="glassContainer">
                                <h3 className="glassTitle">Serving Glass</h3>
                                <h4 className="glass">{dr.serving_glass}</h4>
                            </div>
                            <div className="servingAmountContainer">
                                <h3 className="servingSize">Serving</h3>
                                <div className="incrementUnit">
                                    <h4 className="servings">{unitCount} </h4>
                                    <div className="buttonContainer">
                                        <button
                                            onClick={() => setUnitCount(unitCount + 1)}
                                            className="plusButton" 
                                            type="submit">
                                                <AiOutlinePlus/>
                                        </button>
                                        <button
                                            onClick={() => setUnitCount(unitCount > 1 ? unitCount-=1:1)}
                                            className="minusButton" 
                                            type="submit">
                                                <AiOutlineMinus/>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="recipeInstructionContainer">
                            <div className="instructionContainer">
                                <h3 className="instructionTitle">Instructions</h3>
                                <h4 className="instructions" style={{color :"white"}}>
                                    {dr.mixing_direction}
                                </h4>
                            
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>
    </section>
  )
}