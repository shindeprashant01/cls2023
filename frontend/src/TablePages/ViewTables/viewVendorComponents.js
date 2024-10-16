import React from "react";
import BackTheme from "../BackTheme";
import ViewVendorTables from "./viewVendorTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";







const ViewVendorsTablesComponents =()=>{

    return(
        <>
     
 
        <BackTheme/>
        <EmpDetailsComponents/>
     
     <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px', marginTop:'100px'}}>
            <ViewVendorTables/>
        </div>
        <div>
     
   <BackThemeFooter/>
        </div>
 
  
     
        </>
    )}


    export default ViewVendorsTablesComponents;