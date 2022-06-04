import axios from "axios";
import React, { useEffect, useState } from "react";
import CardWeather from "./CardWeather";
import WeatherForecats from "./WeatherForecats";
import style from "./WeatherPositionUser.module.css";

const APIKEY = "4e2e1549e38fcd4ab89d9e212eaea45a";

const WeatherPositionUser = () => {
  const [weather, setWeather] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [iconWeather, setIconWeather] = useState();
  const [iconWeatherDescriptions, setIconWeatherDescriptions] = useState();
  const [iconWeatherForecast, setIconWeatherForecast] = useState();
  const [iconWeatherDescriptionsForecast, setIconWeatherDescriptionsForecast] =
    useState();

  const locationLatLog = () => {
    const locations = (position) => {
      setLongitude(position.coords?.longitude);
      setLatitude(position.coords?.latitude);
    };

    navigator.geolocation.getCurrentPosition(locations);
  };
  locationLatLog();

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
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
          console.log(err);
        });

      // Forecast Weather

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
        )
        .then((res) => {
          setWeatherForecast(res?.data);
          setIconWeatherForecast(
            "http://openweathermap.org/img/w/" +
              res?.data.list[0].weather[0].icon +
              ".png"
          );
          setIconWeatherDescriptionsForecast(
            res?.data.list[0].weather[0].description
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [latitude, longitude]);

  return (
    <div className={style.container}>
      <CardWeather
        weather={weather}
        iconWeather={iconWeather}
        iconWeatherDescriptions={iconWeatherDescriptions}
      />
      <WeatherForecats
        weatherForecast={weatherForecast}
        iconWeatherForecast={iconWeatherForecast}
        iconWeatherDescriptionsForecast={iconWeatherDescriptionsForecast}
      />
    </div>
  );
};

export default WeatherPositionUser;
