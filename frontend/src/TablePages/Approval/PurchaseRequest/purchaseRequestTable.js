import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import "../../addVendor/viewVendor.css";
import '../../../App.css'



const PurchaseRequestTable= () => {
  const[purchaseRequest, setPurchaseRequest]=useState([]);
  const[searchPR, setSearchPR]= useState("");
  const [filterePurchaseRequest, setFilteredPurchaseRequest] = useState([]);

  const viewPurchaseRequest= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPurchaseRequest(response.data);
     setFilteredPurchaseRequest(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsPurchaseRequest=[
    {
        name:<div id="demo">Purchase ID</div>,
        
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
        name:<div id="demo">Service Engineer ID</div>,
        selector: (row) => row.email,
        wrap:true,
      },
      {
        name:<div id="demo">Service Engineer Name</div>,
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
        name:<div id="demo">PO ID</div>,
        selector: (row) => row.body,
        wrap:true,
      },
      {
        name:<div id="demo">Service ID</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
        wrap:true,
      },
      {
        name:<div id="demo">Date of Request</div>,
        selector: (row) => row.email,
        wrap:true,
      },
    
      {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
        wrap:true,
      },
      {
        name:<div id="demo">Approve</div>,
        selector: (row) => row.email,
        wrap:true,
      },
      {
        name:<div id="demo">DisApprove</div>,
        selector: (row) => row.email,
        wrap:true,
      },
      
  
]
  useEffect(()=>{
    viewPurchaseRequest();
      },[]);
          
      useEffect(()=>{
        const result= purchaseRequest.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchPR.toLocaleLowerCase());
        });
     
        setFilteredPurchaseRequest(result)
           },[searchPR]);

           const tableHeaderStylePurchaseRequest={
            headCells: {
              style: {
                  customStyles:"customStyles",
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  borderRight: "0.2px solid lightgrey",
                  // border: "1px solid white",
                  width: "200px",
                  height:"100px",
                  fontWeight: "bold",
                  fontSize: "18px",
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
                   // height:'100px'
              }
          },
          rows: {
              style: {
                  height:"20vh",
              
              }
          }
          }

  return (
 
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <DataTable 
     customStyles={tableHeaderStylePurchaseRequest}
     columns={columnsPurchaseRequest}
      data={filterePurchaseRequest}
      pagination
      // fixedHeader
      // fixedHeaderScrollHeight="550px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={
        <Button varient="primary" className="me-3"> Search</Button>
      }
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search Here" 
        className="w-25 form-control"
        value={searchPR}
        onChange={(e)=>setSearchPR(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     </div>
  );
};

export default PurchaseRequestTable;
