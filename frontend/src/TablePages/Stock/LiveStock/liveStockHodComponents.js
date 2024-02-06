import React from "react";
import LiveStockHodTable from "./liveStoclHodTable";
import BackTheme from "../../BackTheme";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../../BackThemeFooter";








const LiveStockHodTableComponents =()=>{

    return(
        <>
    <BackTheme/>
    <EmpDetailsComponents/>
    <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
    <LiveStockHodTable/>
        </div>
    <BackThemeFooter/>
        </>
    )}


    export default LiveStockHodTableComponents;