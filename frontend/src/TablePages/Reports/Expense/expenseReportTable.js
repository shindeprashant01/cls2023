import React ,{useState,useEffect}from "react";
import "../../../App.css"
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import "../../../App.css"

// import '../../addVendor/viewVendor.css'


const ExpenseReportTable= () => {
  const[expenseReport, setExpenseReport]= useState([]);
  const[searchER, setSearchER]= useState("");
  const [filterExpenseReport, setFilteredExpenseReport] = useState([]);

  const viewExpenseReport = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setExpenseReport(response.data);
     setFilteredExpenseReport(response.data)
    } catch(error){
          console.log(error);
    }
  };

   

  const columnsExpenseReport=[
    {
      name:<div id="demo">Expense ID</div>,
      
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
      name:<div id="demo">Requested Date</div>,
      selector: (row) => row.body,
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
      name:<div id="demo">Expense Cost</div>,
      selector: (row) => row.body,
      wrap:true,
    },
    {
      name:<div id="demo">Expense Description</div>,
      selector: (row) => <div className="form-control"> {row.email} </div>,
      wrap:true,
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.email,
      wrap:true,
    },
   
    {
      name:<div id="demo">Approved/Paid Date</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Remark(Disapproved)</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Documents</div>,
      selector: (row) => row.email,
      wrap:true,
    },
   
  
]
  useEffect(()=>{
    viewExpenseReport();
      },[]);
          
      useEffect(()=>{
        const result= expenseReport.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchER.toLowerCase());
        });
     
        setFilteredExpenseReport(result)
           },[searchER]);

           const tableHeaderStyleExpenseReport={
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
       Expense Report List
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
   className="dataTables_wrapper"
     customStyles={tableHeaderStyleExpenseReport}
     columns={columnsExpenseReport}
      data={filterExpenseReport}
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
        value={searchER}
        onChange={(e)=>setSearchER(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default ExpenseReportTable;
