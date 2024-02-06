import React ,{useState,useEffect}from "react";
import "../../../App.css"
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../../config";
// import '../../addVendor/viewVendor.css'

  

const PurchaseTrackTable= () => {
  const[purchaseTrack, setPurchaseTrack]= useState([]);
  const[searchPT, setSearchPT]= useState("");
  const [filterPurchaseTrack, setFilteredPurchaseTrack] = useState([]);

  const viewPurchaseTrack = async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/new_purchaesorder_amc.php?id=get`)
     setPurchaseTrack(response.data);
     setFilteredPurchaseTrack(response.data)
    } catch(error){
          console.log(error);
    }   
  };


  const columnsPurchaseTrack=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.No,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row )=> row.t_id,
      wrap:true,
    },
   
    {
      name:<div id="demo">Requested By</div>,
      selector: (row) => row.se_name,
      wrap:true,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.s_name,
      wrap:true,
    },
    {
      name:<div id="demo">Remaining Value</div>,
      selector: (row) => row.body,
      wrap:true,
    },
  
    {
      name:<div id="demo">project Name</div>,
      selector: (row) => row.cc_id,
      wrap:true,
    },
    {
        name:<div id="demo">Requested Date</div>,
        selector: (row) => row.body,
        wrap:true,
      },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.body,
      wrap:true,
    },
    {
      name:<div id="demo">Vendor Name</div>,
      selector: (row) => row.companyname,
      wrap:true,
    },
    {
      name:<div id="demo">Total With GST</div>,
      selector: (row) => row.fulltotal,
      wrap:true,
    },
    {
      name:<div id="demo">PO Number</div>,
      selector: (row) => row.PO_id,
      wrap:true,
    },
    {
      name:<div id="demo">View PDF</div>,
      selector: (row) => row.body,
    },
    {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.p_desc,
        wrap:true,
      },
      {
        name:<div id="demo">Documents</div>,
        selector: (row) => row.document,
        wrap:true,
      },
 
  
]
  useEffect(()=>{
    viewPurchaseTrack();
      },[]);
          
      useEffect(()=>{
        const result= purchaseTrack.filter(singleOrder =>{
         return singleOrder.PO_id.toLowerCase().match(searchPT.toLocaleLowerCase());
        });
     
        setFilteredPurchaseTrack(result)
           },[searchPT]);

           const tableHeaderStylePurchaseTrack={
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
                  height:"80vh",
                
              }
          }
          }

  return (
  
    <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          AMC Purchase Track
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
      <DataTable 
     className="dataTables_wrapper"
     customStyles={tableHeaderStylePurchaseTrack}
     columns={columnsPurchaseTrack}
      data={filterPurchaseTrack}
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
        value={searchPT}
        onChange={(e)=>setSearchPT(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default PurchaseTrackTable;
