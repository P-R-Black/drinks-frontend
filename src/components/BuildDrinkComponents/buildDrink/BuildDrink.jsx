import React, { useState, useEffect } from 'react'
import { ToolTipTwo } from '../../tooltip/ToolTip';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import '../../BuildDrinkComponents/buildDrink/builddrink.css';
import buldDrinkBGPic from '../../../../src/assets/pexels-overhead.jpg'

let picBuldDrinkBGPic = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${buldDrinkBGPic})`;


export const BuildDrink = ({ drinks, showCookieBanner, isCookieSet, cookiesAccept,
    coockiesDeclined }) => {

    const [selectedBaseAlcohols, setSelectedBaseAlcohols] = useState([""]);
    const [selectedIngredients, setSelectedIngredients] = useState([""])
    const [alcoholText, setAlcoholText] = useState('Rum');
    const [ingredientText, setIngredientText] = useState('Cranberry Juice');

    const all_ingredient_list = []
    const all_alcohols_list = []



    const fishYatesShuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }

    // randomly selects a base_alcohol and ingredient from API to populate h2
    const findRandom = async (alcNames, ingredNames) => {
        if (alcNames.length === 0) return null;
        if (ingredNames.length === 0) return null;
        const shuffleAlcdNames = fishYatesShuffle([...alcNames]);
        const shuffleIngNames = fishYatesShuffle([...ingredNames])
        setAlcoholText(shuffleAlcdNames[0])
        setIngredientText(shuffleIngNames[0])
    }

    useEffect(() => {
        let interval = setInterval(() => {
            findRandom(all_alcohols_list, extractMainIngredients(all_ingredient_list))
        }, 5000)
        return () => {
            clearInterval(interval)
        }

    }, [alcoholText, all_ingredient_list, all_alcohols_list])


    // Goes through drinks API and gets a list of all base_alcohol names
    const getAllAlcohols = () => {
        let alcohols = drinks.map((dr) => dr.base_alcohol)
        let filteredAlcohol = alcohols.filter((alc) => alc)

        for (let i = 0; i < filteredAlcohol.length; i++) {
            for (let j = 0; j < filteredAlcohol[i].length; j++) {
                if (!all_alcohols_list.includes(filteredAlcohol[i][j].trim()))
                    all_alcohols_list.push(filteredAlcohol[i][j])
            }
        }
    };

    // Goes through drinks API and gets a list of all ingredients listed
    const getAllIngredients = () => {
        let ingredients = drinks.map((dr) => dr.ingredient_name)
        let filteredIngredients = ingredients.filter((ing) => ing)

        for (let i = 0; i < filteredIngredients.length; i++) {
            for (let j = 0; j < filteredIngredients[i].length; j++) {
                if (!all_ingredient_list.includes(filteredIngredients[i][j].trim()))
                    all_ingredient_list.push(filteredIngredients[i][j])
            }
        }
    };

    getAllAlcohols()
    getAllIngredients()

    // clean ingredient names: turns "2.00 oz Orange Juice" to "Orange Juice"
    const extractMainIngredients = (ingredientsList) => {
        return ingredientsList.map(ingredient => {
            // Regular expression to remove the quantity and measurement units
            return ingredient.replace(/^[\d.]+\s*(oz|quarters|quarter|drops|drop|slices|slice|dashes|dash|cups|cup|tbsp|tsp|can|Can|fresh|whole|spoon|barspoon|bottle|wedges|wedge|cl|dl|parts|part|quart|pint|gallon|liter|litre|handful|piece|pieces|sprigs|sprig|spritz|stick|sticks|packet|packets|head|heads|clove|cloves|stalks|stalk|chunk|chunks|bulb|bulbs|splash|splashes|dash|dashes|bunch|bunches|leaf|leaves|segments|segment|rings|ring|cubes|cube|ear|ears|fillet|fillets|rasher|rashers|sprig|sprigs|strip|strips|spear|spears|bag|bags|bar|bars|block|blocks|drizzle|drizzles|knob|knobs|scoop|scoops|sheets|sheet|tins|tin|tubes|tube|pinches|pinch|splashes|splash|halves|half|-|)\s*/, "").trim();
        });
    };

    const mainIngredients = extractMainIngredients(all_ingredient_list);

    // sorts all the base_alcohols pulled from api "drinks"
    const uniqueAlcohols = [...new Set(all_alcohols_list.sort())]

    // gets rid of any duplicates and sorts all the ingredient names pulled from api "drinks"
    const uniqueIngredients = [...new Set(mainIngredients.sort())]


    // Filter's Drinks based on Alcohol and Ingredients Selected
    const filterDrinks = (drinks, selectedBaseAlcohols, selectedIngredients) => {
        return drinks.filter(drink => {
            // Check if any of the selected base alcohols are in the drink's base alcohol list
            const hasSelectedBaseAlcohol = selectedBaseAlcohols.some(base => drink.base_alcohol.includes(base));

            // Check if any of the selected ingredients are in the drink's ingredient list
            const hasSelectedIngredient = selectedIngredients.some(ingredient =>
                drink.ingredient_name.some(drinkIngredient => drinkIngredient.toLowerCase().includes(ingredient.toLowerCase()))
            );

            // Return true if the drink has both a selected base alcohol and a selected ingredient

            return hasSelectedBaseAlcohol && hasSelectedIngredient;


        }).map(drink => drink.drink_name);
    };

    // Gets Alcohol Selected and adds to list
    const handleCheckboxChange = (bal) => {
        setSelectedBaseAlcohols((prevSelected) => {
            const updatedSelection = prevSelected.filter((item) => item !== "");
            if (updatedSelection.includes(bal)) {
                // If already selected, remove it
                const newSelection = updatedSelection.filter((item) => item !== bal);
                return newSelection.length === 0 ? [""] : newSelection;
            } else {
                // If not selected, add it
                return [...updatedSelection, bal];
            }
        });
    };


    // Gets Ingredients Selected and adds to list
    const handleIngredientboxChange = (bal) => {
        setSelectedIngredients((prevSelected) => {
            const updatedSelection = prevSelected.filter((item) => item !== "");
            if (updatedSelection.includes(bal)) {
                // If already selected, remove it
                const newSelection = updatedSelection.filter((item) => item !== bal);
                return newSelection.length === 0 ? [""] : newSelection;
            } else {
                // If not selected, add it
                return [...updatedSelection, bal];
            }
        });
    };


    // calls filterDrinks function
    const filteredDrinkNames = filterDrinks(drinks, selectedBaseAlcohols, selectedIngredients);

    // adds drink names based on alcohol and ingredients selected. If "gin" and "orange juice" selected
    // this list "filteredDrinksList" should return all drinks that contain "gin" and "orange juice"
    let filteredDrinksList = []
    filteredDrinkNames.forEach((fdn) => {
        for (let d = 0; d < drinks.length; d++) {
            if (fdn === drinks[d].drink_name) {
                filteredDrinksList.push(drinks[d])
            }
        }
    });



    return (
        <section className="buildDrinkSection" id="buildDrinkSection" style={{ backgroundImage: picBuldDrinkBGPic }}>
            <div className="container">
                <div className="buildADrinkTitle">
                    <h1>Build A Drink</h1>
                    <h2>What Can You Make With
                        <div className="innerMovingText">
                            <span className="innerMovingAlcText">{alcoholText} </span>
                            &amp;
                            <span className="innerMovingIngText"> {ingredientText}</span>
                        </div>
                    </h2>
                </div>
                <div id="allContainer">
                    <div className="selectionContainer">
                        <div className="alcSelectionContainer">
                            <div className="chooseAlcTitle">
                                <h3>Select an Alcohol</h3>
                            </div>
                            <div className="alcSelection">
                                {uniqueAlcohols.map((bal, balIdx) => (
                                    <label htmlFor={bal} key={balIdx}>
                                        <input
                                            className="checkBoxField"
                                            type="checkbox"
                                            id={bal}
                                            onChange={() => handleCheckboxChange(bal)} />
                                        {bal}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="ingSelectionContainer">
                            <div className="chooseIngTitle">
                                <h3>Select an Ingredient</h3>
                            </div>
                            <div className="alcSelection">
                                {uniqueIngredients.map((bal, idx) => (
                                    <label htmlFor={bal} key={idx}>
                                        <input
                                            className="checkBoxField"
                                            type="checkbox"
                                            id={bal}
                                            onChange={() => handleIngredientboxChange(bal)} />
                                        {bal}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="resultsContainer">
                        <div className="resultsTitle">
                            <h3>Results</h3>
                        </div>
                        <div className={`${filteredDrinksList.length >= 1 ? "resultSection" : ""}`}>
                            {filteredDrinksList && filteredDrinksList.sort((a, b) => a.drink_name > b.drink_name ? 1 : -1).map((fd) => {
                                return (
                                    <ToolTipTwo key={fd.id} text={fd.ingredient_name.map((min, minIndex) => (
                                        <li key={minIndex}>{min.replace(min.split(" ")[0], "").replace(min.split(" ")[1], "").trim()}</li>
                                    ))}>
                                        <Link
                                            key={fd.id}
                                            className="drinkNameResults"
                                            to={`/${slugify(fd.base_alcohol)}/${slugify(fd.drink_name)}`}
                                        >   {fd.drink_name}
                                        </Link>
                                    </ToolTipTwo>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
