import React from "react";

import ExpenseTable from "./expenseTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";

const ExpenseTableComponents =()=>{

    return(
        <>
    <BackTheme/>
    <EmpDetailsComponents/>
    <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
        <ExpenseTable/>
        </div>
  <BackThemeFooter/>
     
        </>
    )}


    export default ExpenseTableComponents;