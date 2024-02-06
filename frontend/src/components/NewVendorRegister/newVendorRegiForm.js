import React,{useState} from 'react';
import './newVendorRegiForm.css';
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../../TablePages/config';
import {useNavigate} from  'react-router-dom'



const NewVendorRegiForm = () => {

 const navigate = useNavigate();

  // const [data, setData] = useState([]);

//   useEffect(()=>{ 
//     fetch('http://192.168.10.153/json/vendor_details.php?id=edit')
//     .then(res=>{res.json().then(data => setData(data))}  )
//       /* .then(data =>console.log(data)) */
//     .catch(err => console.log(err))
//  },[])
    


const [vendors, setVendors] = useState({     
  vendor_id :"",
  Company_name:"",
  company_address:"",
  vendor_name:"",
  vendor_contactno:"",
  vendor_contactno2:"",
  vendor_email:"",
  vendor_email2:"",
  Bank:"",
  Acc_no:"",
  ifsc_code:"",
  vendor_PAN:"",
  gst_file:"",
  incorporation_file:"",
  cheque_no:"",
  moa_file:"",
  aoa_file:"",
  profile_file:"",
  msme_file:"",


});
// const [newEmployee, setNewEmployee] = useState('');


 const handleChange =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setVendors(values =>({...values , [name] :value}))
  
  }   


  // async handleSubmit({
  //   let response =()=>{
  //     return new Promise(function(resolve, reject){
  //       fetch(`${newApiUrl}/vendor_details/php?id=post`,{vendors})
  //       .then(response =>{
  //         resolve(response);
  //       });
  //     });
  //   }
  //   let  responseData =await response();
  //   console.log(responseData.data);
  // })

  // async handleSubmit(){
  //   let response = () => {
  //     return new Promise(function(resolve, reject) {
  //      fetch(`${newApiUrl}/vendor_details.php?id=post`, {vendors}
  //       ).then(response => {
  //         resolve(response);
  //       });
  //     });
  //   };
  //   let responseData = await response();
  //   console.log(responseData.data);
  


const handleSubmit = (event) => {
        event.preventDefault();
        try{ 

  //  .then((response)=>{
    // var jsonStr = '{"budget":[],"man_power":[]}'
    // var obj = JSON.parse(jsonStr);
   
    // jsonStr = JSON.stringify(obj);

    // console.log(response.data);
    console.log(vendors);
    var jsonStr = '{"vendor":[],"man_power":[]}'
    var obj = JSON.parse(jsonStr);
   

    obj['vendor'].push(vendors);
    
    jsonStr = JSON.stringify(obj);
        console.log(jsonStr);
        const response = axios.post(`${newApiUrl}/vendor_details.php?id=post`,jsonStr);
        

       setVendors(response.data);

    navigate('/');
  //  })
  }
   catch(error){
    console.log(error);
   }

};

//  console.log(data);
  return (
    <div>    
            
      <form  onSubmit={handleSubmit} method="POST">  
      <div className="w3-container w3-card w3-white w3-round w3-margin main-box-vendor-regi">
        <div className="container-vendor-regi">
          <div className="forms-outline-vendor-regi">
            <div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor ID :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_id'
                     className="form-control input-box"
                     placeholder="Vendor ID"
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                     onChange={handleChange}
                  
                  /> 
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='Company_name'
                    className="form-control input-box"
                    placeholder="Company_name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  
                  /> 
                </div>
              </div>
                
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Address :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                    className="form-control input-box"
                    placeholder="company_address"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>   

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Contact Person Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_name'
                    className="form-control input-box"
                    placeholder="Vendor Contact Person Name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Contact Number :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_contactno'
                    className="form-control input-box"
                    placeholder="Vendor Contact Number"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Alternate Contact :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_contactno2'
                    className="form-control input-box"
                    placeholder="Alternate Contact "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Eamil :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email'
                    className="form-control input-box"
                    placeholder="Vendor Eamil"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Alternate Eamil :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email2'
                    className="form-control input-box"
                    placeholder="Alternate Eamil "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Bank Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='Bank'
                    className="form-control input-box"
                    placeholder="Bank Name  "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Bank Acc No. :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='Acc_no'
                    className="form-control input-box"
                    placeholder="Bank Acc No.  "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> IFSC Code:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='ifsc_code'
                    className="form-control input-box"
                    placeholder="IFSC Code"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
              
                  />
                </div>
              </div>
          
          
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Pan Card: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='vendor_PAN'
                     className="form-control input-box-unique"
                    placeholder="Pan Card "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>
              
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">GST Certificate: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='gst_file'
                     className="form-control input-box-unique"
                    placeholder="GSTIN No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>
            
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Incorporation Certificate: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='incorporation_file'
                     className="form-control input-box-unique"
                    placeholder="Incorporation Certificate No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Cancelled Cheque No.: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='cheque_no'
                     className="form-control input-box-unique"
                    placeholder="Cancelled Cheque No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">MOA: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='moa_no'
                     className="form-control input-box-unique"
                    placeholder="MOA No.."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">AOA: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='aoa_no'
                     className="form-control input-box-unique"
                    placeholder="AOA No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Company Profile: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='companyProfile'
                     className="form-control input-box-unique"
                    placeholder="Company Profile"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">MSME File: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     name='msme_no'
                     className="form-control input-box-unique"
                    placeholder="MSME File No.."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>
            
              <div className="btn-submit-vendor-regi">

                {/* <input type='submit' name='submit' value="Save" /> */}
                {/* <button onClick={handleSubmit}>Save</button> */}
                <Button variant="primary" size='lg'  onClick={handleSubmit}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
   
    </div>
  )
}


export default NewVendorRegiForm;









// {data.map(item =>( ))}