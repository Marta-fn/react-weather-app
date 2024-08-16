import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemp d-flex justify-content-end">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          {" "}
          ºC{" "}
          <a href="/" onClick={convertFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp d-flex justify-content-end">
        <span className="temperature">
          {Math.round(props.celcius * 1.8 + 32)}
        </span>
        <span className="unit">
          {" "}
          ºF |{" "}
          <a href="/" onClick={convertCelsius}>
            ºC
          </a>
        </span>
      </div>
    );
  }
}
