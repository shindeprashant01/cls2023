import React from "react";
import "../EmployeeRegister/employeeRegister.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CustomerRegister = () => {
  return (
    <>
      <Form>
        <div className=" w3-container w3-card w3-white w3-round w3-margin main-box-customer">
          <div className="container-eregister">
            <div className="forms-outline-eregister">
              <div>
                {/* <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div> */}
                <div class="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Customer ID:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer ID"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Customer Name:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer Name"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Customer Address:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer Address"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Customer Email:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer Email"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      GSTIN/UIN:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="GSTIN/UIN"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      State Name:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State Name"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Code:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Code"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Customer Contact Number:<span className="required-mark">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Customer Contact Number"
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
                  <Button variant="primary">Create</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default CustomerRegister;
