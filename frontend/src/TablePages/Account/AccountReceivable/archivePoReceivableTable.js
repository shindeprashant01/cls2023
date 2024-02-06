import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";
import newApiUrl from "../../config";

// import '../addVendor/viewVendor.css'



const ArchivedPoReceivableTable = () => {
    const [archivedPOR, setArchivedPOR] = useState([]);
    const [searchAPOR, setSearchAPOR] = useState("");
    const [filterArchivedPOR, setFilteredArchivedPOR] = useState([]);

    const viewArchivedPOR = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/po.php?id=get`)
            setArchivedPOR(response.data);
            setFilteredArchivedPOR(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsArchivedPOR = [
        {
            name: <div id="demo">Sr No</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.cc_id,
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
            name: <div id="demo">Service Name</div>,
            selector: (row) => row.s_name,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Manager</div>,
            selector: (row) => row.manager,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">AMC</div>,
            selector: (row) => row.amc,
            sortable: true,
            wrap:true
        },

       

    ]

    
    useEffect(() => {
        viewArchivedPOR();
    }, []);

    useEffect(() => {
        const result = archivedPOR.filter(singleOrder => {
            return singleOrder.cc_id.toLowerCase().match(searchAPOR.toLocaleLowerCase());
        });

        setFilteredArchivedPOR(result)
    }, [searchAPOR]);

    const tableHeaderStyleArchivedPOR = {
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
          Archive PO Receivable
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>

                    <DataTable

                        customStyles={tableHeaderStyleArchivedPOR}
                        columns={columnsArchivedPOR}
                        data={filterArchivedPOR}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search Here Name"
                                className="w-25 form-control"
                                value={searchAPOR}
                                onChange={(e) => setSearchAPOR(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>

        </>
    );
};

export default ArchivedPoReceivableTable;
