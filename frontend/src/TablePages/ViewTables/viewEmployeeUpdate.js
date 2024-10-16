import React,{useState, useEffect} from 'react';
import '../../components/NewVendorRegister/newVendorRegiForm.css';
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../config';
import Form from "react-bootstrap/Form";
import { useNavigate,useParams,Link} from  'react-router-dom';
import './viewEmployeeUpdate.css'   
import BackTheme from '../BackTheme';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';

    
function ViewEmployeeUpdateForm(props) {

  const queryParameters = new URLSearchParams(window.location.search)
  const emp_ID = queryParameters.get('emp_id');


     

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
    


const [employee, setEmployee] = useState("");
// const [newEmployee, setNewEmployee] = useState('');
const[emp_id1,setEmp_id1] = useState([]);
const [emp_name1,setEmp_name1] = useState([]);
const[emp_dept1,setEmp_dept1] = useState([]);
const[emp_position1,setEmp_position1] = useState([]);
const[emp_region1,setEmp_region1] = useState([]);
const[emp_contact1,setEmp_contact1] = useState([]);
const[emp_email1,setEmp_email1] = useState([]);
const[emp_pass1,setEmp_pass1] = useState([]); 
const[emp_repeatPass1,setEmp_repeatPass1] = useState([]); 

const[present_add1,setPresent_add1] = useState([]);
const[permanent_add1,setPermanent_add1] = useState([]);
const[dob1,setDob1] = useState([]);
const[childrens1,setChildrens1] = useState([]);
const[maratial_status1,setMaratial_status1] = useState([]);
const[wedding_date1,setWedding_date1] = useState([]);
const[pan_no1,setPan_no1] = useState([]);
const[adhar_no1,setAdhar_no1] = useState([]);
const[bank_acc1,setBank_acc1] = useState([]);





  useEffect(() => {
             getUser();
             },[]);
  

  const getUser = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/employee.php?id=edit&emp_id=${emp_ID}`)
      // setExpenseTrack(response.data);
       setEmployee(response.data[0])
      console.log(response.data[0].emp_id);
      console.log(`${newApiUrl}/employee.php?id=edit&emp_id=${emp_ID}`);
      setEmp_id1(response.data[0].emp_id);
      setEmp_name1(response.data[0].emp_name);
     setEmp_dept1(response.data[0].emp_dept);
     setEmp_position1(response.data[0].emp_position);
     setEmp_region1(response.data[0].emp_region);
     setEmp_contact1(response.data[0].emp_contact);
     setEmp_email1(response.data[0].emp_email);
     setEmp_pass1(response.data[0].emp_pass);
     setEmp_repeatPass1(response.data[0].emp_repeatPass);

     setPresent_add1(response.data[0].present_add);
     setPermanent_add1(response.data[0].permanent_add);
     setDob1(response.data[0].dob);
     setMaratial_status1(response.data[0].maratial_status);
     setWedding_date1(response.data[0].wedding_date);
     setPan_no1(response.data[0].pan_no);
     setAdhar_no1(response.data[0].adhar_no);
     setBank_acc1(response.data[0].bank_acc);
    
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

// const handleUpdate1 = (event) => {
//         event.preventDefault();
//    axios.put(`${newApiUrl}/employee.php?id=update&emp_id=${emp_id}`).then(function(response){
//     console.log(response.data);
//     // navigate('/');
//    });
// };

const handleUpdate = (event) => {
  event.preventDefault();

  try{
    employee.emp_name =emp_name1;
    employee.emp_dept = emp_dept1;
    employee.emp_position = emp_position1;
    employee.emp_region = emp_region1;
    employee.emp_contact = emp_contact1;
    employee.emp_email= emp_email1;
    employee.emp_pass =emp_pass1;

    employee.emp_repeatPass =emp_repeatPass1;
    employee.present_add =present_add1;
    employee.permanent_add =permanent_add1;
    employee.dob =dob1;
    employee.maratial_status =maratial_status1;
    employee.wedding_date =wedding_date1;
    employee.pan_no =pan_no1;
    employee.adhar_no =adhar_no1;
    employee.bank_acc =bank_acc1;
    

    console.log(employee);
    
    var jsonStr = '{"employeeUpdate":[],"man_power":[]}'
    var obj = JSON.parse(jsonStr);
   

    obj["employeeUpdate"].push(employee);
    
    jsonStr = JSON.stringify(obj);
    
        console.log(jsonStr);
        const response = axios.put(`${newApiUrl}/employee.php?id=update&emp_id=${emp_ID}`,jsonStr);
        // const response = axios.put('https://jsonplaceholder.typicode.com/posts/1',jsonStr);
        setEmployee(response.data);
        // console.log(employee);
        console.log(response);
      //  setVendors(response.data);
      
      alert("updated Successfully");
    navigate('/home');
  //  })
  }
   catch(error){
    console.log(error);
   }

};

//  console.log('vendor-',vendor_id3);
  return (
    <div>    

           <BackTheme/>
           <EmpDetailsComponents/>
         <div className="w3-col m3 note-line">
         <p  className="instructor-line">
           Note:- Do not use " " in this form
         </p>
       </div>
    
      <form>  
      <div className="w3-container w3-card w3-white w3-round w3-margin main-box-vendor-regi">
        <div className="container-vendor-regi">
         
          <div className="forms-outline-vendor-regi">
          <div >
            <h3 style={{color:"rgb(43, 60, 158)"}}> Update Employee Details :</h3>

          </div>
            <div>
               <div  className='sub-nav-bar-update-employee'>
        <div className="w3-dropdown-hover">
            
            <Link to= {`/employee_details?emp=${emp_ID}`} className="w3-bar-item w3-button">
                Personal Details
              </Link>
           
          </div>
          <div className="w3-dropdown-hover">
        
            <Link to= {`/family_details?emp=${emp_ID}`} className="w3-bar-item w3-button">
                Family Details
              </Link>
          
          </div>
          <div className="w3-dropdown-hover" >
       
             <Link to= {`/educational_details?emp=${emp_ID}`} className="w3-bar-item w3-button">
                Educational Details
              </Link> 
            
          </div>

          <div className="w3-dropdown-hover">
          <Link to= {`/work_experience?emp=${emp_ID}`} className="w3-bar-item w3-button">
                Work Experience
              </Link> 
          </div>

          <div className="w3-dropdown-hover">
          <Link to= {`/achievement_details?emp=${emp_ID}`} className="w3-bar-item w3-button">
               Achievement & Hobbies
              </Link> 
          </div>
          </div>

            <div className="input-container-update-employee">
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
       value={emp_id1}
      
    /> 
  </div>
</div>

<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Employee Name :</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='emp_name'
       id='emp_name'
      className="form-control input-box"
      placeholder={emp_name1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={(e)=>setEmp_name1(e.target.value)}
    
    /> 
  </div>
</div>
                
<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Present Address :</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='present_address'
       id='present_address'
      //  value={company_address1}
      className="form-control input-box"
      placeholder={present_add1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setPresent_add1(e.target.value)}
    />
  </div>
</div>

<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Permanent Address :</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='permanent_address'
       id='permanent_address'
      //  value={company_address1}
      className="form-control input-box"
      placeholder={permanent_add1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setPresent_add1(e.target.value)}
    />
  </div>
</div>



<div className="input-container-update-employee">
<label className="labels-update-employeee-select">Department:</label>
<div className="input-div-update-employee">
<Form.Select aria-label="Default select example input-div-pforms-label"
name="department"
id="department"
placeholder={emp_dept1}
//   value={selectedValue}
onChange={(e)=>setEmp_dept1(e.target.value)}
    
>
  <option>Others</option>
  <option value="Account">Account</option>
  <option value="Electrical">Electrical</option>
  <option value="HVAC">HVAC</option>
  <option value="IBMS">IBMS</option>
  <option value="IT">IT</option>
  <option value="Operation">Operation</option>
  <option value="Purchase">Purchase</option>
</Form.Select>
</div>
</div>





<div className="input-container-update-employee">
<label className="labels-update-employeee-select">Position:</label>
<div className="input-div-update-employee">
<Form.Select aria-label="Default select example input-div-pforms-label"
name="emp_position"
id="emp_position"
//   value={selectedValue}
//   onChange={handleSelectChange }
placeholder={emp_position1}
onChange={e=>setEmp_position1(e.target.value)}
>
  <option>Others</option>
  <option value="Super Administartor">Super Administrator</option>
  <option value="Operation Administrator">Operation Administrator</option>
  <option value="Program Manager">Program Manager</option>
  <option value="Admin Associate">Admin Associate</option>
  <option value="Functional Manager">Functional Manager</option>
  <option value="Service Engineer">Service Engineer</option>
  <option value="Executive">Executive</option>
  <option value="Amount Payable">Amount Payable</option>
  <option value="Tendor">Tendor</option>
  <option value="HR">HR</option>
  <option value="Sales">Sales</option>
  
</Form.Select>
</div>
</div>

<div className="input-container-update-employee">
<label className="labels-update-employeee-select">Region:</label>
<div className="input-div-update-employee">
<Form.Select aria-label="Default select example input-div-pforms-label"
name="emp_region"
id="emp_region"
//   value={selectedValue}
//   onChange={handleSelectChange }
placeholder={emp_region1}
onChange={e=>setEmp_region1(e.target.value)}
>
  <option>All India</option>
  <option value="West">West</option>
  <option value="East">East</option>
  <option value="North">North</option>
  <option value="South">South</option>
 
  
</Form.Select>
</div>
</div>

<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Contact No:</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='emp_contact'
       id='emp_contact'
      //  value={vendor.vendor_name}
      className="form-control input-box"
      placeholder={emp_contact1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setEmp_contact1(e.target.value)}
    />
  </div>
</div>


<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Email ID:</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='emp_email'
       id='emp_email'
      //  value={vendor.vendor_contactno}
      className="form-control input-box"
      placeholder={emp_email1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setEmp_email1(e.target.value)}

    />
  </div>
</div>




<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Date Of Birth:</label>
  <div className="input-details-vendor-regi">
  <input
       type="date"
       name='dob'
       id='dob'
      //  value={vendor.vendor_contactno2}
      className="form-control input-box"
      placeholder={dob1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setDob1(e.target.value)}
    />
  </div>
</div>
          
           
<div className="input-container-update-employee">
<label className="labels-update-employeee-select">Maritial Status:</label>
<div className="input-div-update-employee">
<Form.Select aria-label="Default select example input-div-pforms-label"
name="maritialSts"
id="maritialSts"
  value={maratial_status1}
onChange={e=>setMaratial_status1(e.target.value)}
>
  <option>--Select--</option>
  <option value="Married">Married</option>
  <option value="Unmarried">Unmarried</option>   
</Form.Select>
</div>
</div>


<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Wedding Date:</label>
  <div className="input-details-vendor-regi">
  <input
       type="date"
       name='weddingDate'
       id='weddingDate'
      //  value={vendor.vendor_contactno2}
      className="form-control input-box"
      placeholder={wedding_date1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setWedding_date1(e.target.value)}
    />
  </div>
</div>


<div className="input-container-update-employee">
  <label className="labels-update-employeee"> No.of Children :</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='noOfChildren'
       id='noOfChildren'
      //  value={vendor.vendor_email}
      className="form-control input-box"
      placeholder={childrens1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setChildrens1(e.target.value)}

    />
  </div>
</div>



<div className="input-container-update-employee">
  <label className="labels-update-employeee"> PAN No :</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='panNo'
       id='panNo'
      //  value={vendor.vendor_email}
      className="form-control input-box"
      placeholder={pan_no1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setPan_no1(e.target.value)}

    />
    <input type="file" className="input-box-unique-1" />
  </div>
</div>

<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Aadhar No :</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='adharNo'
       id='adharNo'
      //  value={vendor.vendor_email}
      className="form-control input-box"
      placeholder={adhar_no1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setAdhar_no1(e.target.value)}

    />
    <input type="file" className="input-box-unique-1" />
  </div>
</div>

 <div className="input-container-update-employee">
  <label className="labels-update-employeee"> Bank Account No :</label>
  <div className="input-details-vendor-regi">
  <input
       type="text"
       name='accNo'
       id='accNo'
      //  value={vendor.vendor_email}
      className="form-control input-box"
      placeholder={bank_acc1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setBank_acc1(e.target.value)}
    />

  </div>
</div>

<div className="input-container-update-employee">
  <label className="labels-update-employeee"> Password:</label>
  <div className="input-details-vendor-regi">
  <input
       type="password"
       name='emp_pass'
       id='emp_pass'
      //  value={vendor.vendor_email}
      className="form-control input-box"
      placeholder={emp_pass1}
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      onChange={e=>setEmp_pass1(e.target.value)}

    />

  </div>
</div>

                   
<div className="btn-submit-vendor-regi">
 <Button variant="primary" size='lg'  onClick={handleUpdate}>Update</Button>



 
</div>
            </div>
          </div>
        </div>
      </div>
    </form>
   
    </div>
  )
}

export default ViewEmployeeUpdateForm;




  




// {data.map(item =>( ))}

























  






















