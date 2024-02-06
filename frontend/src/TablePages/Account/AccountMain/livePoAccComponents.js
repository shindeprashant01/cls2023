import React from "react";
import BackTheme from "../../BackTheme";
import LivePoAccTable from "./livePoAccTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";








const LivePoAccTableComponents =()=>{

    return(
        <>
     

   <BackTheme/>
   <EmpDetailsComponents/>
  
   <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<LivePoAccTable/>
        </div>
       <BackThemeFooter/>
  
     
        </>
    )}


    export default LivePoAccTableComponents;