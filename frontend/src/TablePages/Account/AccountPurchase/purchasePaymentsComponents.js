import React from "react";

import PurchasePaymentTable from "./purchasePaymentTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";



const PurchasePaymentTableComponents =()=>{

    return(
        <>
    <BackTheme/>
    <EmpDetailsComponents/>
    <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
      <PurchasePaymentTable/>
        </div>
        <BackThemeFooter/>
      
  
     
        </>
    )}


    export default  PurchasePaymentTableComponents;