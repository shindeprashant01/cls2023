import React, { useState } from "react";
import "./purchaseForm.css";
import ProductDetails from "./ProductDetails/productDetails";
import TotalDetails from "./TotalDetails/totalDetails";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { FaSistrix } from "react-icons/fa";
// import { BootstrapIcon } from 'react-bootstrap-icons';

// import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@mui/icons-material/Search';

const PurchaseForm = () => {
  //   const [number, setNumber]= useState();
  // const [number2, setNumber2]= useState();
  // const [total, setTotal]= useState(number*number2);
  // const[selectedValue, setSelectedValue]= useState();
  //   const [result, setResult] = useState(total + selectedValue);

  //   const calculate = () => {
  //     const selected = parseFloat(selectedValue);
  //     const input = parseFloat(total);

  //     if (!isNaN(selected) && !isNaN(input)) {
  //       const calculatedResult = (selected/100) * input;
  //       const totalCalculatedResult = calculatedResult + input ;
  //       setResult(totalCalculatedResult);
  //     } else {
  //       setResult('Please enter valid values.');
  //     }
  //   };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    purchaseOrderNo: '',
    quatNumber: '',
    billTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const formHandleSumbit = (e) => {
    e.preventDefault();
    // Store the form data or send it to a server as needed
    // For this example, we'll use local state to store data
    localStorage.setItem("purchaseData", JSON.stringify(formData));

    // Redirect to the table page
  navigate("/table");
  };
  return (
    <div className="body-purchases">
      <form onSumbit={formHandleSumbit}>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-p">
          <div className="container-pforms">
            <div className="forms-outline-pforms">
              <div>
                <div className="tags">
                  <h2>Purchase Form</h2> <hr />
                </div>

                {/* Purchase Form Section -- Start*/}
                <div className="purchase-form">
                  <div className="input-container-pform">
                    <label htmlFor="purchaseOrderNo" className="label-pforms">Purchase Order No:</label>
                    <div>
                      <input
                        type="text"
                        className="form-control input-details-pform"
                        placeholder="Purchase Order No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        
                     name="purchaseOrderNo"
                     value={formData.purchaseOrderNo}
                     onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="input-container-pform">
                    <label htmlFor='quatationNumber' className="label-pforms">Quatation Number:</label>
                    <div>
                      <input
                        type="text"
                        className="form-control input-details-pform"
                        placeholder="Quatation No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        id="quat"
                        name="quatNumber"

                        value={formData.quatNumber}
                        onChange={handleChange}
                      />
                      
                    </div>
                  </div>

                  <div className="input-container-pform">
                    <label htmlFor="billTo" className="label-pforms">Bill To:</label>

                    <input
                      type="text"
                      className="form-control input-details-pform"
                      placeholder="Bill To."
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      id="billTo"
                      name="billTo"
                      value={formData.billTo}
                       onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Purchase Form Section -- Ended  */}

                <div className="tags">
                  <h2>Vendor Details</h2>
                  <hr />
                </div>

                {/* Vendor Details Section -- Start */}
                <div className="vendor-details">
                  <div className="vendor-sub-details">
                    <div className="input-container-vendor-detail">
                      <label htmlFor="companyName" className="label-pforms">Company Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder=" Company Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        id="companyName"
                        name="companyName"
                      />
                      <span>
                        <FaSistrix className="various-icon" />
                      </span>
                    </div>
                    <div className="input-container-vendor-detail">
                      <label  htmlFor="address" className="label-pforms">Address:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Address"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <div className="input-container-vendor-detail">
                      <label htmlFor="vendorName" className="label-pforms">Vendor Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Vendor Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label htmlFor="contactNo" className="label-pforms">Contact No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="Contact No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label htmlFor="gstNo" className="label-pforms">GSTIN No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="GSTIN No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="tags">
                  <h2>Ship To</h2>
                  <hr />
                </div>
                <div className="ship-details">
                  <div className="ship-sub-details">
                    <div className="input-container-vendor-detail">
                      <label htmlFor="ship-name" className="label-pforms">Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label htmlFor="ship-address" className="label-pforms">Address:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Address"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label htmlFor="ship-se1-name" className="label-pforms">S.E.Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder="S.E Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <span>
                        <FaSistrix className="various-icon" />
                      </span>
                    </div>
                    <div className="input-container-vendor-detail">
                      <label htmlFor="ship-se1-contact-no" className="label-pforms">Contact No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="Contact No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label htmlFor="ship-se2-name" className="label-pforms">S.E.Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder="S.E Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <span>
                        <FaSistrix className="various-icon" />
                      </span>
                    </div>
                    <div className="input-container-vendor-detail">
                      <label htmlFor="ship-se2-contact-no" className="label-pforms">Contact No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="Contact No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="ship-details">
                  <div className="ship-sub-details">
                    <ProductDetails />
                  </div>
                </div>
                <div className="total-detail">
                  <TotalDetails
                  // result={result} calculate={calculate} total={total} selectedValue={selectedValue}
                  />
                </div>
                <div className="btn-submit-pform">
                  <Button variant="primary" type="submit">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
