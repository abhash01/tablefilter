import React from "react";

const ChildComponent = ({ width, title }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: "200px",
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5px",
        backgroundColor: "#f0f0f0",
      }}
    >
      {title}
    </div>
  );
};

export default ChildComponent;
