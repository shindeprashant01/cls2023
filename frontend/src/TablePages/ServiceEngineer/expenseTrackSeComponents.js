import React from "react";
import BackTheme from "../BackTheme";
import ExpenseTrackSeTable from "./expenseTrackSeTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";
 


const ExpenseTrackSeTableComponents =()=>{

    return(
        <>  
    
     <BackTheme/>
     <EmpDetailsComponents/>
   
     
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
           <ExpenseTrackSeTable/>
        </div>
     <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ExpenseTrackSeTableComponents;