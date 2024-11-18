import React, { useState } from "react";
import ResizableBoxComponent from "./ResizableBoxComponent";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const BoxContainer = () => {
  const [boxWidths, setBoxWidths] = useState([33, 34, 33]); // Start with widths for Table 1, 2, and 3

  const handleResize = (index, data) => {
    const newWidths = [...boxWidths];
    const totalWidth = window.innerWidth;
    const newWidthPercent = (data.size.width / totalWidth) * 100;
    const delta = newWidthPercent - boxWidths[index];

    const otherIndices = [0, 1, 2].filter((i) => i !== index);
    const splitDelta = delta / 2;
    newWidths[index] = newWidthPercent;

    // Adjust other boxes only if they are Table 1 or Table 3
    otherIndices.forEach((i) => {
      if (i !== 1) {
        newWidths[i] = Math.max(0, newWidths[i] - splitDelta);
      }
    });

    // Normalize total width to 100%
    const widthSum = newWidths.reduce((a, b) => a + b, 0);
    newWidths[2] += 100 - widthSum; // Adjust the last box to make the total 100%

    setBoxWidths(newWidths);
  };

  // Use the individual table components as content
  const content = [<Table1 />, <Table2 />, <Table3 />];

  return (
    <ResizableBoxComponent
      boxWidths={boxWidths}
      handleResize={handleResize}
      content={content}
    />
  );
};

export default BoxContainer;
