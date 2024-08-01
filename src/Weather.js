import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              className="form-control"
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
      <h1>Viseu</h1>
      <ul className="day-info">
        <li>Wednesday, 07:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3 align-items-center">
        <div className="col-4">
          <div className="d-flex current-temp">
            <span className="temperature">22</span>
            <span className="unit">ºC</span>
          </div>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Precipitation:</strong> 0%
            </li>
            <li>
              <strong>Humidity:</strong> 73%
            </li>
            <li>
              <strong>Wind:</strong> 8Km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
