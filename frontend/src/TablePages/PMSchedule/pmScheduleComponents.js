import React from "react";

import BackTheme from "../BackTheme";
import PMScheduleTable from "./pmScheduleTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";

const PMScheduleTableComponents = () => {
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
        <PMScheduleTable />
      </div>
      <BackThemeFooter />
    </>
  );
};

export default PMScheduleTableComponents;
