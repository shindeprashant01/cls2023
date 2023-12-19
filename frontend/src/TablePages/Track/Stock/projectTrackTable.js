import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";
import '../../components/ReportAdmin/reportAdmin.css'

// import '../addVendor/viewVendor.css'



const ProjectTrackTable = () => {
    const [searchPTT, setSearchPTT] = useState("");
    const [projectTrack, setProjectTrack] = useState([]);
    const [filterProjectTrack, setFilteredProjectTrack] = useState([]);

    const ProjectTrack = async () => {
        try {
            const response = await axios.get('https://192.168.10.136/json/track_record.php')
            setProjectTrack(response.data);
            setFilteredProjectTrack(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsProjectTrackIpo = [
        {
            name:<div id="demo">UserID</div>,
            
            selector: (row)=> row.ID,
            sortable:true,
        
          },
          {
            name:<div id="demo">Action</div>,
            
            selector: (row)=> row.action,
            sortable:true,
        
          },
          {
            name:<div id="demo">Page Name</div>,
            selector: (row )=> row.Page_names,
          },
       
          {
            name:<div id="demo">Query</div>,
            selector: (row) => row.Query,
          },
          {
            name:<div id="demo">Table Name</div>,
            selector: (row) => row.Table_name,
          },
        
          {
            name:<div id="demo">Unique ID</div>,
            selector: (row) => row.Unique_ID
          },
          {
            name:<div id="demo">Date Time</div>,
            selector: (row) => row.Datetime,
          },
         

    ]

   
    useEffect(() => {
        ProjectTrack();
    }, []);

    useEffect(() => {
        const result = projectTrack.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchPTT.toLowerCase());
        });

        setFilteredProjectTrack(result)
    }, [searchPTT]);

    const tableHeaderStyleProjectTrack = {
        headCells: {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItem: "center",

                border: "1px solid white",
                width: "250px",
                fontWeight: "bold",
                fontSize: "18px", 
                color: "white",
                backgroundColor: "rgb(67, 190, 206)",
                padding: "12px",
                height:'70px'

            }
        },
        cells: {
            style: {
                display: "flex",
                justifyContent: "center",
                fontSize: '14px',
                flexWrap: "wrap",
                width: '100px',
                height:'100px'


            }
        },
        rows: {
            style: {
                height:"100px"
                //   width:"25px",
            }
        }
    }

    return (
        <>
            <div>
           <div style={{display:"flex", justifyContent:'center' , width:'1100px'}}>
           <div className="input-container-report-admin" style={{display:'flex', justifyContent:'center'}}>
                  <label style={{padding:'25px'}}> Start Date:</label>
                  <div className="input-details-report-admin">
                 <input type="date" className="date-type-report-admin" style={{padding:'25px'}}/>                 
                  </div>
                </div>
                <div className="input-container-report-admin">
                  <label style={{padding:'25px'}}> End Date:</label>
                  <div className="input-details-report-admin">
                <input type="date" className="date-type-report-admin" style={{padding:'25px'}}/>
      
                  </div>
                </div>
                <div style={{display:'flex', alignItems:"center"}}>
                <Button value={searchPTT} onChange={(e)=> setSearchPTT(e.target.value)}>Search</Button>
                </div>
                        
           </div>

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleProjectTrack}
                        columns={columnsProjectTrackIpo}
                        data={filterProjectTrack}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="550px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        // subHeaderComponent={
                        
                        //     <input type="date" placeholder="Search PO ID"
                        //         className="w-25 form-control"
                        //         value={searchPTT}
                        //         onChange={(e) => setSearchPTT(e.target.value)} />
                        // }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default ProjectTrackTable;
