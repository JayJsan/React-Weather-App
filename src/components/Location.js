import React from "react";

const Location = ({ weatherData, updateLocation, onEnterKeyPress }) => {
  return (
    <div style={styles.container}>
      <div style={styles.outsideSection}>
        <h3 style={styles.outsideText}>Your location is</h3>
      </div>
      <div style={styles.section}>
        <input
          type="text"
          placeholder={
            typeof weatherData.main != "undefined"
              ? weatherData.name
              : "City not found."
          }
          style={styles.inputText}
          onKeyDown={onEnterKeyPress}
        />
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
    textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
  },
  inputText: {
    fontWeight: "700",
    padding: "0.4rem",
    fontSize: "1.25rem",
    alignItems: "centre",
    justifyContent: "centre",
    textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
    color: "white",
    backgroundColor: "transparent",
    borderRadius: "24px",
    border: "0.8px solid rgba(255,255,255,0.4)",
    margin: "auto",
  },
  outsideText: {
    fontWeight: "500",
    padding: "0.4rem",
    alignItems: "centre",
    justifyContent: "centre",
    textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
  },
};

export default Location;
