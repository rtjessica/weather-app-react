import React from "react";

export default function WeatherForecast() {
  return (
    <div class="col-2">
      <div class="weekly-forecast-date">Tue</div>
      <img
        class="weekly-forecast-icons"
        src="http://openweathermap.org/img/wn/13n@2x.png"
        id="icon"
      />
      <div class="weekly-forecast-temperature">
        <span class="weekly-forecast-temperature-max">57°</span>
        <span class="weekly-forecast-temperature-min"> 38°</span>
      </div>
    </div>
  );
}
