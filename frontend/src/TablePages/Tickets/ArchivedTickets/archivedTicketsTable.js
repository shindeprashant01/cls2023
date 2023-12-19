import React, { useState, useEffect } from "react";
import '../../../App.css'
import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../../config";



const ArchivedTicketsTable = () => {
    const [archivedTickets, setArchivedTickets] = useState([]);
    const [searchArchivedTickets, setSearchArchivedTickets] = useState("");
    const [filterArchivedTickets, setFilteredArchivedTickets] = useState([]);

    const viewArchivedTickets = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/tickite.php`)
            setArchivedTickets(response.data);
            setFilteredArchivedTickets(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnnsArchivedTickets = [
        {
            name: <div id="demo">Sr NO.</div>,

            selector: (row) => row.id,
            sortable: true,
            wrap:true,

        },

        {
            name: <div id="demo">    Ticket ID</div>,
            selector: (row) => row.tikckit_id,
            sortable: true,
            wrap:true,
            
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.Date,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Start Time</div>,
            selector: (row) => row.Time,
        },

        {
            name: <div id="demo">Ticket PO</div>,
            selector: (row) => row.tickit_Po,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Service</div>,
            selector: (row) => row.tickit_service,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Total Created By</div>,
            selector: (row) => row.ticket_usertype,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Ticket Description</div>,
            selector: (row) => row.TikDescription,
            sortable: true,
            wrap:true,
        },
       
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.End_Date,
        },

        {
            name: <div id="demo">FSR</div>,
            selector: (row) => row.FSR_filename,
        },


    ]
    useEffect(() => {
        viewArchivedTickets();
    }, []);

    useEffect(() => {
        const result = archivedTickets.filter(singleOrder => {
            return singleOrder.tikckit_id.toLowerCase().match(searchArchivedTickets.toLocaleLowerCase());
        });

        setFilteredArchivedTickets(result)
    }, [searchArchivedTickets]);

    const tableHeaderStyleArchivedTickets = {
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
       Archive Ticket
       <hr style={{ borderTop:'1px solid', color:'black'}}/>
     </h3>

   </div>
     <div style={{ width: '88rem' }}>
            <DataTable
                className="dataTables_wrapper"
                customStyles={tableHeaderStyleArchivedTickets}
                columns={columnnsArchivedTickets}
                data={filterArchivedTickets}
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
                        value={searchArchivedTickets}
                        onChange={(e) => setSearchArchivedTickets(e.target.value)} />
                }
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            />
</div>
        </div>
    );
};

export default ArchivedTicketsTable;
