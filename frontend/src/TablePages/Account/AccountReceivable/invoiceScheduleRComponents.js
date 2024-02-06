import React from "react";
import BackTheme from "../../BackTheme";
import InvoiceScheduleRTable from "./invoiceScheduleRTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";







const InvoiceScheduleRTableComponents =()=>{

    return(
        <>
     
         <BackTheme/>
         <EmpDetailsComponents/>
    
         <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
 <InvoiceScheduleRTable/>
        </div>
     <BackThemeFooter/>
 
  
     
        </>
    )}


    export default  InvoiceScheduleRTableComponents;