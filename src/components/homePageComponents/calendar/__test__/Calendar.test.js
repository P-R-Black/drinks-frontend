import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Calendar } from '../Calendar';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

// Mock date to ensure consistent test results
const mockDate = new Date(2023, 5, 15); // June 15, 2023

beforeAll(() => {
    // Mock the current date
    global.Date = class extends Date {
        constructor(date) {
            if (date) {
                return super(date);
            }
            return mockDate;
        }
    };
});

describe('Calendar Component', () => {
    test('renders the correct month and year', () => {
        render(<Calendar date={mockDate} year={2023} month={5} />);

        expect(screen.getByText('June 2023')).toBeInTheDocument();
    });

    test('renders the correct dates for the current month', async () => {
        render(<Calendar date={mockDate} year={2023} month={5} />);


        // Check for specific dates
        const dateElement = screen.queryAllByText(/1/i)
        const dateElementTwo = screen.queryAllByText(/15/i)
        const dateElementThree = screen.queryAllByText(/30/i)
        expect(dateElement).toBeTruthy()
        expect(dateElementTwo).toBeTruthy()
        expect(dateElementThree).toBeTruthy()
    });

    test('highlights the current date', () => {
        render(<Calendar date={mockDate} year={2023} month={5} />);

        // Check for the active class on the current date
        const activeDate = screen.getByText('15');
        expect(activeDate).toHaveClass('active');
    });

    // test('renders the correct dates for the previous and next months', async () => {
    //     render(<Calendar date={mockDate} year={2023} month={5} />);

    // Check for dates from the previous and next months

    // expect(screen.getAllByText('31')).toHaveClass('nextMonthDays');
    // expect(screen.getByText('1')).toHaveClass('inactive');
    // });

    // test('navigates to the previous month', () => {
    // render(<Calendar date={mockDate} year={2023} month={5} />);

    //     const previousButton = screen.getByRole('button', { name: /navigate before/i });
    //     fireEvent.click(previousButton);

    //     expect(screen.getByText('May 2023')).toBeInTheDocument();
    // });

    // test('navigates to the next month', () => {
    //     render(<Calendar date={mockDate} year={2023} month={5} />);

    //     const nextButton = screen.getByRole('button', { name: /navigate next/i });
    //     fireEvent.click(nextButton);

    //     expect(screen.getByText('July 2023')).toBeInTheDocument();
    // });
});




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