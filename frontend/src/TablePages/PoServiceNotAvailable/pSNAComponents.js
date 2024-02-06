import React from "react";


import PSNATable from "./pSNATable";
import BackTheme from "../BackTheme";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";
 


const PoServiceNotAvialableTableComponents =()=>{

    return(
        <>  
   
  <BackTheme/>
<EmpDetailsComponents/>
     
  <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
         <PSNATable/>
        </div>
       <BackThemeFooter/>
 
  
     
        </>
    )}


    export default PoServiceNotAvialableTableComponents ;