import React ,{useState,useEffect}from "react";
import '../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../config";
// import '../addVendor/viewVendor.css'



const InvoiceScheduleTable= () => {
  const[invoiceSchedule, setInvoiceSchedule]= useState([]);
  const[searchIS, setSearchIS]= useState("");
  const [filterInvoiceSchedule, setFilteredInvoiceSchedule] = useState([]);

  const viewInvoiceSchedule = async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/invoice_schedule.php`)
     setInvoiceSchedule(response.data);
     setFilteredInvoiceSchedule(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsInvoiceSchedule=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
    {
        name:<div id="demo">Go Ahead</div>,
        cell :(row)=><div>
  
      <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} > Go Ahead </button>
      </div> 
       
      },
      {
        name:<div id="demo">ID</div>,
        selector: (row) => row.id,
        wrap:true
      },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.PO_NO,
      sortable:true,
      wrap:true,

    },
    {
      name:<div id="demo">PO Cost</div>,
      selector: (row) => row.Po_cost,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.date,
    },
  
    {
      name:<div id="demo">Value</div>,
      selector: (row) => row.Value,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Remark</div>,
        selector: (row) => row.Remark,
      },
    {
      name:<div id="demo">Status</div>,
      selector: (row) => row.status,
    },
    {
      name:<div id="demo">View Invoice</div>,
      selector: (row) => row.invoice_id,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">End Date</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">PO Number</div>,
      selector: (row) => row.PO_NO,
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
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true,
      },
      {
        name:<div id="demo">Documents</div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true,
      },
 
  
]
  useEffect(()=>{
    viewInvoiceSchedule();
      },[]);
          
      useEffect(()=>{
        const result= invoiceSchedule.filter(singleOrder =>{
         return singleOrder.id.toLowerCase().match(searchIS.toLocaleLowerCase());
        });
     
        setFilteredInvoiceSchedule(result)
           },[searchIS]);

           const tableHeaderStyleInvoiceSchedule={
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
                  height:"25vh",
                
              }
          }
          }

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
         Schedule Invoice
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
      <DataTable 
     className="dataTables_wrapper"
     customStyles={tableHeaderStyleInvoiceSchedule}
     columns={columnsInvoiceSchedule}
      data={filterInvoiceSchedule}
      pagination
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={
        <Button varient="primary" className="me-3"> Search</Button>
      }
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search ID" 
        className="w-25 form-control"
        value={searchIS}
        onChange={(e)=>setSearchIS(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default InvoiceScheduleTable;
