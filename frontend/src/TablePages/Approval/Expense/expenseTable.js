import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import "../../addVendor/viewVendor.css";
import newApiUrl from "../../config";
import '../../../App.css'




const ExpenseTable= () => {
  const[expense, setExpense]=useState([]);
  const[searchE, setSearchE]= useState(""); 
  const [filtereExpense, setFilteredExpense] = useState([]);

  const viewExpense= async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/amc_expense.php`)
     setExpense(response.data);
     setFilteredExpense(response.data)
    } catch(error){
          console.log(error);
    }
  };

  const columnsExpense=[
    {
      name:<div id="demo">Sr NO</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">ID</div>,
      
      selector: (row)=> row.ID,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row )=> row.cc_id,
      wrap:true,
    },
    {
      name:'Service',
      selector: (row) => row.service_name,
      wrap:true,
    },
    {
      name:'Ticket ID',
      selector: (row) => row.ticket_id,
      wrap:true,
    },
    {
      name:<div id="demo">Remaining value</div>,
      selector: (row) => row.Remaining_value,
      wrap:true,
    },
    {
      name:'Amount',
      selector: (row) => row.Amount,
      wrap:true,
    },
    {
      name:<div id="demo">Description</div>,
      selector: (row) => row.Description,
      wrap:true,
    },
    {
      name:<div id="demo">Document</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Request By</div>,
      selector: (row) => row.Created_by,
      wrap:true,
    },
    {
      name:<div id="demo">Request Date</div>,
      selector: (row) => row.Date,
      wrap:true,
    },
  
    {
      name:'Approve',
      cell :(row)=> <Button variant="outline-primary" size="sm" onClick={()=> alert(row.id)} > Approve</Button>
     
    },
    {
      name:'Approve',
      cell :(row)=> <Button variant="outline-danger" size="sm" onClick={()=> alert(row.id)} > Delete</Button>
     
    },
 
  
]
  useEffect(()=>{
    viewExpense();
      },[]);
          
      useEffect(()=>{
        const result= expense.filter(singleOrder =>{
         return singleOrder.ID.match(searchE.toLocaleLowerCase());
        });
     
        setFilteredExpense(result)
           },[searchE]);

           const tableHeaderStyleExpense={
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
       Project Expense  Approval
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
      className="dataTables_wrapper rdt_TableRow"
     customStyles={tableHeaderStyleExpense}
     columns={columnsExpense}
      data={filtereExpense}
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
        value={searchE}
        onChange={(e)=>setSearchE(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
      </div>
     
  );
};

export default ExpenseTable;
