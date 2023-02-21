import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaily(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDaily">
      <div className="weekly-forecast-date">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} />
      <div className="weekly-forecast-temperature">
        <span className="weekly-forecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="weekly-forecast-temperature-min">
          {" "}
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
