import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="day-info">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3 align-items-center">
        <div className="col-4">
          <WeatherTemp celcius={props.data.temperature} unit={props.unit} />
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            <WeatherIcon code={props.data.icon} size={200} />
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity} %
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind} Km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
