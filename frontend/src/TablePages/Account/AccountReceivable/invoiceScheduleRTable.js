import React ,{useState,useEffect}from "react";
import '../../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'
import newApiUrl from "../../config";
import { Link} from 'react-router-dom';


const InvoiceScheduleRTable= () => {
  const[invoiceScheduleR, setInvoiceScheduleR]= useState([]);
  const[searchISR, setSearchISR]= useState("");
  const [filterInvoiceScheduleR, setFilteredInvoiceScheduleR] = useState([]);

  const viewInvoiceScheduleR = async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/cost_case.php?id=get`)
     setInvoiceScheduleR(response.data);
     setFilteredInvoiceScheduleR(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsInvoiceScheduleR=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.cc_id,
      sortable:true,
      wrap:true,
  
    },
    {
        name:<div id="demo">Add Invoice Schedule</div>,
        cell :(row)=>(
          <Link to={{ 
            pathname: "/edit_invoice_schedule",
            search: `?emp=${row.emp_id}`, 
             }}><Button> Add Invoice Schedule</Button></Link>
        )
       
      },
      {
        name:<div id="demo">PO ID</div>,
        selector: (row) => row.OnM_id,
        sortable:true,
        wrap:true,
      },
   
    {
      name:<div id="demo">Prime Customer</div>,
      selector: (row) => row.prime_cust,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">End Customer</div>,
      selector: (row) => row.end_cust,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Total PO</div>,
      selector: (row) => row.total_po_cost,
      sortable:true,
      wrap:true,
    },
  
    {
      name:<div id="demo">Total Assign Value</div>,
      selector: (row) => row.cc_value,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Total Remaining Value</div>,
        selector: (row) => row.remaining_value,
        sortable:true,
        wrap:true,
      },
  
    {
      name:<div id="demo">Start Date</div>,
      selector: (row) => row.start_date,
    },
    {
      name:<div id="demo">End Date</div>,
      selector: (row) => row.end_date,
    },
    
  
]
  useEffect(()=>{
    viewInvoiceScheduleR();
      },[]);
          
      useEffect(()=>{
        const result= invoiceScheduleR.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchISR.toLocaleLowerCase());
        });
     
        setFilteredInvoiceScheduleR(result)
           },[searchISR]);

           const tableHeaderStyleInvoiceScheduleR={
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
                  height:"20vh",
                
              }
          }
          }

  return (
    <>
    <div className="w3-container w3-card w3-white w3-round w3-margin">
    <div>
     <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
       Add Invoice Schedule
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
     className="dataTables_wrapper"
     customStyles={tableHeaderStyleInvoiceScheduleR}
     columns={columnsInvoiceScheduleR}
      data={filterInvoiceScheduleR}
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
        value={searchISR}
        onChange={(e)=>setSearchISR(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
    </>
  );
};

export default InvoiceScheduleRTable;
