import React from "react";
import { Typography, Container } from "@mui/material";

// in later feature, be able to change locations

const Location = ({ weatherData }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "white" }}>
        Your location is
      </Typography>
      <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
        {typeof weatherData.main != "undefined"
          ? weatherData.name
          : "not found."}
      </Typography>
    </Container>
  );
};

export default Location;
