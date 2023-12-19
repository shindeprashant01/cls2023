import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import "../../addVendor/viewVendor.css";
import newApiUrl from "../../config";
import '../../../App.css';





const PurchaseTable= () => {
  const[purchase, setPurchase]=useState([]);
  const[searchPU, setSearchPU]= useState(""); 
  const [filterePurchase, setFilteredPurchase] = useState([]);

  const viewPurchase= async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/new_purchaesorder_amc.php`)
     setPurchase(response.data);
     setFilteredPurchase(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsPurchase=[
    {
        name:<div id="demo">Sr NO</div>,
        
        selector: (row)=> row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Project Name</div>,
        selector: (row )=> row.cc_id,
        wrap:true,
      },
      {
        name:<div id="demo">Request By</div>,
        selector: (row) => row.email,
        wrap:true,
      },
      {
        name:<div id="demo">Vendor Name</div>,
        selector: (row) => row.vendorname,
        wrap:true,
      },
      {
        name:<div id="demo">Total</div>,
        selector: (row) => row.subtotal,
        wrap:true,
      },
      {
        name:<div id="demo">Total With GST</div>,
        selector: (row) => row.fulltotal,
        wrap:true,
      },
      {
        name:<div id="demo">PO Remark</div>,
        selector: (row) => row.po_remark,
        wrap:true,
      },
      {
        name:<div id="demo">Service</div>,
        selector: (row) => row.body,
        wrap:true,
      },
      {
        name:<div id="demo">Assign Value</div>,
        selector: (row) => row.assigned_value,
        wrap:true,
      },
    
      {
        name:<div id="demo">Remaining Value</div>,
        selector: (row) => row.remaining_assign_value,
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
      {
        name:<div id="demo">PO ID </div>,
        selector: (row) => row.PO_id,
        wrap:true,
      },
      {
        name:<div id="demo">Created By </div>,
        selector: (row) => row.created_by,
        wrap:true,
      },
      {
        name:<div id="demo">Created Date</div>,
        selector: (row) => row.created_date,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">PDF </div>,
        selector: (row) => row.email,
        wrap:true,
      },
 
  
]
  useEffect(()=>{
    viewPurchase();
      },[]);
          
      useEffect(()=>{
        const result= purchase.filter(singleOrder =>{
         return singleOrder.cc_id.toLowerCase().match(searchPU.toLocaleLowerCase());
        });
     
        setFilteredPurchase(result)
           },[searchPU]);

           const tableHeaderStylePurchase={
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
      Project Purchase  Approval
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
     customStyles={tableHeaderStylePurchase}
     columns={columnsPurchase}
      data={filterePurchase}
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
        value={searchPU}
        onChange={(e)=>setSearchPU(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
      </div>
     
  );
};

export default PurchaseTable;
