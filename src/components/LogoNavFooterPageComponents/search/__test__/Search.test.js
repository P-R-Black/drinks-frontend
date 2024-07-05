import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { BrowserRouter } from 'react-router-dom';
import { Search } from '../Search';
import { SearchResults } from '../SearchResults';

const MockSearch = () => {
    return (
        <BrowserRouter>
            <Search drinks={[]} />
        </BrowserRouter>
    )
}

describe("Search Input", () => {
    test('should render input element', async () => {
        render(<MockSearch drinks={[]} />);
        const inputElement = screen.getByPlaceholderText(/Search Drink by Name, Alcohol, or Ingredient/i)
        expect(inputElement).toBeInTheDocument();
    });

    test('should be able to type in input', async () => {
        render(<MockSearch drinks={[]} />);
        const inputElement = screen.getByPlaceholderText(/Search Drink by Name, Alcohol, or Ingredient/i)
        fireEvent.change(inputElement, { target: { value: "vodka" } })
        expect(inputElement.value).toBe("vodka");
    });

    // test('should take to drink recipe on click', async () => {
    //     render(<MockSearch drinks={[]} />);
    //     const inputElement = screen.getByPlaceholderText(/Search Drink by Name, Alcohol, or Ingredient/i)
    //     const linkElement = screen.getByRole("Link", { name: "El Chapo" })
    //     fireEvent.change(inputElement, { target: { value: "gin" } })
    //     fireEvent.click(linkElement)
    //     expect(inputElement.value).toBeInDocument("/gin/el-chapo");
    // });
})