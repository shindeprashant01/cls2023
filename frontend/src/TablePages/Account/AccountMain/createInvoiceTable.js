import React ,{useState,useEffect}from "react";
import '../../../App.css'
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'



const CreateInvoiceTable= () => {
  const[createInvoice, setCreateInvoice]= useState([]);
  const[searchCI, setSearchCI]= useState("");
  const [filterCreateInvoice, setFilteredCreateInvoice] = useState([]);

  const viewCreateInvoice = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setCreateInvoice(response.data);
     setFilteredCreateInvoice(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsCreateInvoice=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
      wrap:true,
  
    },
,
      {
        name:<div id="demo"> Create Invocie</div>,
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
      name:<div id="demo">Po Documents</div>,
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
      name:<div id="demo">Prome Customer</div>,
      selector: (row) => row.email,
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
      selector: (row) => row.email,
      sortable:true,
      wrap:true,
    },
    {
        name:<div id="demo">Total Assign Value</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">Total Remaining Value</div>,
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
      {
        name:<div id="demo">Service ID</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
      {
        name:<div id="demo">Servie Name</div>,
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
      {
        name:'Manage',
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
      {
        name:'AMC',
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
      {
        name:'Assign Value',
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },
      {
        name:'Remaining Assign Value',
        selector: (row) => row.email,
        sortable:true,
        wrap:true,
      },


]
  useEffect(()=>{
    viewCreateInvoice();
      },[]);
          
      useEffect(()=>{
        const result= createInvoice.filter(singleOrder =>{
         return singleOrder.body.toLowerCase().match(searchCI.toLocaleLowerCase());
        });
     
        setFilteredCreateInvoice(result)
           },[searchCI]);

           const tableHeaderStyleCreateInvoice={
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
       Create Invoice Table
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
      <DataTable 
 
     customStyles={tableHeaderStyleCreateInvoice}
     columns={columnsCreateInvoice}
      data={filterCreateInvoice}
      pagination
    
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={
        <Button varient="primary" className="me-3"> Search</Button>
      }
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search Here Name/ID" 
        className="w-25 form-control"
        value={searchCI}
        onChange={(e)=>setSearchCI(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     </div>
    </div>
    </>
  );
};

export default CreateInvoiceTable;
