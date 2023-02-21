import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setWeather({
      loaded: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "tfcd3e25d2be9a7a29a436do2b30aed0";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
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

  if (weather.loaded) {
    return (
      <div>
        {form}
        <WeatherData data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
