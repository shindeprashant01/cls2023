import React, { useState, useEffect } from "react";
import '../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const RCAPoTables = () => {
    const [rCAPo, setRCAPo] = useState([]);
    const [searchRCAPo, setSearchRCAPo] = useState("");
    const [filterRCAPo, setFilteredRCAPo] = useState([]);

    const viewRCAPoTable = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setRCAPo(response.data);
            setFilteredRCAPo(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsRCAPo = [
        {
            name: <div id="demo">Sr No</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">PM Schedule</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
      
     

        {
            name: <div id="demo">Prime Customer</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },


    
        {
            name: <div id="demo">Total PO</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
     
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
     
      
        {
            name: <div id="demo">Service ID</div>,
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
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
      


    ]

    
    useEffect(() => {
        viewRCAPoTable();
    }, []);

    useEffect(() => {
        const result = rCAPo.filter(singleOrder => {
            return singleOrder.body.toLowerCase().match(searchRCAPo.toLocaleLowerCase());
        });

        setFilteredRCAPo(result)
    }, [searchRCAPo]);

    const tableHeaderStyleRCAPo = {
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
          Recent Live Po AA
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>

                    <DataTable

                        customStyles={tableHeaderStyleRCAPo}
                        columns={columnsRCAPo}
                        data={filterRCAPo}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="550px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search Here Name,ID"
                                className="w-25 form-control"
                                value={searchRCAPo}
                                onChange={(e) => setSearchRCAPo(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>

        </>
    );
};

export default RCAPoTables;
