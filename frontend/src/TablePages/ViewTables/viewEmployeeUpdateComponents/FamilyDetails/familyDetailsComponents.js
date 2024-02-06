import React,{useState, useEffect} from 'react';
// import '../../../../components/NewVendorRegister/newVendorRegiForm.css'
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../../../config';
import Form from "react-bootstrap/Form";
import { useNavigate,useParams,Link} from  'react-router-dom';
import '../../viewEmployeeUpdate.css'
import BackTheme from '../../../BackTheme';
import FamilyDetailsForm from './familyDetailsForm';


const familyDetailsComponents = (props) => {
   
    
  const queryParameters = new URLSearchParams(window.location.search)
  const emp_id = queryParameters.get('emp_id');



//   const [family,setFamily] = useState([]);


//   useEffect(() => {
//              getUser();
//              },[]);
  

  const getUser = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/employee.php`)
      // setExpenseTrack(response.data);
    //    setFamily(response.data)
  
     } catch (error) {
      console.log(error);
    }
  };
 const handleChange =(event)=>{
  const name = event.target.name;
  const value = event.target.value;
  // setVendor(values=>({...values,[name]:value}));
  //  setVendor_id1(values => ({...values,[name]: value}));
  //  setCompany_name1(values => ({...values,[name]: value}));
  //  setCompany_address1(values => ({...values,[name]: value}));
  }

const handleUpdate = (event) => {
        event.preventDefault();
   axios.put(`${newApiUrl}/employee.php?id=update&emp_id=${emp_id}`).then(function(response){
    console.log(response.data);
    // navigate('/');
   });
};



  return (
    <div>
 <BackTheme/>
  <div className="w3-col m3 note-line">
         <p  className="instructor-line">
           Note:- Do not use " " in this form
         </p>
       </div>
            
      <form >  
      <div className="w3-container w3-card w3-white w3-round w3-margin main-box-update-employee">
        <div  >
            <div>
        <div style={{marginLeft:"180px", marginTop:"50px"}}>
            <h3 style={{color:"rgb(43, 60, 158)"}}> Update Employee Details :</h3><br/>

          </div>
          <div  className='sub-nav-bar-update-employee'>
        {/* <div className="w3-dropdown-hover">
            <button className="w3-button">Personal Details</button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
              <a href="/Purchase_form" className="w3-bar-item w3-button">
               
              </a>
              
            </div>
          </div> */}
          <div className="w3-dropdown-hover">
          <Link to= {`/family_details?emp_id=${emp_id}`} className="w3-bar-item w3-button">
                Family Details
              </Link> 
          </div>

          <div className="w3-dropdown-hover">
            <Link to= {`/educational_details?emp_id=${emp_id}`} className="w3-bar-item w3-button">
                Educational Details
              </Link> 
          </div>

          <div className="w3-dropdown-hover">
          <Link to= {`/educational_details?emp_id=${emp_id}`} className="w3-bar-item w3-button">
            Work Experience
              </Link> 
          </div>

          <div className="w3-dropdown-hover">
          <Link to= {`/achievement_details?emp_id=${emp_id}`} className="w3-bar-item w3-button">
            Achievement & Hobbies
              </Link> 
          </div>
          </div>
        </div>
        </div>
        <div className="container-vendor-regi">
          <div className="forms-outline-vendor-regi">
         
            <div>
              {/* <div className="input-container-update-employee">
              <label className="labels-update-employeee"> Employee ID :</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='emp_id'
                     id='emp_id'
                     className="form-control input-box"
                    //  placeholder={emp_id1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    
                  /> 
                </div>
              </div> */}

              {/* <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Employee Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='Company_name'
                     id='Company_name'
                    //  value={Company_name1}
                    className="form-control input-box"
                    // placeholder={emp_name1}
                    // value={cust_name1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    // onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                
              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Present Address :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control input-box"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>


              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Permanent Address :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control input-box"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-update-employee">
            <label className="labels-update-employeee-select">Department:</label>
            <div className="input-div-update-employee">
              <Form.Select aria-label="Default select example input-div-pforms-label"
              name="department"
              id="departmenr"
            //   value={selectedValue}
            //   onChange={handleSelectChange }
             >
                <option>Others</option>
                <option value="account">Account</option>
                <option value="electrical">Electrical</option>
                <option value="hvac">HVAC</option>
                <option value="ibms">IBMS</option>
                <option value="it">IT</option>
                <option value="opearation">Operation</option>
                <option value="purchase">Purchase</option>
              </Form.Select>
            </div>
          </div>



          <div className="input-container-update-employee">
            <label className="labels-update-employeee-select">Position:</label>
            <div className="input-div-update-employee">
              <Form.Select aria-label="Default select example input-div-pforms-label"
              name="department"
              id="departmenr"
            //   value={selectedValue}
            //   onChange={handleSelectChange }
             >
                <option>Others</option>
                <option value="account">Super Administrator</option>
                <option value="electrical">Operation Administrator</option>
                <option value="hvac">Program Manager</option>
                <option value="ibms">Admin Associate</option>
                <option value="it">Functional Manager</option>
                <option value="opearation">Service Engineer</option>
                <option value="purchase">Executive</option>
                <option value="purchase">Amount Payable</option>
                <option value="purchase">Tendor</option>
                <option value="purchase">HR</option>
                <option value="purchase">Sales</option>
                
              </Form.Select>
            </div>
          </div>


          <div className="input-container-update-employee">
            <label className="labels-update-employeee-select">Region:</label>
            <div className="input-div-update-employee">
              <Form.Select aria-label="Default select example input-div-pforms-label"
              name="department"
              id="departmenr"
            //   value={selectedValue}
            //   onChange={handleSelectChange }
             >
                <option>All India</option>
                <option value="account">West</option>
                <option value="electrical">East</option>
                <option value="hvac">North</option>
                <option value="ibms">South</option>
               
                
              </Form.Select>
            </div>
          </div>



              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Contact No:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_name'
                     id='vendor_name'
                    //  value={vendor.vendor_name}
                    className="form-control input-box"
                    // placeholder={cust_email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Email ID:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_contactno'
                     id='vendor_contactno'
                    //  value={vendor.vendor_contactno}
                    className="form-control input-box"
                    // placeholder={cust_contact1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Date Of Birth:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="date"
                     name='vendor_contactno2'
                     id='vendor_contactno2'
                    //  value={vendor.vendor_contactno2}
                    className="form-control input-box"
                    // placeholder={cust_pass1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>


              <div className="input-container-update-employee">
            <label className="labels-update-employeee-select">Maritial Status:</label>
            <div className="input-div-update-employee">
              <Form.Select aria-label="Default select example input-div-pforms-label"
              name="department"
              id="departmenr"
            //   value={selectedValue}
            //   onChange={handleSelectChange }
             >
                <option>--Select--</option>
                <option value="account">Married</option>
                <option value="electrical">Unmarried</option>   
              </Form.Select>
            </div>
          </div>


          <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Wedding Date:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="date"
                     name='vendor_contactno2'
                     id='vendor_contactno2'
                    //  value={vendor.vendor_contactno2}
                    className="form-control input-box"
                    // placeholder={cust_pass1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>


              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> No.of Children :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email'
                     id='vendor_email'
                    //  value={vendor.vendor_email}
                    className="form-control input-box"
                    // placeholder={cust_email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
            


              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> PAN No :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email'
                     id='vendor_email'
                    //  value={vendor.vendor_email}
                    className="form-control input-box"
                    // placeholder={cust_email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                  <input type="file" className="input-box-unique-1" />
                </div>
              </div>

              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Aadhar No :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email'
                     id='vendor_email'
                    //  value={vendor.vendor_email}
                    className="form-control input-box"
                    // placeholder={cust_email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                  <input type="file" className="input-box-unique-1" />
                </div>
              </div>

               <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Bank Account No :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email'
                     id='vendor_email'
                    //  value={vendor.vendor_email}
                    className="form-control input-box"
                    // placeholder={cust_email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />

                </div>
              </div>

              <div className="input-container-update-employee">
                <label className="labels-update-employeee"> Password:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email'
                     id='vendor_email'
                    //  value={vendor.vendor_email}
                    className="form-control input-box"
                    // placeholder={cust_email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />

                </div>
              </div> */}
              
             <FamilyDetailsForm/>
              <div className="btn-submit-vendor-regi">
              <a href='/edit_customers'> <Button variant="primary" size='lg'  onClick={handleUpdate}>Update</Button>
          </a>
        {/* // search: `?vendor_id=${vendor_id}`,  */}
         {/* }>  */}
        
         
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
   
    </div>









    //  <div className="w3-dropdown-hover">
    //         <button className="w3-button"> Add Members</button>
    //         <div className="w3-dropdown-content w3-bar-block w3-border">
    //           <a href="" className="w3-bar-item w3-button">
            
    //           </a>
              
    //         </div>
    //       </div>
    
  )
}

export default familyDetailsComponents