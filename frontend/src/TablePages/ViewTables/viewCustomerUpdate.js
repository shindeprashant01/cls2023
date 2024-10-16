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




function ViewCustomerUpdateForm(props) {
  const queryParameters = new URLSearchParams(window.location.search);
  const cust_id = queryParameters.get("cust_id");

  const navigate = useNavigate();

  //  const {id} = useParams();
  //  console.log("this is id :" , vendor_id)

  //   const [data, setData] = useState([]);

  //   useEffect(()=>{
  //     fetch('http://192.168.10.153/json/vendor_details.php?id=edit')
  //     .then(res=>{res.json().then(data => setData(data))}  )
  //       /* .then(data =>console.log(data)) */
  //     .catch(err => console.log(err))
  //  },[])
  const [response, setResponse] = useState("");
  
  
  const [customer, setCustomer] = useState("");
  // const [newEmployee, setNewEmployee] = useState('');
  const [CUST_ID1, setCUST_ID1] = useState([]);
  const [cust_name1, setCust_name1] = useState([]);
  const [cust_add1, setCust_add1] = useState([]);
  const [cust_email1, setCust_email1] = useState([]);
  const [cust_contact1, setCust_contact1] = useState([]);
  const [cust_pass1, setCust_pass1] = useState([]);
  const [cust_repeatPass1, setCust_repeatPass1] = useState([]);

  const [state_Name1, setState_Name1] = useState([]);
  const [gSTIN1, setGSTIN1] = useState([]);
  const [code1, setCode1] = useState([]);

  

  // const [customers, setCustomers] = useState({
  //   CUST_ID1: "",
  //   cust_name: "",
  //   cust_add1: "",
  //   cust_email1: "",
  //   cust_contact1: "",
  //   cust_pass1: "",
  // });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${newApiUrl}/customer.php?id=edit&cust_id=${cust_id}`
      );
     
      // setExpenseTrack(response.data);
      setCustomer(response.data[0]);
      console.log(response.data[0].CUST_ID);

      var prash = response.data[0]
      console.log(prash);
     

      setCUST_ID1(response.data[0].CUST_ID);
      setCust_name1(response.data[0].cust_name);
      setCust_add1(response.data[0].cust_add);
      setCust_email1(response.data[0].cust_email);
      setCust_contact1(response.data[0].cust_contact);
      setCust_pass1(response.data[0].cust_pass);
      setCust_repeatPass1(response.data[0].cust_repeatPass);

      // setState_name1(response.data[0].state_name);
      // setGSTIN1(response.data[0].GSTIN_UIN);
      // setCode1(response.data[0].code);

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

    const responsed = await axios.get(
      `${newApiUrl}/customer.php?id=update&cust_id=${cust_id}`
    )
    console.log(value);
        // console.log(responsed.data[0].cust_name1);
    // if(responsed.data[0].cust_name1 == event.target.value){
    // // setCUST_ID1((values) => ({ ...values, [name]: value }));
    // setCust_name1(value);
    // console.log(value);
    // }else{

    //   setCust_name1(responsed.data[0].cust_name);
    // }

    // if(responsed.data[0].cust_add1 == event.target.value){
    //   // setCUST_ID1((values) => ({ ...values, [name]: value }));
    //   setCust_add1(value);
    //   console.log(value);
    //   }else{
  
    //     setCust_add1(responsed.data[0].cust_add);
    //   }
    // setCustomers(e.target.value);

    // setVendor(values=>({...values,[name]:value}));
    //  setVendor_id1(values => ({...values,[name]: value}));
    //  setCompany_name1(values => ({...values,[name]: value}));
    //  setCompany_address1(values => ({...values,[name]: value}));
  };

  const handleUpdate = (event) => {
   
    event.preventDefault();
    try {
      //  .then((response)=>{
      // var jsonStr = '{"budget":[],"man_power":[]}'
      // var obj = JSON.parse(jsonStr);

      // jsonStr = JSON.stringify(obj);

      // console.log(response.data);
    
      customer.cust_name = cust_name1;
      customer.cust_add = cust_add1;
      customer.cust_email = cust_email1;
      customer.cust_contact = cust_contact1;
      customer.cust_pass = cust_pass1;
      customer.cust_repeatPass = cust_repeatPass1;
      customer.State_Name = state_Name1;
      customer.GSTIN_UIN= gSTIN1;
      customer.code = code1;   
      
      console.log(customer);
     

      var jsonStr = '{"customerUpdate":[],"man_power":[]}';
      var obj = JSON.parse(jsonStr);

      obj["customerUpdate"].push(customer);

      jsonStr = JSON.stringify(obj);
      console.log(jsonStr);
      

      //  const response = axios.put(
      //   'https://jsonplaceholder.typicode.com/posts/1',
      //   jsonStr
      // );

      const response = axios.put(
        `${newApiUrl}/customer.php?id=update&cust_id=${cust_id}`,
        jsonStr
      );
    setCustomer(response.data);   
    console.log(response);
      // console.log(customer);
      // console.log(response);
      // setCustomers('vbvb');
        alert("updated Successfully");
      navigate("/home");
      //  })
    } catch (error) {
      console.log(error);
    }
    // event.preventDefault();
    // alert("updated Successfully");
    // console.log("customer", CUST_ID1);
    // navigate("/home");
    //  axios.put(`${newApiUrl}/customer.php?id=update&cust_id=${cust_id}`).then(function(response){
    //   console.log(response.data);

    // navigate('/');
    //  });
  };

//   const handleUpdate2 = async (event,response) => {
//     event.preventDefault();
//     try {
//         console.log(customers);

//         // Fetch original data from response.data[0]
//         var originalData = response.data[0];

//         // Update only the fields that have changed
//         const updatedData = { ...originalData };

//         for (var key in customers) {
//             if (customers.hasOwnProperty(key) && customers[key] !== originalData[key]) {
//                 updatedData[key] = customers[key];
//             }
//         }

//         console.log(updatedData);

//         // Prepare the updated JSON string
//         const jsonStr = JSON.stringify({
//             customerUpdate: [updatedData],
//             man_power: []
//         });


        
//         // Send PUT request to update the data
//         const response = await axios.put(
//             `http://localhost/json/customer.php?id=update`,
//             jsonStr
//         );

//         console.log(response);

//         // Reset the customers state if necessary
//         setCustomers({});

//         // Navigate to the desired location
//         navigate("/");

//         // Show success message
//         alert("Updated Successfully");
//     } catch (error) {
//         console.log(error);
//         // Handle errors appropriately
//         // Show error message, rollback changes, etc.
//     }
// };


// const fetchData = async () => {
//   try {
//     const response = await axios.get(`${newApiUrl}/customer.php?id=edit&cust_id=${cust_id}`);
//     setResponse(response); // Assuming 'response' is stored in component state
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Handle error, e.g., set error state or display an error message
//   }
// };
// const handleUpdate22 = async (event, response) => {
//   event.preventDefault();
//   try {
    

//       // Fetch original data from response.data[0]
//       const originalData = response.data[0];
//       console.log(response.data[0])

//       // Update only the fields that have changed
//       const updatedData = { ...originalData };

//       for (let key in customers) {
//           if (customers.hasOwnProperty(key) && customers[key] !== originalData[key]) {
//               updatedData[key] = customers[key];
//           }
//       }

//       console.log(updatedData);

//       // Prepare the updated JSON string
//       const jsonStr = JSON.stringify({
//           customerUpdate: [updatedData],
//           man_power: []
//       });

//       // Send PUT request to update the data
//       const putResponse = await axios.put(
//           'http://localhost/json/customer.php?id=update',
//           jsonStr
//       );

//       console.log(putResponse);

//       // Reset the customers state if necessary
//       // setCustomers({});
//       setCust_name1({});

//       // Navigate to the desired location
//       // navigate("/");

//       // Show success message
//       alert("Updated Successfully");
//   } catch (error) {
//       console.log(error);
//       // Handle errors appropriately
//       // Show error message, rollback changes, etc.
//   }
// };



// const handleUpdate4 = async (event) => {
//   event.preventDefault();

//   // const responsed = await axios.get(
//   //   `${newApiUrl}/customer.php?id=edit&cust_id=${cust_id}`
//   // )
   
//   //   console.log(responsed.data[0]);

//   //   if(responsed.data[0] !== ""){

//   //     const responsed = await axios.put(
//   //       `http://localhost/json/customer.php?id=update`,
//   //       jsonStr
//   //   );
//   //   console.log(responsed.data);

//   //   }

//   try {

//     // var jsonStr = '{"customerUpdate":[],"man_power":[]}';
//       var obj = JSON.parse(jsonStr);

//       obj["customerUpdate"].push(customer);

//       // jsonStr = JSON.stringify(obj);
//       // console.log(jsonStr);
      
//       // const response = axios.put(`${newApiUrl}/customer.php?id=update`, jsonStr)
//       // .then()

//       // setCustomers(responsed.data);
//       // console.log(response.data);



   


//       // console.log(response.data[0]);




//       // // Initialize an empty array to store updated customer data
//       const updatedCustomerData = [];

//       // // Iterate over each property in 'customers' to identify changes
//       // for (let key of customer) {
//       //     if (customers.hasOwnProperty(key)) {

//       //       console.log(response.data[0]);
//       //         // Check if the value has changed from the original data
//       //         if (customer[key] !== response.data[0][key]) {
//       //             // If changed, add the updated property to the array
//       //             updatedCustomerData.push({ [key]: customer[key] });
//       //         }
//       //     }
//       // }

//       // // Prepare the updated customer data object
//       const updatedData = {
//           customerUpdate: updatedCustomerData,
//           man_power: []  // You can add additional data here if needed
//       };

//       // // Stringify the updated object to JSON format
//       const jsonStr = JSON.stringify(updatedData);

//       // // Send HTTP PUT request to update the data
//       const response = await axios.put(
//           `http://localhost/json/customer.php?id=update`,
//           jsonStr
//       );

//       console.log(response.data);

//       // // Clear the 'customers' state or perform any necessary cleanup
//       setCustomers({});

      

//       // Show success message
//       alert("Updated Successfully");
//   } catch (error) {
//       console.log(error);
//       // Handle errors appropriately
//   }
// };


// const handleUpdate11 = async () => {
//   try {

//     if(response.data[0] === ""){

//       const response = await axios.get(
//         `${newApiUrl}/customer.php?id=edit&cust_id=${cust_id}`
//       );
     
//       // setExpenseTrack(response.data);
//       setCustomer(response.data);
//       console.log(response.data[0].CUST_ID);
//       console.log(response.data[0]);
  
//       setCUST_ID1(response.data[0].CUST_ID);
//       setCust_name1(response.data[0].cust_name);
//       setCust_add1(response.data[0].cust_add);
//       setCust_email1(response.data[0].cust_email);
//       setCust_contact1(response.data[0].cust_contact);
//       setCust_pass1(response.data[0].cust_pass);
  
//       // var Vendor = response.data[0];
//       // console.log('vendorNew-',Vendor['vendor_id']);
//       // console.log('customername',customer)
//     } else{





//     }


    
//   } catch (error) {
//     console.log(error);
//   }
// };



// const handleSubmit = async (event) => {
  
//   handleUpdate(event, response);
// };


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
                      onChange={e => setCust_name1(e.target.value)}
                      // onChange={handleChange}
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
                      // value={cust_add1}
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
                      onChange={e => setGSTIN1(e.target.value)}
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi"> State Name:</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="State_Name"
                      id="State_Name"
                      //  value={vendor.vendor_contactno}
                      className="form-control input-box"
                      placeholder="State Name"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={e => setState_Name1(e.target.value)}
                     
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
                      onChange={e => setCode1(e.target.value)}
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
                  
                    Customer Password :
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
                      // onChange={e => setCust_pass1(e.target.value)}
                      // onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container-vendor-regi">
                  <label className="label-vendor-regi">
                   
                    Confirm Password:
                  </label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="password"
                      name="cust_repeatPass"
                      id="cust_repeatPass"
                      //  value={vendor.vendor_email}
                      className="form-control input-box"
                      value={cust_repeatPass1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      // onChange={e => setCust_repeatPass1(e.target.value)}
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

export default ViewCustomerUpdateForm;

// {data.map(item =>( ))}
