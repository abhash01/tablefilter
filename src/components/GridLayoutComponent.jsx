import React from "react";
import GridLayout from "react-grid-layout";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayoutComponent = () => {
  // Layout for the grid items
  const layout = [
    { i: "table1", x: 0, y: 0, w: 4, h: 2, minW: 2, maxW: 6 }, // Table 1
    { i: "table2", x: 4, y: 0, w: 2, h: 2, minW: 2, maxW: 4 }, // Table 2 (fixed size)
    { i: "table3", x: 6, y: 0, w: 4, h: 2, minW: 2, maxW: 6 }, // Table 3
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12} // Total number of columns
      rowHeight={30}
      width={1200} // Width of the layout
      isResizable={true} // Allow resizing
    >
      <div
        key="table1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Table1 />
      </div>
      <div
        key="table2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Table2 />
      </div>
      <div
        key="table3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Table3 />
      </div>
    </GridLayout>
  );
};

export default GridLayoutComponent;
