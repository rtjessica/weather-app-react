import React from "react";
import FormattedDate from "./FomattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-city">{props.city}</div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="weather-description">{props.data.description}</li>
            <li className="weather-main">
              💧 {props.data.humidity}% | 🍃 {Math.round(props.data.wind)}km/h
            </li>
            <li className="current-day">
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-6 current-weather">
          <img
            className="temperature-icon"
            src={props.data.icon}
            alt="weather icon"
          />

          <span className="temperature">
            {Math.round(props.data.temperature)}
            <span className="units">°C</span>
          </span>
        </div>
      </div>
    </div>
  );
}
