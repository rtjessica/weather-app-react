import React from "react";
import FormattedDate from "./FomattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-city">{}</div>
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
          <span className="temperature-icon">
            <WeatherIcon code={props.data.icon} />
          </span>
          <span className="temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
      </div>
    </div>
  );
}
