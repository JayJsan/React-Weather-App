import React from "react";

// in later feature, be able to change locations

const Location = ({ weatherData }) => {
  return (
    <div style={styles.container}>
      <div style={styles.outsideSection}>
        <h3 style={styles.outsideText}>Your location is</h3>
      </div>
      <div style={styles.section}>
        <h3 style={styles.text}>
          {typeof weatherData.main != "undefined"
            ? weatherData.name
            : "not found. Please enable your location."}
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
  outsideSection: {
    display: "flex",
    padding: "1rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingRight: "0px",
    flexDirection: "row",
    borderRadius: "24px",
  },
  text: {
    fontWeight: "700",
    padding: "0.4rem",
    alignItems: "centre",
    justifyContent: "centre",
  },
  outsideText: {
    fontWeight: "500",
    padding: "0.4rem",
    alignItems: "centre",
    justifyContent: "centre",
  },
};

export default Location;
