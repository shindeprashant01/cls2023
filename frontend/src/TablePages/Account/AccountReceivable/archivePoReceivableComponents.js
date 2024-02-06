import React from "react";

import ArchivedPoReceivableTable from "./archivePoReceivableTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";





const ArchivedPOReceivableTableComponents =()=>{

    return(
        <>
     
  
        <BackTheme/>
     <EmpDetailsComponents/>
        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
      <ArchivedPoReceivableTable/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ArchivedPOReceivableTableComponents;