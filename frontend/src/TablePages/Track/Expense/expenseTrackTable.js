import React, { useState, useEffect } from "react";
import "../../../App.css"
import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../../addVendor/viewVendor.css'
import newApiUrl from "../../config";
   
          

const ExpenseTrackTable = () => {
  const [expenseTrack, setExpenseTrack] = useState([]);
  const [searchET, setSearchET] = useState("");
 const [filterExpenseTrack, setFilteredExpenseTrack] = useState([]);

  const viewExpenseTrack = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/amc_expense.php?id=get`)
      // setExpenseTrack(response.data);
      setFilteredExpenseTrack(response.data);
      setExpenseTrack(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const columnsExpenseTrack = [
    {
      name: <div id="demo">Expense ID</div>,

      selector: (row) => row.ID,
      sortable: true,
      wrap: true,

    },
    {
      name: <div id="demo">Ticket ID</div>,
      selector: (row) => row.ticket_id,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Requested Date</div>,
      selector: (row) => row.requested_date,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Requested By</div>,
      selector: (row) => row.Created_by,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Service</div>,
      selector: (row) => row.service_name  + row.s_remark,
      // selector: (row) => row.remark,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Expense Cost</div>,
      selector: (row) => row.Amount,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Expense Description</div>,
      selector: (row) => row.Description,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Project Name</div>,
      selector: (row) => row.cc_id,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Date</div>,
      selector: (row) => row.filename,
      sortable: true,
    },
    {
      name: <div id="demo">Approved/Paid Date</div>,
      selector: (row) => row.Date,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Track</div>,
      selector: (row) => row.Track,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Remark(Disapproved)</div>,
      selector: (row) => row.body,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Documents</div>,
      selector: (row) => row.body,
      sortable: true,
      wrap: true,
    },

  ]


      useEffect(() => {
           viewExpenseTrack();
       }, []);

  useEffect(() => {
    const results = expenseTrack.filter(singleOrders => {
      return singleOrders.ID.toLowerCase().match(searchET.toLocaleLowerCase());
    });

    setFilteredExpenseTrack(results)
  }, [searchET]);

  const tableHeaderStyleExpenseTrack = {
    headCells: {
      style: {
        customStyles: "customStyles",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        borderRight: "0.5px solid lightgrey",
        // border: "1px solid white",
        width: "50px",
        height: "100px",
        fontWeight: "bold",
        fontSize: "14px",
        color: "white",
        backgroundColor: "rgb(67, 190, 206)",
        padding: "12px",
        // height:'100px'
        // minWidht "!100px !important"
      },
    },
    cells: {
      style: {
        display: "flex",
        justifyContent: "center",
        fontSize: "14px",
        flexWrap: "wrap",
        // width: '100px',
        borderRight: "1px solid lightgrey",
        borderBottom: "1px solid lightgrey",
        // height:'100px'
      },
    },
    rows: {
      style: {
        height: "60vh",
      },
    },
  }

  return (

  
    <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          AMC Expense Status
          <hr style={{ borderTop:'1px solid black', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
        <DataTable
          className="dataTables_wrapper"
          customStyles={tableHeaderStyleExpenseTrack}
          columns={columnsExpenseTrack}
          data={filterExpenseTrack}
          pagination
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          actions={
            <Button varient="primary" className="me-3"> Search</Button>
          }
          subHeader
          subHeaderComponent={
            <input type="text" placeholder="Search By Expense ID"
              className="w-25 form-control"
              value={searchET}
              onChange={(e) => setSearchET(e.target.value)} />
          }
          paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
        />

      </div>

    </div>
  );
};

export default ExpenseTrackTable;
