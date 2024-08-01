import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>Viseu</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Sunny</li>
      </ul>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Sunny"
      />
      <div className="row">
        <div className="col-6">
          <p>22ºC</p>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 73%</li>
            <li>Wind: 8Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
