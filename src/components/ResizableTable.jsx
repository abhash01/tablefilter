import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableTable = ({ title }) => {
  return (
    <ResizableBox
      width={500}
      height={200}
      minConstraints={[100, 200]} // Minimum width and height
      maxConstraints={[300, 200]} // Maximum width and fixed height
      axis="x" // Allow resizing only in the x direction
      handle={
        <span
          className="custom-handle"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "10px",
            height: "100%",
            cursor: "ew-resize",
            backgroundColor: "#ccc",
          }}
        />
      }
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2>{title}</h2>
    </ResizableBox>
  );
};

export default ResizableTable;
