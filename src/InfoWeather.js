import React from "react";
import FormattedDate from "./FormattedDate";
import "./InfoWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function InfoWeather(props) {
  return (
    <div className="InfoWeather">
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div className="current-city">
            <h1>{props.data.city}</h1>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="text-capitalize description">
            {props.data.description}
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-6 col-md-4">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
          </div>
          <div className="col-6 col-md-4">
            <strong>{Math.round(props.data.temperature)}</strong>
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
                <FormattedDate date={props.data.date} />
              </li>
              <hr />

              <li>
                Humidity: <span>{props.data.humidity}</span> %
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
