import React from "react";
import "./InfoWeather.css";

export default function InfoWeather(props) {
  return (
    <div className="InfoWeather">
      <div className="row d-flex align-items-center">
        <div className="col-6 col-md-4">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            width="200px"
            alt=""
          />
        </div>
        <div className="col-6 col-md-4">
          <strong>12</strong>
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
            <li>February 2nd</li>
            <hr />

            <li>
              Humidity: <span>5</span> %
            </li>
            <li>
              Wind: <span>6</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
