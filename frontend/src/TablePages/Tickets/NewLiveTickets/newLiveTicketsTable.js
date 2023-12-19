import React, { useState, useEffect } from "react";
import '../../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../../config";



const NewLiveTicketsTable = () => {
    const [newLiveTickets, setNewLiveTickets] = useState([]);
    const [searchNewLiveTickets, setSearchNewLiveTickets] = useState("");
    const [filterNewLiveTickets, setFilteredNewLiveTickets] = useState([]);

    const viewNewLiveTickets = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/asigntickit.php`)
            setNewLiveTickets(response.data);
            setFilteredNewLiveTickets(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnnsNewLiveTickets = [
        {
            name: <div id="demo">Sr NO.</div>,

            selector: (row) => row.email,
            sortable: true,
            wrap:true,

        },
        {
            name: <div id="demo">    Ticket ID</div>,
            selector: (row) => row.tickit_id,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Date[yyy-mm-dd]</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Time[24 Hour]</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Ticket PO</div>,
            selector: (row) => row.tickit_cllcstPo,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Service</div>,
            selector: (row) => row.ticktServices,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Created By</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Description</div>,
            selector: (row) => row.ticket_desc,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Service Engineer</div>,
            selector: (row) => row.selctservicEng,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.startdate,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.enddate,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Asssign/Reassign</div>,
            selector: (row) => row.body,
            sortable: true,
            wrap:true,
        },


    ]
    useEffect(() => {
        viewNewLiveTickets();
    }, []);

    useEffect(() => {
        const result = newLiveTickets.filter(singleOrder => {
            return singleOrder.tickit_id.toLowerCase().match(searchNewLiveTickets.toLocaleLowerCase());
        });

        setFilteredNewLiveTickets(result)
    }, [searchNewLiveTickets]);

    const tableHeaderStyleNewLiveTickets = {
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
                height:"40vh",
              
            }
        }
    }

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin">
        <div>
         <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
           New Live Ticket
           <hr style={{ borderTop:'1px solid', color:'black'}}/>
         </h3>
    
       </div>
         <div style={{ width: '88rem' }}>
            <DataTable
                 className="dataTables_wrapper"
                customStyles={tableHeaderStyleNewLiveTickets}
                columns={columnnsNewLiveTickets}
                data={filterNewLiveTickets}
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
                        value={searchNewLiveTickets}
                        onChange={(e) => setSearchNewLiveTickets(e.target.value)} />
                }
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            />
            </div>

        </div>
    );
};

export default NewLiveTicketsTable;
