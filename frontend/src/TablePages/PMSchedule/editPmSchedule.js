import React,{useState, useEffect} from 'react';
import '../../components/NewVendorRegister/newVendorRegiForm.css';
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../config';
import Form from "react-bootstrap/Form";
import { useNavigate,useParams,Link} from  'react-router-dom';
import './editPmScheduleForm.css'
import BackTheme from '../BackTheme';


function EditPmScheduleForm(props) {

  const queryParameters = new URLSearchParams(window.location.search)
  const emp_id = queryParameters.get('emp_id')


  
  const [prash, setPrash] = useState([
    {
      selectService: "",
      subSelectService: "",
      selectAmc: "",
      assignValue: "",
      remark: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...prash];
    list[index][name] = value;
    setPrash(list);
  };

  const handleAddClick = () => {
    const abc =[...prash,[{
      selectService: "",
      subSelectService: "",
      selectAmc: "",
      assignValue: "",
      remark: "",
    }]]
    setPrash(abc);
  };

  const handleDelete=(i)=>{
    const deleteDat =[...prash];
   deleteDat.splice(i,1)
    setPrash(deleteDat);
   }
  console.log(prash, "data")
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
    


const [employee, setEmployee] = useState([]);
// const [newEmployee, setNewEmployee] = useState('');
const[emp_id1,setEmp_id1] = useState([]);
const [emp_name1,setEmp_name1] = useState([]);
const[emp_dept1,setEmp_dept1] = useState([]);
const[emp_position1,setEmp_position1] = useState([]);
const[emp_region1,setEmp_region1] = useState([]);
const[emp_contact1,setEmp_contact1] = useState([]);
const[emp_email1,setEmp_email1] = useState([]);
const[emp_pass1,setEmp_pass1] = useState([]);





  useEffect(() => {
             getUser();
             },[]);
  

  const getUser = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/employee.php?id=edit&emp_id=${emp_id}`)
      // setExpenseTrack(response.data);
       setEmployee(response.data)
      console.log(response.data);
      console.log(`${newApiUrl}/employee.php?id=edit&emp_id=${emp_id}`);
      setEmp_id1(response.data[0].emp_id);
      setEmp_name1(response.data[0].emp_name);
     setEmp_dept1(response.data[0].emp_dept);
     setEmp_position1(response.data[0].emp_position);
     setEmp_region1(response.data[0].emp_region);
     setEmp_contact1(response.data[0].emp_contact);
     setEmp_email1(response.data[0].emp_email);
     setEmp_pass1(response.data[0].cust_pass);
    
      // var Vendor = response.data[0];
      // console.log('vendorNew-',Vendor['vendor_id']);
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
   axios.put(`${newApiUrl}/employee.php?id=update&emp_id=${emp_id}`).then(function(response){
    console.log(response.data);
    // navigate('/');
   });
};


//  console.log('vendor-',vendor_id3);
  return (
    <React.Fragment>


<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

<div className="input-container-service-create-project">
              <label className="labels-update-employeee"> PO NUMBER:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>

              <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> PO COST:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                
                  />
                </div>
              </div>
              <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> Start Date:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="date"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                
                  />
                </div>
              </div>
              <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> End Date:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                
                  />
                </div>
              </div>
              </div>
    <div className='btn-submit-create-project'>
    <Button variant="success" onClick={()=>handleAddClick()}>
      Add Members
    </Button>
    </div>

    {prash.map((x, i) => {
        
            
            return (
              <div className="service-section">
            <div className="service-section-create-project">
          
              <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> PM Schedules:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                
                  />
                </div>
              </div>


              <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> Equipment:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                
                  />
                </div>
              </div>

              <div className="input-container-service-create-project">
              <label className="labels-update-employeee">Date:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="date"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                
                  />
                </div>
              </div>



              <div className="input-container-vendor-detail">
   
            <div className="input-div-pforms">
              <Form.Select aria-label="Default select example input-div-pforms-label"
              name="gstpercentage"
              id="gstpercentage"
              // value={selectedValue}
              // onChange={handleSelectChange }
             >
                <option>SELECT PM</option>
                <option value="PM1">PM1</option>
                <option value="8">PM2</option>
                <option value="10">PM3</option>
                <option value="18">PM4</option>
                <option value="18">PM5</option>
                <option value="18">PM6</option>
                <option value="18">PM7</option>
                <option value="18">PM8</option>
                <option value="18">PM9</option>
                 <option value="18">PM10</option>
                 <option value="18">PM11</option>
                 <option value="18">PM12</option>
              </Form.Select>
            </div>
          </div>
              <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> Remark:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control select-service-create-project"
                    // placeholder={company_add1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                
                  />
                </div>
              </div>

             
        
              {/* <div className="input-container-service-create-project">
                <Form.Select
                  aria-label="Default select example"
                  className="select-service-create-project"
                  name="subSelectService"
                  value={x.subSelectService}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option>------</option>
                </Form.Select>
              </div>

              <div className="input-container-service-create-project">
                <Form.Select
                  aria-label="Default select example"
                  className="select-service-create-project"
                  name="selectAmc"
                  value={x.selectAmc}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option>Select AMC</option>
                  <option value="1">Operation & Maintenance</option>
                  <option value="2">Comprehensive AAC</option>
                  <option value="3">Non Comprehensive AAC</option>
                  <option value="4">One Time Activity</option>
                  <option value="4">Warrenty</option>
                </Form.Select>
              </div>

              <div className="input-container-service-create-project">
                <input
                  type="text"
                  className="form-control select-service-create-project"
                  placeholder="Assign Value"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="assignValue"
                  value={x.assignValue}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>

              <div className="input-container-service-create-project">
                <label className="label-create-project">
               
                  Remark:
                </label>
                <div className="input-details-create-project">
                  <textarea
                    rows={2}
                    cols={49}
                    placeholder="Type text here"
                    className="text-area-create-project"
                    name="remark"
                    value={x.remark}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                
             
              </div> */}
              <div className="input-container-service-create-project">
              <Button variant="danger" onClick={()=>handleDelete(i)}>X</Button>
            </div>
            </div>
          </div>
     
    
    
    
          );
        })};
  
        </React.Fragment>
  )
  
}

export default EditPmScheduleForm;




  




// {data.map(item =>( ))}

























  






















