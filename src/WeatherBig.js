import React from "react";
import "./WeatherBig.css";

export default function WeatherBig(props) {
  return (
    <div className="weatherBig">
      {" "}
      <h1 className="cityPlace">{props.data.city}</h1>
      <h2>
        <img
          src={props.data.imageUrl}
          className="weather-icon-big"
          alt={props.data.description}
        />
        <span className="temperature-big">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units-big">ºC</span>
      </h2>
      <h3 className="description">{props.data.description}</h3>
    </div>
  );
}
