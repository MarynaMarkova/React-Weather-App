import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Drohobych",
    feels: 15,
    humidity: 38,
    wind: 7,
    temperature: 18,
    description: "cloudy",
    day: "Monday",
    date: 23,
    month: "November",
    hours: 22,
    minutes: 48,
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };

  return (
    <div className="Weather">
      <div className="row heading">
        <div className="col-3">
          <ul className="details">
            <li>
              Feels like: <span className="feels">{weatherData.feels}</span>ºC
            </li>
            <li>
              Humidity: <span className="humidity">{weatherData.humidity}</span>
              %
            </li>
            <li>
              Wind: <span className="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>

        <div className="col-6">
          <h1 className="cityPlace">{weatherData.city}</h1>
          <h2>
            <img
              src={weatherData.imageUrl}
              className="weather-icon-big"
              alt={weatherData.description}
            />
            <span className="temperature-big">{weatherData.temperature}</span>
            <span className="units-big">ºC</span>
          </h2>
          <h3 className="description">{weatherData.description}</h3>
        </div>

        <div className="col-3">
          <form className="search-forn">
            <div className="mb-3">
              <input
                type="search"
                className="form-control search-block cityInput"
                placeholder="Enter a city"
                autoFocus="on"
              />

              <input type="submit" className="submit" value="Go" />
            </div>
          </form>

          <button type="button" className="btn btn-success currentLocation">
            Current location
          </button>

          <br />

          <ul className="fullDate">
            <li className="day">{weatherData.day}</li>
            <li>
              <span className="date">{weatherData.date}</span> of{" "}
              <span className="month">{weatherData.month}</span>
            </li>
            <li>
              <span className="hours">{weatherData.hours}</span>:
              <span className="minutes">{weatherData.minutes}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="author">
        <a
          href="https://github.com/MarynaMarkova/React-Weather-App"
          className="profileLink"
          target="_blank"
          rel="noreferrer"
          title="Github code"
        >
          Open-source
        </a>
        {" by "}
        <a
          href="https://www.linkedin.com/in/maryna-markova/"
          className="profileLink"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          Maryna Markova
        </a>
      </div>
    </div>
  );
}
