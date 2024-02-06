import React from "react";
import BackTheme from "../BackTheme";
import ViewEmployeeTable from "./viewEmployeeTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";




const ViewEmployeeTableComponents =()=>{

    return(
        <>
       
   
        <BackTheme/>
        <EmpDetailsComponents/>
    
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
    <ViewEmployeeTable/>
        </div>
    <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ViewEmployeeTableComponents;