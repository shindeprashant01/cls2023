import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../../addVendor/viewVendor.css'



const StockTrackTable= () => {
  const[stockTrack, setStockTrack]= useState([]);
  const[searchST, setSearchST]= useState("");
  const [filterStockTrack, setFilteredStockTrack] = useState([]);

  const viewStockTrack = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setStockTrack(response.data);
     setFilteredStockTrack(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsStockTrack=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true
  
    },
    {
      name:<div id="demo">Request ID</div>,
      selector: (row )=> row.email,
      sortable:true,
      wrap:true
    },
   
    {
      name:<div id="demo">Asset ID</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">Quntity</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true
      
    },
    {
        name:<div id="demo">project Name</div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true
      },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true
    },
  
  
    {
        name:<div id="demo">Description</div>,
        selector: (row) => row.body,
        sortable:true,
      wrap:true
      },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">Status</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">Request By</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
    },
   
  
]
  useEffect(()=>{
    viewStockTrack();
      },[]);
          
      useEffect(()=>{
        const result= stockTrack.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchST.toLocaleLowerCase());
        });
     
        setFilteredStockTrack(result)
           },[searchST]);

           const tableHeaderStyleStockTrack={
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
       Stock Track
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
     className="dataTables_wrapper"
     customStyles={tableHeaderStyleStockTrack}
     columns={columnsStockTrack}
      data={filterStockTrack}
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
        value={searchST}
        onChange={(e)=>setSearchST(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
     </div>
    </div>
  );
};

export default StockTrackTable;
