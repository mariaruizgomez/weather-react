import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {}

  let apiKey = "9c340174dce0d0c11428fd78107dfdf3";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(handleResponse);

  return <h2>🌞</h2>;
}
