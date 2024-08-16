import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "partlycloudy",
    "03d": "partlycloudy",
    "03n": "partlycloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "pouring",
    "10n": "pouring",
    "11d": "lightning",
    "11n": "lightning",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };
  if (props.code === "02n") {
    return (
      <WeatherSvg
        state={codeMapping[props.code]}
        night
        width={200}
        height={200}
      />
    );
  } else {
    return (
      <WeatherSvg state={codeMapping[props.code]} width={200} height={200} />
    );
  }
}
