import React from "react";

// in later feature, be able to change locations

const Location = ({ weatherData }) => {
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h3 style={styles.text}>Your location is</h3>
        <h3 style={styles.text}>
          {typeof weatherData.main != "undefined"
            ? weatherData.name
            : "not found. Please enable location."}
        </h3>
      </div>
    </div>
  );
};

// TEMPORARY STYLES - CHANGE LATER
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
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
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

export default Location;
