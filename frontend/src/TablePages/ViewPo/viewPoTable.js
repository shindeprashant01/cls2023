import React ,{useState,useEffect}from "react";
import '../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

// import '../addVendor/viewVendor.css'



const ViewPoTable= () => {
  const[viewPo, setViewPo]= useState([]);
  const[searchVP, setSearchVP  ]= useState(""); 
  const [filterViewPo, setFilteredViewPo] = useState([]);

  const viewPoTables = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setViewPo(response.data);
     setFilteredViewPo(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsViewPo=[
    {
      name:<div id="demo">Sr NO.</div>,
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">PO ID</div>,
      selector: (row )=> row.email,
    },
    {
        name:<div id="demo">Service Engg Name/ID</div>,
        selector: (row) => row.body,
        wrap:true,
      },
    {
      name:<div id="demo">PO Created By</div>,
      selector: (row) => row.body,
      wrap:true,
    },
   
    {
      name:<div id="demo">Date Of PO</div>,
      selector: (row) => row.body,
      wrap:true,
    },
  
    {
      name:<div id="demo">Company Name</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
        name:<div id="demo">    Total </div>,
        selector: (row) => row.body,
        wrap:true,
      },
    {
      name:<div id="demo">Total with GST</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">Approved By</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
      name:<div id="demo">PDF</div>,
      selector: (row) => row.email,
      wrap:true,
    },
    {
        name:<div id="demo">PDF</div>,
        selector: (row) => row.email,
        wrap:true,
      },
      {
        name:<div id="demo">PDF</div>,
        selector: (row) => row.email,
        wrap:true,
      },
   
   
 
  
]
  useEffect(()=>{
    viewPoTables();
      },[]);
          
      useEffect(()=>{
        const result= viewPo.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchVP.toLocaleLowerCase());
        });
     
        setFilteredViewPo(result)
           },[searchVP]);

           const tableHeaderStyleViewPo={
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
       Internal PO List
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
     className="dataTables_wrapper"
     customStyles={tableHeaderStyleViewPo}
     columns={columnsViewPo}
      data={filterViewPo}
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
        value={searchVP}
        onChange={(e)=>setSearchVP(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default ViewPoTable;
