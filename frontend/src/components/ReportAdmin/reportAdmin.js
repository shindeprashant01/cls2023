import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./reportAdmin.css";

const ReportAdmin = () => {
  return (
    <div>
      <form>  
        <div className="w3-container w3-card w3-white w3-round w3-margin main-report-admin">
          <div className="container-report-admin">
            <div className="forms-outline-report-admin">
              <div>
                <div className="input-container-report-admin">
                  <label className="label-report-admin"> Select Project :</label>
                  <div className="input-details-report-admin">
                  <Form.Select aria-label="Default select example">
                        <option>--Select Project--</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                   
                  </div>
                </div>
                <div className="input-container-report-admin">
                  <label className="label-report-admin"> Start Date:</label>
                  <div className="input-details-report-admin">
                 <input type="date" className="date-type-report-admin"/>                 
                  </div>
                </div>
                <div className="input-container-report-admin">
                  <label className="label-report-admin"> End Date:</label>
                  <div className="input-details-report-admin">
                <input type="date" className="date-type-report-admin"/>
      
                  </div>
                </div>
                                          
              
                <div className="btn-submit-report-admin">
                  <Button variant="primary">Create</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportAdmin;
