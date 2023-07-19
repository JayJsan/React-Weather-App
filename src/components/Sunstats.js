import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

const Sunstats = ({ weatherData }) => {
  return typeof weatherData.main !== "undefined" ? (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Typography>Sunrise</Typography>
        <Typography>
          {weatherData.sys.sunrise !== undefined
            ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )
            : "Sunrise not found."}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Sunset</Typography>
        <Typography>
          {weatherData.sys.sunset !== undefined
            ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-IN"
              )
            : "Sunset not found."}
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <div></div>
  );
};

export default Sunstats;
