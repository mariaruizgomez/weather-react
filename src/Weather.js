import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleresponse(response) {

        alert(`The weather in ${response.data.name} is ${response.data.main.temp} °C`);
    }

     let apiKey = "9c340174dce0d0c11428fd78107dfdf3";
     let units = "metric";
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
     axios.get(url).then(handleresponse);

  return <h2>Hello from Weather</h2>;
}
