import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6e6ec494746b5229a9f2d526478c924c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);

    return city;
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a City"
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  let footer = (
    <p>
      <a
        href="https://github.com/rtjessica/weather-app-react"
        target="_blank"
        rel="noreferrer">
        Open-source code
      </a>
      <span>by Jess Teixeira</span>
    </p>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt="weather icon" />
          </li>
        </ul>
        {footer}
      </div>
    );
  } else {
    return (
      <div>
        {form}

        {footer}
      </div>
    );
  }
}
