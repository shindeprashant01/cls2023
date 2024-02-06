import React from "react";
import BackTheme from "../BackTheme";
import LivePo1Table from "./livePo1Table";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";






const LivePo1TableComponents =()=>{

    return(
        <>
     
   
        <BackTheme/>
        <EmpDetailsComponents/>

        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
<LivePo1Table/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default LivePo1TableComponents;