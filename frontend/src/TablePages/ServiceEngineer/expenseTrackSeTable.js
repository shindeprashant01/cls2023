import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import '../../App.css'



const ExpenseTrackSeTable= () => {
  const[expenseTrackSe, setExpenseTrackSe]= useState([]);
  const[searchETSe, setSearchETSe]= useState("");
  const [filterExpenseTrackSe, setFilteredExpenseTrackSe] = useState([]);

  const viewExpenseTrackSe = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setExpenseTrackSe(response.data);
     setFilteredExpenseTrackSe(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsExpenseTrackSe=[
    {
      name:<div id="demo">Expense ID</div>,
      
      selector: (row)=> row.email,
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
      name:<div id="demo">Requested Date</div>,
      selector: (row )=> row.email,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Requested By</div>,
      selector: (row )=> row.email,
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
      name:<div id="demo">Expense Cost</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Expense Description</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
    },
   
    {
      name:<div id="demo">Approved/Paid Date</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Remark(Disapproved)</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
    },
   
 
]


  useEffect(()=>{
    viewExpenseTrackSe();
      },[]);
          
      useEffect(()=>{
        const result= expenseTrackSe.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchETSe.toLocaleLowerCase());
        });
     
        setFilteredExpenseTrackSe(result)
           },[searchETSe]);

           const tableHeaderStyleExpenseTrackSe={
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
    <>
    <div className="w3-container w3-card w3-white w3-round w3-margin">
    <div>
     <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
       AMC Expense Status
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable  
 
     customStyles={tableHeaderStyleExpenseTrackSe}
     columns={columnsExpenseTrackSe}
      data={filterExpenseTrackSe}
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
        value={searchETSe}
        onChange={(e)=>setSearchETSe(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     </div>
    </div>
    </>
  );
};

export default ExpenseTrackSeTable;
