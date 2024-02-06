import React from "react";

import BackTheme from "../../BackTheme";
import PurchaseRequestTable from "./purchaseRequestTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";



const PurchaseRequestTableComponents =()=>{

    return(
        <>
     
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
     <PurchaseRequestTable/>
        </div>
        <BackThemeFooter/>
      
  
     
        </>
    )}


    export default PurchaseRequestTableComponents;