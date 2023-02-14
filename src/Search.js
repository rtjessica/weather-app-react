import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Search() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
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
        <WeatherData data={weather} />
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
