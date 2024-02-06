import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./createTicket.css";
import newApiUrl from "../../TablePages/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateTicket = () => {
  const navigate = useNavigate();

  const [createTickets, setCreateTickets] = useState({
    Ticket_type:"",
    tikckit_id:"",
    // Date:"",
    // Time:"",
    tickit_Po:"",
    tickit_service:"",
    // ticket_usertype:"",
    TikDescription:"",

   
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCreateTickets((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {

      console.log(createTickets);
      var jsonStr = '{"createTicket":[],"man_power":[]}';
      var obj = JSON.parse(jsonStr);

      obj["createTicket"].push(createTickets);

      jsonStr = JSON.stringify(obj);
      console.log(jsonStr);
      const response = axios.post(`${newApiUrl}/tickite.php?id=post`, jsonStr);

      setCreateTickets(response.data);

      navigate("/");
      //  })
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-create-ticket">
          <div className="container-create-ticket">
            <div className="forms-outline-create-ticket">
              <div>
                <div className="tags-create-ticket">
                  <h2>Create Ticket</h2>
                </div>

                <div className="input-details-create-ticket">
                <input
                      type="number"
                      name="tikckit_id"
                      value={createTickets.tikckit_id}
                      placeholder="Sr No"
                      className="form-control select-create-ticket"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}

                     
                    />
                  {/* <Form.Select
                    aria-label="Default select example"
                    className="select-create-ticket"
                    onChange={handleChange}
                    name="tikckit_id"
                    value={createTickets.tikckit_id}
                  >
                  
                    <option value="1">0001</option>
                    <option value="2">0002</option>
                    <option value="3">0003</option>
                    <option value="4">0004</option>
                  </Form.Select> */}
                </div>
              
              <div className="input-details-create-ticket">
                {/* <Form.Select aria-label="Default select example"   */}
                  {/* //  className="select-create-ticket"
                  //  name="tickit_Po"
                   onChange=> */}
                      <input 
                      type="search"
                      name="tickit_Po"
                      className="form-control select-create-ticket"
                      placeholder="Select PO..."
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                     
                    />
                    {/* <input />
                  <option  value="">--Select PO--</option>
                  <option value="1">Purchase</option>
                  <option value="2">Maintanance</option>
                  <option value="3">Industry</option>
                  <option value="4">Humon Resource</option> */}
                {/* </Form.Select> */}
              </div>
              <div className="input-details-create-ticket">
                <Form.Select aria-label="Default select example"
                className="select-create-ticket"
                onChange={handleChange}
                name="Ticket_type" >
                  <option value="PM">PM</option>
                  <option value="General">General</option>
                </Form.Select>
              </div>
              <div className="input-details-create-ticket" >
                  <Form.Select aria-label="Default select example"
                   className="select-create-ticket"
                     name="tickit_service"
                     onChange={handleChange}  >
                    <option>--select Service--</option>
                    {/* <option value="Other">Other</option> */}
                    <option value="HVAC">HVAC</option>
                    <option value="Electrical">Electrical</option>
                    <option value="IT">IT</option>
                    <option value="IBMS">IBMS</option>
                    <option value="General">General</option>
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
                    onChange={handleChange}
                    name="TikDescription"
                  />
                </div>
              </div>
              <div className="btn-submit-create-ticket">
                <Button variant="primary" onClick={handleSubmit}>Create</Button>
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
