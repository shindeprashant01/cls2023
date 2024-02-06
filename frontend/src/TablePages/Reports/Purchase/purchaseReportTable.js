import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import "../../../App.css"
// import '../../addVendor/viewVendor.css'



const PurchaseReportTable= () => {
  const[purchaseReport, setPurchaseReport]= useState([]);
  const[searchPR, setSearchPR]= useState("");
  const [filterPurchaseReport, setFilteredPurchaseReport] = useState([]);

  const viewPurchaseReport = async ()=>{
    try{
 const response = await axios.get('http://jsonplaceholder.typicode.com/comments')
     setPurchaseReport(response.data);
     setFilteredPurchaseReport(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsPurchaseReport=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row )=> row.email,
      wrap:true,
    },
   
    {
      name:<div id="demo">Requested By</div>,
      selector: (row) => row.body,
      wrap:true,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
      wrap:true,
    },
    {
      name:<div id="demo">Remaining Value</div>,
      selector: (row) => row.body,
      wrap:true,
    },
  
    {
      name:<div id="demo">project Name</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
        name:<div id="demo">Requested Date</div>,
        selector: (row) => row.body,
        wrap:true,
      },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Vendor Name</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Total With GST</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">PO Number</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">View PDF</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
        wrap:true,
      },
    
 
  
]
  useEffect(()=>{
    viewPurchaseReport();
      },[]);
          
      useEffect(()=>{
        const result= purchaseReport.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPR.toLocaleLowerCase());
        });
     
        setFilteredPurchaseReport(result)
           },[searchPR]);

           const tableHeaderStylePurchaseReport={
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
                  height:"60vh",
                
              }
          }
          }

  return (
    
    <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          Purchase Report List
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
      <DataTable 
      className="dataTables_wrapper"
     customStyles={tableHeaderStylePurchaseReport}
     columns={columnsPurchaseReport}
      data={filterPurchaseReport}
      pagination
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={
        <Button varient="primary" className="me-3"> Search</Button>
      }
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search PO ID" 
        className="w-25 form-control"
        value={searchPR}
        onChange={(e)=>setSearchPR(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default PurchaseReportTable;
