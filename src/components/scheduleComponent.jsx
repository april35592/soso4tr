import { useState } from "react";
import Calendar from "react-calendar";
import styled from "@emotion/styled";
import "react-calendar/dist/Calendar.css";

import dateToString from "@components/dateToString";

const DivStyle = styled.div`
  width: 100%;
  .react-calendar {
    width: 100%;
    background: none;
    border: none;
    margin-bottom: 12px;
  }

  .react-calendar__navigation {
    width: 100%;
    height: 44px;
    display: flex;
    text-align: center;
    align-items: center;
    margin-bottom: 4px;

    .react-calendar__navigation__label {
      height: 40px;
      font-size: 16px;
      border: 2px solid black;
      border-radius: 20px;
      font-weight: 700;
      background-color: #fff;
      margin: 2px;
    }

    .react-calendar__navigation__arrow {
      width: 40px;
      min-width: 40px;
      height: 40px;
      margin: 2px;
      padding: 1px 3px;
      border-radius: 20px;
      border: 2px solid black;
      background-color: #fff;
      font-size: 18px;
    }
  }

  .react-calendar__viewContainer {
    background-color: #fff;
    border: 2px solid black;
    border-radius: 10px;
    margin: 2px;
    padding: 2px;

    .react-calendar__tile {
      border-radius: 10px;
    }

    .react-calendar__tile--now {
      background: none;
      box-sizing: border-box;
      border: 2px solid magenta;
    }

    .react-calendar__tile--active {
      background-color: blue;
    }

    .react-calendar__month-view__days__day--weekend {
      color: magenta;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: lightgrey;
    }
  }

  .react-calendar__tile--now {
    background: none;
    border: 2px solid magenta;
    border-radius: 10px;
  }
`;

const ScheduleComponent = () => {
  const [isSelectDate, setSelectDate] = useState(new Date());

  return (
    <DivStyle>
      <Calendar onChange={setSelectDate} value={isSelectDate} />
      {dateToString(isSelectDate)}
    </DivStyle>
  );
};

export default ScheduleComponent;
