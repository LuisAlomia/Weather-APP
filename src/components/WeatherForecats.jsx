import React from "react";
import style from "./WeatherForecats.module.css";

const WeatherForecats = ({
  weatherForecast,
  iconWeatherForecast,
  iconWeatherDescriptionsForecast,
}) => {
  return (
    <div className={style.container}>
      <p className={style.title}>
        Forecast Weather {weatherForecast?.city.name},{" "}
        {weatherForecast?.city.country}
      </p>
      <ul className={style.card}>
        <li className={style.cardItem}>
          <p className={style.cardDate}>{weatherForecast?.list[0].dt_txt}</p>
          <h2 className={style.cardWeather}>
            {(weatherForecast?.list[0].main.temp - 270).toFixed(2)} °C
          </h2>
          <img className={style.cardImg} src={iconWeatherForecast} alt="icon" />
          <p className={style.descrition}>{iconWeatherDescriptionsForecast}</p>
        </li>
        <li className={style.cardItem}>
          <p className={style.cardDate}>{weatherForecast?.list[8].dt_txt}</p>
          <h2 className={style.cardWeather}>
            {(weatherForecast?.list[8].main.temp - 270).toFixed(2)} °C
          </h2>
          <img className={style.cardImg} src={iconWeatherForecast} alt="icon" />
          <p className={style.descrition}>{iconWeatherDescriptionsForecast}</p>
        </li>
        <li className={style.cardItem}>
          <p className={style.cardDate}>{weatherForecast?.list[16].dt_txt}</p>
          <h2 className={style.cardWeather}>
            {(weatherForecast?.list[16].main.temp - 270).toFixed(2)} °C
          </h2>
          <img className={style.cardImg} src={iconWeatherForecast} alt="icon" />
          <p className={style.descrition}>{iconWeatherDescriptionsForecast}</p>
        </li>
        <li className={style.cardItem}>
          <p className={style.cardDate}>{weatherForecast?.list[24].dt_txt}</p>
          <h2 className={style.cardWeather}>
            {(weatherForecast?.list[24].main.temp - 270).toFixed(2)} °C
          </h2>
          <img className={style.cardImg} src={iconWeatherForecast} alt="icon" />
          <p className={style.descrition}>{iconWeatherDescriptionsForecast}</p>
        </li>
        <li className={style.cardItem}>
          <p className={style.cardDate}>{weatherForecast?.list[32].dt_txt}</p>
          <h2 className={style.cardWeather}>
            {(weatherForecast?.list[32].main.temp - 270).toFixed(2)} °C
          </h2>
          <img className={style.cardImg} src={iconWeatherForecast} alt="icon" />
          <p className={style.descrition}>{iconWeatherDescriptionsForecast}</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherForecats;
