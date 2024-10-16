import React from "react";

import { PieChart } from "react-minimal-pie-chart";

import PSNATable from "./pSNATable";
import BackTheme from "../BackTheme";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";

const PoServiceNotAvialableTableComponents = () => {
  return (
    <>
      <BackTheme />
      <EmpDetailsComponents />
      <div
        style={{
          border: "3px solid lightblue",
          margin: "20px",
          padding: "20px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div>
            <div>
              <h6> AMC </h6>
            </div>
            <div style={{ width: "200px" }}>
              <PieChart
                data={[
                  { title: "One", value:70, color: "blue" ,lineWidth:"40%"},
                  { title: "Two", value: 20, color: "red" },
                ]}
              />
            </div>
          </div>

          <div >
            <div style={{display:"flex"}}>
              <div style={{ width: "10px",marginRight:"5px" }}>
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "blue" }
                    
                  ]}
                />
              </div>
              <div>Asssign Value</div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{ width: "10px",marginRight:"5px" }}>
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "red" }
                    
                  ]}
                />
              </div>
              <div>Remaining Value</div>
            </div>
          </div>
        </div>


        <div>
          <div>
            <div>
              <h6> FMS </h6>
            </div>
            <div style={{ width: "200px" }}>
              <PieChart
                data={[
                  { title: "One", value:30, color: "blue" },
                  { title: "Two", value: 20, color: "red" },
                ]}
              />
            </div>
          </div>

          <div >
            <div style={{display:"flex"}}>
              <div style={{ width: "10px",marginRight:"5px" }}>
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "blue" }
                    
                  ]}
                />
              </div>
              <div>Asssign Value</div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{ width: "10px",marginRight:"5px" }}>
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "red" }
                    
                  ]}
                />
              </div>
              <div>Remaining Value</div>
            </div>
          </div>
        </div>





        <div>
          <div>
            <div>
              <h6> Project </h6>
            </div>
            <div style={{ width: "200px" }}>
              <PieChart
                data={[
                  { title: "One", value:10, color: "blue" ,lineWidth:"40%"},
                  { title: "Two", value: 20, color: "red" },
                ]}
              />
            </div>
          </div>

          <div >
            <div style={{display:"flex"}}>
              <div style={{ width: "10px",marginRight:"5px" }}>
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "blue" }
                    
                  ]}
                />
              </div>
              <div>Asssign Value</div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{ width: "10px",marginRight:"5px" }}>
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "red" }
                    
                  ]}
                />
              </div>
              <div>Remaining Value</div>
            </div>
          </div>
        </div>

      </div>

      <div
        style={{
          marginTop: "100px",
          marginRight: "15px",
          marginBottom: "50px",
        }}
      >
        <PSNATable />
      </div>
      <BackThemeFooter />
    </>
  );
};

export default PoServiceNotAvialableTableComponents;
