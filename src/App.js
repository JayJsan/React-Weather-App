import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import { Container, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Weather from "./components/Weather";
import Sunstats from "./components/Sunstats";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const defaultLat = -36.848461;
  const defaultLong = 174.763336;

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${
          typeof lat !== "undefined" ? lat : defaultLat
        }&lon=${
          typeof long !== "undefined" ? long : defaultLong
        }&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
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
    <Container className="App">
      <Location weatherData={data}></Location>
      <Grid>
        <Weather weatherData={data}></Weather>
        <Sunstats weatherData={data}></Sunstats>
      </Grid>
    </Container>
  );
}

export default App;
