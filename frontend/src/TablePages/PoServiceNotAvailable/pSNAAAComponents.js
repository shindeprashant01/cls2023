import React from "react";
import BackTheme from "../BackTheme";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import PSNAAATable from "./pSNAAATable";
import BackThemeFooter from "../BackThemeFooter";








const PoServiceNotAvialableAATableComponents = () => {
  return (
    <>
   <BackTheme/>
     <EmpDetailsComponents/>
     
      <div
        style={{
          marginTop: "100px",
          marginRight: "15px",
          marginBottom: "50px",
        }}
      >
       <PSNAAATable/>
      </div>
      <BackThemeFooter/>
    </>
  );
};

export default PoServiceNotAvialableAATableComponents;
