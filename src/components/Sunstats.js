import React from "react";
import sunsetIcon from "../resources/images/SunsetIconNoPadding.png";
import sunriseIcon from "../resources/images/SunriseIconNoPadding.png";

const Sunstats = ({ weatherData }) => {
  return typeof weatherData.main !== "undefined" ? (
    <div style={styles.container}>
      <div style={styles.section}>
        <div>
          <div>
            <h3 style={styles.text}>Sunrise</h3>
            <h3 style={styles.text}>
              {weatherData.sys.sunrise !== undefined
                ? `${new Date(weatherData.sys.sunrise * 1000)
                    .toLocaleTimeString("en-IN")
                    .slice(0, 4)}${new Date(weatherData.sys.sunset * 1000)
                    .toLocaleTimeString("en-IN")
                    .slice(7, 10)
                    .toUpperCase()}`
                : "Sunrise time not found."}
            </h3>
          </div>
          <img src={sunriseIcon} alt="Sunrise Icon" style={styles.image} />
        </div>
        <div>
          <img src={sunsetIcon} alt="Sunset Icon" style={styles.image} />
          <div>
            <h3 style={styles.text}>Sunset</h3>
            <h3 style={styles.text}>
              {weatherData.sys.sunset !== undefined
                ? `${new Date(weatherData.sys.sunset * 1000)
                    .toLocaleTimeString("en-IN")
                    .slice(0, 4)}${new Date(weatherData.sys.sunset * 1000)
                    .toLocaleTimeString("en-IN")
                    .slice(7, 10)
                    .toUpperCase()}`
                : "Sunset time not found."}
            </h3>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

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
  image: {
    width: "128px",
    height: "128px",
  },
};

export default Sunstats;
