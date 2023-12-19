import React ,{useState,useEffect}from "react";
import '../../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

// import '../../addVendor/viewVendor.css'



const LiveStockHodTable= () => {
  const[liveStockHod, setLiveStockHod]= useState([]);  // for search the input in search box
  const[searchLSH, setSearchLSh]= useState("");
  const [filterLiveStockHod, setFilteredLiveStockHod] = useState([]);

  const viewLiveStockHod = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setLiveStockHod(response.data);
     setFilteredLiveStockHod(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsLiveStockHod=[
  
    {
      name:<div id="demo">Sr NO.</div>,
      selector: (row )=> row.email,
      sortable:true,
      wrap:true,
    },
   
    {
      name:<div id="demo">Asset ID</div>,
      selector: (row) => row.body,
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
      name:<div id="demo">Category</div>,
      selector: (row) => row.body,
      sortable:true,
      wrap:true,
    },
  
    {
      name:<div id="demo">Dscription Quntity</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Unit</div>,
        selector: (row) => row.body,
        sortable:true,
      wrap:true,
      },
    {
      name:<div id="demo">Make</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Modal Number</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Serial Number</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Specification</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Identification Location</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Allocate To Name</div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Responsible Functional Manager</div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true,
      },
      {
        name:<div id="demo">City</div>,
        selector: (row) => row.email,
        sortable:true,
       wrap:true,
      },
      {
        name:<div id="demo">Origin</div>,
        selector: (row) => row.email,
        sortable:true,
       wrap:true,
      },
      {
        name:<div id="demo">Warranty Details</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">Remark </div>,
        selector: (row) => row.email,
        sortable:true,
         wrap:true,
      },
      {
        name:<div id="demo">Cost </div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true,
      },
      {
        name:<div id="demo">Last Updated On</div>,
        selector: (row) => row.email,
        sortable:true,
      wrap:true,
      },
      {
        name:<div id="demo">Status</div>,
        selector: (row) => row.email,
        sortable:true,
         wrap:true,
      },
 
  
]
  useEffect(()=>{
    viewLiveStockHod();
      },[]);
          
      useEffect(()=>{
        const result= liveStockHod.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchLSH.toLocaleLowerCase());
        });
     
        setFilteredLiveStockHod(result)
           },[searchLSH]);

           const tableHeaderStyleLiveStockHod={
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
          Live Stock HOD
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
      <DataTable 
    className="dataTables_wrapper"
     customStyles={tableHeaderStyleLiveStockHod}
     columns={columnsLiveStockHod}
      data={filterLiveStockHod}
      pagination
      selectableRows
      selectableRowsHighlight
      highlightOnHover
    //   actions={
    
    //     <Button varient="primary" className="me-5 w-20 " size="lg" >  Download</Button>
    //   }
      subHeader
    //   subHeaderComponent={
    //     <input type="text" placeholder="Search PO ID" 
    //     className="w-25 form-control"
    //     value={searchLS}
        
    //     onChange={(e)=>setSearchLS(e.target.value)}/>
    //   }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
    </>
  );
};

export default LiveStockHodTable;
