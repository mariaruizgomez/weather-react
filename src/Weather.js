import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "./Form.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div className="current-city">
              <h1>{weatherData.city}</h1>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text-capitalize description">
              {weatherData.description}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <form>
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
              <div>
                <button className="search-button" title="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row d-flex align-items-center">
          <div className="col-6 col-md-4">
            <img
              src={weatherData.iconUrl}
              width="100px"
              alt="{weatherData.description}"
            />
          </div>
          <div className="col-6 col-md-4">
            <strong>{Math.round(weatherData.temperature)}</strong>
            <span className="units">
              <a href="http:/" rel="noopener noreferrer">
                °C
              </a>{" "}
              |
              <a href="http:/" rel="noopener noreferrer">
                °F
              </a>
            </span>
          </div>
          <div className="col-12 col-md-4">
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <hr />

              <li>
                Humidity: <span>{weatherData.humidity}</span> %
              </li>
              <li>
                Wind: <span>{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9c340174dce0d0c11428fd78107dfdf3";
    let units = "metric";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}