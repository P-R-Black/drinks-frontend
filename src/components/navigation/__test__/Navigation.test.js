import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '../Navigation';

import { Logo } from '../../logo/Logo';

// This test works for logo
const MockTodoFooter = () => {
    return (
        <BrowserRouter>
            <Logo />
        </BrowserRouter>
    )
}

test('renders logo', () => {
    render(<MockTodoFooter />);
    var logoElement = screen.getByText(/Keep's Guide/i)
    expect(logoElement).toBeTruthy();

})

// const BannerCount = () => {
//     return (
//         <BrowserRouter>
//             <Navigation numofRecipes={"Nearly 770 recipes, with more added daily"} />
//         </BrowserRouter>
//     )
// }

// test('banner count', () => {
//     render(<BannerCount />);
//     var logoElement = screen.queryByText("Nearly 770 recipes, with more added daily")
//     expect(logoElement).toBeInDocument();

// })




// getBy..

// test('renders number of recipes', () => {
//     render(<MockTodoFooter />);
//     var bannerElement = screen.getByText(/Keep's Guide/i)
//     expect(bannerElement).toBeTruthy()

// })

// getAllBy...
// test('does logo render', () => {
//     render(<Logo />);
//     const logoName = screen.getByTestId("/Keep's Guide/i")
//     console.log('logoName', logoName)
//     expect(logoName).toBeInTheDocument()
// })


// findBy
// test('does logo render', async () => {
//     render(<Logo />);
//     const logoElement = await screen.findByText(/Keep's Guide/i)
//     expect(logoElement).toBeInTheDocument()
// })

// QueryBy
// test('does logo render', async () => {
//     render(<Navigation title={"Keep's Guide"} />);
//     const logoElement = await screen.queryByText(/Keep's Guide/i)
//     expect(logoElement).not.toBeInTheDocument()
// })




// working test from quiz app
// test("buttons render", () => {
//     render(<AnswerBoxes answers={['test1', 'test2', 'test3', 'test4']} />);
//     var button = screen.getAllByTestId("buttonTest")
//     expect(button).toBeTruthy()
// }) 
// <button data-testid="buttonTest" id="btn" key={idx}></button>



// screen methods
// getByText -> to get element that has text in () screen.getByText(/lear react/i)
// explect(linkElement)

// .toContaininHTML('p') || .toContaininHTML('h3') <- assertion to verify valid p tag || assertion to very valid h3 tag 
// toHaveTextContent("Keep's Guide")
// screen.getPlaceholderText(/placeholder/) || screen.getPlaceholderText("Search Drink by Name, Alcohol, or Ingredient")
// .toHaveClass <- check class

// if testing an asynchronous function component by testId, use findByTestId, not getByTestId. 
// getByTestId doesnt work with async and await

// HOOKS in testing:
// beforeEach(() => { console.log("run before each test")}) | beforeEach will run before each test
// beforeAll(() => {console.log("runs once before all test")}) | beforeAll will run once before all test
// afterEach(() => {console.log("runs after each test")})  | afterEach will run after each test
// afterAll(() => {console.log("runs once after all test")}) | afterAll will run once after all test