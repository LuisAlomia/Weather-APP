import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./WeatherData.module.css";
import NavBar from "./NavBar";
import CardWeather from "./CardWeather";
import WeatherPositionUser from "./WeatherPositionUser";

const APIKEY = "4e2e1549e38fcd4ab89d9e212eaea45a";

const WeatherData = () => {
  const [weather, setWeather] = useState();
  const [iconWeather, setIconWeather] = useState();
  const [iconWeatherDescriptions, setIconWeatherDescriptions] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIKEY}`
      )
      .then((res) => {
        setWeather(res?.data);
        setIconWeather(
          "http://openweathermap.org/img/w/" +
            res?.data.weather[0].icon +
            ".png"
        );
        setIconWeatherDescriptions(res?.data.weather[0].description);
      })
      .catch((err) => {
        alert("Registro no encontrado");
        console.log(err);
      });
  }, []);

  const getLocation = (location) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`
      )
      .then((res) => {
        setWeather(res?.data);
        setIconWeather(
          "http://openweathermap.org/img/w/" +
            res?.data.weather[0].icon +
            ".png"
        );
        setIconWeatherDescriptions(res?.data.weather[0].description);
      })
      .catch((err) => {
        alert("Registro no encontrado");
        console.log(err);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <NavBar getLocation={getLocation} />
      </div>
      <h1 className={style.title}>Weather APP</h1>
      <div className={style.containerCards}>
        <CardWeather
          weather={weather}
          iconWeather={iconWeather}
          iconWeatherDescriptions={iconWeatherDescriptions}
        />
        <WeatherPositionUser />
      </div>
    </div>
  );
};

export default WeatherData;
