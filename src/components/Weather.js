import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import moment from "moment";

const Weather = ({ weatherData }) => {
  return typeof weatherData.main !== "undefined" ? (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <p>Day: {moment().format("dddd")}</p>
        <p>
          Temprature:{" "}
          {typeof weatherData.main.temp !== "undefined"
            ? weatherData.main.temp
            : "Temp not found."}{" "}
          &deg;C
        </p>
        <p>time</p>
        <p>Date: {moment().format("LL")}</p>
        <p>
          Humidity:{" "}
          {typeof weatherData.main.humidity !== "undefined"
            ? weatherData.main.humidity
            : "Humidity not found."}{" "}
        </p>
      </Grid>
      <Grid item xs={2}>
        <p>sunny icon</p>
        <p>
          Description:{" "}
          {typeof weatherData.weather[0].main !== "undefined"
            ? weatherData.weather[0].main
            : "Weather Description not found."}
        </p>
      </Grid>
    </Grid>
  ) : (
    <div></div>
  );
};

export default Weather;
