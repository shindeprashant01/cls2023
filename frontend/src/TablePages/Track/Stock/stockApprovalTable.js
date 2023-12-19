import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../../addVendor/viewVendor.css'



const StockApprovalTable= () => {
  const[stockApproval, setStockApproval]= useState([]);
  const[searchSA, setSearchSA]= useState("");
  const [filterStockApproval, setFilteredStockApproval] = useState([]);

  const viewStockApproval = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setStockApproval(response.data);
     setFilteredStockApproval(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsStockApproval=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true
  
    },
    {
      name:<div id="demo">Request ID</div>,
      selector: (row )=> row.email,
      sortable:true,
      wrap:true
    },
   
    {
      name:<div id="demo">Asset ID</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">Quantity</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true
    },
    {
        name:<div id="demo">Project Name</div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true
      },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true
    },
  
    {    
       name:<div id="demo">Description</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true
      },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">Status</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">Request By</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
    },
    {
        name:<div id="demo">Approve</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true
      },
      {
        name:<div id="demo">Disapprove</div>,
        selector: (row) => row.email,
        sortable:true,
       wrap:true
      },
   
  
]
  useEffect(()=>{
    viewStockApproval();
      },[]);
          
      useEffect(()=>{
        const result= stockApproval.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchSA.toLocaleLowerCase());
        });
     
        setFilteredStockApproval(result)
           },[searchSA]);

           const tableHeaderStyleStockApproval={
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
    Stock Approval
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
 
     customStyles={tableHeaderStyleStockApproval}
     columns={columnsStockApproval}
      data={filterStockApproval}
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
        value={searchSA}
        onChange={(e)=>setSearchSA(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     </div>
    </div>
  );
};

export default StockApprovalTable;
