import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";

const Card = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${
          lat !== null ? lat : "0"
        }&lon=${long !== null ? long : "0"}&units=metric&APPID=${
          process.env.REACT_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <Container>
      {data.name !== undefined && (
        <Box>
          <p>Latitude is: {lat}</p>
          <p>Longittude is: {long}</p>
          <p>
            Location:{" "}
            {data.name !== undefined ? data.name : "Location not found."}
          </p>
          <p>
            Temprature:{" "}
            {data.main.temp !== undefined ? data.main.temp : "Temp not found."}{" "}
            &deg;C
          </p>
          <p>
            Sunrise:{" "}
            {data.sys.sunrise !== undefined
              ? new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")
              : "Sunrise not found."}
          </p>
          <p>
            Sunset:{" "}
            {data.sys.sunset !== undefined
              ? new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")
              : "Sunset not found."}
          </p>
          <p>
            Description:{" "}
            {data.weather[0].main !== undefined
              ? data.weather[0].main
              : "Weather Description not found."}
          </p>
          <p>
            Humidity:{" "}
            {data.main.humidity !== undefined
              ? data.main.humidity
              : "Humidity not found."}{" "}
            %
          </p>
          <p>Day: {moment().format("dddd")}</p>
          <p>Date: {moment().format("LL")}</p>
        </Box>
      )}
    </Container>
  );
};

export default Card;
