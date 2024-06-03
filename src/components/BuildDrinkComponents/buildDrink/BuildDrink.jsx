import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import '../../BuildDrinkComponents/buildDrink/builddrink.css';
import buldDrinkBGPic from '../../../../src/assets/pexels-overhead.jpg'

let picBuldDrinkBGPic = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${buldDrinkBGPic})`;


export const BuildDrink = ({ drinks, showCookieBanner, isCookieSet, cookiesAccept,
    coockiesDeclined }) => {

    console.log('picBuldDrinkBGPic', picBuldDrinkBGPic)
    console.log('buldDrinkBGPic', buldDrinkBGPic)

    const [selectedBaseAlcohols, setSelectedBaseAlcohols] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([])

    const all_ingredient_list = []
    const all_alcohols_list = []

    const [alcoholText, setAlcoholText] = useState('...');
    const [ingredientText, setIngredientText] = useState('...');

    const fishYatesShuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }

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
        }, 15000)
        return () => {
            clearInterval(interval)
        }

    }, [alcoholText])


    const getAllAlcohols = () => {
        let alcohols = drinks.map((dr) => dr.base_alcohol)
        let filteredAlcohol = alcohols.filter((alc) => alc)

        for (let i = 0; i < filteredAlcohol.length; i++) {
            for (let j = 0; j < filteredAlcohol[i].length; j++) {
                if (!all_alcohols_list.includes(filteredAlcohol[i][j].trim()))
                    all_alcohols_list.push(filteredAlcohol[i][j])
            }
        }
    }

    const getAllIngredients = () => {

        let ingredients = drinks.map((dr) => dr.ingredient_name)
        let filteredIngredients = ingredients.filter((ing) => ing)

        for (let i = 0; i < filteredIngredients.length; i++) {
            for (let j = 0; j < filteredIngredients[i].length; j++) {
                if (!all_ingredient_list.includes(filteredIngredients[i][j].trim()))
                    all_ingredient_list.push(filteredIngredients[i][j])
            }
        }
    }

    getAllAlcohols()
    getAllIngredients()

    const extractMainIngredients = (ingredientsList) => {
        return ingredientsList.map(ingredient => {
            // Regular expression to remove the quantity and measurement units
            return ingredient.replace(/^[\d.]+\s*(oz|quarter|quarters|drops|drop|slices|slice|dashes|dash|cups|tbsp|tsp|can|cup|whole|spoon|barspoon|bottle|wedges|wedge|drop|cl|dl|parts|part|quart|pint|gallon|liter|litre|handful|piece|pieces|sprigs|sprig|spritz|stick|sticks|packet|packets|head|heads|slice|slices|pinch|clove|cloves|stalks|stalk|chunk|chunks|bulb|bulbs|drop|drops|splash|splashes|dash|dashes|bunch|bunches|leaf|leaves|segment|segments|ring|rings|cube|cubes|ear|ears|fillet|fillets|piece|pieces|rasher|rashers|sprig|sprigs|strip|strips|spear|spears|bag|bags|bar|bars|block|blocks|drizzle|drizzles|knob|knobs|scoop|scoops|sheet|sheets|slice|slices|tin|tins|tube|tubes|slice|slices|piece|pieces|pinch|pinches|splash|splashes|quarter|quarters|halves|half|-|)\s*/, "").trim();
        });
    };

    const mainIngredients = extractMainIngredients(all_ingredient_list);
    // console.log(mainIngredients.sort())


    const uniqueAlcohols = [...new Set(all_alcohols_list.sort())]
    const uniqueIngredients = [...new Set(mainIngredients.sort())]


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

    const handleCheckboxChange = (bal) => {
        setSelectedBaseAlcohols((prevSelected) => {
            if (prevSelected.includes(bal)) {
                // If already selected, remove it
                return prevSelected.filter((item) => item !== bal);
            } else {
                // If not selected, add it
                return [...prevSelected, bal];
            }
        });
    };

    const handleIngredientboxChange = (bal) => {
        setSelectedIngredients((prevSelected) => {
            if (prevSelected.includes(bal)) {
                // If already selected, remove it
                return prevSelected.filter((item) => item !== bal);
            } else {
                // If not selected, add it
                return [...prevSelected, bal];
            }
        });
    };

    // const selectedBaseAlcohols = ["Gin", "Brandy"];
    // const selectedIngredients = ["Orange Juice", "Blood Orange Juice"];
    console.log('selectedBaseAlcohols', selectedBaseAlcohols, 'selectedIngredients', selectedIngredients)
    const filteredDrinkNames = filterDrinks(drinks, selectedBaseAlcohols, selectedIngredients);
    console.log('filteredDrinkNames', filteredDrinkNames);

    let filteredDrinksList = []
    let findFullRecipe = filteredDrinkNames.forEach((fdn) => {
        for (let d = 0; d < drinks.length; d++) {
            if (fdn === drinks[d].drink_name) {
                filteredDrinksList.push(drinks[d])
            }
        }
    })



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
                                <h3>Alcohol</h3>
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
                                <h3>Ingredients</h3>
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
                            {filteredDrinksList.map((fd) => (
                                <Link
                                    key={fd}
                                    className="drinkNameResults"
                                    to={`/${slugify(fd.base_alcohol)}/${slugify(fd.drink_name)}`}
                                >   {fd.drink_name}
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
