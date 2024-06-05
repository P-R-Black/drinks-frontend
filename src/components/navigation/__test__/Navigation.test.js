import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from '../Navigation';

import { Logo } from '../../logo/Logo';


// getBy..

// test('renders number of recipes', () => {
//     render(<Navigation />);
//     var bannerElement = screen.getByTestId("button")
//     expect(bannerElement).toBeTruthy()

// })

// getAllBy...
test('does logo render', async () => {
    render(<Navigation title={"Keep's Guide"} />);
    const logoElements = await screen.getAllByRole("Keep's Guide")
    expect(logoElements.length).toBe(2)
})


// findBy
// test('does logo render', async () => {
//     render(<Navigation title={"Keep's Guide"} />);
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
