import React from "react";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  isDateInRange,
  formatDate, // Keep your original formatDate
} from "../utils/heleper"; // Adjust path if necessary
// Keep your formatDate import from formating if it's different
// import { formatDate } from "../utils/formating";
import {
  CalendarContainer,
  Header,
  MonthYear,
  DaysGrid,
  Day,
  // Dot, // We might not need the separate dot if we use background color for booked dates
  Weekday,
} from "../assets/CalendarCSS"; // Adjust path if necessary

const Calendar = ({
  onDateClick,
  selectedStartDate,
  selectedEndDate,
  isDateBooked, // Function to check if a date is part of an existing booking
  year,
  month,
}) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Placeholders for empty cells before the 1st day
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i); // Actual day numbers
  }

  const handleDateClickInternal = (day) => {
    if (!day) return; // Ignore clicks on empty cells
    const formattedDate = formatDate(year, month, day); // Use your formatting function
    onDateClick(formattedDate);
  };

  // Check if a specific day is part of the currently selected range
  const isSelected = (day) => {
    if (!day || !selectedStartDate) return false;
    const formattedDate = formatDate(year, month, day);
    const startDate = selectedStartDate; // Already formatted
    const endDate = selectedEndDate; // Already formatted

    if (startDate && endDate) {
      // Use the helper function for range check
      // Ensure isDateInRange handles string comparison or converts to Dates
      return isDateInRange(formattedDate, startDate, endDate);
    }
    // Only highlight the single selected start date if no end date is chosen yet
    return formattedDate === startDate;
  };

  // Check if a date is *already booked* (passed from Homepage)
  const checkIsBooked = (day) => {
    if (!day) return false;
    const formattedDate = formatDate(year, month, day);
    // Use the function passed via props, which checks against the fetched bookings
    return isDateBooked(formattedDate);
  };

  return (
    <CalendarContainer>
      <Header>
        <MonthYear>{`${monthNames[month]} ${year}`}</MonthYear>
      </Header>
      <DaysGrid>
        {weekdays.map((weekday) => (
          <Weekday key={weekday}>{weekday}</Weekday>
        ))}
        {days.map((day, index) => {
          const formattedDateStr = day ? formatDate(year, month, day) : null;
          const isWithinSelection = isSelected(day); // Is it part of the user's *current* selection?
          const isBooked = checkIsBooked(day); // Is it part of an *existing* booking?
          const isDisabled = isBooked; // Disable clicks if already booked

          return (
            <Day
              key={index}
              // Use the $ prefix here as well
              $isSelected={
                formattedDateStr === selectedStartDate ||
                formattedDateStr === selectedEndDate
              }
              $isBooked={isBooked}
              $isInRange={isWithinSelection && !isBooked}
              $isDisabled={isDisabled || !day}
              onClick={() => handleDateClickInternal(day)}
            >
              {day}
            </Day>
          );
        })}
      </DaysGrid>
    </CalendarContainer>
  );
};

export default Calendar;
