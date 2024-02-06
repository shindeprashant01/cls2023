import React from "react";

import BackTheme from "../../BackTheme";
import NewLiveTicketsTable from "./newLiveTicketsTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";







const  NewLiveTicketsTableComponents =()=>{

    return(
        <>
     

<BackTheme/>
<EmpDetailsComponents/>
    
<div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
  
 <NewLiveTicketsTable/>
        </div>
      <BackThemeFooter/>
  
     
        </>
    )}


    export default NewLiveTicketsTableComponents;