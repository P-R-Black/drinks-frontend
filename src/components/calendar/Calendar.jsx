import React, { useState, useEffect } from 'react'
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import './calendar.css'

export const Calendar = ({date, year, month, drinkOfTheDay}) => {
    const [ calendarDate, setCalendarDate ] = useState(date)
    const [ calendarYear, setCalendarYear ] = useState(year)
    const [ calendarMonth, setCalendarMonth ] = useState(month)
    const [ calendarHTML, setCalendarHTML ] = useState("")

    const [ newMonth, setNewMonth ] = useState()
    const [ calendarCount, setCalendarCount ] = useState(0)

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "Novenber", "December"
    ];

    const displayDate = () => {
        console.log('test')
        // const testClass = document.getElementsByTagName('li')

    }

    const generateCalendar = () => {
        let dayOne = new Date(calendarYear, calendarMonth, 1).getDay();
        let lastDate = new Date(calendarYear, calendarMonth + 1, 0).getDate();
        let dayEnd = new Date(calendarYear, calendarMonth, lastDate).getDay();
        let monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate();

        let previousCalendar = "";
     
        // to add the last date of the previous month
        for(let i = dayOne; i > 0; i--){
            previousCalendar += `<li class="inactive">${monthLastDate - i + 1}</li>`;
        }
        
        // Loop to add the dates of the current month
        for (let i = 1; i <= lastDate; i++){

            // check if the current date is today
            let isToday = i === calendarDate.getDate()
            && calendarMonth === new Date().getMonth()
            && calendarYear === new Date().getFullYear()
            ? "active" : "";
            previousCalendar += `<li class="${isToday}" onClick="{displayDate}">${i}</li>`
        }
        
        // Loop to add the first dates for the next month
        for (let i = dayEnd; i < 6; i++){
            previousCalendar += `<li class="inactive">${i - dayEnd + 1}</li>`
        }

        setCalendarHTML(previousCalendar)
    }
    useEffect(() => {
        generateCalendar()
    }, [calendarYear, calendarMonth])
    


    const adjustMonth = (increment) => {
        let newMonth = calendarMonth + increment
        let newYear = calendarYear

        console.log('newMonth', newMonth)
        if (newMonth < 0){
            newMonth = 11
            newYear--;
            console.log('test')
        } else if (newMonth > 11) {
            newMonth = 0
            newYear++
            console.log('test 2')
        }
        setCalendarYear(newYear)
        setCalendarMonth(newMonth)
        
    }




    
  return (
    <section className="calendarSection">
        <div className="containerCalendar">
            <header className="calendarHeader">
                <p style={{'color':'white'}} className="calendarCurrentDate">{months[calendarMonth]} {calendarYear}</p>
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
                    <li>Thur</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className="calendarDates" id="calendarDates" dangerouslySetInnerHTML={{ __html: calendarHTML }}>
                </ul>
            </div>
        </div>
    </section>
  )
}
