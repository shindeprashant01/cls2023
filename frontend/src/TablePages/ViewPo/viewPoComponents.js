import React from "react";
import ViewPoTable from "./viewPoTable";
import BackTheme from "../BackTheme";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";







const ViewPoTableComponents =()=>{

    return(
        <>
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
           <ViewPoTable/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ViewPoTableComponents;