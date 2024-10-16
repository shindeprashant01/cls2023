import React,{useState, useEffect} from 'react';
import './newVendorRegiForm.css';
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";
import newApiUrl from '../../TablePages/config';
import { useNavigate,useParams,Link} from  'react-router-dom';
import BackTheme from '../../TablePages/BackTheme';
import BackThemeFooter from '../../TablePages/BackThemeFooter';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';



 


function NewVendorUpdateForm(props)  {

  const queryParameters = new URLSearchParams(window.location.search)
  const vendor_id = queryParameters.get("vendor_id")
  

  
  
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
    
const allInputs = { imgUrl: '' };
const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const [media, setMedia] = useState(null);


    const handleImageAsFile = (e) => {
      //image var holds the file object which has a type property 
       const image = e.target.files[0];          
       console.log(image.type); // this will output the mime, i.e "image/png" or "image/jpg"
       setImageAsFile(imageFile => (image));
      console.log(imageAsFile);
 
   }

const [vendor, setVendor] = useState("");


// const [newEmployee, setNewEmployee] = useState('');
const[vendor_id1,setVendor_id1] = useState([]);
const[Company_name1,setCompany_name1] = useState([]);
const[company_address1,setCompany_address1] = useState([]);
const[vendor_name1,setVendor_name1] = useState([]);
const[vendor_contactno1,setVendor_contactno1] = useState([]);
const[vendor_contactno21,seteVndor_contactno21] = useState([]);
const[vendor_email1,setVendor_email1] = useState([]);
const[vendor_email21,setVendor_email21] = useState([]);
const[Bank1,setBank1] = useState([]);
const[Acc_no1,setAcc_no1] = useState([]);
const[ifsc_code1,setIfsc_code1] = useState([]);
const[vendor_PAN1,setVendor_PAN1] = useState([]);
const[gst_file1,setGst_file1] = useState([]);
const[incorporation_file1,setIncorporation_file1] = useState([]);
const[cancelledChequeNo1,setCancelledChequeNo1] = useState([]);
const[moa1,setMoa1] = useState([]);
const[aoa1,setAoa1] = useState([]);
const[profileFile1,setProfileFile1] = useState([]);
const[memeFile1,setMemeFile1] = useState([]);
// const [placeholderValue, setPlaceholderValue] = useState('');

const[files, setFiles]= useState(null);
const[progress, setProgress]= useState({started: false,pc: 0});
const[msg, setMsg]= useState(null);

// const handleImageAsFiles = (e) => {
//   //image var holds the file object which has a type property 
//    const image = e.target.files[0];  
//    setFiles(image) ;       
//    console.log(files); // this will output the mime, i.e "image/png" or "image/jpg"
  
//   // console.log(imageAsFile);

// }


  useEffect(() => {
             getUser();
             },[]);
  

  const getUser = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/vendor_details.php?id=edit&vendor_id=${vendor_id}`)
      // setExpenseTrack(response.data);
       setVendor(response.data[0]);
      console.log(response.data[0].vendor_id);

      setVendor_id1(response.data[0].vendor_id);
      setCompany_name1(response.data[0].Company_name);
     setCompany_address1(response.data[0].company_address);
     setVendor_name1(response.data[0].vendor_name);
     setVendor_contactno1(response.data[0].vendor_contactno);
     seteVndor_contactno21(response.data[0].vendor_contactno2);
     setVendor_email1(response.data[0].vendor_email);
     setVendor_email21(response.data[0].vendor_email2);
     setBank1(response.data[0].Bank);
     setAcc_no1(response.data[0].Acc_no);
     setIfsc_code1(response.data[0].ifsc_code);
     setVendor_PAN1(response.data[0].vendor_PAN);
     setGst_file1(response.data[0].gst_file);
     setIncorporation_file1(response.data[0].incorporation_file);
     setCancelledChequeNo1(response.data[0].cancelledChequeNo);
     setMoa1(response.data[0].moa);
     setAoa1(response.data[0].aoa);
     setProfileFile1(response.data[0].profileFile);
     setMemeFile1(response.data[0].memeFile);
      // var Vendor = response.data[0];
      // console.log('vendorNew-',Vendor['vendor_id']);
      // console.log('customername',customer)
     } catch (error) {
      console.log(error);
    }
  };
 const handleChange =(event)=>{

  // setPlaceholderValue(event.target.placeholder);
  // const name = event.target.name;
  // const value = event.target.value;
  // setVendor(values=>({...values,[name]:value}));
  //  setVendor_id1(values => ({...values,[name]: value}));
  //  setCompany_name1(values => ({...values,[name]: value}));
  //  setCompany_address1(values => ({...values,[name]: value}));

  }

const handleUpdate = (event) => {
  event.preventDefault();
  try{ 

    //  .then((response)=>{
      // var jsonStr = '{"budget":[],"man_power":[]}'
      // var obj = JSON.parse(jsonStr);
     
      // jsonStr = JSON.stringify(obj);
  
      // console.log(response.data);
      // console.log(vendors);

      vendor.Company_name = Company_name1;
      vendor.company_address = company_address1;
      vendor.vendor_name = vendor_name1;
      vendor.vendor_contactno = vendor_contactno1;
      vendor.vendor_contactno2 = vendor_contactno21;
      vendor.vendor_email = vendor_email1;
      vendor.vendor_email2= vendor_email21;
      vendor.Bank = Bank1;
      vendor.Acc_no = Acc_no1;
      vendor.ifsc_code = ifsc_code1;
      vendor.vendor_PAN = vendor_PAN1;
      vendor.gst_file = gst_file1;
      vendor.incorporation_file = incorporation_file1;
      vendor.cancelledChequeNo = cancelledChequeNo1;
      vendor.moa = moa1;
      vendor.aoa = aoa1;
      vendor.profileFile = profileFile1;
      vendor.memeFile = memeFile1;
    

      console.log(vendor);

      var jsonStr = '{"updateVendor":[],"man_power":[]}'
      var obj = JSON.parse(jsonStr);
     
  
      obj["updateVendor"].push(vendor);
      
      jsonStr = JSON.stringify(obj);

          console.log(jsonStr);
          const response= axios.put(
            `${newApiUrl}/vendor_details.php?id=update&vendor_id=${vendor_id}`,jsonStr);
          
         setVendor(response.data)
         console.log(response)
        //  setVendors(response.data);
        
        alert("updated Successfully");
      navigate('/home');
    //  })
    }
     catch(error){
      console.log(error);
     }


    //  alert('success');


    //  setMsg("uploading...");

//     var fd= new vendor;
//      fd.append('file',files);
//      axios.post(`${newApiUrl}/vendor_details.php?id=edit`, fd,{
      
//       onUploadProgress:(progressEvent)=>{ console.log(progressEvent.progress*100)},
//       headers:{
//         "Custom-Header" :"value",
//       }
//      })
// .then(res=> console.log(res.data))
// .catch(err=> console.log(err));

  //       event.preventDefault();
  //  axios.put(`${newApiUrl}/vendor_details.php?id=update&vendor_id=${vendor_id}`).then(function(response){
  //   console.log(response.data);
  //   alert('success')
  //   // navigate('/');
  //  });
};


//  console.log('vendor-',vendor_id3);
  return (
    <div>    

<div>
        <BackTheme/>

        {/* <div
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
        </div> */}

        <div className="w3-container ">
          {/* -- The Grid -- */}
          <div className="w3-row">
            {/* -- Left Column -- */}
            <div className="w3-col m3">
              {/* -- Profile -- */}
            <EmpDetailsComponents/>
              <br />

              {/* -- Accordion -- */}
              <div className="w3-card w3-round">
                <div className="w3-white" id="add"></div>
              </div>
              <br />

              <br />
            </div>

         
          </div>
       
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
          <div >
            <h3 style={{color:"rgb(43, 60, 158)"}}> Edit Vendor Details :</h3>

          </div>
            <div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor ID :</label>
                <div className="input-details-vendor-regi">
                <input
                    //  type="number"
                     name='vendor_id'
                     id='vendor_id'
                     className="form-control input-box"
                    //  placeholder={vendor_id1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                     value={vendor_id1}
                  
                  /> 

                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='Company_name'
                     id='Company_name'
                    //  value={Company_name1}
                    className="form-control input-box"
                    placeholder={Company_name1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setCompany_name1(e.target.value)}
                    
                  
                  /> 
                </div>
              </div>
              
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Address :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='company_address'
                     id='company_address'
                    //  value={company_address1}
                    className="form-control input-box"
                    placeholder={company_address1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setCompany_address1(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Contact Person Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_name'
                     id='vendor_name'
                    //  value={vendor.vendor_name}
                    className="form-control input-box"
                    placeholder={vendor_name1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setVendor_name1(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Contact Number :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_contactno'
                     id='vendor_contactno'
                    //  value={vendor.vendor_contactno}
                    className="form-control input-box"
                    placeholder={vendor_contactno1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setVendor_contactno1(e.target.value)}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Alternate Contact :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_contactno2'
                     id='vendor_contactno2'
                    //  value={vendor.vendor_contactno2}
                    className="form-control input-box"
                    placeholder={vendor_contactno21}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>seteVndor_contactno21(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Eamil :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email'
                     id='vendor_email'
                    //  value={vendor.vendor_email}
                    className="form-control input-box"
                    placeholder={vendor_email1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setVendor_email1(e.target.value)}

                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Alternate Eamil :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='vendor_email2'
                     id='vendor_email2'
                    //  value={vendor.vendor_email21}
                    className="form-control input-box"
                    placeholder={vendor_email21}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setVendor_email21(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Bank Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='Bank'
                     id='Bank'
                    //  value={vendor.Bank}
                    className="form-control input-box"
                    placeholder={Bank1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setBank1(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Bank Acc No. :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='Acc_no'
                     id='Acc_no'
                    //  value={vendor.Acc_no}
                    className="form-control input-box"
                    placeholder={Acc_no1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setAcc_no1(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> IFSC Code:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                     name='ifsc_code'
                     id='ifsc_code'
                    //  value={vendor.ifsc_code}
                    className="form-control input-box"
                    placeholder={ifsc_code1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setIfsc_code1(e.target.value)}
              
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
                     id='vendor_PAN'
                    //  value={vendor.vendor_PAN}
                     className="form-control input-box-unique"
                     placeholder={vendor_PAN1}
                     aria-label="Large"
                     aria-describedby="inputGroup-sizing-sm"
                     onChange={(e)=>setVendor_PAN1(e.target.value)}
                  />
              
                <input type="file" className="input-box-unique-1"
                name='pan_file'
                id='pan_file'
              
                 onChange={e => { setFiles(e.target.files[0])}}
                 />
                </div>
                </div>
              </div>
              

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">GST Certificate: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                    //  name='gst_file'
                    //  id='gst_file'
                    //  value={vendor.gst_file}
                     className="form-control input-box-unique"
                    placeholder={gst_file1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setGst_file1(e.target.value)}
                  />
              
                <input type="file" className="input-box-unique-1" 
                   name='gst_file'
                id='gst_file'
                // value={gst_file1}
                // onChange={handleImageAsFiles}
                />
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
                     id='incorporation_file'
                    //  value={vendor.incorporation_file}
                     className="form-control input-box-unique"
                    placeholder={incorporation_file1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setIncorporation_file1(e.target.value)}
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
                     name='cancelledChequeNo'
                     id='cancelledChequeNo'
                    //  value={vendor.cancelledChequeNo}
                     className="form-control input-box-unique"
                    placeholder={cancelledChequeNo1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setCancelledChequeNo1(e.target.value)}
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
                     name='moa'
                     id='moa'
                    //  value={vendor.moa}
                     className="form-control input-box-unique"
                    placeholder={moa1}
                     aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setMoa1(e.target.value)}
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
                     name='aoa'
                     id='aoa'
                    //  value={vendor.aoa}
                     className="form-control input-box-unique"
                    placeholder={aoa1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setAoa1(e.target.value)}
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
                     id='companyProfile'
                    //  value={vendor.companyProfile}

                     className="form-control input-box-unique"
                    placeholder={profileFile1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setProfileFile1(e.target.value)}
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
                     name='msmeFile'
                     id='msmeFile'
                     className="form-control input-box-unique"
                    placeholder={memeFile1}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e)=>setMemeFile1(e.target.value)}
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>
            
              <div className="btn-submit-vendor-regi">
              <a href='/updated_vendorsdetails'> <Button variant="primary" size='lg'  onClick={handleUpdate}>Update</Button>
          </a>
        {/* // search: `?vendor_id=${vendor_id}`,  */}
         {/* }>  */}
        
         
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackThemeFooter/>
    </form>

    
   
    </div>
  )
}

export default NewVendorUpdateForm;









// {data.map(item =>( ))}