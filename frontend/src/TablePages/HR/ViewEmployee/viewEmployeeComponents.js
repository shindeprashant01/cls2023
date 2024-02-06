import React from "react";

import ViewEmployeeHrTable from "./viewEmployeeTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";


   




const ViewEmployeeHrTableComponents =()=>{

    return(
        <>
     
     
     <BackTheme/>
     <EmpDetailsComponents/>
    
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>

<ViewEmployeeHrTable/>
        </div>
        <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ViewEmployeeHrTableComponents;