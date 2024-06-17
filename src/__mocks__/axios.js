const mockResponse = {
    data: [Object,
        {
            "id": 5,
            "drink_name": "Redbull and Vodka",
            "slug": "redbull-and-vodka",
            "profile": "Carbonated",
            "base_alcohol": [
                "Vodka"
            ],
            "ingredient_name": [
                "1.00 can Red Bull",
                "2.00 oz Vodka"
            ],
            "garnish": [
                "0 None"
            ],
            "serving_glass": "Collins/Highball",
            "mixing_direction": "1. Add ice to highball glass\r\n2. Add vodka to glass.\r\n3. Fill glass with Red Bull\r\n4. Give light stir.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 16,
            "drink_name": "El Chapo",
            "slug": "el-chapo",
            "profile": "Fruity",
            "base_alcohol": [
                "Gin"
            ],
            "ingredient_name": [
                "1.00 Can Grapefruit Beer",
                "1.50 oz London Dry Gin",
                "1.00 oz Strawberry-Infused Aperol"
            ],
            "garnish": [
                "2 Strawberry Slices"
            ],
            "serving_glass": "Rocks",
            "mixing_direction": "1. Add ice, then gin and strawberry-infused Aperol to rocks glass.\r\n2. Top off with grapefruit beer.\r\n3. Garnish with strawberry slices.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 17,
            "drink_name": "Reggae Rum Punch",
            "slug": "reggae-rum-punch",
            "profile": "Fruity",
            "base_alcohol": [
                "Rum (Light)"
            ],
            "ingredient_name": [
                "0.50 oz Lime Juice",
                "2.00 oz Orange Juice",
                "2.00 oz Pineapple Juice",
                "0.50 oz Strawberry Syrup",
                "2.00 oz White Rum"
            ],
            "garnish": [
                "1 Mint Sprig",
                "1 Pineapple Slice"
            ],
            "serving_glass": "Collins/Highball",
            "mixing_direction": "1. Add ice, lime juice, pineapple juice, orange juice, strawberry syrup and rum to a shaker.\r\n2. Shake ingredients until chilled\r\n3. Add ice to highball glass\r\n4. Strain ingredients of shaker into glass\r\n5. Garnish with mint sprig and pineapple slice\r\nNOTE: Best with Jamaican Overproof White Rum",
            "drink_type": "cocktail",
            "must_know_drink": false
        }, {
            "id": 19,
            "drink_name": "Por Mi Amante",
            "slug": "por-mi-amante",
            "profile": "Fruity",
            "base_alcohol": [
                "Rum"
            ],
            "ingredient_name": [
                "0.75 oz Lemon Juice",
                "1.75 oz Strawberry Infused Rum",
                "0.50 oz Strawberry Syrup",
                "2.00 dashes Tabasco"
            ],
            "garnish": [
                "0 None"
            ],
            "serving_glass": "Cocktail/Martini",
            "mixing_direction": "1. Add ice, strawberry syrup, lime juice, tabasco, and strawberry infused rum to shaker.\r\n2. Shake until chilled.\r\n3. Strain ingredients into a cocktail glass.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 20,
            "drink_name": "Across the Pacific",
            "slug": "across-the-pacific",
            "profile": "Sweet and Sour",
            "base_alcohol": [
                "Rum"
            ],
            "ingredient_name": [
                "1.00 oz Appleton Reserve Rum",
                "0.50 oz Averna Amaro",
                "0.75 oz Lime Juice",
                "1.00 pinch Nutmeg",
                "0.75 oz Orgeat Syrup",
                "0.50 oz Smith & Cross Jamaican Rum"
            ],
            "garnish": [
                "1 Lime Wheel"
            ],
            "serving_glass": "Rocks",
            "mixing_direction": "1. Add all ingredients to a shaker with one ice cube.\r\n2. Shake until ice melts and mixture becomes frothy.\r\n3. Add crushed ice to rocks glass.\r\n4. Strain ingredients from shaker into rocks glass\r\n5. Garnish with a lime wheel and pinch of grated nutmeg",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 23,
            "drink_name": "Rum Rangoon",
            "slug": "rum-rangoon",
            "profile": "N/A",
            "base_alcohol": [
                "Rum (Light)"
            ],
            "ingredient_name": [
                "2.00 oz Aged White Rum",
                "2.00 dashes Aromatic Bitters",
                "0.25 oz Cane Syrup",
                "0.75 oz Lime Juice",
                "1.00 dash Orange Bitters",
                "0.50 oz Orange Liqueur"
            ],
            "garnish": [
                "1 Orange Wedge"
            ],
            "serving_glass": "Cocktail/Martini",
            "mixing_direction": "1. Add ice to cocktail glass and set aside.\r\n2. Add ice, orange liqueur, lime juice, cane syrup, Angostura bitters, orange bitters, and rum into shaker.\r\n3. Shake until chilled.\r\n4. Discard ice from cocktail glass.\r\n5. Strain ingredients from shaker into chilled cocktail glass.\r\n6. Garnish with orange wedge.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 18,
            "drink_name": "Kingston Negroni",
            "slug": "kingston-negroni",
            "profile": "Complex",
            "base_alcohol": [
                "Rum (Dark)"
            ],
            "ingredient_name": [
                "1.00 oz Campari",
                "1.00 oz Dark Rum",
                "1.00 oz Sweet Vermouth"
            ],
            "garnish": [
                "1 Orange Peel"
            ],
            "serving_glass": "Rocks",
            "mixing_direction": "1. Add ice, Campari, sweet vermouth, and dark rum to a mixing glass.\r\n2. Stir ingredients until chilled.\r\n3. Add 1 large cube of ice to rocks glass.\r\n4. Strain ingredients from mixing glass into rocks glass.\r\n5. Garnish with orange peel.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 24,
            "drink_name": "One Last Midnight",
            "slug": "one-last-midnight",
            "profile": "Complex",
            "base_alcohol": [
                "Rum"
            ],
            "ingredient_name": [
                "2.00 oz Aged White Rum",
                "1.00 pinch Coffee-Infused Salt",
                "1.00 spritz Islay Scotch",
                "0.50 oz Punt e Mes Vermouth",
                "0.50 oz Sweet Vermouth"
            ],
            "garnish": [
                "0 None"
            ],
            "serving_glass": "Rocks",
            "mixing_direction": "1. Add small amount of scotch to rocks glass, and swirl around until the inside of the glass is coated with scotch.\r\n2. Add 1 large ice cube, rum, Punt e Mes vermouth, sweet vermouth, and coffee infused salt to glass.\r\n3. Stir gently until ingredients are combined.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 25,
            "drink_name": "Punt e Mes Manhattan",
            "slug": "punt-e-mes-manhattan",
            "profile": "N/A",
            "base_alcohol": [
                "Whiskey"
            ],
            "ingredient_name": [
                "3.00 drops Aromatic Bitters",
                "1.00 oz Bourbon Whisky",
                "1.00 oz Punt e Mes Vermouth"
            ],
            "garnish": [
                "1 Maraschino Cherry"
            ],
            "serving_glass": "Cocktail/Martini",
            "mixing_direction": "1. Add ice to cocktail glass and set aside.\r\n2. Add Punt e Mes vermouth, Bourbon Whisky, bitters and ice to mixing glass.\r\n3. Stir ingredients until chilled.\r\n4. Discard ice from cocktail glass.\r\n5. Strain mixing glass into cocktail glass.\r\n6. Garnish with maraschino cherry.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 15,
            "drink_name": "Dirty Martini (Vodka)",
            "slug": "dirty-martini-vodka",
            "profile": "Slightly Savory",
            "base_alcohol": [
                "Vodka"
            ],
            "ingredient_name": [
                "0.50 oz Dry Vermouth",
                "0.50 oz Olive Brine",
                "2.50 oz Vodka"
            ],
            "garnish": [
                "4 Olives"
            ],
            "serving_glass": "Cocktail/Martini",
            "mixing_direction": "1. Add ice, olive brine, vermouth, and vodka to shaker.\r\n2. Shake ingredients well until chilled.\r\n3. Using a fine mesh strainer, double strain ingredients from shaker to cocktail glass.\r\n4. Garnish with toothpick of olives.",
            "drink_type": "cocktail",
            "must_know_drink": true
        },
        {
            "id": 12,
            "drink_name": "Gimlet (Modern)",
            "slug": "gimlet-modern",
            "profile": "Sweet and Sour",
            "base_alcohol": [
                "Gin"
            ],
            "ingredient_name": [
                "1.00 oz Lime Juice",
                "2.00 oz London Dry Gin",
                "0.75 oz Simple Syrup"
            ],
            "garnish": [
                "0 None"
            ],
            "serving_glass": "Coupe",
            "mixing_direction": "1. Add ice, lime juice, simple syrup, and gin to shaker.\r\n2. Shake ingredients until chilled.\r\n3. Strain ingredients into coupe glass.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },
        {
            "id": 26,
            "drink_name": "Milano-Torino",
            "slug": "milano-torino",
            "profile": "N/A",
            "base_alcohol": [
                "Vermouth"
            ],
            "ingredient_name": [
                "1.50 oz Campari",
                "1.50 oz Punt e Mes Vermouth"
            ],
            "garnish": [
                "1 Orange Peel"
            ],
            "serving_glass": "Rocks",
            "mixing_direction": "1. Add ice to rocks glass.\r\n2. Add Punt e Mes vermouth and Campari to glass.\r\n3. Stir gently until ingredients are combined.\r\n4. Garnish with orange peel.",
            "drink_type": "cocktail",
            "must_know_drink": false
        }, {
            "id": 54,
            "drink_name": "Manhattan Bianco",
            "slug": "manhattan-bianco",
            "profile": "N/A",
            "base_alcohol": [
                "Bourbon"
            ],
            "ingredient_name": [
                "1.50 oz Blanc Vermouth",
                "1.50 oz Bourbon"
            ],
            "garnish": [
                "1 Lemon Peel"
            ],
            "serving_glass": "Cocktail/Martini",
            "mixing_direction": "1. Add ice, bourbon, and blanc vermouth to mixing glass.\r\n2. Stir until ingredients are combined.\r\n3. Strain mixing glass into cocktail glass.\r\n4. Twist lemon peel over drink and garnish with lemon peel.",
            "drink_type": "cocktail",
            "must_know_drink": false
        }, {
            "id": 56,
            "drink_name": "Orchard Keeper",
            "slug": "orchard-keeper",
            "profile": "Slightly Sweet",
            "base_alcohol": [
                "Brandy"
            ],
            "ingredient_name": [
                "2.00 oz Apple Brandy",
                "0.75 oz Blanc Vermouth",
                "0.50 oz Honey Syrup"
            ],
            "garnish": [
                "0 None"
            ],
            "serving_glass": "Cocktail/Martini",
            "mixing_direction": "1. Chill cocktail glass (add ice to cocktail glass and set aside).\r\n2. Add ice, honey syrup, blanc vermouth, and apple brandy to mixing glass.\r\n3. Stir ingredients until chilled.\r\n4. Discard ice from cocktail glass.\r\n5. Strain mixing glass into cocktail glass.",
            "drink_type": "cocktail",
            "must_know_drink": false
        }, {
            "id": 58,
            "drink_name": "Straw Dog",
            "slug": "straw-dog",
            "profile": "Slightly Sweet",
            "base_alcohol": [
                "Scotch"
            ],
            "ingredient_name": [
                "1.00 oz Blanc Vermouth",
                "1.00 dash Grapefruit Bitters",
                "0.75 oz Lemon Juice",
                "1.50 oz Scotch",
                "0.50 oz Simple Syrup",
                "1.00 whole Strawberry"
            ],
            "garnish": [
                "1 Strawberry"
            ],
            "serving_glass": "Cocktail/Martini",
            "mixing_direction": "1. Add ice to a cocktail glass and set aside.\r\n2. Muddle strawberry in shaker.\r\n3. Add ice, lemon juice, simple syrup, grapefruit bitters, blanc vermouth, and scotch to shaker.\r\n4. Shake well until chilled.\r\n5. Discard ice from cocktail glass.\r\n6. Double strain shaker through fine mesh into chilled cocktail glass.\r\n7. Garnish with fresh strawberry.",
            "drink_type": "cocktail",
            "must_know_drink": false
        },

    ]
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}

// for some test involving mocks to pass, 'resetMocks' in Node Module/react-scrips/scrips/utils/createJestConfig...
// has to be set to false. (https://youtu.be/TBZy-Rc-xX0?si=1SpoFxkWXnD4PvJ1  @9:30)