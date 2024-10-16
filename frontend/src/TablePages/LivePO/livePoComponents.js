import React from "react";
// import { PieChart } from 'react-minimal-pie-chart';
import LivePoTable from "./livePoTable";
// import HomeComponents from "../../components/HomeComponent/homeComponent";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackTheme from "../BackTheme";

   


const LivePoTableComponents =()=>{

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
              {/* <div className=" w3-card w3-round w3-white top-portion-my-profile">
                <div className=" employee-box" style={{marginTop:'40px'}}>
                  <h4 className="w3-center">My Profile</h4>
                  <hr />
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
                    Employee ID:-
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
                    Employee Type:-
                  </p>
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
                    Name:- <i id="Name"></i>
                  </p>
                </div>     
              </div> */}
              <div className="w3-card w3-round w3-white top-portion-my-profile">
                <div className="  employee-box" style={{marginTop:'40px', }}>
                  <h4 className="w3-center" style={{color:'rgb(67, 190, 206)'}}>Live PO Count</h4>
                  <hr />
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
                    Employee ID:-
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
                    Employee Type:-
                  </p>
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
                    Name:- <i id="Name"></i>
                  </p>
                </div> 
                
              </div>
              <div className=" w3-card w3-round w3-white top-portion-my-profile">
                <div className=" employee-box" style={{marginTop:'40px'}}>
                  <h4 className="w3-center" style={{color:'rgb(67, 190, 206)'}}>Service Count</h4>
                  <hr />
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
                   Emp id :
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
                    Employee Type:-
                  </p>
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
                    Name:- <i id="Name"></i>
                  </p>
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
     <LivePoTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default LivePoTableComponents;