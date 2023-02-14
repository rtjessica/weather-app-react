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
        className="city"
        type="text"
        placeholder="Search for a City"
        onChange={updateCity}
      />
      <input type="submit" className="search" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <div className="current-city">{city}</div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="weather-description">{weather.description}</li>
              <li className="weather-main">
                💧 {weather.humidity}% | 🍃 {Math.round(weather.wind)}km/h
              </li>
              <li className="current-day">Last Update: Sunday 23:06</li>
            </ul>
          </div>
          <div className="col-6 current-weather">
            <img
              className="temperature-icon"
              src={weather.icon}
              alt="weather icon"
            />

            <span className="temperature">
              {Math.round(weather.temperature)}
              <span className="units">°C</span>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
