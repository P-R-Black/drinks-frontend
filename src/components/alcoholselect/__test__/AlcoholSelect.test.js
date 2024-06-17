import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AlcoholSelect } from '../AlcoholSelect';
import '@testing-library/jest-dom/extend-expect';


// Mock implementation for window.matchMedia
beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    };
});

// Mock data
const mockCocktails = [
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
        "id": 39,
        "drink_name": "Russian Kiss",
        "slug": "russian-kiss",
        "profile": "Sweet",
        "base_alcohol": [
            "Vodka"
        ],
        "ingredient_name": [
            "0.25 oz Club Soda",
            "3.00 - Cocktail Cherries",
            "2.00 oz Grenadine",
            "1.50 oz Vodka"
        ],
        "garnish": [
            "1 Cocktail Cherry"
        ],
        "serving_glass": "Cocktail/Martini",
        "mixing_direction": "1. Muddle cherries.\r\n2. Add ice, muddled cherries, grenadine, and vodka to shaker.\r\n3. Shake until chilled.\r\n4. Strain ingredients into cocktail glass.\r\n5. Top off with club soda.\r\n6. Garnish with cocktail cherry.",
        "drink_type": "cocktail",
        "must_know_drink": false
    },
];

describe('AlcoholSelect Component', () => {
    const displayName = ['Vodka'];
    const alcohol = 'vodka';

    test('renders correctly with given props', () => {
        render(
            <MemoryRouter>
                <AlcoholSelect cocktails={mockCocktails} alcohol={alcohol} displayName={displayName} />
            </MemoryRouter>
        );

        expect(screen.getByText('Vodka')).toBeInTheDocument();
        expect(screen.getByText('Drinks & Cocktails')).toBeInTheDocument();
    });

    test('filters and displays the correct drinks', async () => {
        render(
            <MemoryRouter>
                <AlcoholSelect cocktails={mockCocktails} alcohol={alcohol} displayName={displayName} />
            </MemoryRouter>
        );
        // const { getByText } = within(screen.getByTestId('buttonTest'))

        // expect(getByText('some text')).toBeInTheDocument()

        // screen.debug(mockCocktails)

        await waitFor(() => {
            const { getByText } = within(screen.getByTestId('buttonTest'))
            // const drinkItems = screen.getAllByRole('listitem');
            // expect(drinkItems.length).toBe(1)
            // const daiquiriElement = screen.getByText('Daiquiri');
            // const martiniElement = screen.queryByText('Martini');

            // expect(mojitoElement).toBeInTheDocument();
            // expect(daiquiriElement).toBeInTheDocument();
            // expect(martiniElement).not.toBeInTheDocument();
        });
        // screen.debug(mockCocktails)
    });

    // test('renders navigation links correctly', async () => {
    //     render(
    //         <MemoryRouter>
    //             <AlcoholSelect cocktails={mockCocktails} alcohol={alcohol} displayName={displayName} />
    //         </MemoryRouter>
    //     );

    //     await waitFor(() => {
    //         const links = screen.getAllByText('Recipe');
    //         expect(links.length).toBe(2);
    //         // expect(links[0].closest('a')).toHaveAttribute('href', '/vodka/redbull-and-vodka');
    //         // expect(links[1].closest('a')).toHaveAttribute('href', '/rum/daiquiri');
    //     });
    // });

    // test('renders the "All Drinks" link correctly', () => {
    //   render(
    //     <MemoryRouter>
    //       <AlcoholSelect cocktails={mockCocktails} alcohol={alcohol} displayName={displayName} />
    //     </MemoryRouter>
    //   );

    //   const allDrinksLink = screen.getByText('All Rum Drinks');
    //   expect(allDrinksLink.closest('a')).toHaveAttribute('href', '/rum/drinks');
    // });

});