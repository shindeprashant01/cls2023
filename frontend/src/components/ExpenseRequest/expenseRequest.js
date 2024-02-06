import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./expenseRequest.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import newApiUrl from "../../TablePages/config";

const ExpenseRequest = () => {
  const navigate = useNavigate();

  const [purchases,setPurchases] = useState({
    ticket_id: "",
    requested_date: "",
    Created_by: "",
    service_name: "",
    Amount: "",
    Description: "",
    cc_id:"", 
    Date:"",
    Approved_by:"",
   
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  setPurchases((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(purchases);
      var jsonStr = '{"purchase":[],"man_power":[]}';
      var obj = JSON.parse(jsonStr);

      obj["purchase"].push(purchases);

      jsonStr = JSON.stringify(obj);
      console.log(jsonStr);
      const response = axios.post(`${newApiUrl}/purchase.php?id=post`, jsonStr);

    setPurchases(response.data);

      navigate("/");
      //  })
    } catch (error) {
      console.log(error);
    }
  };
  return (   
    <div >
      <form>  
        <div className="w3-container w3-card w3-white w3-round w3-margin">
          <div className="container-ex-request">
            <div className="forms-outline-ex-request">
              <div className="expense-form"> 
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
