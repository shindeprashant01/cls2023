import React from "react";

import FMSEmployeeTable from "./fmsEmployeeTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackTheme from "../BackTheme";
import BackThemeFooter from "../BackThemeFooter";


   

const FMSEmployeeTableComponents =()=>{

    return(
        <>
    
    <BackTheme/>
        {/* <div>
          
   <PieChart radius={5}
    data={[
      { title: 'One', value: 50, color: 'blue' },
      { title: 'Two', value: 15, color: '#C13C37' },
      { title: 'Three', value: 20, color: '#6A2135' },
    ]}
    />
        </div> */}
     
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
     <FMSEmployeeTable/>
        </div>
       <BackThemeFooter/>
 
  
     
        </>
    )}


    export default FMSEmployeeTableComponents;