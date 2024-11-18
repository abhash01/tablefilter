import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import ThreeBoxes from "./ThreeBoxes";

function ThreeProportionallyResizableBoxes() {
  // Initial widths of each box as percentages, totaling 100%
  const [boxWidths, setBoxWidths] = useState([33, 33, 34]);

  const handleResize = (index, data) => {
    const newWidths = [...boxWidths];
    const totalWidth = window.innerWidth;

    // Calculate the new width in percentage for the resized box
    const newWidthPercent = (data.size.width / totalWidth) * 100;
    const delta = newWidthPercent - boxWidths[index];

    // Adjust the other two boxes to keep the total width 100%
    const otherIndices = [0, 1, 2].filter((i) => i !== index);
    const splitDelta = delta / 2;
    newWidths[index] = newWidthPercent;
    newWidths[otherIndices[0]] = Math.max(
      0,
      boxWidths[otherIndices[0]] - splitDelta
    );
    newWidths[otherIndices[1]] = Math.max(
      0,
      boxWidths[otherIndices[1]] - splitDelta
    );

    // Normalize widths to 100% if they don’t add up exactly due to rounding
    const widthSum = newWidths.reduce((a, b) => a + b, 0);
    newWidths[2] += 100 - widthSum;

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
          <div style={{ width: "100%" }}>
            <ThreeBoxes />
          </div>
        </ResizableBox>
      ))}
    </div>
  );
}

export default ThreeProportionallyResizableBoxes;
