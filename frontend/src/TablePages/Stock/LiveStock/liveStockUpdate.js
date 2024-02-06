import React,{useState, useEffect} from 'react';
// import './newVendorRegiForm.css';
import '../../../components/NewVendorRegister/newVendorRegiForm.css'
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../../config';
import { useNavigate,useParams,Link} from  'react-router-dom';






function LiveStockUpdateForm(props)  {

  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")


  

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
    


const [stock, setStock] = useState([]);
// const [newEmployee, setNewEmployee] = useState('');
const[id1,setId1] = useState([]);
const[service1,setService1] = useState([]);
const[category1,setCategory1] = useState([]);
const[specification1,setSpecification1] = useState([]);
const[model_no1,setModel_no1] = useState([]);
const[make1,setMake1] = useState([]);
const[serial_no1,setSerial_no1] = useState([]);
const[origin1,setOrigin1] = useState([]);
const[quantity1,setQuantity1] = useState([]);
const[unit1,setUnit1] = useState([]);
const[cost1,setCost1] = useState([]);
const[c_location1,setC_location1] = useState([]);
const[email1,setEmail1] = useState([]);
const[rR_FM1,setRR_FM1] = useState([]);
const[city1,setCity1] = useState([]);
const[warrenty1,setWarrenty1] = useState([]);
const[description1,setDescription1] = useState([]);
const[remark1,setRemark1] = useState([]);


  useEffect(() => {
             getUser();
             },[]);


  const getUser = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/stock.php?Id=edit&id=${id}`)
      // setExpenseTrack(response.data);
       setStock(response.data)
    //   console.log(response.data[0])
      setId1(response.data[0].id);
      setService1(response.data[0].service);
      setCategory1(response.data[0].category);
      setSpecification1(response.data[0].specification);
      setModel_no1(response.data[0].model_no);
      setMake1(response.data[0].make);
      setSerial_no1(response.data[0].serial_no);
      setOrigin1(response.data[0].origin);
      setQuantity1(response.data[0].quantity);
      setUnit1(response.data[0].unit);
      setCost1(response.data[0].cost);
      setC_location1(response.data[0].c_location);
      setEmail1(response.data[0].email);
      setRR_FM1(response.data[0].R_FM);
      setCity1(response.data[0].city);
      setWarrenty1(response.data[0].warrenty);
      setDescription1(response.data[0].description);
      setRemark1(response.data[0].remark);
   
      var Vendor = response.data[0];
      console.log('vendorNew-',stock['id']);
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
   axios.put(`${newApiUrl}/stock.php?Id=update&id=${id}`).then(function(response){
    console.log(response.data);
    // navigate('/');
   });
};


//  console.log('vendor-',vendor_id3);
  return (
    <div>    

<div>
        <div className="w3-top">
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
        </div>

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
              <div className=" w3-card w3-round w3-white top-portion-my-profile">
                <div className="w3-container employee-box">
                  <h4 className="w3-center">My Profile</h4>
                  <hr />
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
                    Employee ID:-
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
                    Employee Type:-
                  </p>
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
                    Name:- <i id="Name"></i>
                  </p>
                </div>
              </div>
              <br />

              {/* -- Accordion -- */}
              <div className="w3-card w3-round">
                <div className="w3-white" id="add"></div>
              </div>
              <br />

              <br />
            </div>

            <div className="w3-col m4">
              <div className="w3-container w3-card w3-white w3-round w3-margin"></div>
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
            <div>

            <div className="input-container-vendor-regi">
            <label className="label-vendor-regi"> Prashant:</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='id'
                     id='id'
                     className="form-control input-box"
                    //  placeholder={id1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                     value={id1}
                  
                  /> 
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Specification:</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='vendor_id'
                     id='vendor_id'
                     className="form-control input-box"
                     placeholder={service1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  value={stock.id1}
                  
                  /> 
                </div>
              </div>














              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Specification:</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='specification'
                     id='specification'
                     className="form-control input-box"
                     placeholder={specification1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  value={vendor_id1}
                  
                  /> 
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Model :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='model'
                     id='model'
                    //  value={Company_name1}
                    className="form-control input-box"
                    placeholder={model_no1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Make:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='make'
                     id='make'
                    //  value={company_address1}
                    className="form-control input-box"
                    placeholder={make1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Serial No :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='serial_no'
                     id='serial_no'
                    //  value={vendor.vendor_name}
                    className="form-control input-box"
                    placeholder={serial_no1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Origin :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='origin'
                     id='origin'
                    //  value={vendor.vendor_contactno}
                    className="form-control input-box"
                    placeholder={origin1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Quantity:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='quntity'
                     id='quntity'
                    //  value={vendor.vendor_contactno2}
                    className="form-control input-box"
                    placeholder={quantity1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Unit :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='unit'
                     id='unit'
                    //  value={vendor.vendor_email}
                    className="form-control input-box"
                    placeholder={unit1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Approximate Cost :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='cost'
                     id='cost'
                    //  value={vendor.vendor_email21}
                    className="form-control input-box"
                    placeholder={cost1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Identification Location:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='c_location'
                     id='c_location'
                    //  value={vendor.Bank}
                    className="form-control input-box"
                    placeholder={c_location1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Allocated To Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='email'
                     id='email'
                    //  value={vendor.Acc_no}
                    className="form-control input-box"
                    placeholder={email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Responsible Functional Manager:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='R_FM'
                     id='R_FM'
                    //  value={vendor.ifsc_code}
                    className="form-control input-box"
                    placeholder={rR_FM1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
              
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> City: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='city'
                     id='city'
                    //  value={vendor.vendor_PAN}
                     className="form-control input-box-unique"
                     placeholder={city1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                     onChange={handleChange}
                  />
              
            
                </div>
                </div>
              </div>
              

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">warrenty: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='warrenty'
                     id='warrenty'
                    //  value={vendor.gst_file}
                     className="form-control input-box-unique"
                    placeholder={warrenty1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
           
                </div>
                </div>
              </div>
            
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Description: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='description'
                     id='description'
                    //  value={vendor.incorporation_file}
                     className="form-control input-box-unique"
                    placeholder={description1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
      
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Remark: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='remark'
                     id='remark'
                    //  value={vendor.cancelledChequeNo}
                     className="form-control input-box-unique"
                    placeholder={remark1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
            
                </div>
                </div>   
              </div>

         
              <div className="btn-submit-vendor-regi">
              <a href='/updated_stockDetails'> <Button variant="primary" size='lg'  onClick={handleUpdate}>Update</Button>
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
  )
}

export default LiveStockUpdateForm;









// {data.map(item =>( ))}