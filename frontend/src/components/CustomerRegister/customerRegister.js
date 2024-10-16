import React,{useState,useEffect} from "react";
import "../EmployeeRegister/employeeRegister.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from "../../TablePages/config";
import { useNavigate } from "react-router-dom";

const CustomerRegister = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState({
    CUST_ID: "",
    cust_name: "",
    cust_add: "",
    cust_email: "",
    cust_contact: "",
    cust_pass: "",
   
  });


  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCustomers((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
   
    try {
      console.log(customers);
      var jsonStr = '{"customer":[],"man_power":[]}';
      var obj = JSON.parse(jsonStr);

      obj["customer"].push(customers);

      jsonStr = JSON.stringify(obj);
      console.log(jsonStr);
      const response = axios.post(`${newApiUrl}/customer.php?id=post`, jsonStr);
      // console.log(reaponse);
      setCustomers(response.data);

      navigate("/home");
      //  })
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <Form noValidate validated={validated}  method="POST">
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
                      name="cust_id"
                      className="form-control"
                      placeholder="Customer ID"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                      required
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
                      name="cust_name"
                      className="form-control"
                      placeholder="Customer Name"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
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
                      name="cust_add"
                      className="form-control"
                      placeholder="Customer Address"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
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
                      name="cust_email"
                      className="form-control"
                      placeholder="Customer Email"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      name="cust_contact"
                      className="form-control"
                      placeholder="Customer Contact Number"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                 
                <div class="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Password <span className="required-mark">*</span>
                    </label>
                    <input
                      type="password"
                      name="cust_pass"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="input-group">
                  <div className="input-group-1">
                    <label className="labels">
                      Confirm Password <span className="required-mark">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>


                <div className="btn-submit-unique">
                  <Button variant="primary" onClick={handleSubmit}>Create</Button>
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
