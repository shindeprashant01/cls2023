import React ,{useState,useEffect}from "react";
import '../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import '../addVendor/viewVendor.css'
import newApiUrl from "../config";
import { Link} from 'react-router-dom';



const PMScheduleTable= () => {
  const[pMSchedule, setPMSchedule]= useState([]);
  const[searchPMS, setSearchPMS]= useState("");

  const [filterPMSchedule, setFilteredPMSchedule] = useState([]);

  const viewPMSchedule = async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/po.php?id=get`)
     setPMSchedule(response.data);
     setFilteredPMSchedule(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsPMSchedule=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Add PM Schedule</div>,
      cell :(row)=>(


          <Link to={{ 
              pathname: "/edit_pm_schedule",
              search: `?cc_id=${row.cc_id}`, 
               }}><Button> Add PM Schedule</Button></Link>

      )
     
    },
    // {
    //     name:<div id="demo">Add PM Schedule</div>,
    //     cell :(row)=><div>
  
    //   <button  size="sm" className="btn btn-trasnparent" style={{color:'green'}} onClick={()=> alert(row.id)} > Add_PM_schedule </button>
    //   </div> 
       
    //   },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.cc_id,
      sortable:true,
      wrap:true,
    
    },
    {
      name:<div id="demo">Prime Customer</div>,
      selector: (row) => row.prime_cust,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">End Customer</div>,
      selector: (row) => row.end_cust,
      sortable:true,
      wrap:true
    },
  
    {
      name:<div id="demo">Total PO</div>,
      selector: (row) => row.total_po_cost,
      wrap:true
    },
    {
        name:<div id="demo">Total Assign Value</div>,
        selector: (row) => row.cc_value,
        sortable:true,
        wrap:true
      },
    {
      name:<div id="demo">Total Remaining value</div>,
      selector: (row) => row.remaining_value,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">Start Date</div>,
      selector: (row) => row.start_date,
      sortable:true,
      wrap:true
    },
    {
      name:<div id="demo">End Date</div>,
      selector: (row) => row.end_date,
      sortable:true,
      wrap:true
    },
    // {
    //   name:<div id="demo">PO Number</div>,
    //   selector: (row) => row.email,
    //   sortable:true,
    //   wrap:true
    // },
    // {
    //   name:<div id="demo">View PDF</div>,
    //   selector: (row) => row.email,
    //   sortable:true,
    //   wrap:true
    // },
    // {
    //     name:<div id="demo">Purchase Description</div>,
    //     selector: (row) => row.email,
    //     sortable:true,
    //     wrap:true
    //   },
    //   {
    //     name:<div id="demo">Documents</div>,
    //     selector: (row) => row.email,
    //     sortable:true,
    //     wrap:true
    //   },
 
  
]
  useEffect(()=>{
    viewPMSchedule();
      },[]);
          
      useEffect(()=>{
        const result= pMSchedule.filter(singleOrder =>{
         return singleOrder.cc_value.toLowerCase().match(searchPMS.toLocaleLowerCase());
        });
     
        setFilteredPMSchedule(result)
           },[searchPMS]);

           const tableHeaderStylePMSchedule={
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
       PM Schedule
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
    className="dataTables_wrapper"
     customStyles={tableHeaderStylePMSchedule}
     columns={columnsPMSchedule}
      data={filterPMSchedule}
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
        value={searchPMS}
        onChange={(e)=>setSearchPMS(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />

      </div>
     
    </div>
  );
};

export default PMScheduleTable;
