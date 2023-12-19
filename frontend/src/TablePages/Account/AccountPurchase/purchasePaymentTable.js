import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import "../../addVendor/viewVendor.css";
import '../../../App.css'



const PurchasePaymentTable= () => {
  const[PurchasePayment, setPurchasePayment]=useState([]);
  const[searchPPay, setSearchPPay]= useState("");
  const [filterePurchasePayment, setFilteredPurchasePayment] = useState([]);

  const viewPurchasePayment = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
 setPurchasePayment(response.data);
 setFilteredPurchasePayment(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsPurchasePayment=[
    {
        name:<div id="demo">PO Number</div>,
        
        selector: (row)=> row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Vendor Name</div>,
        selector: (row )=> row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Ticket ID</div>,
        selector: (row )=> row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Service Engineer ID</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Service Engineer Name</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Service</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Remaining Value</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">PO ID</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Purchase Cost</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Remaining Amount To Pay</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Date Of Request</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
    
      {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
   
      {
        name:<div id="demo">Approve By</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">View PDF</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Payments </div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
 
    
  
]
  useEffect(()=>{
    viewPurchasePayment();
      },[]);
          
      useEffect(()=>{
        const result= PurchasePayment.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchPPay.toLocaleLowerCase());
        });
     
        setFilteredPurchasePayment(result)
           },[searchPPay]);

           const tableHeaderStylePurchasePayment={
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
       Account AMC Purchase Pay
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
  
      <DataTable 
     customStyles={tableHeaderStylePurchasePayment}
     columns={columnsPurchasePayment}
      data={filterePurchasePayment}
      pagination
     
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
        value={searchPPay}
        onChange={(e)=>setSearchPPay(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     </div>
     </div>
  );
};

export default PurchasePaymentTable;
