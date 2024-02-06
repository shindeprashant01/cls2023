import React from "react";
import ExpenseReportTable from "./expenseReportTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";






const ExpenseReportTableComponents =()=>{

    return(
        <>
     
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
  <ExpenseReportTable/>
        </div>
<BackThemeFooter/>
  
     
        </>
    )}


    export default ExpenseReportTableComponents;