import React from "react";
import BackTheme from "../../BackTheme";
import InvoiceCollectionTable from "./invoiceCollectionTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";








const InvoiceCollectionTableComponents =()=>{

    return(
        <>
      <BackTheme/>
      <EmpDetailsComponents/>
      <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<InvoiceCollectionTable/>
        </div>
    <BackThemeFooter/>
  
     
        </>
    )}


    export default InvoiceCollectionTableComponents;