import React ,{useEffect}from "react";

import BackTheme from "../BackTheme";
import PMScheduleTable from "./pmScheduleTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";
import { useNavigate } from "react-router";

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
