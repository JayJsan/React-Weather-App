import React from "react";

const Sunstats = ({ weatherData }) => {
  return typeof weatherData.main !== "undefined" ? (
    <div style={styles.container}>
      <div style={styles.section}>
        <h3 style={styles.text}>Sunrise:</h3>
        <h3 style={styles.text}>
          {weatherData.sys.sunrise !== undefined
            ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )
            : "Sunrise time not found."}
        </h3>
      </div>
      <div style={styles.section}>
        <h3 style={styles.text}>Sunset:</h3>
        <h3 style={styles.text}>
          {weatherData.sys.sunset !== undefined
            ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-IN"
              )
            : "Sunset time not found."}
        </h3>
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
};

export default Sunstats;
