import React from "react";
import BackTheme from "../BackTheme";
import InvoiceScheduleAATable from "./invoiceScheduleAATable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";









const InvoiceScheduleAATableComponents =()=>{

    return(
        <>
     
   
<BackTheme/>
<EmpDetailsComponents/>
    
<div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<InvoiceScheduleAATable/>
        </div>
       <BackThemeFooter/>
 
  
     
        </>
    )}


    export default  InvoiceScheduleAATableComponents;