import React, { useState, useEffect } from "react";
import "../../../App.css"
import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const LivePoAccTable = () => {
    const [livePOAcc, setLivePOAcc] = useState([]);
    const [searchLPOAcc, setSearchLPOAcc] = useState("");
    const [filterLivePOAcc, setFilteredLivePOAcc] = useState([]);

    const viewLivePOAcc = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setLivePOAcc(response.data);
            setFilteredLivePOAcc(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsLivePOAcc = [
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
            name: <div id="demo">Project Manager</div>,
            selector: (row) => row.body,
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
            name: <div id="demo">PO Documents</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">SOW</div>,
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
            name: <div id="demo">End Customer</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Total PO</div>,
            selector: (row) => row.body,
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
            name: <div id="demo">Total Remaining Value</div>,
            selector: (row) => row.body,
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
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Service ID</div>,
            selector: (row) => row.body,
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
        {
            name: <div id="demo">AMC</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Assign value</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Remaining Assign Value</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name:<div id="demo">Update</div>,
            cell :(row)=><div>
      
          <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} >Edit </button>
          </div> 
           
          },
       
   
    ]

  
    useEffect(() => {
        viewLivePOAcc();
    }, []);

    useEffect(() => {
        const result = livePOAcc.filter(singleOrder => {
            return singleOrder.body.toLowerCase().match(searchLPOAcc.toLocaleLowerCase());
        });

        setFilteredLivePOAcc(result)
    }, [searchLPOAcc]);

    const tableHeaderStyleLivePOAcc = {
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
          Live PO Admin Associate 
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                    <DataTable

                        customStyles={tableHeaderStyleLivePOAcc}
                        columns={columnsLivePOAcc}
                        data={filterLivePOAcc}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchLPOAcc}
                                onChange={(e) => setSearchLPOAcc(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



         
        </>
    );
};

export default LivePoAccTable;
