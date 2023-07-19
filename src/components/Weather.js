import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import moment from "moment";
import Typography from "@mui/material/Typography";

const Weather = ({ weatherData }) => {
  return typeof weatherData.main !== "undefined" ? (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Typography>Day: {moment().format("dddd")}</Typography>
        <Typography>
          Temprature:{" "}
          {typeof weatherData.main.temp !== "undefined"
            ? weatherData.main.temp
            : "Temp not found."}{" "}
          &deg;C
        </Typography>
        <Typography>time</Typography>
        <Typography>Date: {moment().format("LL")}</Typography>
        <Typography>
          Humidity:{" "}
          {typeof weatherData.main.humidity !== "undefined"
            ? weatherData.main.humidity
            : "Humidity not found."}{" "}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>sunny icon</Typography>
        <Typography>
          Description:{" "}
          {typeof weatherData.weather[0].main !== "undefined"
            ? weatherData.weather[0].main
            : "Weather Description not found."}
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <div></div>
  );
};

export default Weather;
