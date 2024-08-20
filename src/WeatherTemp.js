import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  if (props.unit === "celcius") {
    return (
      <div className="WeatherTemp d-flex justify-content-end">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit"> ºC</span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp d-flex justify-content-end">
        <span className="temperature">
          {Math.round(props.celcius * 1.8 + 32)}
        </span>
        <span className="unit">ºF</span>
      </div>
    );
  }
}
