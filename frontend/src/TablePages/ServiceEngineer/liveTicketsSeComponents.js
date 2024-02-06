import React from "react";
import BackTheme from "../BackTheme";
import LiveTicketsSeTable from "./liveTicketsSeTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";







const  LiveTicketsSeTableComponents =()=>{

    return(
        <>
     
    
<BackTheme/>
<EmpDetailsComponents/>
 
<div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
  <LiveTicketsSeTable/>

        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default LiveTicketsSeTableComponents;