import React from "react";
import moment from "moment";

const Weather = ({ weatherData }) => {
  return typeof weatherData.main !== "undefined" ? (
    <div style={styles.container}>
      <div style={styles.section}>
        <h3 style={styles.text}>Day: {moment().format("dddd")}</h3>
        <h3 style={styles.text}>
          Temprature:{" "}
          {typeof weatherData.main.temp !== "undefined"
            ? weatherData.main.temp
            : "Temp not found."}{" "}
          &deg;C
        </h3>
        <h3 style={styles.text}>time</h3>
        <h3 style={styles.text}>Date: {moment().format("LL")}</h3>
        <h3 style={styles.text}>
          Humidity:{" "}
          {typeof weatherData.main.humidity !== "undefined"
            ? weatherData.main.humidity
            : "Humidity not found."}{" "}
        </h3>
      </div>
      <div style={styles.section}>
        <h3 style={styles.text}>sunny icon</h3>
        <h3 style={styles.text}>
          Description:{" "}
          {typeof weatherData.weather[0].main !== "undefined"
            ? weatherData.weather[0].main
            : "Weather Description not found."}
        </h3>
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
  },
};

export default Weather;
