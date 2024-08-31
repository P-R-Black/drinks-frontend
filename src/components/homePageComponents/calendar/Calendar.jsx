import React, { useState, useEffect, useCallback } from 'react'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import debounce from 'lodash/debounce';
import './calendar.css'

export const Calendar = ({ date, year, month, handleDateClick, currentDrink, pastDrinksOfTheDay }) => {
    const [calendarYear, setCalendarYear] = useState(year);
    const [calendarMonth, setCalendarMonth] = useState(month);
    const [calendarData, setCalendarData] = useState([]);



    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const generateCalendar = () => {
        const dayOne = new Date(calendarYear, calendarMonth, 1).getDay();
        const lastDate = new Date(calendarYear, calendarMonth + 1, 0).getDate();
        const dayEnd = new Date(calendarYear, calendarMonth, lastDate).getDay();
        const monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate();

        let dates = [];

        const drinkDates = pastDrinksOfTheDay.map(drink => drink.theDate.split('T')[0]);

        // Add the last dates of the previous month
        for (let i = dayOne; i > 0; i--) {
            dates.push({ date: monthLastDate - i + 1, inactive: true, type: 'lastMonthDays' });
        }

        // Add the dates of the current month
        for (let i = 1; i <= lastDate; i++) {
            const isToday = i === date.getDate() && calendarMonth === new Date().getMonth() && calendarYear === new Date().getFullYear();
            const currentDate = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            let hasDrink;
            if (drinkDates.includes(currentDate)) {
                hasDrink = true;
            } else {
                hasDrink = false;
            }
            dates.push({ date: i, inactive: false, isToday, hasDrink, type: '' });
        }

        // Add the first dates of the next month
        for (let i = dayEnd; i < 6; i++) {
            dates.push({ date: i - dayEnd + 1, inactive: true, type: 'nextMonthDays' });
        }

        setCalendarData(dates);
    };

    useEffect(() => {
        generateCalendar();
    }, [calendarYear, calendarMonth, date]);


    const adjustMonth = (increment) => {
        let newMonth = calendarMonth + increment;
        let newYear = calendarYear;

        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }
        setCalendarYear(newYear);
        setCalendarMonth(newMonth);
    };

    // const onDateClick = (date) => {
    //     console.log('onDateClick clicked')
    //     handleDateClick(date)
    // }

    const onDateClick = useCallback(debounce((e) => {
        e.preventDefault()
        e.stopPropagation()
        const clickedDate = e.target.getAttribute('data-date');
        if (clickedDate) {
            handleDateClick(clickedDate)
        }
    }, 300), [handleDateClick]);

    // const getClassNames = (day) => {
    //     let classNames = 'calDate ';
    //     if (day.inactive) {
    //         classNames += 'inactive ';
    //     }
    //     if (day.isToday) classNames += 'active ';
    //     classNames += day.type;
    //     return classNames;
    // };

    // e.preventDefault()
    // e.stopPropagation()
    // console.log('this is clicked')
    // const clickedDate = await e.target.getAttribute('data-date');
    // console.log('clickedDate', clickedDate)
    // if (clickedDate) {
    //     handleDateClick(clickedDate);
    // }


    return (
        <section className="calendarSection">
            <div className="containerCalendar">
                <header className="calendarHeader">
                    <p style={{ color: 'white' }} className="calendarCurrentDate">{months[calendarMonth]} {calendarYear}</p>
                    <div className="calendarNavigation">
                        <span id="calendarPrevious" onClick={() => adjustMonth(-1)}><MdNavigateBefore /></span>
                        <span id="calendarNext" onClick={() => adjustMonth(1)}><MdNavigateNext /></span>
                    </div>
                </header>
                <div className="calendarBody">
                    <ul className="calendarWeekdays">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul className="calendarDates" id="calendarDates">
                        {calendarData.map((day, index) => (
                            <li
                                key={index}
                                onClick={onDateClick}
                                className={`${day.inactive ? 'inactive ' : ''}${day.isToday ? 'active ' : ''}${day.hasDrink ? 'has-drink ' : ''} calDate ${day.type}`}
                                data-date={`${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day.date).padStart(2, '0')}`}
                            >
                                {day.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
