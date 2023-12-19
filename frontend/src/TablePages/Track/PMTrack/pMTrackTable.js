import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";
import newApiUrl from "../../config";
// import '../addVendor/viewVendor.css'
import '../../../App.css'

 

const PMTrackTable = () => {
    const [pMTrack, setPMTrack] = useState([]);
    const [searchPMT, setSearchPMT] = useState("");
    const [filterPMTrack, setFilteredPMTrack] = useState([]);

    const PMTrack = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/pm_schedule.php`)
            setPMTrack(response.data);
            setFilteredPMTrack(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsPMTrack = [
        {
            name:<div id="demo">Sr No</div>,
            
            selector: (row)=> row.email,
            sortable:true,
            wrap:true
        
          },
          {
            name:<div id="demo">Project Name</div>,
            selector: (row )=> row.OM_no,
            sortable:true,
            wrap:true
          },
       
          {
            name:<div id="demo">Service</div>,
            selector: (row) => row.service,
            sortable:true,
            wrap:true
          },
          {
            name:<div id="demo">Equipment</div>,
            selector: (row) => row.Equipment,
            sortable:true,
            wrap:true
          },
        
          {
            name:<div id="demo">PM Date</div>,
            selector: (row) => row.PM_date,
            sortable:true,
            wrap:true

          },
          {
            name:<div id="demo">PM Number</div>,
            selector: (row) => row.PM,
            sortable:true,
            wrap:true
          },
          {
            name:<div id="demo">Remark</div>,
            selector: (row) => row.Remark,
            sortable:true,
            wrap:true
          },
          {
            name:<div id="demo">Status</div>,
            selector: (row) => row.status,
            sortable:true,
            wrap:true
          },
          {
            name:<div id="demo">Ticket Number</div>,
            selector: (row) => row.ticket_number,
            sortable:true,
            wrap:true
          },
         

    ]

   
    useEffect(() => {
        PMTrack();
    }, []);

    useEffect(() => {
        const result = pMTrack.filter(singleOrder => {
            return singleOrder.OM_no.toLowerCase().match(searchPMT.toLocaleLowerCase());
        });

        setFilteredPMTrack(result)
    }, [searchPMT]);

    const tableHeaderStylePMTrack = {
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
                height:"20vh",
              
            }
        }
    }

    return (
        <>
            <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          PM Track AA
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                    <DataTable
                       className='dataTables_wrapper'
                        customStyles={tableHeaderStylePMTrack}
                        columns={columnsPMTrack}
                        data={filterPMTrack}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchPMT}
                                onChange={(e) => setSearchPMT(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default PMTrackTable;
