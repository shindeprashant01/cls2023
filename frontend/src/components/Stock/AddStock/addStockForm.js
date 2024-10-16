import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import newApiUrl from "../../../TablePages/config";
import './addStockForm.css'

const AddStockForm = () => {
  const navigate = useNavigate();

  const [addStock, setAddStock] = useState({

    stock_id:"",
    asset:"",
    kit:"",
    technical_spec:"",
    model:"",
    make:"",
    serial_no:"",
    origin:"",
    quntity:"",
    unit:"",
    approximate_cost:"",
    identification_location:"",
    alloated_to_name:"",
    resposible_functional_manager:"",
    city:"",
    warrenty:"",
    description:"",
    remark:"", 
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddStock((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {

      console.log(addStock);
      var jsonStr = '{"addStock":[],"man_power":[]}';
      var obj = JSON.parse(jsonStr);

      obj["addStock"].push(addStock);

      jsonStr = JSON.stringify(obj);
      console.log(jsonStr);
      const response = axios.post(`${newApiUrl}/stock.php?id=post`, jsonStr);

      setAddStock(response.data);

      navigate("/");
      //  })
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-add-stock">
          <div className="container-create-ticket">
            <div className="forms-outline-create-ticket">
              <div>
                <div className="tags-create-ticket">
                  <h2>Add Stock</h2>
                </div>

                <div className="input-details-create-ticket">
                <input
                      type="number"
                      name="stock_id"
                      value={addStock.stock_id}
                      placeholder="Stock_id"
                      className="form-control select-create-ticket"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
                </div>
              
                <div className="input-details-create-ticket">
                <Form.Select aria-label="Default select example"
                className="select-create-ticket"
                onChange={handleChange}
                name="asset" >
                  <option value="IT-Site Asset">IT-Site Asset</option>
                  <option value="IT-Office Asset">IT-Office Asset</option>
                  <option value="HVAC"> HVAC</option>
                  <option value="Electrical"> Electrical</option>
                  <option value="IBMS"> IBMS</option>
                  <option value="Others"> Others</option>
                </Form.Select>
              </div>

              <div className="input-details-create-ticket">
                <Form.Select aria-label="Default select example"
                className="select-create-ticket"
                onChange={handleChange}
                name="kit" >
                  <option value="Tools/Test Kit">Tools/Test Kit</option>
                  <option value="Consumable Spares">Consumable Spares</option>
                  <option value="Consumable Spares">Consumable Spares</option>
                  <option value="Consumable Spares">Common/Individual Office Asset</option>
                </Form.Select>
              </div>

              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="technical_spec"
                      className="form-control select-create-ticket"
                      placeholder="Technical Specification"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>

              
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="model"
                      className="form-control select-create-ticket"
                      placeholder="Model"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="make"
                      className="form-control select-create-ticket"
                      placeholder="Make"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>

              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="serial_no"
                      className="form-control select-create-ticket"
                      placeholder="Serial No"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="origin"
                      className="form-control select-create-ticket"
                      placeholder="Origin"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>

              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="quntity"
                      className="form-control select-create-ticket"
                      placeholder="Quntity"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="unit"
                      className="form-control select-create-ticket"
                      placeholder="Unit"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="approximate_cost"
                      className="form-control select-create-ticket"
                      placeholder="Approximate Cost"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>

              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="identification_location"
                      className="form-control select-create-ticket"
                      placeholder="Identification Location"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>

              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="alloated_to_name"
                      className="form-control select-create-ticket"
                      placeholder="Allocated To Name"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="resposible_functional_manager"
                      className="form-control select-create-ticket"
                      placeholder="Resposible Functional Manager"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>

              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="city"
                      className="form-control select-create-ticket"
                      placeholder="City"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="warrenty"
                      className="form-control select-create-ticket"
                      placeholder="Warrenty"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
              </div>
              <div className="input-details-create-ticket">
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
              <div className="input-details-create-ticket">
                      <input 
                      type="search"
                      name="remark"
                      className="form-control select-create-ticket"
                      placeholder="Remark"
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

export default AddStockForm;
