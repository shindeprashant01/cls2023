import React ,{useState,useEffect}from "react";
import '../../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../../config";
import '../../addVendor/viewVendor.css';
import { Link} from 'react-router-dom';

    
  
const LiveStockTable= () => {
  const[liveStock, setLiveStock]= useState([]);
  const[searchLS, setSearchLS]= useState("");
  const [filterLiveStock, setFilteredLiveStock] = useState([]);

  const viewLiveStock = async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/stock.php?Id=get`)
     setLiveStock(response.data);
     setFilteredLiveStock(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsLiveStock=[
    {
      name:<div id="demo">Update</div>,
      cell :(row)=>(
        
        <Link to={{ 
          pathname: "/update_stock",
          search: `?id=${row.id}`, 
           }}><Button> Update</Button></Link>
    
      ) 
     
    },
    {
      name:<div id="demo">Sr NO.</div>,
      selector: (row )=> row.number,
      sortable:true,
      wrap:true,
    },
   
    {
      name:<div id="demo">Asset ID</div>,
      selector: (row) => row.id,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.service,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Category</div>,
      selector: (row) => row.category,
      sortable:true,
      wrap:true,
    },
  
    {
      name:<div id="demo">Description </div>,
      selector: (row) => row.description,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Quntity</div>,
      selector: (row) => row.quantity,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Unit</div>,
        selector: (row) => row.unit,
        sortable:true,
      wrap:true,
      },
    {
      name:<div id="demo">Make</div>,
      selector: (row) => row.make,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Modal Number</div>,
      selector: (row) => row.model_no,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Serial Number</div>,
      selector: (row) => row.serial_no,
      sortable:true,
      wrap:true,
    },
    
    {
      name:<div id="demo">Specification</div>,
      selector: (row) => row.specification,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Identification Location</div>,
      selector: (row) => row.c_loction,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Allocate To Name</div>,
        selector: (row) => row.c_owner,
        sortable:true,
         wrap:true,
    },
    {
        name:<div id="demo">Responsible Functional Manager</div>,
        selector: (row) => row.R_FM,
        sortable:true,
         wrap:true,
      },
      {
        name:<div id="demo">City</div>,
        selector: (row) => row.city,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">Origin</div>,
        selector: (row) => row.origin,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">Warranty Details</div>,
        selector: (row) => row.warrenty,
        sortable:true,
       wrap:true,
      },
      {
        name:<div id="demo">Remark </div>,
        selector: (row) => row.remark,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">Cost</div>,
        selector: (row) => row.cost,
        sortable:true,
        wrap:true,
      },
      
      {
        name:<div id="demo">Last Updated On</div>,
        selector: (row) => row.updated_date,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">Status</div>,
        selector: (row) => row.status,
        sortable:true,
        wrap:true,
      },
 
  
]
  useEffect(()=>{
    viewLiveStock();
      },[]);
          
      useEffect(()=>{
        const result= liveStock.filter(singleOrder =>{
         return singleOrder.specification.toLowerCase().match(searchLS.toLocaleLowerCase());
        });
     
        setFilteredLiveStock(result)
           },[searchLS]);

           const tableHeaderStyleLiveStock={
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
                  height:"40vh",
                
              }
          }
          }

  return (
    <>
     <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          Live Stock
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
     <DataTable 
     className="dataTables_wrapper"
     customStyles={tableHeaderStyleLiveStock}
     columns={columnsLiveStock}
      data={filterLiveStock}
      pagination
   
      selectableRows
      selectableRowsHighlight
      highlightOnHover
    //   actions={
    
    //     <Button varient="primary" className="me-5 w-20 " size="lg" >  Download</Button>
    //   }
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search By Specification" 
        className="w-25 form-control"
        value={searchLS}
        
        onChange={(e)=>setSearchLS(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
    </>
  );
};

export default LiveStockTable;
