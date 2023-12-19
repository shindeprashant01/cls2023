import React ,{useState,useEffect}from "react";
import "../../App.css"
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../config";
// import "../addVendor/viewVendor.css"



const AmendPoTable= () => {
  const[amendPo, setAmendPo]= useState([]);
  const[searchAP, setSearchAP]= useState("");
  const [filterAmendPo, setFilteredAmendPo] = useState([]);

  const viewAmendPo = async ()=>{
    try{
 const response = await axios.get(`${newApiUrl}/new_purchaesorder.php`)
     setAmendPo(response.data);
     setFilteredAmendPo(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsAmendPo=[
    {
      name:<div id="demo">Amend</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
    {
      name:<div id="demo">Internal PO Number</div>,
      selector: (row )=> row.email,
      sortable:true,
      wrap:true,
    },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.PO_id,
      sortable:true,
      wrap:true,
    },
    {
      name:<div id="demo">Service Engg Name</div>,
      selector: (row) => row.SerccviceEng_name,
      sortable:true,
      wrap:true,
    
    },
    {
      name:<div id="demo">Quatation</div>,
      selector: (row) => row.quatation,
      sortable:true,
      wrap:true,
    },
  
    {
      name:<div id="demo">Vendor Name</div>,
      selector: (row) => row.vendorname,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Ship Name</div>,
        selector: (row) => row.shipname,
        sortable:true,
        wrap:true,
      },
    {
      name:<div id="demo">Total</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    
    },
    {
      name:<div id="demo">Total With GST</div>,
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    
 
  
]
  useEffect(()=>{
    viewAmendPo();
      },[]);
          
      useEffect(()=>{
        const result= amendPo.filter(singleOrder =>{
         return singleOrder.PO_id.toLowerCase().match(searchAP.toLocaleLowerCase());
        });
     
        setFilteredAmendPo(result)
           },[searchAP]);

           const tableHeaderStyleAmendPo={
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
          Ammend PO Table
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
      <DataTable 
    className="dataTables_wrapper"
     customStyles={tableHeaderStyleAmendPo}
     columns={columnsAmendPo}
      data={filterAmendPo}
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
        value={searchAP}
        onChange={(e)=>setSearchAP(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
      </div>
     
    </div>
  );
};

export default AmendPoTable;
