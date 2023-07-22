import React, { useEffect, useState } from "react";
import moment from "moment";

const Weather = ({ weatherData, currentTime }) => {
  const [time, setTime] = useState(
    moment()
      .utcOffset(parseInt(weatherData.timezone) / 3600)
      .format("dddd, hh:mm A")
  );
  const [weatherIcon, setWeatherIcon] = useState(
    "https://openweathermap.org/img/wn/10d@2x.png"
  );

  useEffect(() => {
    // update current time every yminute
    const currentTime = setInterval(() => {
      setTime(
        moment()
          .utcOffset(parseInt(weatherData.timezone) / 3600)
          .format("dddd, hh:mm A")
      );
      setWeatherIcon(
        `https://openweathermap.org/img/wn/${
          typeof weatherData.weather !== "undefined"
            ? weatherData.weather[0].icon
            : "01d"
        }@2x.png`
      );
    }, 1000);
    return () => clearInterval(currentTime);
  });

  useEffect(() => {
    setTime(currentTime);
  }, [currentTime]);

  return typeof weatherData.main !== "undefined" ? (
    <div style={styles.container}>
      <div style={styles.section}>
        <div>
          <h3 style={styles.text}>{time}</h3>
          <h1 style={styles.text}>
            {typeof weatherData.main.temp !== "undefined"
              ? weatherData.main.temp
              : "Temp not found."}
            &deg;C
          </h1>
          <h3 style={styles.text}>
            {moment()
              .utcOffset(parseInt(weatherData.timezone) / 3600)
              .format("LL")}
          </h3>
        </div>
        <h3 style={styles.humidityText}>
          Humidity:{" "}
          {typeof weatherData.main.humidity !== "undefined"
            ? weatherData.main.humidity
            : "Humidity not found."}
          {"%"}
        </h3>
        <div>
          <img
            src={weatherIcon}
            alt="weatherIcon"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "100px",
              border: "0.8px solid rgba(255,255,255,0.4)",
            }}
          />
          <h3 style={styles.weatherText}>
            {" "}
            {typeof weatherData.weather[0].main !== "undefined"
              ? weatherData.weather[0].main
              : "Weather Description not found."}
          </h3>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

const styles = {
  container: {
    margin: "auto",
    display: "flex",
    alignItems: "centre",
    justifyContent: "centre",
    flexDirection: "row",
    padding: "1rem",
  },
  section: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    display: "flex",
    padding: "1rem",
    paddingTop: "0.2rem",
    paddingBottom: "0.2rem",
    flexDirection: "row",
    borderRadius: "24px",
  },
  text: {
    fontWeight: "bold",
    padding: "0.4rem",
    alignItems: "centre",
    justifyContent: "centre",
    textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
  },
  humidityText: {
    fontSize: "1rem",
    fontWeight: "400",
    padding: "0.4rem",
    alignItems: "centre",
    justifyContent: "centre",
    alignSelf: "flex-end",
    textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
  },
  weatherText: {
    margin: "auto",
    textAlign: "center",
    fontWeight: "bold",
    padding: "0.4rem",
    textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
  },
};

export default Weather;
