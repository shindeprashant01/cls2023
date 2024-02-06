import React from "react";
import LiveStockTable from "./liveStockTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";







const LiveStockTableComponents =()=>{

    return(
        <>
   <BackTheme/>
   <EmpDetailsComponents/>
   <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}> 
         <LiveStockTable/>
        </div>
       <BackThemeFooter/>
  
     
        </>
    )}


    export default LiveStockTableComponents;