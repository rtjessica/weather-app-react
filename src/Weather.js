import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  if (temperature !== null) {
    return (
      <div>
        <h3>
          The temperature in {props.city} is {Math.round(temperature)}°C
        </h3>
        <ul>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "6e6ec494746b5229a9f2d526478c924c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
    return <h3> </h3>;
  }
}
