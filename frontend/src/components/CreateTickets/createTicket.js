import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./createTicket.css";

const CreateTicket = () => {
  return (
    <div>
      <form>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-create-ticket">
          <div className="container-create-ticket">
            <div className="forms-outline-create-ticket">
              <div>
                <div className="tags-create-ticket">
                  <h2>Create Ticket</h2>
                </div>

                <div className="input-details-create-ticket">
                  <Form.Select
                    aria-label="Default select example"
                    className="select-create-ticket"
                  >
                    <option>Sr.No.</option>
                    <option value="1">0001</option>
                    <option value="2">0002</option>
                    <option value="3">0003</option>
                    <option value="4">0004</option>
                  </Form.Select>
                </div>
              
              <div className="input-details-create-ticket">
                <Form.Select aria-label="Default select example"  
                   className="select-create-ticket" >
                  <option>--Select PO--</option>
                  <option value="1">Purchase</option>
                  <option value="2">Maintanance</option>
                  <option value="3">Industry</option>
                  <option value="4">Humon Resource</option>
                </Form.Select>
              </div>
              <div className="input-details-create-ticket">
                <Form.Select aria-label="Default select example"
                className="select-create-ticket">
                  <option>PM</option>
                  <option value="1">General</option>
                </Form.Select>
              </div>
              <div className="input-details-create-ticket" >
                  <Form.Select aria-label="Default select example"
                   className="select-create-ticket">
                    <option>--select Service--</option>
                    <option value="1">General</option>
                  </Form.Select>
              </div>

              <div className="input-Container-create-ticket">
                <label className="label-create-ticket"> Description:</label>
                <div className="input-details-create-ticket">
                  <textarea
                    rows={2} // You can adjust the number of rows
                    cols={70} // You can adjust the number of columns
                    placeholder="Enter a description..."
                    className="text-area-ex-request"
                  />
                </div>
              </div>
              <div className="btn-submit-create-ticket">
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

export default CreateTicket;
