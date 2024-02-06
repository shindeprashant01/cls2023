import React from "react";
import BackTheme from "../BackTheme";
import PSNA_DOA_Table from "./pSNADOATable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";
 


const PoServiceNotAvialableDOATableComponents =()=>{

    return(
        <>  

  <BackTheme/>
  <EmpDetailsComponents/>
  <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
        <PSNA_DOA_Table/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default PoServiceNotAvialableDOATableComponents ;