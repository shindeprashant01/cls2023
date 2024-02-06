import React from "react";
import BackTheme from "../BackTheme";
import ArchivedPoDOATable from "./archivePoDOATable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";








const ArchivedPODOATableComponents =()=>{

    return(
        <>
     
   
        <BackTheme/>
        <EmpDetailsComponents/>
        
        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
     <ArchivedPoDOATable/>
        </div>
        <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ArchivedPODOATableComponents;