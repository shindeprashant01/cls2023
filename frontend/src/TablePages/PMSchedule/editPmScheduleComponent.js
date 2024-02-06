import React,{useState, useEffect} from 'react';
// import '../../../../components/NewVendorRegister/newVendorRegiForm.css'
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../config';




import EditPmScheduleForm from './editPmSchedule';
import BackTheme from '../BackTheme';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';
import BackThemeFooter from '../BackThemeFooter';
// import FamilyDetailsForm from './familyDetailsForm';


const EditPmScheduleComponent = (props) => {
   
    
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
 <EmpDetailsComponents/>
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
            <h3 style={{color:"rgb(43, 60, 158)"}}> PM Schedule :</h3><br/>

          </div>
       
        </div>
        </div>
        <div className="container-vendor-regi">
          <div className="forms-outline-vendor-regi">
         
            <div>
         
              
             <EditPmScheduleForm/>
              <div className="btn-submit-vendor-regi">
              <a href='/edit_customers'> <Button variant="primary" size='lg'  onClick={handleUpdate}>Save Changes</Button>
          </a>
      
        
         
               
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

export default EditPmScheduleComponent