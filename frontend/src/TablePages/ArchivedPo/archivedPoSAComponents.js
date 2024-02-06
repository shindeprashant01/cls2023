import React from "react";
import BackTheme from "../BackTheme";
import ArchivedPoSATable from "./archivePOSATable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";








const ArchivedPOSATableComponents =()=>{

    return(
        <>
     

       <BackTheme/>
       <EmpDetailsComponents/>
   
       <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
     <ArchivedPoSATable/>
        </div>
       <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ArchivedPOSATableComponents;