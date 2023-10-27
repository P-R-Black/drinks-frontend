import React, { useState, useEffect } from 'react'
import { BiShareAlt } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai'

import './drinkrecipe.css'

export const DrinkRecipe = ({drinks, drinkRecipe }) => {

    const [ recipe, setRecipe ] = useState([])
    const [backgroundRecipePic, setBackgroundRecipePic] = useState()

    //console.log('drink recipe', drinks)

    let imgRecipeBG = 'radial-gradient(#2e2c7c68, #4a5ecb5f),' + 'url(' + require ('/Users/paulblack/VS Code/drinks-app/src/assets/pexels-kelly.jpg') + ')'
    
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
                            <div className="likesHeart">
                                <AiOutlineHeart className='iconHeart'/>
                                <span>Like</span>
                            </div>
                            <div className="shareIcon">
                                <BiShareAlt className='iconHeart'/>
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                    <div className="ingredientInstructionContainer">
                        <div className="allIngredientsContainer">
                            <h3 className="ingredientTitle">Ingredients</h3>
                            {dr.ingredient_name.map((im) => {
                                return(
                                    <h4 className="ingredients" key={im.id}>{im}</h4>
                                )
                            })}
                        </div>
                        <div className="garnishAndGlassContainer">
                            <div className="garnishContainer">
                                <h3 className="garnishTitle">Garnish</h3>
                                {dr.garnish.map((mg) => {
                                    return (
                                        <h4 className="garnish">{mg}</h4>
                                    )
                                })}
                                
                            </div>
                            <div className="glassContainer">
                                <h3 className="glassTitle">Serving Glass</h3>
                                <h4 className="glass">{dr.serving_glass}</h4>
                            </div>
                        </div>
                        <div className="recipeInstructionContainer">
                            <div className="instructionContainer">
                                <h3 className="instructionTitle">Instructions</h3>
                                <ol>
                                    {dr.mixing_direction.split(".").map(instr =>{
                                        let textSplits = instr.trim().replace(/[0-9]/g, '')
                                        if (textSplits !== ""){
                                            return (
                                                <li className="instructions">{textSplits}.</li>
                                            )
                                        }
                                    })}

                                </ol>
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
