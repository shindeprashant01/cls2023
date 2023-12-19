import React, { useEffect, useState } from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import { number } from "yup";
import '../../App.css'

const RequestedComponent =()=>{
  const[order, setOrder]= useState([]);
  const[search, setSearch]= useState("");
  const [filteredOrder, setFilteredOrder] = useState([]);

  const getOrders = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setOrder(response.data);
     setFilteredOrder(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsp=[
    {
    name:'Sr No.',
    
    selector: (row)=> row.email,
    sortable:true,
    wrap:true

  },
  {
    name:'PO ID',
    selector: (row )=> row.email,
    sortable:true,
    wrap:true,
  },
  {
    name:'SOW',
    selector: (row) => row.body,
    sortable:true,
    wrap:true
  },
  {
    name:'Prime Customer',
    selector: (row) => row.body,
    sortable:true,
    wrap:true
  },
  {
    name:'End Customer',
    selector: (row) => row.body,
    sortable:true,
    wrap:true
  },
  {
    name:'Total PO',
    selector: (row) => row.body,
    sortable:true,
    wrap:true
  },
  {
    name:'PO',
    selector: (row) => row.email,
    sortable:true,
    wrap:true
  },
  {
    name:'RPO',
    selector: (row) => row.email,
    sortable:true,
    wrap:true,
    
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
    sortable:true,
    wrap:true,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Action',
    cell :(row)=> <Button varient="primary" onClick={()=> alert(row.id)} > Edit </Button>
   
  }

]
  useEffect(()=>{
getOrders();
  },[]);

  useEffect(()=>{
   const result= order.filter(singleOrder =>{
    return singleOrder.body.toLowerCase().match(search.toLocaleLowerCase());
   });

   setFilteredOrder(result)
      },[search]);

     const tableHeaderStyle={
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
    return(
<>
      <div className="w3-container w3-card w3-white w3-round w3-margin">
      <div>
       <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
         Vendor Details
         <hr style={{ borderTop:'1px solid', color:'black'}}/>
       </h3>
  
     </div>
       <div style={{ width: '88rem' }}>
     <DataTable 
     className="dataTables_wrapper"
     customStyles={tableHeaderStyle}
     columns={columnsp}
      data={filteredOrder}
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
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
  

      />
      </div>
      </div>

</>
    )}

    export default RequestedComponent;