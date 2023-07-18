import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Sunstats = ({ weatherData }) => {
  return typeof weatherData.main !== "undefined" ? (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <p>Sunrise</p>
        <p>
          {weatherData.sys.sunrise !== undefined
            ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )
            : "Sunrise not found."}
        </p>
      </Grid>
      <Grid item xs={2}>
        <p>Sunset</p>
        <p>
          {weatherData.sys.sunset !== undefined
            ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-IN"
              )
            : "Sunset not found."}
        </p>
      </Grid>
    </Grid>
  ) : (
    <div></div>
  );
};

export default Sunstats;
