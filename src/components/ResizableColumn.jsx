// ResizableColumn.js
import React, { useState } from "react";
import { Box } from "@mui/material";

const ResizableColumn = ({ children, width, onResize }) => {
  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;

    const resize = (event) => {
      const newWidth = width + (event.clientX - startX);
      onResize(newWidth);
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResize);
    };

    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <Box
      style={{
        width: `${width}px`,
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
      <div
        onMouseDown={handleMouseDown}
        style={{
          cursor: "ew-resize",
          width: "5px",
          backgroundColor: "transparent",
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
        }}
      />
    </Box>
  );
};

export default ResizableColumn;
