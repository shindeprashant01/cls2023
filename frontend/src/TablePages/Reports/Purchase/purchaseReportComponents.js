import React from "react";
import PurchaseReportTable from "./purchaseReportTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";







const PurchaseReportTableComponents =()=>{

    return(
        <>
 <BackTheme/>
 <EmpDetailsComponents/>
 <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<PurchaseReportTable/>
        </div>
      <BackThemeFooter/>
  
     
        </>
    )}


    export default PurchaseReportTableComponents;