import React,{useState, useEffect} from 'react';
// import '../../../../components/NewVendorRegister/newVendorRegiForm.css'
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../../../config';
// import Form from "react-bootstrap/Form";
import { useNavigate,useParams,Link} from  'react-router-dom';
import '../../../../TablePages/ViewTables/viewEmployeeUpdate.css'
import BackTheme from '../../../BackTheme';
import EmpDetailsComponents from '../../../../ExtraPages/EmpDetailsComponent';





const InvoiceScheduleUpdateCompoenents = (props) => {
   
    
  const queryParameters = new URLSearchParams(window.location.search)
  const emp_id = queryParameters.get('emp_id');
  const [prash, setPrash] = useState([
    {
    poNo:"",
    poCost:""
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...prash];
    list[index][name] = value;
    setPrash(list);
  };

  const handleAddClick = () => {
    const abc = [
      ...prash,
      [
        {
        poNo:"",
        poCost:""
        },
      ],
    ];
    setPrash(abc);
  };

  const handleDelete = (i) => {
    const deleteDat = [...prash];
    deleteDat.splice(i, 1);
    setPrash(deleteDat);
  };
  console.log(prash, "data");


//   const [family,setFamily] = useState([]);


  useEffect(() => {
             getUser();
             },[]);
  

  const getUser = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/employee.php?id=get`)
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
            <h2 style={{color:"rgb(43, 60, 158)"}}> Invoice Schedule :</h2><br/>

          </div>
      
        </div>
        </div>
        <div className="container-vendor-regi">
          <div className="forms-outline-vendor-regi">
            <div>
          

            <div>
      <div>
        <div className="input-container-service-create-project">
          <label className="labels-update-employeee"> PO No:</label>
          <div className="input-details-vendor-regi">
            <input
              type="text"
              name="poNO"
              id="poNo"
              //  value={company_address1}
              className="form-control select-service-create-project"
              // placeholder={company_add1}
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
        <div className="input-container-service-create-project">
          <label className="labels-update-employeee"> PO Cost:</label>
          <div className="input-details-vendor-regi">
            <input
              type="text"
              name="poCost"
              id="poCost"
              //  value={company_address1}
              className="form-control select-service-create-project"
              // placeholder={company_add1}
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
      </div>
      <div className="btn-submit-create-project">
        <Button variant="success" onClick={() => handleAddClick()}>
          Add Invoice Schedule
        </Button>
      </div>
      <div>
        <div className="btn-submit-create-project">
          <Button variant="info" onClick={() => handleAddClick()}>
            Calculate Total Invoice Amount
          </Button>
        </div>
        <div className="input-container-service-create-project">
          <label className="labels-update-employeee">
            {" "}
            Total Invoice Amount:
          </label>
          <div className="input-details-vendor-regi">
            <input
              type="text"
              name="toatlInvoice"
              id="totalInvoice"
              //  value={company_address1}
              className="form-control select-service-create-project"
              // placeholder={company_add1}
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
        <div className="input-container-service-create-project">
          <label className="labels-update-employeee"> Remaining Amount:</label>
          <div className="input-details-vendor-regi">
            <input
              type="text"
              name="remainingAmount"
              id="remainingAmount"
              //  value={company_address1}
              className="form-control select-service-create-project"
              // placeholder={company_add1}
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
      </div>
      {prash.map((x, i) => {
        return (
          <div className="service-section">
            <div className="service-section-create-project">
              <div>
                <div className="input-container-service-create-project">
                  <label className="labels-update-employeee"> Date:</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="date"
                      name="company_address"
                      id="company_address"
                      //  value={company_address1}
                      className="form-control select-service-create-project"
                      // placeholder={company_add1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>

                <div className="input-container-service-create-project">
                  <label className="labels-update-employeee"> Remark:</label>
                  <div className="input-details-vendor-regi">
                    <input
                      type="text"
                      name="company_address"
                      id="company_address"
                      //  value={company_address1}
                      className="form-control select-service-create-project"
                      // placeholder={company_add1}
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="input-container-service-create-project">
                    <label className="labels-update-employeee"> Value:</label>
                    <div className="input-details-vendor-regi">
                      <input
                        type="text"
                        name="company_address"
                        id="company_address"
                        //  value={company_address1}
                        className="form-control select-service-create-project"
                        // placeholder={company_add1}
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>

                  <div className="input-container-service-create-project">
                    <Button variant="danger" onClick={() => handleDelete(i)}>
                      X
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
              <div className="btn-submit-vendor-regi">
              <a href='/edit_invoice_schedule'> <Button variant="primary" size='lg'  onClick={handleUpdate}>Create</Button>
          </a>
      
         
               
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

export default InvoiceScheduleUpdateCompoenents;