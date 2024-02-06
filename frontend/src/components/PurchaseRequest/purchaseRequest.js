import React,{useState,useEffect} from "react";
import Button from "react-bootstrap/Button";
import "./purchaseRequest.css";
import Form from "react-bootstrap/Form";
import newApiUrl from "../../TablePages/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const  PurchaseRequest = () => {
  const navigate = useNavigate();

  const [purchases,setPurchases] = useState({
    approve_id: "",
    tikckit_id: "",
    service_Engineer: "",
    s_dept: "",
    po_no: "",
    purchase_description: "",
    Date:"", 
    requested_date:"",
    file_name:"",
   
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
    <div>           
      <form onSubmit={handleSubmit} method="POST">
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-prequest">
          <div className="container-prequest">
            <div className="forms-outline-prequest">
              <div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Select Project :</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example"
                  onChange={handleChange}>
                        <option>Open this select menu</option>
                        <option value="purchase">Purchase</option>
                        <option value="maintanance">Maintanance</option>
                        <option value="industry">Industry</option>
                        <option value="hr">Humon Resource</option>
                      </Form.Select>
                    {/* <select className="select-prequest">
                      <option value="">Select Project</option>
                    </select> */}
                  </div>
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Select Service:</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example"
                  onChange={handleChange}>
                        <option>Open this select menu</option>
                        <option value="purchase">Purchase</option>
                        <option value="maintanance">Maintanance</option>
                        <option value="industry">Industry</option>
                        <option value="hr">Humon Resource</option>
                      </Form.Select>
                    {/* <select className="select-prequest">
                      <option value="">--Select Service--</option>
                    </select> */}
                  </div>
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Select Ticket:</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example"
                  onChange={handleChange}>
                        <option>Select Ticket</option>
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
                    onChange={handleChange}
                  />
                  </div>
                  {/* </div> */}
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Upload File </label>
                  <div className="input-detail-prequest"
                 >
                  <input type="file"
                   onChange={handleChange} />
                  </div>
                </div>
                <div className="input-container-prequest">
                  <label className="label-prequest"> Procurement :</label>
                  <div className="input-details-prequest">
                  <Form.Select aria-label="Default select example"
                  onChange={handleChange}
                  name="service_Engineer">
                        <option>Select Procurement</option>
                        <option value="Sunita Shinde">Sunita Shinde</option>
                        <option value="Ujwala Ghude">Ujwala Ghude</option>
                       
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
                    name="purchase_description"
                    onChange={handleChange}
                  />
                  </div>
                </div>
                <div className="btn-submit-prequest">
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

export default PurchaseRequest;
