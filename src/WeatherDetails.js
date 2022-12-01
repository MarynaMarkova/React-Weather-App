import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <ul className="weatherDetails">
      <li>
        Feels like:{" "}
        <span className="feels">{Math.round(props.data.feels)}</span>ºC
      </li>
      <li>
        Humidity: <span className="humidity">{props.data.humidity}</span>%
      </li>
      <li>
        Wind: <span className="wind">{Math.round(props.data.wind)}</span> km/h
      </li>
    </ul>
  );
}
