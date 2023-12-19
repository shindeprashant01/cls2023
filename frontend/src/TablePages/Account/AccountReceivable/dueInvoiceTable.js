import React ,{useState,useEffect}from "react";
import '../../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'



const DueInvoiceTable= () => {
  const[dueInvoice, setDueInvoice]= useState([]);
  const[searchDI, setSearchDI]= useState("");
  const [filterDueInvoice , setFilteredDueInvoice] = useState([]);

  const viewDueInvoice= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setDueInvoice(response.data);
     setFilteredDueInvoice(response.data)
    } catch(error){
          console.log(error);
    }   
  };


  
  const columnsDueInvoice=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
    {
        name:<div id="demo">ID</div>,
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
      name:<div id="demo">PO Cost</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Value</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
  
    },
  
    {
      name:<div id="demo">Remark</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Status</div>,
        selector: (row) => row.body,
      },
  
    {
      name:<div id="demo">Project Manager</div>,
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
        name:<div id="demo">View Invoice</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
  
      },
    
  
]
  useEffect(()=>{
    viewDueInvoice();
      },[]);
          
      useEffect(()=>{
        const result= dueInvoice.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchDI.toLocaleLowerCase());
        });
     
        setFilteredDueInvoice(result)
           },[searchDI]);

           const tableHeaderStyleDueInvoice={
            headCells: {
              style: {
                  customStyles:"customStyles",
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  borderRight: "0.5px solid lightgrey",
                  // border: "1px solid white",
                  width: "100px",
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
                  height:"30vh",
                
              }
          }
          }

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
    <div>
     <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
       Due Invoice
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleDueInvoice}
     columns={columnsDueInvoice}
      data={filterDueInvoice}
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
        value={searchDI}
        onChange={(e)=>setSearchDI(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default DueInvoiceTable;
