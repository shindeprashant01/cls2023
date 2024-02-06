import React from "react";

import BackTheme from "../../BackTheme";
import StockTrackTable from "./stockTrackTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";





const StockTrackTableComponents =()=>{

    return(
        <>
     
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
           <StockTrackTable/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default StockTrackTableComponents;