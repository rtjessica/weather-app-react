import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        {props.celsius}
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        {Math.round(fahrenheit())}
        <span className="units">
          <a href="/" onClick={showToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
