import React from "react";
import BackTheme from "../BackTheme";
import ReqeustedPoTables from "./requestedPOTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";

const RequestedPOTableComponents = () => {
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
        <ReqeustedPoTables />
      </div>
      <BackThemeFooter />
    </>
  );
};

export default RequestedPOTableComponents;
