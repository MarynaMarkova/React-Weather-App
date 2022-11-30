import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherBig from "./WeatherBig";
import WeatherDetails from "./WeatherDetails";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
      imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row heading">
          <div className="col-3">
            <WeatherDetails details={weatherData} />
          </div>

          <div className="col-6">
            <WeatherBig info={weatherData} />
          </div>

          <div className="col-3">
            <form className="search-form">
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

            <FormattedDate date={weatherData.date} />
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
