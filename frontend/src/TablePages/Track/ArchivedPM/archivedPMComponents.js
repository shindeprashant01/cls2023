import React from "react";


import BackTheme from "../../BackTheme";
import ArchivePMTable from "./archivedPMTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";








const ArchivePMTablesComponents =()=>{

    return(
        <>
     

    <BackTheme/>
    <EmpDetailsComponents/>
    
    <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
          <ArchivePMTable/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ArchivePMTablesComponents;