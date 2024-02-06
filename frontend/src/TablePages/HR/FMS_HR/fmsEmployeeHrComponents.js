import React from "react";
import BackTheme from "../../BackTheme";
import FMSEmployeeHrTable from "./fmsEmployeeHrTable";
import EmpDetailsComponents from "../../../ExtraPages/EmpDetailsComponent";




   




const FMSEmployeeHrTableComponents =()=>{

    return(
        <>
     
     <div style={{marginBottom:"150px"}}>
     <div>
    <BackTheme/>
     

        <div className="w3-container ">
          {/* -- The Grid -- */}
          {/* <div className="w3-row"> */}
            {/* -- Left Column -- */}
            <div className="w3-col m3" style={{display:"flex", justifyContent:"space-between",width:'1250px',marginTop:'50px'}}>
              {/* -- Profile -- */}
           <EmpDetailsComponents/>
              <div className="w3-card w3-round w3-white top-portion-my-profile" style={{marginRight:'15px'}}>
                <div className="  employee-box" style={{marginTop:'40px', }}>
                  <h4 className="w3-center" style={{color:'rgb(67, 190, 206)'}}> Employee Count</h4>
                  <hr />
                 
                </div> 
                
              </div>
              <div className=" w3-card w3-round w3-white top-portion-my-profile" style={{marginRight:'15px'}}>
                <div className=" employee-box" style={{marginTop:'40px',}}>
                  <h4 className="w3-center" style={{color:'rgb(67, 190, 206)'}}>Man Power Required</h4>
                  <hr />
              
                </div> 
                
              </div>

              <br />

              {/* -- Accordion -- */}
              <div className="w3-card w3-round">
                <div className="w3-white" id="add"></div>
              </div>
              <br />

              <br />
            {/* </div> */}

            {/* <div className="w3-col m4">
              <div className="w3-container w3-card w3-white w3-round w3-margin"></div>
            </div> */}
          </div>
          {/* <div className="w3-col m4"></div> */}
        </div>

        <br />
      </div>
        <div>
   {/* <PieChart radius={5}
    data={[
      { title: 'One', value: 50, color: 'blue' },
      { title: 'Two', value: 15, color: '#C13C37' },
      { title: 'Three', value: 20, color: '#6A2135' },
    ]}
    /> */}
        </div>
     </div>
     <div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
             <FMSEmployeeHrTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default FMSEmployeeHrTableComponents;