import React ,{useState,useEffect}from "react";
import '../../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../../config";
// import '../addVendor/viewVendor.css'



const InvoiceCollectionTable= () => {
  const[invoiceCollection, setInvoiceCollection]= useState([]);
  const[searchIC, setSearchIC]= useState("");
  const [filterInvoiceCollection , setFilteredInvoiceCollection] = useState([]);

  const viewInvoiceCollection= async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/invoice.php?id=get`)
     setInvoiceCollection(response.data);
     setFilteredInvoiceCollection(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsInvoiceCollection=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
    {
        name:<div id="demo">Invoice ID</div>,
        selector: (row) => row.invoice_id,
        sortable:true,
        wrap:true,
  
      },
      {
        name:<div id="demo">Order No</div>,
        selector: (row) => row.buyer_order_no,
        sortable:true,
        wrap:true,
  
      },
  
      {
        name:<div id="demo">PO ID</div>,
        selector: (row) => row.PO_id,
        sortable:true,
        wrap:true,
      },
   
    {
      name:<div id="demo">Consignee Name</div>,
      selector: (row) => row.c_cust_name,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Buyer's Name</div>,
      selector: (row) => row.b_cust_name,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Total PO cost</div>,
      selector: (row) => row.requested_amt,
      sortable:true,
      wrap:true,
    },
  
    {
      name:<div id="demo">Total PO cost receivied</div>,
      selector: (row) => row.advance_pay,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Total Pending cost</div>,
        selector: (row) => row.remaining_value,
        sortable:true,
        wrap:true,
      },
  
    {
      name:<div id="demo">Total Invoice With GST</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Remaining Invoice Cost To Pay</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Date of request</div>,
        selector: (row) => row.current_date1,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">View Invoice</div>,
        cell :(row)=><div>
  
      <button  size="sm" className="btn btn-trasnparent" style={{color:'green'}} onClick={()=> alert(row.id)} > View Invoice </button>
      </div> 
       
      },
      {
        name:<div id="demo">Payment</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
    
  
]
  useEffect(()=>{
    viewInvoiceCollection();
      },[]);
          
      useEffect(()=>{
        const result=invoiceCollection.filter(singleOrder =>{
         return singleOrder.PO_id.toLowerCase().match(searchIC.toLocaleLowerCase());
        });
     
        setFilteredInvoiceCollection(result)
           },[searchIC]);

           const tableHeaderStyleInvoiceCollection={
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
   Invoice Collection
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleInvoiceCollection}
     columns={columnsInvoiceCollection}
      data={filterInvoiceCollection}
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
        value={searchIC}
        onChange={(e)=>setSearchIC(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default InvoiceCollectionTable;
