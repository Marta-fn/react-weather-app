import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (props.unit === "celcius") {
    return (
      <div className="WeatherForecastDay">
        <div>{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={100} />
        <div>
          <span>{Math.round(props.data.temp.max)}º</span>
          <span className="minTemp">{Math.round(props.data.temp.min)}º</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherForecastDay">
        <div>{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={100} />
        <div>
          <span>{Math.round(props.data.temp.max * 1.8 + 32)}º</span>
          <span className="minTemp">
            {Math.round(props.data.temp.min * 1.8 + 32)}º
          </span>
        </div>
      </div>
    );
  }
}
