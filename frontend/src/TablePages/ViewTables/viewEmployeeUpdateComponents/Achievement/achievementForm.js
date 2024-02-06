import React ,{useState}from 'react'
import Button from "react-bootstrap/Button";
// import { FaSistrix } from "react-icons/fa";
// import Form from "react-bootstrap/Form";

const AchievementForm = () => {


    const [prash, setPrash] = useState([
        {
          srNo: "",
          addAchievement: "",
          name:"",
          designation:"",
          noOfYearsKnown:"",
          contactNumber:""
        
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
          srNo: "",
          addAchievement: "",
          name:"",
          designation:"",
          noOfYearsKnown:"",
          contactNumber:""
          
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

      <div>
        <div>
          <h2 style={{display:"flex", justifyContent:"center", color:"rgb(156,134,45)"}}> Major Achievement</h2>
        </div>
   
        {prash.map((x, i) => {
        
            
            return (
              <div className="service-section">
            <div className="service-section-create-project">
          
            <div className="input-details-vendor-regi">
                <div className="input-container-vendor-regi">
                <label className="labels-update-employeee"> Sr No:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='srNo'
                     className="form-control input-box"
                     placeholder="Sr No"
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                </div>


             <div style={{display:"flex", }}>
             
                <div className="input-details-vendor-regi">
                <div className="input-container-vendor-regi">
                <label className="labels-update-employeee"> Add Achievement:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='addAchievement'
                     className="form-control input-box"
                     placeholder="Add Your Achievement"
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                </div>
         


              <div className="input-container-service-create-project">
              <Button variant="danger" onClick={()=>handleDelete(i)}>X</Button>
              <br/>
            </div>

            </div>
           
        
          
              {/* <div className="input-container-service-create-project">
              <Button variant="danger" onClick={()=>handleDelete(i)}>X</Button>
            </div> */}



            {/* <div className="input-container-service-create-project">
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
              </div> */}

            </div>
          </div>
     
    
    
    
          );
        })};
       <div className='btn-submit-create-project'>
        <Button variant="success" onClick={()=>handleAddClick()}>
        Add Achievement
        </Button>
        </div>
        </div>




        <div>
        <div>
          <h2 style={{display:"flex", justifyContent:"center", color:"rgb(156,134,45)"}}> Reference</h2>
        </div>
   
        {prash.map((x, i) => {
        
            return (
              <div className="service-section">
            <div className="service-section-create-project">
          
            <div className="input-details-vendor-regi">
                <div className="input-container-vendor-regi">
                <label className="labels-update-employeee"> Name:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='name'
                     className="form-control input-box"
                     placeholder="Name"
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                </div>




                <div className="input-details-vendor-regi">
                <div className="input-container-vendor-regi">
                <label className="labels-update-employeee"> Designation:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='designation'
                     className="form-control input-box"
                     placeholder="Designation"
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                </div>

                <div className="input-details-vendor-regi">
                <div className="input-container-vendor-regi">
                <label className="labels-update-employeee"> No.Of Years Known:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='noOfYearsKnown'
                     className="form-control input-box"
                     placeholder="No.of years Known"
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                </div>

             <div style={{display:"flex", }}>
             
             <div className="input-details-vendor-regi">
                <div className="input-container-vendor-regi">
                <label className="labels-update-employeee"> Contact Number:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='conatctNumber'
                     className="form-control input-box"
                     placeholder="contact Number"
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                    //  onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                </div>
         


              <div className="input-container-service-create-project">
              <Button variant="danger" onClick={()=>handleDelete(i)}>X</Button>
              <br/>
            </div>

            </div>
           
        
          
           

            </div>
          </div>
     
    
    
    
          );
        })};
       <div className='btn-submit-create-project'>
        <Button variant="success" onClick={()=>handleAddClick()}>
        Add More Reference
        </Button>
        </div>
        </div>
        

        <div>
        <div className="input-details-vendor-regi">
                <div className="input-container-vendor-regi">
                <label className="labels-update-employeee"> Hobbies:</label>
                <div className="input-details-vendor-regi">
                <textarea
                        rows={2} // You can adjust the number of rows
                        cols={112} // You can adjust the number of columns
                        placeholder="Enter  Hobbies"
                        className="text-area-create-project"
                      />
                </div>
              </div>
                </div>
        </div>
  
        </React.Fragment>
  )
}

export default AchievementForm;