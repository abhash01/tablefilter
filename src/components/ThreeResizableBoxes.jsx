import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

function ThreeResizableBoxes() {
  // Set initial width for each box (in percentages)
  const [boxWidths, setBoxWidths] = useState([33, 33, 33]);

  const handleResize = (index, data) => {
    const newWidths = [...boxWidths];
    newWidths[index] = (data.size.width / window.innerWidth) * 100;
    setBoxWidths(newWidths);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {boxWidths.map((width, index) => (
        <ResizableBox
          key={index}
          width={(width * window.innerWidth) / 100} // Convert to pixel width for ResizableBox
          height={100}
          minConstraints={[50, 100]}
          maxConstraints={[window.innerWidth, 100]}
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
          <div style={{ width: "100%" }}>Box {index + 1}</div>
        </ResizableBox>
      ))}
    </div>
  );
}

export default ThreeResizableBoxes;
