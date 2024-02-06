import React from "react";
import BackTheme from "../BackTheme";
import ViewCustomerTable from "./viewCustomerTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";



const ViewCustomerTableComponents =()=>{

    return(
        <>
     
   
        <BackTheme/>
        <EmpDetailsComponents/>
     
        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
   <ViewCustomerTable/>
        </div>
       <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ViewCustomerTableComponents;