import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Lisbon");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeal: response.data.main.feels_like,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
    });
  }

  function search() {
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dc40d3d7cda209ca40e77430c74cf57&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="day-info">
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>

        <div className="row mt-3 align-items-center">
          <div className="col-4">
            <div className="d-flex justify-content-end">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit"> ºC</span>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-center">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
              />
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <strong>Real Feal:</strong> {Math.round(weatherData.realFeal)}{" "}
                ºC
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity} %
              </li>
              <li>
                <strong>Wind:</strong> {weatherData.wind} Km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
