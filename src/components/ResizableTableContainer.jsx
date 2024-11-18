import React, { useState } from "react";
import ResizableTableComponent from "./ResizableTableComponent";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const ResizableTableContainer = () => {
  // Initialize widths for the tables
  const [widths, setWidths] = useState([300, 300, 300]); // Initial widths for Table1, Table2, Table3

  const handleResize =
    (index) =>
    (event, { size }) => {
      const newWidths = [...widths];
      newWidths[index] = size.width;

      const totalWidth = newWidths.reduce((sum, w) => sum + w, 0);
      const remainingWidth = window.innerWidth - totalWidth;

      // Distribute remaining width to other tables
      const proportion = remainingWidth / (widths.length - 1); // Evenly distribute to other tables
      newWidths.forEach((_, i) => {
        if (i !== index) {
          newWidths[i] = Math.max(100, newWidths[i] + proportion); // Ensure minimum width
        }
      });

      setWidths(newWidths);
    };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {widths.map((width, index) => (
        <ResizableTableComponent
          key={index}
          width={width}
          onResize={handleResize(index)}
        >
          {index === 0 && <Table1 />}
          {index === 1 && <Table2 />}
          {index === 2 && <Table3 />}
        </ResizableTableComponent>
      ))}
    </div>
  );
};

export default ResizableTableContainer;
