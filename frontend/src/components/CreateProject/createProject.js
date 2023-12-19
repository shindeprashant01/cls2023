import React, { useState } from "react";
import "./createProject.css";
// import ProductDetails from "./ProductDetails/productDetails";
import Button from "react-bootstrap/Button";
// import { FaSistrix } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import ServiceFolder from "./serviceFolder";

const CreateProject = () => {
    
  const [gstValue, setGstValue] =useState()
  const [resultGst, setResultGst] = useState(gstValue);
  const[basicPo,setBasicPo] = useState()
  // const[prash, setPrash] = useState(gstValue + resultGst)


  const handleInputChangePo = () => {
 
   
    const newAdd = basicPo + resultGst
    setBasicPo(newAdd);
  
  };

  const calculatePo = () => {
    const selected = parseFloat(gstValue);
    const input = parseFloat(basicPo);
    if (!isNaN(selected) && !isNaN(input)) {
      const calculatedResult = (selected/100) * input;
      const totalCalculatedResult = calculatedResult + input ;
      setBasicPo(totalCalculatedResult);
    } else {
      setBasicPo('Please enter valid values.');
    }
    

  };


  const handleSelectGstChange = (e) => {
    setGstValue(parseInt(e.target.value));
  };

  const addGst=()=>{
    setResultGst(gstValue)
  }


  return (
    <div className="body-project">
      <form>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-create-project">
          <div className="container-create-project">
            <div className="forms-outline-create-project">
              <div>
                <div className="tags-create-project">
                  <h1>Project Registration</h1> <hr />
                </div>

                {/* Create Project -- Start*/}
                <div className="create-project">
                  <div className="input-container-create-project">
                    <input
                      type="text"
                      className="form-control select-create-project"
                      placeholder="Project Number"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>

                  <div className="input-container-create-project">
                    <Form.Select
                      aria-label="Default select example"
                      className="select-create-project"
                    >
                      <option>Assign Project Manager</option>
                      <option value="1">Jagdish Shinde</option>
                      <option value="2">Vinod Kharik</option>
                      <option value="3">Pranit Patil</option>
                      <option value="4">Ganesh Gorde</option>
                    </Form.Select>
                  </div>
                </div>
                {/* Create Project -- Ended  */}

                {/* Service Section -- Start */}
                <div className="tags-create-project">
                  <h2>Services</h2>
                  <hr />
                </div>
               <ServiceFolder/>

                <div className="subcontainer-create-project">
                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      {" "}
                      Upload PO
                    </label>
                    <div className="input-detail-create-project">
                      <input type="file" />
                    </div>
                  </div>
                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      {" "}
                      Project Doc:
                    </label>
                    <div className="input-detail-create-project">
                      <input type="file" className="select-create-project" />
                    </div>
                  </div>
                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      Prime Customer:
                    </label>
                    <div className="input-detail-create-project">
                      <Form.Select
                        aria-label="Default select example"
                        className="select-create-project"
                      >
                        <option>Select Prime Customer</option>
                        <option value="1">Purchase</option>
                        <option value="2">Maintanance</option>
                        <option value="3">Industry</option>
                        <option value="4">Humon Resource</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      End Customer:
                    </label>
                    <div className="input-detail-create-project">
                      <input
                        type="text"
                        className="form-control select-create-project"
                        placeholder="End Customer"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      Basci PO Cost:
                    </label>
                    <div className="input-detail-create-project">
                      <input
                        type="text"
                        className="form-control select-create-project"
                        placeholder="Basic PO Cost"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        // value={basicPo}
                      />
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <div className="radio-input">
                      <label className="label-subcontainer-create-project">
                        {" "}
                        <input type="radio" value="GST" name="option" />
                        GST
                      </label>
                      <label className="label-subcontainer-create-project">
                        {" "}
                        <input type="radio" value="IGST" name="option"/>
                        IGST
                      </label>
                    </div>
                    <div className="input-detail-create-project">
                      <Form.Select
                        aria-label="Default select example"
                        className="select-create-project"
                        value={gstValue}
                        onChange={handleSelectGstChange} 
                      >
                        <option>--Select GST/IGST--</option>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                        <option value="4">Other</option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                     
                      GST/IGST Amount:
                    </label>
                    <div className="input-detail-create-project">
                      <input
                        type="text"
                        className="form-control select-create-project"
                        placeholder="GST/IGST Amount"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        value={resultGst}
                        onKeyUp={addGst}
                      />
                    </div>
                  </div>
                  <div className="btn-submit-create-project">
                    <Button variant="secondary" onClick={calculatePo}>Calculate Total PO Cost</Button>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      Total PO Cost(Basic+GST):
                    </label>
                    <div className="input-detail-create-project">
                      <input
                        type="text"
                        className="form-control select-create-project"
                        placeholder="Total PO Cost"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        value={basicPo}
                        // value={resultGst}
                        onChange={handleInputChangePo}
                      />
                    </div>
                  </div>
                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      Assigned Value:
                    </label>
                    <div className="input-detail-create-project">
                      <input
                        type="text"
                        className="form-control select-create-project"
                        placeholder="Assigned Value"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      Remaining Value:
                    </label>
                    <div className="input-detail-create-project">
                      <input
                        type="text"
                        className="form-control select-create-project"
                        placeholder="Remaining Value"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      Paid Consumable:
                    </label>
                    <div className="input-detail-create-project">
                      <input
                        type="text"
                        className="form-control select-create-project"
                        placeholder="Paid Consumable"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      Start Date:
                    </label>
                    <div className="input-detail-create-project">
                      <input type="date" className="date-type-create-project" />
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      End Date:
                    </label>
                    <div className="input-detail-create-project">
                      <input type="date" className="date-type-create-project" />
                    </div>
                  </div>

                  <div className="input-subcontainer-create-project">
                    <label className="label-subcontainer-create-project">
                      {" "}
                      Reamrk:
                    </label>
                    <div className="input-detail-create-project">
                      <textarea
                        rows={2} // You can adjust the number of rows
                        cols={52} // You can adjust the number of columns
                        placeholder="Enter a description..."
                        className="text-area-create-project"
                      />
                    </div>
                  </div>
                  <div className="btn-submit-create-project">
                    <Button variant="primary">Create</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;

// <div className="ship-details">
// <div className="ship-sub-details">
// <ProductDetails />

// <div className="input-group-create-project">
// <div className="input-group-1-create-project">
//   <label className="label-create-project">
//     Employee ID:
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     placeholder="Employee ID"
//     aria-label="Large"
//     aria-describedby="inputGroup-sizing-sm"
//   />
// </div>
// </div>

// <div className="input-group-create-project">
// <div className="input-group-1-create-project">
//   <label className="label-create-project">
//     Employee Name:
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     placeholder="Employee ID"
//     aria-label="Large"
//     aria-describedby="inputGroup-sizing-sm"
//   />
// </div>
// </div>

// <div>
// <Form.Check type="radio" aria-label="radio 1" inline="true" isInvalid="true" reverse="true" />
// <label>GST</label>
// </div>
// <div>
// <Form.Check type="radio" aria-label="radio 1" inline="true" isValid="true" />
// <label>IGST</label>
// </div>
