const mockResponse = {
    data: [Object,
        {
            id: 5,
            drink_name: 'Redbull and Vodka',
            slug: 'redbull-and-vodka',
            base_alcohol: ['Vodka'],
            drink_type: 'cocktail',
            garnish: ['0 None'],
            ingredient_name: ["1.00 can Red Bull", "2.00 oz Vodka"],
            mixing_direction: "1. Add ice to highball glass\r\n2. Add vodka to glass.\r\n3. Fill glass with Red Bull\r\n4. Give light stir.",
            must_know_drink: false,
            profile: 'Carbonated',
            serving_glass: 'Collins/Highball',


        }]
}
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}

// for some test involving mocks to pass, 'resetMocks' in Node Module/react-scrips/scrips/utils/createJestConfig...
// has to be set to false. (https://youtu.be/TBZy-Rc-xX0?si=1SpoFxkWXnD4PvJ1  @9:30)