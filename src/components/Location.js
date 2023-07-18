import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const Location = ({ weatherData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <p>Your location is</p>
      </Grid>
      <Grid item xs="auto">
        <p>
          {typeof weatherData.main != "undefined"
            ? weatherData.name
            : "not found."}
        </p>
      </Grid>
    </Grid>
  );
};

export default Location;
