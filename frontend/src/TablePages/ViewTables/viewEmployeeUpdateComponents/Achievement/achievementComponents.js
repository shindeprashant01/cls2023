import React,{useState, useEffect} from 'react';
// import '../../../../components/NewVendorRegister/newVendorRegiForm.css'
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../../../config';
// import Form from "react-bootstrap/Form";
import { useNavigate,useParams,Link} from  'react-router-dom';
import '../../viewEmployeeUpdate.css'
import BackTheme from '../../../BackTheme';
import AchievementForm from './achievementForm';
;



const AchievementComponents = (props) => {
   
    
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
          <Link to= {`/work_experience?emp_id=${emp_id}`} className="w3-bar-item w3-button">
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
         <AchievementForm/>
              <div className="btn-submit-vendor-regi">
              <a href='/edit_customers'> <Button variant="primary" size='lg'  onClick={handleUpdate}>Submit</Button>
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

export default AchievementComponents;