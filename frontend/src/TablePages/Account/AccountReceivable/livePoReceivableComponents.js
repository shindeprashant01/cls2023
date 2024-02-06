import React from "react";
import LivePoReceivableTable from "./llivePoReceivableTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";







const LivePoReceivableTableComponents =()=>{

    return(
        <>
     

        <BackTheme/>
        <EmpDetailsComponents/>

        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<LivePoReceivableTable/>
        </div>
       <BackThemeFooter/>
 
  
     
        </>
    )}


    export default LivePoReceivableTableComponents;