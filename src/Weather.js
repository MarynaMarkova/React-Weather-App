import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherDetails from "./WeatherDetails";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      feels: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      imageUrl: response.data.condition.icon_url,
    });
  }
  function search() {
    const apiKey = `7fc8ceb1c3d0dcbob733fd665t774f9a`;
    let units = `metric`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row heading">
          <div className="col-3">
            <WeatherDetails data={weatherData} />
          </div>

          <div className="col-6">
            <h1 className="cityPlace">{weatherData.city}</h1>
            <h2>
              {" "}
              <img
                src={weatherData.imageUrl}
                className="weather-icon-big"
                alt={weatherData.description}
              />
              <WeatherTemperature celsius={weatherData.temperature} />{" "}
            </h2>
            <h3 className="description">{weatherData.description}</h3>
          </div>

          <div className="col-3">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="search"
                  className="form-control search-block cityInput"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={handleCityChange}
                />

                <input type="submit" className="submit" value="Go" />
              </div>
            </form>
            <button type="button" className="btn btn-success currentLocation">
              Current location
            </button>
            <br />

            <FormattedDate date={weatherData.date} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
