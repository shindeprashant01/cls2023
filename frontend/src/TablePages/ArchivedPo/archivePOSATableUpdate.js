import React,{useState, useEffect} from 'react';
// import './newVendorRegiForm.css';
import '../../components/NewVendorRegister/newVendorRegiForm.css'
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../config.js';
import { useNavigate,useParams,Link} from  'react-router-dom';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent.jsx';
import BackTheme from '../BackTheme.js';
import BackThemeFooter from '../BackThemeFooter.js';







function ArchivePOSATableUpdateForm(props)  {

  const queryParameters = new URLSearchParams(window.location.search)
  const cc_id = queryParameters.get('cc_id')


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
    


const [pO, setPO] = useState([]);
// const [newEmployee, setNewEmployee] = useState('');
const[cc_id1,setCc_id1] = useState([]);   
const[po_doc1,setPo_doc1] = useState([]);
const[prime_cust1,setPrime_cust1] = useState([]);
const[end_cust1,setEnd_cust1] = useState([]);
const[remaining_value1,setRemaining_value1] = useState([]);
const[total_po_cost1,setTotal_po_cost1] = useState([]);
const[body1,setBody1] = useState([]);
const[start_date1,setStart_date1] = useState([]);
const[end_date1,setEnd_date1] = useState([]);



  useEffect(() => {
             getUser();
             },[]);


  const getUser = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/po.php?id=edit&cc_id=${cc_id}`)
      // setExpenseTrack(response.data);
       setPO(response.data);
      console.log(response.data[0].cc_id);
      console.log(`${newApiUrl}/po.php?id=edit&cc_id=${cc_id}`);
        setCc_id1(response.data[0].cc_id);
       setPo_doc1(response.data[0].po_doc);
       setPrime_cust1(response.data[0].prime_cust);
       setEnd_cust1(response.data[0].end_cust);
       setRemaining_value1(response.data[0].remaining_value);
       setTotal_po_cost1(response.data[0].total_po_cost);
       setBody1(response.data[0].body);
       setStart_date1(response.data[0].start_date);
       setEnd_date1(response.data[0].end_date);
    
   
      // var Vendor = response.data[0];
      // console.log('vendorNew-',pO['cc_id']);
      // console.log('customername',customer)
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
   axios.put(`${newApiUrl}/po.php?id=update&cc_id=${cc_id}`).then(function(response){
    console.log(response.data);
    // navigate('/');
   });
};


//  console.log('vendor-',vendor_id3);
  return (
    <div>    

       <BackTheme/>

          <div>
        {/* <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large nav-bar">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2">
              <i className="fa fa-bars"></i>
            </a>
            <a
              href="#1"
              className="w3-bar-item w3-button w3-padding-large w3-theme-d4 nirvaa-cls-tag "
            >
              <i className="fa fa-home w3-margin-right"></i> Nirvaa CLS
            </a>
           
            <div className="w3-dropdown-hover">
              <button className="w3-button">Purchase</button>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <a href="/Purchase_form" className="w3-bar-item w3-button">
                  Purchase Form
                </a>
                
              </div>
            </div>
            <div className="w3-dropdown-hover">
              <button className="w3-button">Request</button>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <a href="/expense_request" className="w3-bar-item w3-button">
                  Expense Request
                </a>
                <a href="/Purchase_request" className="w3-bar-item w3-button">
                  Purchase Request
                </a>
              </div>
            </div>
            <div className="w3-dropdown-hover">
            <button className="w3-button">Register</button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
              <a href="/vendor_register" className="w3-bar-item w3-button">
                Vendor Register
              </a>
              <a href="/employee_register" className="w3-bar-item w3-button">
                Employee Register
              </a>
              <a href="/customer_register" className="w3-bar-item w3-button">
              Customer Register
            </a>
            </div>
          </div>


          <div className="w3-dropdown-hover">
          <button className="w3-button">Ticket</button>
          <div className="w3-dropdown-content w3-bar-block w3-border">
            <a href="/create_tickets" className="w3-bar-item w3-button">
              Create Ticket
            </a>
          </div>
        </div>

        <div className="w3-dropdown-hover">
        <button className="w3-button">Report</button>
        <div className="w3-dropdown-content w3-bar-block w3-border">
          <a href="/report_admin" className="w3-bar-item w3-button">
           Report
          </a>
        </div>
      </div>
      <div className="w3-dropdown-hover">
      <button className="w3-button">PO</button>
      <div className="w3-dropdown-content w3-bar-block w3-border">
        <a href="/create_project" className="w3-bar-item w3-button">
          Create Project
        </a>
      </div>
    </div>

            <a
              href="#"
              className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
              title="My Account"
            >
              Logout
            </a>
          </div>
        </div> */}

        <div
          id="navDemo"
          className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large"
        >
          <a href="#" className="w3-bar-item w3-button w3-padding-large"></a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            Link 2
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            Link 3
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            My Profile
          </a>
        </div>

        <div className="w3-container ">
          {/* -- The Grid -- */}
          <div className="w3-row">
            {/* -- Left Column -- */}
            <div className="w3-col m3">
              {/* -- Profile -- */}
             <EmpDetailsComponents/>
              <br />

              {/* -- Accordion -- */}
              <div className="w3-card w3-round">
                <div className="w3-white" id="add"></div>
              </div>
              <br />

              <br />
            </div>

           
          </div>
          <div className="w3-col m4"></div>
        </div>

        <br />
      </div>
  <div className="w3-col m3 note-line">
         <p  className="instructor-line">
           Note:- Do not use " " in this form
         </p>
       </div>
            
      <form >  
      <div className="w3-container w3-card w3-white w3-round w3-margin main-box-vendor-regi">
        <div className="container-vendor-regi">
          <div className="forms-outline-vendor-regi">
            <div style={{color:"rgb(43, 60, 158)" }}>
            <h3>View PO Form :</h3>
            <hr/>
            </div>
          
            <div>
         
            <div className="input-container-vendor-regi">
            <label className="label-vendor-regi">PO ID:</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='cc_id'
                     id='cc_id'
                     className="form-control input-box"
                    //  placeholder={id1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                     value={cc_id1}
                  
                  /> 
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> PO Documents:</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='po_doc'
                     id='po_doc'
                     className="form-control input-box"
                    //  placeholder={service1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  value={po_doc1}
                     placeholder={po_doc1}
                  
                  /> 
                </div>
              </div>


              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Prime Customer:</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='prime_cust'
                     id='prime_cust'
                     className="form-control input-box"
                     placeholder={prime_cust1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  value={prime_cust1}

                  
                  /> 
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> End Customer :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='end_cust'
                     id='end_cust'
                     value={end_cust1}
                    className="form-control input-box"
                    // placeholder={model_no1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Remark:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='remark'
                     id='remark'
                    //  value={company_address1}
                    className="form-control input-box"
                    // placeholder={make1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Remaining Value:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='remaining_value'
                     id='remaining_value'
                     value={remaining_value1}
                    className="form-control input-box"
                    // placeholder={serial_no1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Total PO Cost:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='total_po_cost'
                     id='total_po_cost'
                     value={total_po_cost1}
                    className="form-control input-box"
                    // placeholder={origin1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Assigned Value:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='body'
                     id='body'
                     value={body1}
                    className="form-control input-box"
                    // placeholder={quantity1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Start Date:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='start_date'
                     id='start_date'
                     value={start_date1}
                    className="form-control input-box"
                    // placeholder={unit1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> End Date:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='end_date'
                     id='end_date'
                     value={end_date1}
                    className="form-control input-box"
                    // placeholder={cost1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="btn-submit-vendor-regi">
              <a href='/updated_PODetails'> <Button variant="primary" size='lg'  onClick={handleUpdate}>Update</Button>
          </a>
        {/* // search: `?vendor_id=${vendor_id}`,  */}
         {/* }>  */}
        
         
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <BackThemeFooter/>
   
    </div>
  )
}

export default ArchivePOSATableUpdateForm;









// {data.map(item =>( ))}