import React from "react";
import SplitPane from "react-split-pane";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const ResizableContainer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "200px" }}>
      <SplitPane
        split="vertical"
        minSize={100}
        defaultSize={200}
        maxSize={-100}
        style={{ flexGrow: 1 }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Table1 />
        </div>
        <SplitPane
          split="vertical"
          minSize={100}
          defaultSize={200}
          maxSize={-100}
          style={{ flexGrow: 1 }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Table2 />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Table3 />
          </div>
        </SplitPane>
      </SplitPane>
    </div>
  );
};

export default ResizableContainer;
