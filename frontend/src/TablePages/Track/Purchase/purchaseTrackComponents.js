import React from "react";
import PurchaseTrackTable from "./purchaseTrackTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";





const PurchaseTrackTableComponents =()=>{

    return(
        <>
     
 
     <BackTheme/>
     <EmpDetailsComponents/>
     
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
    <PurchaseTrackTable/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default PurchaseTrackTableComponents;