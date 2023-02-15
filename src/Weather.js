import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import InfoWeather from "./InfoWeather";
import HeaderCities from "./HeaderCities";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "9c340174dce0d0c11428fd78107dfdf3";
    let units = "metric";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
            <HeaderCities />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <div>
                <button className="search-button" title="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <InfoWeather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
