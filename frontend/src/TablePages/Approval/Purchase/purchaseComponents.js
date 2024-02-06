import React from "react";
import PurchaseTable from "./purchaseTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";



const PurchaseTableComponents =()=>{

    return(
        <>
     
 <BackTheme/>
 <EmpDetailsComponents/>
       <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
        <PurchaseTable/>
        </div>
        <BackThemeFooter/>
      
  
     
        </>
    )}


    export default PurchaseTableComponents;