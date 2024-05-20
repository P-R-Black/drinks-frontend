import React, { useState, useEffect } from 'react'
// import { BiShareAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

import { Share } from '../share/Share';
import './drinkrecipe.css'

import imgRecipeBG from '../../assets/pexels-kelly.jpg';
import slugify from 'react-slugify';



export const DrinkRecipe = ({ drinks, drinkRecipe }) => {

    const [recipe, setRecipe] = useState([])
    const [backgroundRecipePic, setBackgroundRecipePic] = useState()

    const [toMl, setToMl] = useState()
    let [unitCount, setUnitCount] = useState(1)
    let [unitMeasure, setUnitMeasure] = useState("oz")


    let picChoice = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgRecipeBG})`;
    let picByRecipe = [picChoice]



    // function to get drink recipe
    // const getDrinkRecipe = () => {
    //     drinks.map((rec) => {
    //         if (rec.drink_name.toLowerCase() === drinkRecipe || 
    //             rec.drink_name.toLowerCase().replaceAll(" ", "") === drinkRecipe){
    //             setRecipe([rec])
    //         } 
    //     })
    // }

    // removes zero before decimals
    const formatUnits = (unit) => {
        let formattedUnit = unit.split(" ")[0] * unitCount;
        let temp = formattedUnit.toString();
        let limitDecimalPlace = Number(temp).toFixed(2);
        formattedUnit = String(limitDecimalPlace).replace(/^0+/, "").replace(".00", "");
        return formattedUnit;
    }

    // Convert Ingredient Ounces to Milliliters 
    const convertUnitMeasurements = () => {

        let ingredients = recipe.map((ing) => ing['ingredient_name'])
        ingredients.map((ings) => {
            let testing = ings.map((is) => is.split(" "))
            for (let i = 0; i < testing.length; i++) {
                let ingredientUnits = testing[i][0]
                let ingredientMeasurement = testing[i][1]

                if (ingredientMeasurement === "oz") {
                    let newUnit = parseFloat(ingredientUnits) * Math.ceil(29.5735)
                    let newMeasurement = ingredientMeasurement.replace('oz', 'ml')
                    testing[i][0] = newUnit.toString()
                    testing[i][1] = newMeasurement.toString()
                    setToMl(testing)
                }
            }

        })

    };

    // Convert Ingredient Ounces to Milliliters - ChatGPT, doesn't work when chaning to ML
    // const convertUnitMeasurements = () => {
    //     let newIngredients = recipe.map((ing) => {
    //         return ing['ingredient_name'].map((is) => {
    //             let splitIngredient = is.split(" ");
    //             let ingredientUnits = splitIngredient[0];
    //             let ingredientMeasurement = splitIngredient[1];

    //             if (ingredientMeasurement === "oz") {
    //                 let newUnit = parseFloat(ingredientUnits) * Math.ceil(29.5735);
    //                 let newMeasurement = ingredientMeasurement.replace('oz', 'ml');
    //                 return [newUnit.toString(), newMeasurement.toString()];
    //             } else {
    //                 // If no conversion is needed, return the original ingredient
    //                 return splitIngredient;
    //             }
    //         });
    //     });

    //     // After processing all ingredients, set the converted values
    //     setToMl(newIngredients);
    // };

    const splitIngredients = (text) => {
        let newText = text.slice(2).join(" ")
        return newText

    }

    useEffect(() => {
        const getDrinkRecipe = () => {
            drinks.forEach((rec) => {
                if (
                    rec.drink_name.toLowerCase() === drinkRecipe ||
                    slugify(rec.drink_name) === drinkRecipe
                ) {
                    setRecipe([rec]);
                }
            });
        };

        getDrinkRecipe();
    }, [drinks, drinkRecipe, setRecipe]);

    useEffect(() => {
        setBackgroundRecipePic(
            picByRecipe[Math.floor(Math.random() * picByRecipe.length)]
        );
    }, [picByRecipe, setBackgroundRecipePic]);





    return (
        <section className="recipeBackground" style={{ backgroundImage: backgroundRecipePic }}>
            <div className="container">
                {recipe.map((dr) => {
                    return (
                        <div className="recipeContainer" key={dr.id}>
                            <div className="titleAndLikes">
                                <h2 id="recipeTitle" className="recipeTitle">{dr.drink_name}</h2>
                                <div className="likesAndShare" style={{ color: "white" }}>
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

                                    {unitMeasure === "ml" ? (
                                        <>
                                            <ul>
                                                {toMl.map((ml, mlIndex) => (
                                                    <li className="ingredients" key={mlIndex}>
                                                        <span className="ingredientUnit">{formatUnits(ml[0])} </span>
                                                        <span className="ingredientMeasurement">{`${ml[1]} `} </span>
                                                        <span className="ingredentIngredient">
                                                            {splitIngredients(ml)}
                                                        </span>

                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <ul>
                                            {dr.ingredient_name.map((im, imIndex) => {
                                                return (
                                                    <li className="ingredients" key={imIndex}>
                                                        <span className="ingredientUnit">{formatUnits(im)} </span>
                                                        <span className="ingredientMeasurement">{`${im.split(" ")[1]} `}</span>
                                                        <span className="ingredentIngredient">
                                                            {
                                                                im.replace(im.split(" ")[0], "").replace(im.split(" ")[1], "")
                                                                    .trim()}
                                                        </span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}

                                    <div className="measureContainer">
                                        <div className="incrementUnit  unitMeasure">
                                            <div className={`${unitMeasure === "oz" ? "measureButtonContainer oz" : "measureButtonContainer ml"}`}>
                                                <button
                                                    onClick={() => setUnitMeasure("oz")}
                                                    className="ozButton"
                                                    type="submit"

                                                >
                                                    oz
                                                </button>
                                                <button
                                                    onClick={() => { setUnitMeasure("ml"); convertUnitMeasurements() }}
                                                    className="mlButton"
                                                    type="submit">
                                                    ml
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="garnishAndGlassContainer">
                                    <div className="garnishContainer">
                                        <h3 className="garnishTitle">Garnish</h3>
                                        {dr.garnish.map((mg, mgIndex) => {
                                            return (
                                                <h4 key={mgIndex} className="garnish">{mg !== "0 None" ? mg : "None"}</h4>
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
                                                    <AiOutlinePlus />
                                                </button>
                                                <button
                                                    onClick={() => setUnitCount(unitCount > 1 ? unitCount -= 1 : 1)}
                                                    className="minusButton"
                                                    type="submit">
                                                    <AiOutlineMinus />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="recipeInstructionContainer">
                                    <div className="instructionContainer">
                                        <h3 className="instructionTitle">Instructions</h3>
                                        <h4 className="instructions" style={{ color: "white" }}>
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