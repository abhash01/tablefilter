import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import MuiTypography from "./components/MuiTypography";
import SprinklerTable from "./components/SprinklerTable";
import TableSprinkler from "./components/TableSprinkler.tsx";
import TableSprinklerFirst from "./components/TableSprinklerFirst";

function App() {
  return (
    <>
      <div className="App">
        {/* <SprinklerTable /> */}
        {/* <TableSprinkler /> */}
        <TableSprinklerFirst />
        {/* <Button variant="contained" color="primary">
          Hello MUI with Vite
        </Button>
        <MuiTypography /> */}
      </div>
      {/* <ThreeBoxes />
      <ThreeResizableBoxes />
      <ThreeProportionallyResizableBoxes /> */}
      {/* <BoxContainer />
      <GridLayoutComponent /> */}
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <ResizableTableComponent>
          <Table1 />
        </ResizableTableComponent>
        <ResizableTableComponent>
          <Table2 />
        </ResizableTableComponent>
        <ResizableTableComponent>
          <Table3 />
        </ResizableTableComponent>
      </div> */}
      {/* <ResizableTableContainer /> */}
      {/* <div style={{ width: "100%", height: "100vh" }}>
        <h1>Resizable Tables Example</h1>
        <ResizableContainer />
      </div> */}
      {/* <div style={{ display: "flex", height: "100vh", width: "100%" }}>
        <ResizableTable title="Table 1" />
        <ResizableTable title="Table 2" />
        <ResizableTable title="Table 3" />
      </div> */}
      {/* <ResizableColumn /> */}
    </>
  );
}

export default App;
// App.js
// import React, { useState } from "react";
// import ResizableColumn from "../src/components/ResizableColumn";
// import ResizableBoxComponent from "./components/ResizableBoxVS";
// import Table1 from "../src/components/Table1";
// import Table2 from "../src/components/Table2";
// import Table3 from "../src/components/Table3";
// import { Box } from "@mui/material";
// import Editor from "./components/Editor";
// import Editor1 from "./components/Editor1";
// import Terminal from "./components/Terminal";

// const App = () => {
//   const [editorWidth, setEditorWidth] = useState(500); // Initial width of the editor

//   const handleEditorResize = (event, { size }) => {
//     setEditorWidth(size.width);
//   };

//   return (
//     <Box display="flex" height="100vh">
//       <ResizableBoxComponent
//         width={editorWidth}
//         height={500}
//         onResize={handleEditorResize}
//       >
//         <Editor />
//       </ResizableBoxComponent>
//       <div style={{ width: "10px", cursor: "ew-resize" }} />
//       <ResizableBoxComponent
//         width={editorWidth}
//         height={500}
//         onResize={handleEditorResize}
//       >
//         <Terminal />
//       </ResizableBoxComponent>
//       <ResizableBoxComponent
//         width={`calc(100% - ${editorWidth}px - 10px)`}
//         height={500}
//       >
//         <Terminal />
//       </ResizableBoxComponent>
//     </Box>
//   );
// };

// export default App;
