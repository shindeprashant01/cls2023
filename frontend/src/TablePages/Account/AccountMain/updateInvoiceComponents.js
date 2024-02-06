import React from "react";
import BackTheme from "../../BackTheme";
import UpdateInvoiceTable from "./updateInvoiceTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";
;






const UpdateInvoiceTableComponents =()=>{

    return(
        <>
     
     
<BackTheme/>
<EmpDetailsComponents/>
  
<div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
 <UpdateInvoiceTable/>
        </div>
   <BackThemeFooter/>
 
  
     
        </>
    )}


    export default  UpdateInvoiceTableComponents;