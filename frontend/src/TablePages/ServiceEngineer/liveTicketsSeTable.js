import React, { useState, useEffect } from "react";
import '../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";



const LiveTicketsSeTable = () => {
    const [liveTicketsSe, setLiveTicketsSe] = useState([]);
    const [searchLiveTicketsSe, setSearchLiveTicketsSe] = useState("");
    const [filterLiveTicketsSe, setFilteredLiveTicketsSe] = useState([]);

    const viewLiveTicketsSe = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setLiveTicketsSe(response.data);
            setFilteredLiveTicketsSe(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnnsLiveTicketsSe = [
        {
            name: <div id="demo">Sr NO.</div>,

            selector: (row) => row.email,
            sortable: true,
            wrap: true,

        },
     
        {
            name: <div id="demo">    Ticket ID</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket PO</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Description</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">Service Engineer</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">FSR</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },

       
        {
            name: <div id="demo">Expense</div>,
            selector: (row) => row.email,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Purchase</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
      
       
      

    ]
    useEffect(() => {
        viewLiveTicketsSe();
    }, []);

    useEffect(() => {
        const result = liveTicketsSe.filter(singleOrder => {
            return singleOrder.body.toLowerCase().match(searchLiveTicketsSe.toLocaleLowerCase());
        });

        setFilteredLiveTicketsSe(result)
    }, [searchLiveTicketsSe]);

    const tableHeaderStyleLiveTicketsSe = {
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
                height:"30vh",
              
            }
        }
    }

    return (
        <>
        <div className="w3-container w3-card w3-white w3-round w3-margin">
        <div>
         <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
           Live Ticket SE
           <hr style={{ borderTop:'1px solid', color:'black'}}/>
         </h3>
    
       </div>
         <div style={{ width: '88rem' }}>
            <DataTable

                customStyles={tableHeaderStyleLiveTicketsSe}
                columns={columnnsLiveTicketsSe}
                data={filterLiveTicketsSe}
                pagination
              
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={
                    <Button varient="primary" className="me-3"> Search</Button>
                }
                subHeader
                subHeaderComponent={
                    <input type="text" placeholder="Search PO ID"
                        className="w-25 form-control"
                        value={searchLiveTicketsSe}
                        onChange={(e) => setSearchLiveTicketsSe(e.target.value)} />
                }
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            />
            </div>

        </div>
        </>
    );
};

export default LiveTicketsSeTable;
