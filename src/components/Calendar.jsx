import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getFirstDayOfMonth = () => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    return date.getDay() === 0 ? 6 : date.getDay() - 1;
  };

  const getDaysInMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  };

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const firstDay = getFirstDayOfMonth();
  const daysInMonth = getDaysInMonth();

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-button" onClick={() => changeMonth(-1)}>‹</button>
        <div className="calendar-month">
          {capitalizeFirstLetter(currentDate.toLocaleString('ru', { month: 'long' }))} {currentDate.getFullYear()}
        </div>
        <button className="calendar-button" onClick={() => changeMonth(1)}>›</button>
      </div>
      <div className="calendar-weekdays">
        {weekdays.map((day) => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
      </div>
      <div className="calendar-days">
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={index} className="calendar-empty-cell"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

          return (
            <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}>
              <span className="day-content">
                {day.toString().split('').map((digit, i) => (
                  <span key={i} className={`digit ${digit === "1" ? "one" : ""}`}>{digit}</span>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
