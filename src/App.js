import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import Weather from "./components/Weather";
import Sunstats from "./components/Sunstats";

function App() {
  const [lat, setLat] = useState(-36.84846);
  const [long, setLong] = useState(174.763336);
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState("Undetermined");

  const changeWeatherBG = () => {
    if (data.weather === "undefined") {
      setWeather("Undetermined");
      return;
    }
    if (data.weather[0].main === "Clouds") {
      setWeather("CloudyDay");
    } else if (data.weather[0].main === "Rain") {
      setWeather("RainyDay");
    } else if (data.weather[0].main === "Clear") {
      setWeather("SunnyDay");
    }
  };

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
      <div
        className="App"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/backgrounds/" + weather + ".jpg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "24px",
        }}
      >
        <div>
          <Location weatherData={data}></Location>
        </div>
        <div style={styles.container}>
          <Weather weatherData={data}></Weather>
          <Sunstats weatherData={data}></Sunstats>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "auto",
    display: "flex",
    alignItems: "centre",
    justifyContent: "centre",
    flexDirection: "row",
    padding: "1rem",
  },
  section: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    display: "flex",
    padding: "1rem",
    paddingTop: "0.2rem",
    paddingBottom: "0.2rem",
    flexDirection: "row",
    borderRadius: "24px",
  },
  text: {
    fontWeight: "bold",
    padding: "0.4rem",
    alignItems: "centre",
    justifyContent: "centre",
  },
};

export default App;
