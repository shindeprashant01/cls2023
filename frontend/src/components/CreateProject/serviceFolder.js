import React ,{useState}from 'react'
import Button from "react-bootstrap/Button";
import { FaSistrix } from "react-icons/fa";
import Form from "react-bootstrap/Form";

const ServiceFolder = () => {


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
      Create
    </Button>
    </div>

    {prash.map((x, i) => {
        
            
            return (
              <div className="service-section">
            <div className="service-section-create-project">
          
              <div className="input-container-service-create-project">
                <Form.Select
                  aria-label="Default select example"
                  className="select-service-create-project"
                  name="selectService"
                  value={x.selectService}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option>Select Service</option>
                  <option value="Electrical">Electrial</option>
                  <option value="HVAC">HVAC</option>
                  <option value="IBMS">IBMS</option>
                  <option value="FMS">FMS</option>
                  <option value="IT">IT</option>
                  <option value="Sales">Sales</option>
                  <option value="Other">Others</option>
                </Form.Select>
              </div>
        
              <div className="input-container-service-create-project">
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
                
             
              </div>
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

export default ServiceFolder;