// src/components/ResizableBox.js
import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./ResizableBox.css"; // Add your custom styles here

const ResizableBoxComponent = ({ width, height, children, onResize }) => {
  return (
    <ResizableBox
      width={width}
      height={height}
      minConstraints={[100, height]} // Minimum width
      maxConstraints={[800, height]} // Maximum width
      axis="x" // Allow resizing only horizontally
      handle={<span className="resize-handle" />}
      onResize={onResize}
      style={{
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        width: "100%", // Full width to ensure it scales with the parent
        position: "relative",
      }}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizableBoxComponent;
