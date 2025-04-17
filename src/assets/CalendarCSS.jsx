import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 400px; /* Maximum width for desktop */
  margin: 10px auto; /* Center horizontally with smaller vertical margin */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 90%; /* Use 90% of screen width on mobile */
    margin: 10px auto; /* Ensure centering */
    padding: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #4a90e2;
  padding: 10px;
  font-size: 24px; /* Slightly smaller for better fit */
`;

export const MonthYear = styled.div`
  font-weight: bold;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: white;
  color: #333;
  gap: 4px;
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  border-radius: 50%;
  line-height: 1;
  padding: 2px;

  @media (max-width: 600px) {
    font-size: 12px;
  }

  ${(props) =>
    props.$isInRange &&
    css`
      background-color: rgb(198, 237, 242);
      color: #006064;
    `}

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: rgb(87, 156, 230);
      color: white;
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

  &:hover {
    ${(props) =>
      !props.$isDisabled &&
      !props.$isBooked &&
      css`
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
      `}
    ${(props) =>
      (props.$isDisabled || props.$isBooked) &&
      css`
        background-color: ${props.$isBooked ? "#eeeeee" : "transparent"};
        border: 1px solid transparent;
      `}
  }
`;

export const Weekday = styled(Day)`
  font-weight: bold;
  background-color: white;
  color: #6c757d;
  cursor: default;
  pointer-events: none;
  opacity: 1;
  &:hover {
    background-color: white;
    border: 1px solid transparent;
  }
`;
