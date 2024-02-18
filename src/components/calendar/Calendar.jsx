import React from 'react'
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import './calendar.css'

export const Calendar = ({date, year, month}) => {
    const day = document.querySelector('.calendarDates');
    const currentDate = document.querySelector('.calendarCurrentDate');
    const prevNextIcons = document.querySelectorAll('.calendarNavigation');


    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "Novenber", "December"
    ];

    const generateCalendar = () => {

        let dayOne = new Date(year, month, 1).getDay();
        let lastDay = new Date(year, month + 1, 0).getDate();
        let dayEnd = new Date(year, month, lastDay).getDay();
        let monthLastDate = new Date(year, month, 0).getDate();
        let previousCalendar = "";

        for(let i = dayOne; i > 0; i--){
            previousCalendar += `<li className="inactive">${monthLastDate - i + 1}</li>`
        }

        for (let i = 1; i <= lastDay; i++){
            // check if current day is today
            let isToday = i === date.getDate() 
            && month === new Date().getMonth() 
            && year === new Date().getFullYear() 
            ? "active"
            :"";

            previousCalendar += `<li className=${isToday}>${i}</li>`

        }

        for (let i = dayEnd; i < 6; i++){
            previousCalendar += `<li className="inactive">${i - dayEnd + 1}</li>`
        }
        
        currentDate.innerText = `${months[month]} ${year}`;       
        day.innerHTML = previousCalendar
    }
    generateCalendar()

    const scrollMonthForward = () => {
        const nextIcon = document.querySelector('#calendarNext')
        month = nextIcon === 'calendarNext' ? month - 1 : month + 1;
        if (month < 0 || month > 11){
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date()
        }
        generateCalendar()
    }

    const scrollMonthBackward = () => {
        const prevIcon = document.querySelector('#calendarPrevious')
        month = prevIcon === 'calendarPrevious' ? month + 1 : month - 1;        
        if (month < 0 || month > 11){
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date()
        }
        generateCalendar()

    }

    
  return (
    <section className="calendarSection">
        <div className="containerCalendar">
            <header className="calendarHeader">
                <p className="calendarCurrentDate"></p>
                <div style={{'color':'white'}} className="calendarNavigation">
                    <span id="calendarPrevious" onClick={scrollMonthBackward}><MdNavigateBefore /></span>
                    <span id="calendarNext" onClick={scrollMonthForward}><MdNavigateNext /></span>
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
                <ul className="calendarDates" id="calendarDates">

                </ul>
            </div>
        </div>
    </section>
  )
}
