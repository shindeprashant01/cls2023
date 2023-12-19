import React, { useState, useEffect } from "react";
import '../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const ArchivePo1Table = () => {
    const [archivedPO1, setArchivedPO1] = useState([]);
    const [searchAPO1, setSearchAPO1] = useState("");
    const [filterArchivedPO1, setFilteredArchivedPO1] = useState([]);

    const viewArchivedPO1 = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setArchivedPO1(response.data);
            setFilteredArchivedPO1(response.data)
        } catch (error) {
            console.log(error);
        }
    };




    const columnsArchivePO1 = [
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
        },
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
            sortable: true,
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
        viewArchivedPO1();
    }, []);

    useEffect(() => {
        const result = archivedPO1.filter(singleOrder => {
            return singleOrder.body.toLowerCase().match(searchAPO1.toLocaleLowerCase());
        });

        setFilteredArchivedPO1(result)
    }, [searchAPO1]);



    const tableHeaderStyleArchivedPO1 = {
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
     Archive PO
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                    <DataTable

                        customStyles={tableHeaderStyleArchivedPO1}
                        columns={columnsArchivePO1}
                        data={filterArchivedPO1}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchAPO1}
                                onChange={(e) => setSearchAPO1(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>

        </>
    );
};

export default ArchivePo1Table;
