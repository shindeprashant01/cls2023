import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/w3Class.css";
import newApiUrl from "../TablePages/config";


const EmpDetailsComponents = () => {
  // const [emp_id,setEmp_id]= useState(" ");

  const [emp_id, setEmp_id] = useState(() => {
    // Retrieve the global variable from localStorage on component mount
    const storedValue = localStorage.getItem("emp_id");
    return storedValue ? (storedValue) : "defaultValue";
  });
  // const queryParameters = new URLSearchParams(window.location.search);
  // const emp_idz = queryParameters.get(emp_id);

  const [emp_name1, setEmp_name1] = useState([]);
  const [emp_position1, setEmp_position1] = useState([]);

  // useEffect(()=>{
  //   setEmp_id(sessionStorage.getItem('emp_id'));

  //   console.log(emp_id)
  // })

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    updateGlobalVariable();
  });

  var newVariable = emp_id;
  const updateGlobalVariable = () => {
    // Update the state
    setEmp_id(newVariable);

    // Store the updated value in localStorage
    localStorage.setItem("globalVariable", JSON.stringify(newVariable));
  };

  // var newVariable = "emp_id";
  // var prash = emp_id;
  // localStorage.getItem(prash);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${newApiUrl}/employee.php?id=edit&emp_id=${newVariable}`
      );
      // setExpenseTrack(response.data);
      console.log(newVariable);
      console.log(response.data);
      setEmp_position1(response.data[0].emp_position);
      setEmp_name1(response.data[0].emp_name);

    } catch (error) {
      console.log(error);
    }
  };
   

  return (
    <div>
        <div className=" ">
          {/* -- The Grid -- */}
          <div className="w3-row">
            {/* -- Left Column -- */}
              {/* -- Profile -- */}
              <div className=" w3-card w3-round w3-white top-portion-my-profile" >
                <div className="w3-container employee-box" style={{marginLeft:"12px"}}>
                  <h4 className="w3-center">My Profile</h4>
                  <hr />
                  <div style={{display:"flex",marginLeft:"15px"}}>
                    <div>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
                    </div>
                    <p> Employee ID:-   
                    <span> {emp_id} </span> 
                    </p>
                  </div>

                  <div style={{display:"flex",marginLeft:"15px"}}>
                    <div>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
                    </div>
                    <p> Employee Type:-   
                    <span> {emp_position1} </span> 
                    </p>
                  </div>
                   

                  <div style={{display:"flex",marginLeft:"15px"}}>
                    <div>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
                    </div>
                    <p> Name:-   
                    <span> {emp_name1} </span> 
                    </p>
                  </div>
                
                </div>
              </div>
              <br />
            
          

          </div>
       
        </div>
    </div>
  );
};

export default EmpDetailsComponents;
