import "./App.css";
import { useEffect, useState, useMemo } from "react";
import Location from "./components/Location";
import Weather from "./components/Weather";
import Sunstats from "./components/Sunstats";
import moment from "moment";

function App() {
  const [lat, setLat] = useState(-36.84846);
  const [long, setLong] = useState(174.763336);
  const [city, setCity] = useState("Auckland");
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState("Undetermined");
  const [time, setTime] = useState(
    moment()
      .utcOffset(parseInt(data.timezone) / 3600)
      .format("dddd, hh:mm A")
  );

  useMemo(() => changeWeatherBG(data, setWeather), [data]);

  const updateCity = (newCity) => {
    setCity(newCity);
  };

  const onEnterKeyPress = (e) => {
    // if enter key is pressed
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
      updateTime();
      e.currentTarget.value = "";
    }
  };

  const updateTime = () => {
    setTime(
      moment()
        .utcOffset(parseInt(data.timezone) / 3600)
        .format("dddd, hh:mm A")
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // old fetch uses lat long, new one uses location
      // await fetch(
      //   `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      // )
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          console.log(response);
        });
    };
    fetchData();
  }, [lat, long, city]);

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
          <Location
            weatherData={data}
            updateLocation={updateCity}
            onEnterKeyPress={onEnterKeyPress}
          ></Location>
        </div>
        <div style={styles.container}>
          <Weather weatherData={data} currentTime={time}></Weather>
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

const changeWeatherBG = (data, setWeather) => {
  if (
    !Array.isArray(data.weather) ||
    typeof data.weather[0].main === "undefined"
  ) {
    setWeather("Undetermined");
    return;
  }

  let suffix = "Day";

  // check if day/night
  const currentTime = parseInt(
    moment()
      .utcOffset(parseInt(data.timezone) / 3600)
      .format("HH")
  );

  if (currentTime >= 18 || currentTime <= 6) {
    suffix = "Night";
  }

  if (data.weather[0].main === "Clouds") {
    setWeather(`Cloudy${suffix}`);
  } else if (data.weather[0].main === "Rain") {
    setWeather(`Rainy${suffix}`);
  } else if (data.weather[0].main === "Clear") {
    setWeather(`Clear${suffix}`);
  }
};

export default App;
