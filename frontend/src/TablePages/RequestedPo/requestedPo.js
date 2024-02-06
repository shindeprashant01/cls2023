import React from "react";
import RequestedComponent from "./requestedComponent";
import BackTheme from "../BackTheme";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";


const RequestedPoTable =()=>{

    return(
        <>
     
      
   
          <BackTheme/>
          <EmpDetailsComponents/>
     
          <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
          <RequestedComponent />
        </div>


   <BackThemeFooter/>
      

  
     
        </>
    )}


    export default RequestedPoTable;