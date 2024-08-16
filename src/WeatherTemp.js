import React, { useState } from "react";
import "./WeatherTemp.css";
import SwitchSelector from "react-switch-selector";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");
  const options = [
    {
      label: "ºC",
      value: "celcius",
      selectedBackgroundColor: "#132676",
    },
    {
      label: "ºF",
      value: "fahrenheit",
      selectedBackgroundColor: "#132676",
    },
  ];

  const onChange = (newValue) => {
    console.log(newValue);
    if (unit === "celcius") {
      setUnit("fahrenheit");
    } else {
      setUnit("celcius");
    }
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "celcius"
  );

  if (unit === "celcius") {
    return (
      <div className="WeatherTemp d-flex justify-content-end">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          <div className="UnitSwitch" style={{ width: 90, height: 30 }}>
            <SwitchSelector
              onChange={onChange}
              options={options}
              initialSelectedIndex={initialSelectedIndex}
              backgroundColor={"#ffffff"}
              fontColor={"#000000"}
            />
          </div>
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
          <div className="UnitSwitch" style={{ width: 90, height: 30 }}>
            <SwitchSelector
              onChange={onChange}
              options={options}
              initialSelectedIndex={initialSelectedIndex}
              backgroundColor={"#ffffff"}
              fontColor={"#000000"}
            />
          </div>
        </span>
      </div>
    );
  }
}
