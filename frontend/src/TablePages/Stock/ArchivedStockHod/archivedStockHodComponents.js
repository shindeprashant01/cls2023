import React from "react";
import ArchivedStockHodTable from "./archiveStockHodTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";









const ArchivedStockHodTableComponents =()=>{

    return(
        <>
     
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<ArchivedStockHodTable/>

        </div>
      <BackThemeFooter/>
  
     
        </>
    )}


    export default ArchivedStockHodTableComponents;