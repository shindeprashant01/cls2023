import React from "react";
import BackTheme from "../../BackTheme";
import ArchivedTicketsTable from "./archivedTicketsTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";







const  ArchivedTicketsTableComponents =()=>{

    return(
        <>
     
       <BackTheme/>
       <EmpDetailsComponents/>

       <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
  
           <ArchivedTicketsTable/>
        </div>
        <BackThemeFooter/>
  
     
        </>
    )}


    export default ArchivedTicketsTableComponents;