import React, { useState, useEffect } from "react";
import '../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
import newApiUrl from "../config";
// import '../addVendor/viewVendor.css'

  

const FMSEmployeeTable = () => {
    const [fMS, setFMS] = useState([]);
    const [searchFMS, setSearchFMS] = useState("");
    const [filterFMS, setFilteredFMS] = useState([]);

    const viewFMS= async () => {
        try {
            const response = await axios.get(`${newApiUrl}/po.php?id=get`)
            setFMS(response.data);
            setFilteredFMS(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsFMSPo = [
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.cc_id,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Project Manager</div>,
            selector: (row) => row.Project_manager,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Created By</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Po Documents</div>,
            selector: (row) => row.po_doc,
            sortable: true,
            wrap:true,
            
        },
        {
            name: <div id="demo">SOW</div>,
            selector: (row) => row.Sow,
            sortable: true,
            wrap:true,
        
        },

        {
            name: <div id="demo">Prime Customer</div>,
            selector: (row) => row.prime_cust,
            sortable: true,
            wrap:true,
        
        },


        {
            name: <div id="demo">End Customer</div>,
            selector: (row) => row.end_cust,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Total PO</div>,
            selector: (row) => row.total_po_cost,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Total Assign Value</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Total Remaining value</div>,
            selector: (row) => row.cc_value,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.start_date,
            sortable: true,
            wrap:true,
        },
        {   
            name: <div id="demo">End Date</div>,
            selector: (row) => row.end_date,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Track</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Action</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        // {
        //     name:<div id="demo">Purchase Description</div>,
        //     selector: (row) => row.email,
        //   },
        //   {
        //     name:<div id="demo">Documents</div>,
        //     selector: (row) => row.email,
        //   },


    ]

    const columnsFMSEmployee = [
        {
            name: <div id="demo">Employee Code</div>,
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Designation </div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Cost Center</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Mobile No.</div>,
            selector: (row) => row.body,
            sortable: true,
        },


        {
            name: <div id="demo">CTC PA</div>,
            selector: (row) => row.body,
            sortable: true,
        },

    ]
    useEffect(() => {
        viewFMS();
    }, []);

    useEffect(() => {
        const result = fMS.filter(singleOrder => {
            return singleOrder.cc_id.toLowerCase().match(searchFMS.toLocaleLowerCase());
        });

        setFilteredFMS(result)
    }, [searchFMS]);

    const tableHeaderStyleFMSPO = {
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
          FMS Employee
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                    <DataTable
                        className="dataTables_wrapper"
                        customStyles={tableHeaderStyleFMSPO}
                        columns={columnsFMSPo}
                        data={filterFMS}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchFMS}
                                onChange={(e) => setSearchFMS(e.target.value)} 
                                />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



            <div>
                <div  >
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Employee List</h3>
                    <hr />
                </div>
                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleFMSPO}
                        columns={columnsFMSEmployee}
                        data={filterFMS}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="550px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                // value={searchFMS}
                                // onChange={(e) => setSearchFMS(e.target.value)}
                                
                                />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default FMSEmployeeTable;
