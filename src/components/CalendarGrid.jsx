import { useState } from "react";
import Calendar from "../pages/Calendar";
import { isDateInRange } from "../utils/heleper";

const alertStyle = {
  padding: "12px 20px",
  backgroundColor: "#fde2e2",
  border: "1px solid #ffa4a4",
  borderRadius: "4px",
  color: "#d32f2f",
  marginBottom: "20px",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "20px",
};

const containerStyle = {
  padding: "20px",
};

export default function CalendarGrid() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [showOverlapAlert, setShowOverlapAlert] = useState(false);

  const ReservedDateRanges = [
    { start: "2024-01-05", end: "2024-01-10" },
    { start: "2024-02-15", end: "2024-05-20" },
  ];

  // Function to check if two date ranges overlap
  const checkDateRangeOverlap = (start1, end1, start2, end2) => {
    return start1 <= end2 && end1 >= start2;
  };

  // Function to check if selected range overlaps with any reserved range
  const checkForOverlap = (startDate, endDate) => {
    if (!startDate || !endDate) return false;

    // Ensure startDate is before endDate
    const [start, end] = [startDate, endDate].sort();

    return ReservedDateRanges.some((range) =>
      checkDateRangeOverlap(
        new Date(start),
        new Date(end),
        new Date(range.start),
        new Date(range.end)
      )
    );
  };

  const handleDateClick = (clickedDate) => {
    if (!selectedStartDate) {
      setSelectedStartDate(clickedDate);
      setShowOverlapAlert(false);
    } else if (!selectedEndDate) {
      // Sort dates to ensure start is before end
      const [start, end] = [selectedStartDate, clickedDate].sort();

      // Check for overlap before setting the end date
      if (checkForOverlap(start, end)) {
        setShowOverlapAlert(true);
        // Optional: reset selection when overlap is detected
        setSelectedStartDate(null);
        setSelectedEndDate(null);
      } else {
        setSelectedEndDate(end);
        setSelectedStartDate(start);
        setShowOverlapAlert(false);
      }
    } else {
      // Reset if both dates are already selected
      setSelectedStartDate(clickedDate);
      setSelectedEndDate(null);
      setShowOverlapAlert(false);
    }
  };

  const isInRange = (date) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    return isDateInRange(date, selectedStartDate, selectedEndDate);
  };

  return (
    <div style={containerStyle}>
      {showOverlapAlert && (
        <div style={alertStyle} role="alert">
          Selected date range overlaps with reserved dates. Please select a
          different range.
        </div>
      )}

      <div style={gridContainerStyle}>
        {[...Array(6)].map((_, index) => {
          const year = 2024;
          const month = index;
          return (
            <Calendar
              key={index}
              year={year}
              month={month}
              dateRanges={ReservedDateRanges}
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
              onDateClick={handleDateClick}
              isInRange={isInRange}
            />
          );
        })}
      </div>
    </div>
  );
}
