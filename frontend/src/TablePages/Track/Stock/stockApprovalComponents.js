import React from "react";
import BackTheme from "../../BackTheme";
import StockApprovalTable from "./stockApprovalTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";





const StockApprovalTableComponents =()=>{

    return(
        <>
     
     <BackTheme/>
     <EmpDetailsComponents/>

     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
          <StockApprovalTable/>
        </div>
       <BackThemeFooter/>
  
     
        </>
    )}


    export default StockApprovalTableComponents;