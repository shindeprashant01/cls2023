import React from "react";

import LiveTicketsTable from "./liveTicketsTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";

const LiveTicketsTableComponents = () => {
  return (
    <>
      <BackTheme />
      <EmpDetailsComponents />

      <div
        style={{
          marginTop: "100px",
          marginRight: "15px",
          marginBottom: "50px",
        }}
      >
        <LiveTicketsTable />
      </div>

      <BackThemeFooter />
    </>
  );
};

export default LiveTicketsTableComponents;
