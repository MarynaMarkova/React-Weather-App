import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.temperature.current);

    setWeatherData({
      ready: true,
      city: response.data.city,
      feels: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      day: "Monday",
      date: 23,
      month: "November",
      hours: 22,
      minutes: 48,
      imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row heading">
          <div className="col-3">
            <ul className="details">
              <li>
                Feels like:{" "}
                <span className="feels">{Math.round(weatherData.feels)}</span>ºC
              </li>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind:{" "}
                <span className="wind">{Math.round(weatherData.wind)}</span>{" "}
                km/h
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
              <span className="temperature-big">
                {Math.round(weatherData.temperature)}
              </span>
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
      </div>
    );
  } else {
    const apiKey = `7fc8ceb1c3d0dcbob733fd665t774f9a`;
    let units = `metric`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
