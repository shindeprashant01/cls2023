import React from "react";
import Button from "react-bootstrap/Button";
import "./purchaseRequest.css";
import Form from "react-bootstrap/Form";

const PurchaseRequest = () => {
  return (  
    <div>       
      <form>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-prequest">
          <div className="container-prequest">
            <div className="forms-outline-prequest">
              <div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Select Project :</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                    {/* <select className="select-prequest">
                      <option value="">Select Project</option>
                    </select> */}
                  </div>
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Select Service:</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                    {/* <select className="select-prequest">
                      <option value="">--Select Service--</option>
                    </select> */}
                  </div>
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Select Ticket:</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                    {/* <select className="select-prequest">
                      <option value="">--Select Tickets--</option>
                    </select> */}
                  </div>
                </div>
                <div className="input-container-prequest">
                  {/* <div className='text-area-label'> */}
                  <label className="label-prequest"> Remaining Value:</label>
                  <div className="input-details-prequest">
                  <textarea
                    rows={2} // You can adjust the number of rows
                    cols={73} // You can adjust the number of columns
                    placeholder="Type text here"
                    className="text-area-prequest"
                  />
                  </div>
                  {/* </div> */}
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Upload File </label>
                  <div className="input-detail-prequest">
                  <input type="file" />
                  </div>
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Procurement :</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                    {/* <select className="select-prequest">
                      <option value="">--SelectProcurement--</option>
                    </select> */}
                  </div>
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Description:</label>
                  <div className="input-details-prequest">
                  <textarea  
                    rows={2} // You can adjust the number of rows
                    cols={73} // You can adjust the number of columns
                    placeholder="Enter a description..."
                    className="text-area-prequest"
                  />
                  </div>
                </div>
                <div className="btn-submit-prequest">
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

export default PurchaseRequest;
