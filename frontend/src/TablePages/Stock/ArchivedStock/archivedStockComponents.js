import React from "react";
import ArchivedStockTable from "./archivedStockTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";








const ArchivedStockTableComponents =()=>{

    return(
        <>
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
             <ArchivedStockTable/>

        </div>
        <BackThemeFooter/>
  
  
     
        </>
    )}


    export default ArchivedStockTableComponents;