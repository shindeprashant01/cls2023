import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

import '../addVendor/viewVendor.css'



const LivePo1Table = () => {
    const [livePO1, setLivePO1] = useState([]);
    const [searchLPO1, setSearchLPO1] = useState("");
   
    const [filterLivePO1, setFilteredLivePO1] = useState([]);

    const viewLivePO1 = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setLivePO1(response.data);
            setFilteredLivePO1(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsLivePO1 = [
        {
            name: <div id="demo">Sr No</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">PO Documents</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true
        },
    

        {
            name: <div id="demo">Prime Customer</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true
        },


        {
            name: <div id="demo">End Customer</div>,
            selector: (row) => row.body,
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
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },

        {
            name: <div id="demo">Service ID</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },

      
        {
            name: <div id="demo">Service Name</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },
       
        {
            name: <div id="demo">Manager</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">AMC</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Assign Value</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },
        {
            name: <div id="demo">Remaining Assign Value</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true
        },
    ]

  
    useEffect(() => {
        viewLivePO1();
    }, []);

    useEffect(() => {
        const result = livePO1.filter(singleOrder => {
            return singleOrder.body.toLowerCase().match(searchLPO1.toLocaleLowerCase());
        });

        setFilteredLivePO1(result)
    }, [searchLPO1]);

    const tableHeaderStyleLivePO1 = {
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
          Live PO
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                    <DataTable

                        customStyles={tableHeaderStyleLivePO1}
                        columns={columnsLivePO1}
                        data={filterLivePO1}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchLPO1}
                                onChange={(e) => setSearchLPO1(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



         
        </>
    );
};

export default LivePo1Table;
