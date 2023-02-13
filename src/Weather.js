import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
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
      date: "Wednesday 07:00",
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
              <li>{weatherData.date}</li>
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
    let city = "Las Vegas";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
