import React ,{useState,useEffect}from "react";
import '../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";





const PurchaseTrackSeTable= () => {
  const[purchaseTrackSe, setPurchaseTrackSe]= useState([]);
  const[searchPTSe, setSearchPTSe]= useState("");
  const [filterPurchaseTrackSe, setFilteredPurchaseTrackSe] = useState([]);

  const viewPurchaseTrackSe = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPurchaseTrackSe(response.data);
     setFilteredPurchaseTrackSe(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsPurchaseTrackSe=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true
  
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row )=> row.email,
      sortable:true,
      wrap:true
  
    },
   
    {
      name:<div id="demo">Requested By</div>,
      selector: (row) => row.body,
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
      name:<div id="demo">Remaining Value</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true
  
    },
  
    {
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
  
    },
    {
        name:<div id="demo">Requested Date</div>,
        selector: (row) => row.body,
        sortable:true,
      wrap:true
  
      },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
  
    },
    {
      name:<div id="demo">Vendor Name</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
  
    },
    {
      name:<div id="demo">Total With GST</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
  
    },
    {
      name:<div id="demo">PO Number</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true

    },
    {
      name:<div id="demo">View PDF</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true
  
    },
    {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
      },
   
  
]
  useEffect(()=>{
    viewPurchaseTrackSe();
      },[]);
          
      useEffect(()=>{
        const result= purchaseTrackSe.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchPTSe.toLocaleLowerCase());
        });
     
        setFilteredPurchaseTrackSe(result)
           },[searchPTSe]);

           const tableHeaderStylePurchaseTrackSe={
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
       AMC Purchase Status SE
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
 
     customStyles={tableHeaderStylePurchaseTrackSe}
     columns={columnsPurchaseTrackSe}
      data={filterPurchaseTrackSe}
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
        value={searchPTSe}
        onChange={(e)=>setSearchPTSe(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
    </>
  );
};

export default PurchaseTrackSeTable;
