import React, { useState, useEffect } from "react";
import "../../components/NewVendorRegister/newVendorRegiForm.css";
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from "../config";
import { useNavigate, useParams, Link } from "react-router-dom";
import BackTheme from "../BackTheme";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";




function ViewCustomer1(props) {
  const queryParameters = new URLSearchParams(window.location.search);
  const cust_id = queryParameters.get("cust_id");

  const navigate = useNavigate();


  
  
  const [customer, setCustomer] = useState({

    cust_name1 :""
});
  // const [newEmployee, setNewEmployee] = useState('');
  const [CUST_ID1, setCUST_ID1] = useState([]);
  const [cust_name1, setCust_name1] = useState([]);
  const [cust_add1, setCust_add1] = useState([]);
  const [cust_email1, setCust_email1] = useState([]);
  const [cust_contact1, setCust_contact1] = useState([]);
  const [cust_pass1, setCust_pass1] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${newApiUrl}/customer.php?id=edit&cust_id=${cust_id}`
      );
     
      // setExpenseTrack(response.data);
      setCustomer(response.data);
      console.log(response.data[0].CUST_ID);

      var prash = response.data[0]
      console.log(prash);
      setCUST_ID1(response.data[0].CUST_ID);
      setCust_name1(response.data[0].cust_name);
      setCust_add1(response.data[0].cust_add);
      setCust_email1(response.data[0].cust_email);
      setCust_contact1(response.data[0].cust_contact);
      setCust_pass1(response.data[0].cust_pass);

      // var Vendor = response.data[0];
      // console.log('vendorNew-',Vendor['vendor_id']);
      // console.log('customername',customer)
    } catch (error) {
      console.log(error);
    }
  };


 
  
  const handleChange =  async (event) => {
    // event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    

  }

 



const handleUpdate = async (event, response) => {
 

 
    
    
};













  //  console.log('vendor-',vendor_id3);
  return (
    <div>
      <div>
        <BackTheme />

        <div className="w3-container ">
          {/* -- The Grid -- */}
          <div className="w3-row">
            {/* -- Left Column -- */}
            <div className="w3-col m3">
              {/* -- Profile -- */}
              <EmpDetailsComponents />
              <br />

              {/* -- Accordion -- */}
              <div className="w3-card w3-round">
                <div className="w3-white" id="add"></div>
              </div>
              <br />

              <br />
            </div>
          </div>
        </div>

        <br />
      </div>
      <div className="w3-col m3 note-line">
        <p className="instructor-line">Note:- Do not use " " in this form</p>
      </div>

      <form>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-vendor-regi">
          <div className="container-vendor-regi">
            <div className="forms-outline-vendor-regi">
              <div>
                <h3 style={{ color: "rgb(43, 60, 158)" }}>
                
                  Update Customer Details :
                </h3>
              </div>
              <div>
                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi"> Customer ID :</label>
                  <div className="input-details-vendor-regi">
                    <input
                      //  type="number"
                      name="CUST_ID"
                      id="CUST_ID"
                      className="form-control input-box"
                      //  placeholder={CUST_ID1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={CUST_ID1}
                    />
                  </div>
                </div>

                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi"> Customer Name :</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="cust_name"
                      id="cust_name"
                      //  value={cust_name1}
                      className="form-control input-box"
                      placeholder={cust_name1}
                      // value={customers.cust_name}
                      aria-label="Large"  
                      aria-describedby="inputGroup-sizing-sm"
                      // onChange={e => setCust_name1(e.target.value)}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi">
                    Customer Address :
                  </label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="company_add"
                      id="company_add"
                      //  value={company_address1}
                      className="form-control input-box"
                      placeholder={cust_add1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      // onChange={handleChange}
                      onChange={e => setCust_add1(e.target.value)}
                    />
                  </div>
                </div>

                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi"> Customer Email:</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="cust_email"
                      id="cust_email"
                      //  value={vendor.vendor_name}
                      className="form-control input-box"
                      placeholder={cust_email1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={e => setCust_email1(e.target.value)}
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi"> GSTIN/UIN:</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="GSTIN/UIN"
                      id="GSTIN/UIN"
                      //  value={vendor.vendor_contactno}
                      className="form-control input-box"
                      placeholder="GSTIN/UIN"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={e => setCust_email1(e.target.value)}
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi"> State Name:</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="state_name"
                      id="state_name"
                      //  value={vendor.vendor_contactno}
                      className="form-control input-box"
                      placeholder="State Name"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={e => setCust_contact1(e.target.value)}
                     
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi"> Code:</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="code"
                      id="code"
                      //  value={vendor.vendor_contactno}
                      className="form-control input-box"
                      placeholder="code"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      // onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi">
                  
                    Customer Contact:
                  </label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="cust_contact"
                      id="cust_contact"
                      //  value={vendor.vendor_contactno}
                      className="form-control input-box"
                      placeholder={cust_contact1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={e => setCust_contact1(e.target.value)}
                      
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi">
                  
                    Customer Passwaord :
                  </label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="password"
                      name="cust_pass"
                      id="cust_pass"
                      //  value={vendor.vendor_contactno2}
                      className="form-control input-box"
                      value={cust_pass1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={e => setCust_pass1(e.target.value)}
                      // onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi">
                   
                    Confirm Password Eamil :
                  </label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="password"
                      name="vendor_email"
                      id="vendor_email"
                      //  value={vendor.vendor_email}
                      className="form-control input-box"
                      value={cust_pass1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      // onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="btn-submit-vendor-regi">
                  <a>
                 
                    <Button variant="primary" size="lg" onClick={handleUpdate}>
                      Update
                    </Button>
                  </a>
                  {/* // search: `?vendor_id=${vendor_id}`,  */}
                  {/* }>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackThemeFooter />
      </form>
    </div>
  );
}

export default ViewCustomer1;

// {data.map(item =>( ))}
