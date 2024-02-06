import React from "react";
import BackTheme from "../BackTheme";
import ArchivedPoTable from "./archivedPoTable";

import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";







const ArchivedPOTableComponents =()=>{

    return(
        <>
        <BackTheme/>
        <EmpDetailsComponents/>
        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
          <ArchivedPoTable/>
        </div>
    <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ArchivedPOTableComponents;