import React from "react";

import AmendPoTable from "./amendPoTable";
import BackTheme from "../BackTheme";
import BackThemeFooter from "../BackThemeFooter";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";







const AmendPoTableComponents =()=>{

    return(
        <>
    
    <BackTheme/>
    <EmpDetailsComponents/>
    
    <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
         <AmendPoTable/>
        </div>
    <BackThemeFooter/>
 
  
     
        </>
    )}


    export default AmendPoTableComponents;