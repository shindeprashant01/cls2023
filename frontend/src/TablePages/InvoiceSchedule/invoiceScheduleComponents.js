import React from "react";

import BackTheme from "../BackTheme";

import InvoiceScheduleTable from "./invoiceScheduleTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";


  



const InvoiceScheduleTableComponents =()=>{

    return(
        <>
     
     
 <BackTheme/>
 <EmpDetailsComponents/>
     
 <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
 <InvoiceScheduleTable/>
        </div>
        <BackThemeFooter/>
        </>
    )}


    export default  InvoiceScheduleTableComponents;