import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import { Container, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Weather from "./components/Weather";
import Sunstats from "./components/Sunstats";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [lat, setLat] = useState(-36.84846);
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
    <div className="App-header">
      <Container className="App">
        <Location weatherData={data}></Location>
        <Weather weatherData={data}></Weather>
        <Sunstats weatherData={data}></Sunstats>
      </Container>
    </div>
  );
}

export default App;
