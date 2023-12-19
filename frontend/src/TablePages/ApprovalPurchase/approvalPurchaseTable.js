import React ,{useState,useEffect}from "react";
import '../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import apiUrlGet from '../config'
// import '../addVendor/viewVendor.css'



const ApprovalPurchaseTable= () => {
  const[approvalPurchase, setApprovalPurchase]= useState([]);
  const[searchAPT, setSearchAPT]= useState("");
  const [filterApprovalPurchase, setFilteredApprovalPurchase] = useState([]);

  const viewApprovalPurchase = async ()=>{
    try{
 const response = await axios.get(`${apiUrlGet}/purchase.php`)
     setApprovalPurchase(response.data);
     setFilteredApprovalPurchase(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsApprovalPurchase=[
    {
      name:<div id="demo">Approve ID</div>,
      
      selector: (row)=> row.approve_id,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row )=> row.tikckit_id,
      sortable:true,
      wrap:true,
    },
   
    {
      name:<div id="demo">Requested By ID/Name</div>,
      selector: (row) => row.service_Engineer,
      wrap:true,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.s_dept,
      wrap:true,
    },
    {
      name:<div id="demo">Remaining Value</div>,
      selector: (row) => row.body,
      wrap:true,
    },
  
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.po_no,
      sortable:true,
      wrap:true,
    
    },
    {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.purchase_description,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">HOD Remark</div>,
        selector: (row) => row.body,
        wrap:true,
      },
    {
      name:<div id="demo">PO Start Date</div>,
      selector: (row) => row.Date,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">PO End Date</div>,
      selector: (row) => row.requested_date,
      wrap:true,
    },
    {
      name:<div id="demo">PO Document</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    
    {
      name:<div id="demo">File</div>,
      selector: (row) => row.file_name,
    },
    {
        name:<div id="demo">Create PO</div>,
        selector: (row) => row.email,
    },
    {
        name:<div id="demo">Close</div>,
        selector: (row) => row.email,
      }
    
 
  
]
  useEffect(()=>{
    viewApprovalPurchase();
      },[]);
          
      useEffect(()=>{
        const result= approvalPurchase.filter(singleOrder =>{
         return singleOrder.service_Engineer.toLowerCase().match(searchAPT.toLocaleLowerCase());
        });
     
        setFilteredApprovalPurchase(result)
           },[searchAPT]);

           const tableHeaderStyleApprovalPurchase={
            headCells: {
              style: {
                  customStyles:"customStyles",
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  borderRight: "0.5px solid lightgrey",
                  // border: "1px solid white",
                  width: "50px",
                  height:"100px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "white",
                  backgroundColor: "rgb(67, 190, 206)",
                  padding: "12px",
                  // height:'100px'
                  // minWidht "!100px !important"
  
              }
          },
          cells: {
              style: {
                  
                   display: "flex",
                  justifyContent: "center",
                  fontSize: '14px',
                  flexWrap: "wrap",
                  // width: '100px',
                   borderRight: "1px solid lightgrey",
                   borderBottom:'1px solid lightgrey'
                   // height:'100px'
              }
          },
          rows: {
              style: {
                  height:"70vh",
                
              }
          }
          }

  return (
    <>
   
   
   <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
        Purchase Approval
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
      <DataTable
     customStyles={tableHeaderStyleApprovalPurchase}
     columns={columnsApprovalPurchase}
      data={filterApprovalPurchase}
      pagination
    
      selectableRows
      selectableRowsHighlight
      highlightOnHover
    //   actions={
    
    //     <Button varient="primary" className="me-5 w-20 " size="lg" >  Download</Button>
    //   }
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search With Requested By ID" 
        className="w-25 form-control"
        value={searchAPT}
        
        onChange={(e)=>setSearchAPT(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     </div>
    </div>
    </>
  );
};

export default ApprovalPurchaseTable;
