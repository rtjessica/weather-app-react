import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let currentDay = days[props.date.getDay()];

  let currentHour = props.date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinute = props.date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  return (
    <div>
      Last update: {currentDay}, {currentHour}:{currentMinute}
    </div>
  );
}
