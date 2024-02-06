import React from "react";
import BackTheme from "../BackTheme";
import RCAPoTables from "./recentlyAddedPoTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";








const RCAPoTablesComponents =()=>{

    return(
        <>
     
        <BackTheme/>
        <EmpDetailsComponents/>
        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
  <RCAPoTables/>
        </div>
     <BackThemeFooter/>
  
     
        </>
    )}


    export default RCAPoTablesComponents;