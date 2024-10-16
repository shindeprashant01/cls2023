import React from "react";
// import '../../assets/css/w3Class.css';
import BackTheme from "../../../TablePages/BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";

import BackThemeFooter from "../../../TablePages/BackThemeFooter";
import StockRequestForm from "./stockRequestForm";

const StockRequestComponents = () => {
  return (
    <div>
      <BackTheme />
      <EmpDetailsComponents />
      <div className="w3-col m3 note-line">
        <p className="instructor-line">Note:- Do not use " " in this form</p>
      </div>
      <StockRequestForm />
      <BackThemeFooter />
    </div>
  );
};

export default StockRequestComponents;
