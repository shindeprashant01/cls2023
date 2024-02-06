import React from "react";
import ExpensePaymentTable from "./expensePaymentTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";



const ExpensePaymentTableComponents =()=>{

    return(
        <>
     
     <BackTheme/>
     <EmpDetailsComponents/>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
       <ExpensePaymentTable/>
        </div>
        <BackThemeFooter/>
      
  
     
        </>
    )}


    export default  ExpensePaymentTableComponents;