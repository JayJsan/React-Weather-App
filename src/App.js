import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import { Container, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Weather from "./components/Weather";
import Sunstats from "./components/Sunstats";

function App() {
  const [lat, setLat] = useState(-36.848461);
  const [long, setLong] = useState(174.763336);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          console.log(response);
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
