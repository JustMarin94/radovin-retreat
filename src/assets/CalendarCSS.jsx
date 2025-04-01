import styled, { css } from "styled-components"; // Import css helper

export const CalendarContainer = styled.div`
  width: 420px;
  margin: 40px auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #4a90e2;
  padding: 10px;
  font-size: 28px;
`;

export const MonthYear = styled.div`
  font-weight: bold;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: white;
  color: #333;
`;

export const Day = styled.div`
  /* Same styles as before */

  /* Use the $ prefix for transient props */
  ${(props) =>
    props.$isInRange &&
    css`
      background-color: #e0f7fa; /* Light cyan/blue for selection range */
      color: #006064;
    `}

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: #007bff;
      color: white;
      border-radius: 50%;
      font-weight: bold;
      border: 1px solid #0056b3;
    `}

  ${(props) =>
    props.$isBooked &&
    css`
      background-color: #eeeeee;
      color: #bdbdbd;
      text-decoration: line-through;
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
      ${props.$isSelected &&
      css`
        background-color: #eeeeee;
        color: #bdbdbd;
        border-radius: 0;
        border: 1px solid transparent;
        font-weight: normal;
      `}
      ${props.$isInRange &&
      css`
        background-color: #eeeeee;
        color: #bdbdbd;
      `}
    `}

  ${(props) =>
    props.$isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
      ${!props.$isBooked &&
      css`
        background-color: transparent;
        color: #ccc;
      `}
    `}
  /* Hover effect */
  &:hover {
    ${(props) =>
      !props.$isDisabled &&
      !props.$isBooked &&
      css`
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 50%;
      `}
    ${(props) =>
      (props.$isDisabled || props.$isBooked) &&
      css`
        background-color: ${props.$isBooked ? "#eeeeee" : "transparent"};
        border: 1px solid transparent;
        border-radius: 0;
      `}
  }
`;

export const Weekday = styled(Day)`
  font-weight: bold;
  background-color: white;
  color: #6c757d; // Slightly muted color for weekdays
  cursor: default;
  pointer-events: none;
  opacity: 1;
  &:hover {
    background-color: white; // No hover effect for weekdays
    border: 1px solid transparent;
    border-radius: 0;
  }
`;
