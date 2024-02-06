import React from "react";
import ExpenseTrackTable from "./expenseTrackTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";
 


const ExpenseTrackTableComponents =()=>{

    return(
        <>  
    
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
         <ExpenseTrackTable/>
        </div>
 <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ExpenseTrackTableComponents;