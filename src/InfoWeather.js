import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function InfoWeather(props) {
  return (
    <div className="InfoWeather">
      <div className="row d-flex align-items-right">
        <div className="col-12 d-flex flex-column justify-content-center">
          <div className="current-city">
            <h1>
              <i className="fa-solid fa-location-dot"></i>
              {props.data.city}
            </h1>
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-right">
        <div className="col-12 d-flex flex-column justify-content-center">
          <div className="text-capitalize description">
            {props.data.description}
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-center">
        <div className="col-6 col-md-2">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <ul>
            <li className="date">
              <i class="fa-regular fa-calendar"> </i>
              {"  "}
              <FormattedDate date={props.data.date} />
            </li>
            <hr />

            <li className="humidity">
              <i class="fa-solid fa-droplet"></i> <strong>Humidity:</strong>{" "}
              <span>{props.data.humidity}</span> %
            </li>
            <li className="wind">
              <i class="fa-solid fa-wind"></i> <strong>Wind:</strong>{" "}
              <span>{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
        <Forecast />
      </div>
    </div>
  );
}
