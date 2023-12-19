import React from "react";
// import { PieChart } from 'react-minimal-pie-chart';
import LivePoDOATable from "./livePoDOATable";
import BackTheme from "../BackTheme";


   


const LivePoDOATableComponents =()=>{

    return(
        <>
     
     <div style={{marginBottom:"150px"}}>
    <BackTheme/>
        {/* <div style={{display:'flex', border:'1px solid black',margin:'200px 70px 0 70px'}}>
        <PieChart radius={18}
    data={[
      { title: 'One', value: 50, color: 'blue' },
      { title: 'Two', value: 15, color: '#C13C37' },
      { title: 'Three', value: 20, color: '#6A2135' },
    ]}
    />
         <PieChart radius={18}
    data={[
      { title: 'One', value: 50, color: 'blue' },
      { title: 'Two', value: 15, color: '#C13C37' },
      { title: 'Three', value: 20, color: '#6A2135' },
    ]}
    />

<PieChart radius={18}
    data={[
      { title: 'One', value: 50, color: 'blue' },
      { title: 'Two', value: 15, color: '#C13C37' },
      { title: 'Three', value: 20, color: '#6A2135' },
    ]}
    />
        </div> */}
     </div>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
   <LivePoDOATable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default LivePoDOATableComponents;