import React, { useState, useEffect } from "react";
import'../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
import newApiUrl from "../config";
// import '../addVendor/viewVendor.css'

       

const ArchivedPoDOATable = () => {
    const [archivedPOD, setArchivedPOD] = useState([]);
    const [searchAPOD, setSearchAPOD] = useState("");
    const [filterArchivedPOD, setFilteredArchivedPOD] = useState([]);

    const viewArchivedPOD = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/po.php?id=get`)
            setArchivedPOD(response.data);
            setFilteredArchivedPOD(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsArchivedPOD = [
        {
            name: <div id="demo">Sr No</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.cc_id,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">PO Documents</div>,
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
            name: <div id="demo"> PO</div>,
            selector: (row) => row.cc_value,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">RPO</div>,
            selector: (row) => row.remaining_value,
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
            name: <div id="demo">Service_ID</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Service Name</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Manager</div>,
            selector: (row) => row.project_manager,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">AMC</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo"> Assign Value</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
       



    ]

    
    useEffect(() => {
        viewArchivedPOD();
    }, []);

    useEffect(() => {
        const result = archivedPOD.filter(singleOrder => {
            return singleOrder.cc_id.toLowerCase().match(searchAPOD.toLocaleLowerCase());
        });

        setFilteredArchivedPOD(result)
    }, [searchAPOD]);

    const tableHeaderStyleArchivedPOD = {
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
               
    <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          Archived PO DOA
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>

                    <DataTable
                       className="dataTables_wrapper"
                        customStyles={tableHeaderStyleArchivedPOD}
                        columns={columnsArchivedPOD}
                        data={filterArchivedPOD}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchAPOD}
                                onChange={(e) => setSearchAPOD(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>

        </>
    );
};

export default ArchivedPoDOATable;
