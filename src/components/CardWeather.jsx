import React, { useState } from "react";
import style from "./CardWeather.module.css";

const CardWeather = ({ weather, iconWeather, iconWeatherDescriptions }) => {
  const [changeTemp, setChangeTemp] = useState(false);

  const hadleChange = () => {
    setChangeTemp(!changeTemp);
  };

  const celsius = 273.15;

  return (
    <div className={style.cardWeather}>
      <h2 className={style.cardTitle}>
        {weather?.name}. {weather?.sys.country}
      </h2>
      <p className={style.today}>Today</p>
      <h2 className={style.subTitle}>
        {changeTemp === true
          ? Math.round(weather?.main.temp)
          : Math.round(weather?.main.temp - celsius)}
        <span>{changeTemp === true ? "°F" : "°C"}</span>
      </h2>
      <div className={style.weatherIcon}>
        <div className={style.icon}>
          <img src={iconWeather} alt="wheather Icon" />
        </div>
        <p className={style.iconDesc}>{iconWeatherDescriptions}</p>
      </div>
      <ul className={style.cardList}>
        <li>
          <span>Max Temperature:</span>{" "}
          {changeTemp === true
            ? (weather?.main.temp_max).toFixed(1)
            : (weather?.main.temp_max - celsius).toFixed(1)}
          <span>{changeTemp === true ? "°F" : "°C"}</span>
        </li>
        <li>
          <span>Min Temperature:</span>{" "}
          {changeTemp === true
            ? (weather?.main.temp_min).toFixed(1)
            : (weather?.main.temp_min - celsius).toFixed(1)}
          <span>{changeTemp === true ? "°F" : "°C"}</span>
        </li>
        <li>
          <span>Real Feeling:</span>{" "}
          {changeTemp === true
            ? (weather?.main.feels_like).toFixed(1)
            : (weather?.main.feels_like - celsius).toFixed(1)}
          <span>{changeTemp === true ? "°F" : "°C"}</span>
        </li>
        <li>
          <span>Pressure:</span> {weather?.main.pressure} <span>mbar</span>
        </li>
        <li>
          <span>Humidity:</span> {weather?.main.humidity}
          <span>%</span>
        </li>
      </ul>
      <button className={style.button} onClick={hadleChange}>
        Temperature in °F/°C
      </button>
    </div>
  );
};

export default CardWeather;
