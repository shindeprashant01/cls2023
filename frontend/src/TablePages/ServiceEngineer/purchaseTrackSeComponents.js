import React from "react";

import BackTheme from "../BackTheme";
import PurchaseTrackSeTable from "./purchaseTrackSeTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";





const PurchaseTrackSeTableComponents =()=>{

    return(
        <>
     
     
  <BackTheme/>
  <EmpDetailsComponents/>
   
  <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
       <PurchaseTrackSeTable/>
        </div>
      <BackThemeFooter/>
  
     
        </>
    )}


    export default PurchaseTrackSeTableComponents;