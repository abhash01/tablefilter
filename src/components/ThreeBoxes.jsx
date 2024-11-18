import React from "react";

function ThreeBoxes() {
  const boxStyle = {
    width: "33%",
    height: "100px",
    backgroundColor: "#4caf50",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>Box 1</div>
      <div style={boxStyle}>Box 2</div>
      <div style={boxStyle}>Box 3</div>
    </div>
  );
}

export default ThreeBoxes;
