import React from "react";
import BackTheme from "../BackTheme";
import ArchivePo1Table from "./archivePo1Table";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";







const ArchivePo1TableComponents =()=>{

    return(
        <>
        <BackTheme/>
        <EmpDetailsComponents/>
     
        <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
        <ArchivePo1Table/>
        </div>
     
        </>
    )}


    export default ArchivePo1TableComponents;