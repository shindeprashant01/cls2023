import React from "react";
import BackTheme from "../../BackTheme";
import CreateInvoiceTable from "./createInvoiceTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";

;






const CreateInvoiceTableComponents =()=>{

    return(
        <>
     
  
<BackTheme/>
<EmpDetailsComponents/>
    
<div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<CreateInvoiceTable/>
        </div>
       <BackThemeFooter/>
 
  
     
        </>
    )}


    export default  CreateInvoiceTableComponents;