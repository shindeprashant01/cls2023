import React from "react";
import BackTheme from "../../BackTheme";
import DueInvoiceTable from "./dueInvoiceTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";








const DueInvoiceTableComponents =()=>{

    return(
        <>
     
  
<BackTheme/>
<EmpDetailsComponents/>
    
<div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
 <DueInvoiceTable/>
        </div>
        <BackThemeFooter/>
 
  
     
        </>
    )}


    export default  DueInvoiceTableComponents;