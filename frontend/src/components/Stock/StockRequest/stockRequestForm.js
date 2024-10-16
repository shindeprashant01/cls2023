import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './stockRequest.css'
import newApiUrl from "../../../TablePages/config";

const StockRequestForm = () => {
  const navigate = useNavigate();

  const [stockRequest, setStockRequest] = useState({

    select_project:"",
    asset_id:"",
    service:"",
    asset_details:"",
    available_quntity:"",
    requested_quntity:"",
    description:""
   
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStockRequest((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {

      console.log(stockRequest);
      var jsonStr = '{"stockRequest":[],"man_power":[]}';
      var obj = JSON.parse(jsonStr);

      obj["stockRequest"].push(stockRequest);

      jsonStr = JSON.stringify(obj);
      console.log(jsonStr);
      const response = axios.post(`${newApiUrl}/stock.php?id=post`, jsonStr);

      setStockRequest(response.data);

      navigate("/");
      //  })
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-stock-request">
          <div className="container-create-ticket">
            <div className="forms-outline-create-ticket">
              <div>
                <div className="tags-create-ticket">
                  <h2>Stock Request</h2>
                </div>

                <div className="input-details-create-ticket">
                <label className="labels">
                      Select Project:
                    </label>
                <Form.Select aria-label="Default select example"
                className="select-create-ticket"
                onChange={handleChange}
                name="select_project" >
                  <option value="IT-Site Asset">Select Project</option>
                  
                </Form.Select>
              </div>

              <div className="input-details-create-ticket">
              <label className="labels">
                      Select Asset ID:
                    </label>
                <Form.Select aria-label="Default select example"
                className="select-create-ticket"
                onChange={handleChange}
                name="asset_id" >
                  <option value="Select Asset ID">Select Asset ID</option>
                  <option value="IT-Of">1</option>
                  <option value="HVAC"> 2</option>
                  <option value="Electrical"> 3</option>
                  <option value="IBMS"> 4</option>
                  <option value="Others"> 5</option>
                </Form.Select>
              </div>

            


              <div className="input-details-create-ticket">
              <label className="labels">
                 Service:
                    </label>
                      <input 
                      type="search"
                      name="service"
                      className="form-control select-create-ticket"
                      placeholder="Service"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>

              
              <div className="input-details-create-ticket">
                <label className="labels">
               Asset Details:
                </label>

              <div className="input-details-create-project">
                  <textarea
                    rows={2}
                    cols={49}
                    placeholder="Type Asset Details"
                    className="text-area-create-project"
                    name="asset_details"
                   onChange={handleChange}
                  />
                </div>
                </div>
              
              <div className="input-details-create-ticket">
              <label className="labels">
                 Available Quntity:
                    </label>
                      <input 
                      type="search"
                      name="available_quntity"
                      className="form-control select-create-ticket"
                      placeholder="Available Quntity"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>


              <div className="input-details-create-ticket">
              <label className="labels">
                 Requested Quntity:
                    </label>
                      <input 
                      type="search"
                      name="requested_quntity"
                      className="form-control select-create-ticket"
                      placeholder="Requested Quntity"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>


              <div className="input-details-create-ticket">
              <label className="labels">
                Description:
                    </label>
                      <input 
                      type="search"
                      name="description"
                      className="form-control select-create-ticket"
                      placeholder="Description"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              
              <div className="btn-submit-create-ticket">
                <Button variant="primary" onClick={handleSubmit}>ADD</Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StockRequestForm;
