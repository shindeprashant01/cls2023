import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./expenseRequest.css";

const ExpenseRequest = () => {
  return (
    <div>
      <form>  
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-ex-request">
          <div className="container-ex-request">
            <div className="forms-outline-ex-request">
              <div>
                <div className="input-container-ex-request">
                  <label className="label-ex-request"> Select Project :</label>
                  <div className="input-details-ex-request">
                  <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                   
                  </div>
                </div>
                <div className="input-container-ex-request">
                  <label className="label-ex-request"> Select Service :</label>
                  <div className="input-details-ex-request">
                  <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                 
                  </div>
                </div>
                <div className="input-container-ex-request">
                  <label className="label-ex-request"> Select Ticket:</label>
                  <div className="input-details-ex-request">
                  <Form.Select aria-label="Default select example" >
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
      
                  </div>
                </div>
                <div className="input-container-ex-request">
                  <label className="label-ex-request"> Remaining Value:</label>
                  <div className="input-details-prequest">
                  <textarea
                    rows={2}
                    cols={73}
                    placeholder="Type text here"
                    className="text-area-ex-request"
                  />
                  </div>
                </div>
                <div className="input-container-ex-request">
                  <label className="label-ex-request"> Amount:</label>
                  <div className="input-details-prequest">
                  <textarea
                    rows={2}
                    cols={73}
                    placeholder="Type text here"
                    className="text-area-ex-request"
                  />
                  </div>
                </div>
                <div className="input-container-ex-request">
                  <label className="label-ex-request"> Attach File </label>
                  <div className="input-details-prequest">
                  <input type="file" className="input-details" />
                  </div>
                </div>

                
                <div className="input-container-ex-request">
                  <label className="label-ex-request"> Description:</label>
                  <div className="input-details-prequest">
                  <textarea
                    rows={2} // You can adjust the number of rows
                    cols={73} // You can adjust the number of columns
                    placeholder="Enter a description..."
                    className="text-area-ex-request"
                  />
                  </div>
                </div>
                <div className="btn-submit-ex-request">
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

export default ExpenseRequest;
