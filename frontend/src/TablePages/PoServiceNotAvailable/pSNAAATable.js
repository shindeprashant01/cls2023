import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../../addVendor/viewVendor.css'



const PSNAAATable= () => {
  const[poAService, setPoAService]= useState([]);
  const[searchPSNAA, setSearchPSNAA]= useState("");
  const [filterPoAService, setFilteredPoAService] = useState([]);

  const viewPSNAA = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPoAService(response.data);
     setFilteredPoAService(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsPoAService=[
    {
      name:<div id="demo">Sr No</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
   
    {
        name:<div id="demo">PO Id</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Project Manager</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
    
      },
      {
        name:<div id="demo">Created By</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">PO Documents</div>,
        selector: (row) => row.body,
        sortable:true,
        wrap:true,
    
      },
    {
      name:<div id="demo">SOW</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo"> Prime Customer </div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">End Customer</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Total PO</div>,
      selector: (row) => <div id="demo"> {row.email} </div>,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Total Assign value</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
  
    },
    {
        name:<div id="demo">Remaining Assign value</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">Start Date</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
      {
        name:<div id="demo">End Date</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
    
      },
   
]


  useEffect(()=>{
    viewPSNAA();
      },[]);
          
      useEffect(()=>{
        const result= poAService.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchPSNAA.toLocaleLowerCase());
        });
     
        setFilteredPoAService(result)
           },[searchPSNAA]);

           const tableHeaderStylePoService={
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
         Live CC PO 
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
      <DataTable  
 
     customStyles={tableHeaderStylePoService}
     columns={columnsPoAService}
      data={filterPoAService}
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
        value={searchPSNAA}
        onChange={(e)=>setSearchPSNAA(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default PSNAAATable;
