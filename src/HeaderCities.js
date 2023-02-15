import React from "react";
import "./HeaderCities.css";

export default function HeaderCities(props) {
  const displayedCities = ["New York", "Madrid", "Paris"];

  return (
    <div className="HeaderCities">
      <ul>
        {displayedCities.map(function (city, index) {
          return (
            <li key={index}>
              <a href="/" onClick={props.handleClick} className="city">
                {city}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
