import React from "react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableTableComponent = ({ width, onResize, children }) => {
  return (
    <Resizable
      width={width}
      height={200} // Fixed height
      onResize={onResize}
      minConstraints={[100, 200]} // Minimum width and fixed height
      maxConstraints={[600, 200]} // Maximum width and fixed height
      axis="x" // Allow resizing only in the X direction
      style={{
        border: "1px solid #ddd",
        margin: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: "200px",
          overflow: "auto",
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Resizable>
  );
};

export default ResizableTableComponent;
