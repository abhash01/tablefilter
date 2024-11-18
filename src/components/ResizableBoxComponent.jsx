import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableBoxComponent = ({ boxWidths, handleResize, content }) => {
  if (!boxWidths.length || !content.length) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {boxWidths.map((width, index) => (
        <div
          key={index}
          style={{ width: `${(width * window.innerWidth) / 100}px` }}
        >
          {index === 1 ? ( // Only render Table 2 without ResizableBox
            <div style={{ width: "100%" }}>{content[index]}</div>
          ) : (
            // For Table 1 and Table 3, use ResizableBox
            <ResizableBox
              width={(width * window.innerWidth) / 100} // Convert to pixel width
              height={200}
              minConstraints={[100, 200]} // Minimum width for Table 1 and Table 3
              maxConstraints={[window.innerWidth / 3, 400]} // Max width set to 1/3 of the container width
              onResize={(e, data) => handleResize(index, data)}
              resizeHandles={["e"]}
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%" }}>{content[index]}</div>
            </ResizableBox>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResizableBoxComponent;
