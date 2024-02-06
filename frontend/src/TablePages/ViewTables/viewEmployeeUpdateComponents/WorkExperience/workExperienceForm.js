import React ,{useState}from 'react'
import Button from "react-bootstrap/Button";
// import { FaSistrix } from "react-icons/fa";
// import Form from "react-bootstrap/Form";

const WorkExperienceForm = () => {


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
  return (    
    <React.Fragment>
    <div className='btn-submit-create-project'>
    <Button variant="success" onClick={()=>handleAddClick()}>
      Add Work Experience
    </Button>
    </div>

    {prash.map((x, i) => {
        
            
            return (
              <div className="service-section">
            <div className="service-section-create-project">
          
              <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> Sr No:</label>
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
              <label className="labels-update-employeee"> Name & Address Of Previous Employer:</label>
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
              <label className="labels-update-employeee"> Joining Date:</label>
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
              <label className="labels-update-employeee"> Leaving Date:</label>
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
              <label className="labels-update-employeee"> Designation Initial:</label>
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
              <label className="labels-update-employeee"> Designation Final:</label>
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
              <label className="labels-update-employeee"> Nature Of Duties:</label>
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
              <label className="labels-update-employeee"> Initial Annual CTC:</label>
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
              <label className="labels-update-employeee"> Final Annual CTC:</label>
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
              <Button variant="danger" onClick={()=>handleDelete(i)}>X</Button>
            </div>



            <div className="input-container-service-create-project">
              <label className="labels-update-employeee"> Total Work Experience:</label>
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
                     <input
                     type="file"
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
       
           
           
          </div>
     
    
    
    
          );
        })};
  
        </React.Fragment>
  )
}

export default WorkExperienceForm;