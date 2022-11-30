import React from "react";

import "./FormattedDate.css";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let date = props.date.getDate();

  let months = [
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
  let month = months[props.date.getMonth()];

  return (
    <div className="formattedDate">
      <ul className="fullDate">
        <li className="day">{day}</li>
        <li>
          <span className="date">{date}</span> of{" "}
          <span className="month">{month}</span>
        </li>
        <li>
          <span className="hours">{hours}</span>:
          <span className="minutes">{minutes}</span>
        </li>
      </ul>
    </div>
  );
}
