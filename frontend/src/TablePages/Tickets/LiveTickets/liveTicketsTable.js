import React, { useState, useEffect } from "react";
import '../../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import apiUrlGet from '../../config'




const LiveTicketsTable = () => {
    const [liveTickets, setLiveTickets] = useState([]);
    const [searchLiveTickets, setSearchLiveTickets] = useState("");
    const [filterLiveTickets, setFilteredLiveTickets] = useState([]);

    const viewLiveTickets = async () => {
        try {
            const response = await axios.get(`${apiUrlGet}/tickite.php?id=get`)
            setLiveTickets(response.data);
            setFilteredLiveTickets(response.data)
        } catch (error) {
            console.log(error);
        }
    };   



    const columnnsLiveTickets = [
        {
            name: <div id="demo">Sr NO.</div>,

            selector: (row) => row.body,
            sortable: true,
            wrap:true,

        },


        {
            name: <div id="demo">Ticket Type</div>,
            selector: (row) => row.Ticket_type,
            wrap:true,
        },
        {
            name: <div id="demo">    Ticket ID</div>,
            selector: (row) => row.tikckit_id,
            sortable:true,
            wrap:true,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.Date,
            sortable:true,
            wrap:true,
        },
        {
            name: <div id="demo">Start Time</div>,
            selector: (row) => row.Time,
            wrap:true,
        },

        {
            name: <div id="demo">Ticket PO</div>,
            selector: (row) => row.tickit_Po,
            wrap:true,
        },

        {
            name: <div id="demo">Ticket Service</div>,
            selector: (row) => row.tickit_service,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Created</div>,
            selector: (row) => row.ticket_usertype,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Description</div>,
            selector: (row) => row.TikDescription,
            wrap:true,
        },
        {
            name: <div id="demo">Service Engineer</div>,
            selector: (row) => row.email,
            wrap:true,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.email,
            wrap:true,
        },
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
            wrap:true,
        },

        {
            name: <div id="demo">Status</div>,
            selector: (row) => row.Assign,
            wrap:true,
        },


    ]
    useEffect(() => {
        viewLiveTickets();
    }, []);

    useEffect(() => {
        const result = liveTickets.filter(singleOrder => {
            return singleOrder.tikckit_id.toLowerCase().match(searchLiveTickets.toLocaleLowerCase());
        });

        setFilteredLiveTickets(result)
    }, [searchLiveTickets]);

    const tableHeaderStyleLiveTickets = {
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
         
    <div className="w3-container w3-card w3-white w3-round w3-margin">
    <div>
     <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
       Live Ticket
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>

            <DataTable
                className="dataTables_wrapper"
              
                customStyles={tableHeaderStyleLiveTickets}
                columns={columnnsLiveTickets}
                data={filterLiveTickets}
                pagination
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={
                    <Button varient="primary" className="me-3"> Search</Button>
                }
                subHeader
                subHeaderComponent={
                    <input type="text" placeholder="Search Ticket ID"
                        className="w-25 form-control"
                        value={searchLiveTickets}
                        onChange={(e) => setSearchLiveTickets(e.target.value)} />
                }
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            />

             </div>
        </div>
    );
};

export default LiveTicketsTable;
