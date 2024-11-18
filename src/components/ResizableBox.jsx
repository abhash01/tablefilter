// ResizableBox.js
import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableBoxComponent = ({ width, onResize, children }) => {
  return (
    <ResizableBox
      width={width} // Width will be passed as a percentage (in pixels, but representing a percentage of its parent)
      height={400} // Fixed height
      minConstraints={[100, 200]} // Minimum width in pixels
      maxConstraints={[600, 400]} // Maximum width in pixels
      axis="x" // Allow resizing only horizontally
      handle={<span className="resize-handle" />}
      onResize={onResize}
      style={{
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        width: "100%", // Full width to ensure it scales with the parent
        position: "relative", // For position of resize handle
      }}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizableBoxComponent;
