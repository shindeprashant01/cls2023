import React from "react";
import  ViewVendorTable from './viewVendorTable'
import BackTheme from "../BackTheme";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";

 

const ViewVendorTableComponents =()=>{
   
      return(   
        <>
       
             <BackTheme/>
             <EmpDetailsComponents/>
            <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>

         <ViewVendorTable/>
        </div>
        <div>
     <BackThemeFooter/>
   
        </div>
 
  
     
        </>
    )}


    export default ViewVendorTableComponents;