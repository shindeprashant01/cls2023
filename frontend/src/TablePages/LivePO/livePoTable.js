import React, { useState, useEffect } from "react";
import '../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
// import '../addVendor/viewVendor.css'
import newApiUrl from "../config";
import { Link} from 'react-router-dom';
import { Button } from "react-bootstrap";



const LivePoTable = () => {
    const [livePO, setLivePO] = useState([]);
    const [searchLPO, setSearchLPO] = useState("");
    const [filterLivePO, setFilteredLivePO] = useState([]);

    const viewLivePO = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/po.php?id=get`)
            setLivePO(response.data);
            setFilteredLivePO(response.data)
        } catch (error) {
            console.log(error);
        }
    }; 



    const columnsLivePO = [
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.cc_id,
            sortable:true,
            wrap:true
        },
        {
            name: <div id="demo">Project Manager</div>,
            selector: (row) => row.Project_manager,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Created By</div>,
            selector: (row) => row.created_by,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Po Documents</div>,
            selector: (row ) => row.po_doc,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">SOW</div>,
            selector: (row) => row.Sow,
            sortable: true,
            wrap:true
        },

        {
            name: <div id="demo">Prime Customer</div>,
            selector: (row) => row.prime_cust,
            sortable: true,
            wrap:true
        },


        {
            name: <div id="demo">End Customer</div>,
            selector: (row) => row.end_cust,
            sortable: true,
            wrap:true
        },

        {
            name: <div id="demo">Total PO</div>,
            selector: (row) => row.total_po_cost,
            sortable: true,
            wrap:true
        },

        {
            name: <div id="demo">Total Assign Value</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Total Remaining value</div>,
            selector: (row) => row.cc_value,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.start_date,
            sortable: true,
            wrap:true
        },
        {   
            name: <div id="demo">End Date</div>,
            selector: (row) => row.end_date,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Track</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Action</div>,
            selector: (row)=>(
<div>
                <Link to={{ 
                    pathname: "/update_stock",
                    search: `?id=${row.id}`, 
                     }}>Edit</Link> 
                     <br></br>

                     <Link to={{ 
                        pathname: "/update_stock",
                        search: `?id=${row.id}`, 
                         }}> Delete</Link>

</div>
            )         
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

    const columnsLivePOService = [
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: <div id="demo">Service ID</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Service Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Comment</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Manager</div>,
            selector: (row) => row.body,
            sortable: true,
        },


        {
            name: <div id="demo">AMC</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Assign Value</div>,
            selector: (row) => row.email,
            sortable: true,
        },

        // {
        //     name:<div id="demo">Total Assign Value</div>,
        //     selector: (row) => row.body,
        //     sortable:true,
        // },
        // {
        //   name:<div id="demo">Total Remaining value</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">Start Date</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">End Date</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">Track</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">Action</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //     name:<div id="demo">Purchase Description</div>,
        //     selector: (row) => row.email,
        //   },
        //   {
        //     name:<div id="demo">Documents</div>,
        //     selector: (row) => row.email,
        //   },


    ]
    useEffect(() => {
        viewLivePO();
    }, []);

    useEffect(() => {
        const result = livePO.filter(singleOrder => {
            return singleOrder.cc_id.toLowerCase().match(searchLPO.toLocaleLowerCase());
        });

        setFilteredLivePO(result)
    }, [searchLPO]);

    const tableHeaderStyleLivePO = {
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
                height:"35vh",
              
            }
        }
    }

    return (
        <>
            {/* <div>
                <div>
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Live PO List</h3>
                    <hr />
                </div> */}

              
<div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          Live PO List
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                    <DataTable
                        className="dataTables_wrapper"
                        customStyles={tableHeaderStyleLivePO}
                        columns={columnsLivePO}
                        data={filterLivePO}
                        pagination
                      
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchLPO}
                                onChange={(e) => setSearchLPO(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />
                    </div>


                </div>
          
                <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
                Service List
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>

                    <DataTable

                        customStyles={tableHeaderStyleLivePO}
                        columns={columnsLivePOService}
                        data={filterLivePO}
                        pagination
                    
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchLPO}
                                onChange={(e) => setSearchLPO(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default LivePoTable;
