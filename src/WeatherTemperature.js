import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="weatherTemperature">
      <span className="temperature-big">{Math.round(props.celsius)}</span>
      <span className="units-big">ºC</span>
    </div>
  );
}
