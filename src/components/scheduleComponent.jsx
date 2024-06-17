import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import styled from "@emotion/styled";
import "react-calendar/dist/Calendar.css";

import dateToString from "@components/dateToString";
import getData from "@components/getData";

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
    height: 48px;
    display: flex;
    text-align: center;
    align-items: center;
    border: 2px solid black;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    margin-bottom: 0;
    background-color: lightblue;

    .react-calendar__navigation__label {
      height: 40px;
      font-size: 16px;
      border: 2px solid black;
      border-radius: 20px;
      font-weight: 700;
      background-color: white;
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
      background-color: white;
      font-size: 18px;
    }
  }

  .react-calendar__viewContainer {
    background-color: white;
    border: 2px solid black;
    border-radius: 0 0 10px 10px;
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

  .mark {
    display: flex;
    justify-content: center;
    align-items: center;

    .dot {
      height: 8px;
      width: 8px;
      background-color: magenta;
      border-radius: 50%;
    }

    .notdot {
      height: 8px;
      width: 8px;
      border-radius: 50%;
    }
  }

  .imp {
    color: blue;
  }
`;

const ScheduleComponent = () => {
  const [isSelectDate, setSelectDate] = useState(new Date());
  const [isSchedule, setSchedule] = useState([]);
  const [isActiveMonth, setActiveMonth] = useState(
    dateToString(new Date()).substr(0, 7)
  );

  useEffect(() => {
    const setStart = async () => {
      const data = await getData("schedule");
      setSchedule(data);
    };
    setStart();
  }, []);

  const getActiveMonth = (activeStartDate) => {
    const newActiveMonth = dateToString(activeStartDate).substr(0, 7);
    setActiveMonth(newActiveMonth);
  };

  return (
    <DivStyle>
      <Calendar
        onChange={setSelectDate}
        value={isSelectDate}
        tileContent={({ date, view }) => {
          if (
            isSchedule.find(
              (item) =>
                dateToString(item.timestamp.toDate()).substr(0, 10) ===
                dateToString(date).substr(0, 10)
            )
          ) {
            return (
              <div className="mark">
                <div className="dot"></div>
              </div>
            );
          } else {
            return (
              <div className="mark">
                <div className="notdot"></div>
              </div>
            );
          }
        }}
        onActiveStartDateChange={({ activeStartDate }) =>
          getActiveMonth(activeStartDate)
        }
      />
      {isSchedule.map((item) => {
        const date = dateToString(item.timestamp.toDate());
        if (date.substr(0, 7) === isActiveMonth) {
          if (date.substr(0, 10) === dateToString(isSelectDate).substr(0, 10)) {
            return (
              <p key={item.id} className="imp">
                {date + " " + item.detail}
              </p>
            );
          } else {
            return <p key={item.id}>{date + " : " + item.detail}</p>;
          }
        } else {
          return null;
        }
      })}
    </DivStyle>
  );
};

export default ScheduleComponent;
