import React from "react";
import "./employeeRegister.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const EmployeeRegister = () => {
  return ( 
        
      <Form>   
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
                      className="form-control"
                      placeholder="Employee ID"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
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
                      Employee Name
                    </label>
                    <input
                       type="text"
                      className="form-control input-div"
                      placeholder="Employee Name"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    /> 
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels-unique">
                      Select Department <span className="required-mark">*</span>
                    </label>
                    <div className="input-div">
                      <Form.Select className="form-control" >
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
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
                    <label className="labels-unique">
                      Employee Position <span className="required-mark">*</span>
                    </label>
                    <div className="input-div">
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels-unique">
                      Select Region <span className="required-mark">*</span>
                    </label>
                    <div className="input-div">
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
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
                      className="form-control"
                      placeholder="Employee Email"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
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
                      className="form-control"
                      placeholder="Contact Number"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div class="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Password <span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div class="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Confirm Password <span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="btn-submit-unique">
                  <Button variant="primary">Sign Up</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    
  );
};

export default EmployeeRegister;
