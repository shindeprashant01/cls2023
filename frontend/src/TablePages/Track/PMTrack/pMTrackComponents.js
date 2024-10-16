import React from "react";

import PMTrackTable from "./pMTrackTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";








const PMTrackTablesComponents =()=>{
 
    
    return(
        <>
     
    
    <BackTheme/>
    <EmpDetailsComponents/>
    
    <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
           <PMTrackTable/>
        </div>
        <BackThemeFooter/>
 
  
     
        </>
    )}


    export default PMTrackTablesComponents;