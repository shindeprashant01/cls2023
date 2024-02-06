import React, { useState, useEffect } from "react";
import "./employeeRegister.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from "../../TablePages/config";
import { useNavigate } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const EmployeeRegister = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState({
    emp_id: "",
    emp_name: "",
    emp_dept: "",
    emp_position: "",
    emp_region: "",
    emp_email: "",
    emp_contact: "",
    emp_pass: "",
    status: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmployees((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(employees);
      var jsonStr = '{"employee":[],"man_power":[]}';
      var obj = JSON.parse(jsonStr);

      obj["employee"].push(employees);

      jsonStr = JSON.stringify(obj);
      console.log(jsonStr);
      const response = axios.post(`${newApiUrl}/employee.php?id=post`, jsonStr);

      setEmployees(response.data);

      navigate("/");
      //  })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit} method="POST">
      <div className="w3-container w3-card w3-white w3-round w3-margin main-box-unique">
        <div className="container-eregister">
          <div className="forms-outline-eregister">
            <div>
              <div className="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Employee ID:<span className="required-mark">*</span>
                  </label>
                  <input
                    type="text"
                    name="emp_id"
                    className="form-control"
                    placeholder="Employee ID"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div> */}
              <div className="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Employee Name: <span className="required-mark">*</span></label>
                  <input
                    type="text"
                    name="emp_name"
                    className="form-control"
                    placeholder="Employee Name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Select Department <span className="required-mark">*</span>
                  </label>
                  <div className="input-div">
                    <Form.Select
                      className="form-control"
                      name="emp_dept"
                      onChange={handleChange}
                    >
                      <option>Others</option>
                      <option value="Account">Account</option>
                      <option value="Electrical">Electrical</option>
                      <option value="HVAC">HVAC</option>
                      <option value="IBMS">IBMS</option>
                      <option value="IT">IT</option>
                      <option value="Opearation">Operation</option>
                      <option value="Purchase">Purchase</option>
                    </Form.Select>
                    {/* <input
            required
              type="text"
              className="form-control"
              placeholder="Employee Name"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            /> */}
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Employee Position <span className="required-mark">*</span>
                  </label>
                  <div className="input-div">
                  <Form.Select
                      className="form-control"
                      name="emp_position"
                      onChange={handleChange}
                    >
                      <option>Others</option>
                      <option value="Super Administrator">Super Administrator</option>
                      <option value="Operation Administrator"> Operation Administrator</option>
                      <option value="Program Manager">Program Manager</option>
                      <option value="Admin Associate">Admin Associate</option>
                      <option value="Functional Manager">Functional Manager</option>
                      <option value="Service Engineer">Service Engineer</option>
                      <option value="Executive">Executive</option>
                      <option value="Amount Payable">Amount Payable</option>
                      <option value="Tendor">Tendor</option>
                      <option value="Hr">HR</option>
                      <option value="Sales">Sales</option>
                      </Form.Select>
                    
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Select Region <span className="required-mark">*</span>
                  </label>
                  <div className="input-div">
                    <Form.Select
                    className="form control"
                      // aria-label="Default select example"
                      onChange={handleChange}
                      name="emp_region"
                    >
                      <option>All India</option>
                      <option value="west">West</option>
                      <option value="east">East</option>
                      <option value="north">North</option>
                      <option value="south">South</option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div class="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Employee Email <span className="required-mark">*</span>
                  </label>
                  <input
                    type="text"
                    name="emp_email"
                    className="form-control"
                    placeholder="Employee Email"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Contact Number <span className="required-mark">*</span>
                  </label>
                  <input
                    type="text"
                    name="emp_contact"
                    className="form-control"
                    placeholder="Contact Number"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Password <span className="required-mark">*</span>
                  </label>
                  <input
                    type="password"
                    name="emp_pass"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="input-group">
                <div className="input-group-1">
                  <label className="labels">
                    Confirm Password <span className="required-mark">*</span>
                  </label>
                  <input
                    type="password"
                    name="emp_conf_pass"
                    className="form-control"
                    placeholder="Confirm Password"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="btn-submit-unique">
                <Button variant="primary" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default EmployeeRegister;
