import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";
import '../../components/ReportAdmin/reportAdmin.css'
import newApiUrl from "../config";
// import '../addVendor/viewVendor.css'
import '../../App.css'



const ProjectTrackIpoTable = () => {
  const [projectTrackI, setProjectTrackI] = useState([]);
    const [searchPTTI, setSearchPTTI] = useState("");
    const [filterProjectTrackI, setFilteredProjectTrackI] = useState([]);

    const ProjectTrackI = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/track_record_ipo.php`)
            setProjectTrackI(response.data);
            setFilteredProjectTrackI(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsProjectTrackIpoI = [
        {
            name:<div id="demo">UserID</div>,
            
            selector: (row)=> row.ID,
            sortable:true,
            wrap:true,
        
          },
          {
            name:<div id="demo">Action</div>,
            
            selector: (row)=> row.action,
            sortable:true,
            wrap:true,
        
          },
          {
            name:<div id="demo">Page Name</div>,
            selector: (row )=> row.Page_names,
            sortable:true,
            wrap:true,
          },
       
          {
            name:<div id="demo">Query</div>,
            selector: (row) => row.Query,
            sortable:true,
            wrap:true,
          },
          {
            name:<div id="demo">Table Name</div>,
            selector: (row) => row.Table_name,
            sortable:true,
            wrap:true,
          },
        
          {
            name:<div id="demo">Unique ID</div>,
            selector: (row) => row.Unique_ID,
            sortable:true,
            wrap:true,
          },
          {
            name:<div id="demo">Date Time</div>,
            selector: (row) => row.Datetime,
            sortable:true,
            wrap:true,
          },
         

    ]

   
    useEffect(() => {
        ProjectTrackI();
    }, []);

    useEffect(() => {
        const result = projectTrackI.filter(singleOrder => {
            return singleOrder.body.toLowerCase().match(searchPTTI.toLocaleLowerCase());
        });

        setFilteredProjectTrackI(result)
    }, [searchPTTI]);

    const tableHeaderStyleProjectTrackI = {
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
                height:"90vh",
              
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
                <Button value={searchPTTI} onChange={(e)=> setSearchPTTI(e.target.value)}>Search</Button>
                </div>
                        
           </div>

           <div className="w3-container w3-card w3-white w3-round w3-margin">
       <div>
        <h3 style={{ marginTop: '20px', marginLeft:"10px",color: 'black' }}>
          Track Record
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>

                    <DataTable
                        className="dataTables_wrapper"
                        customStyles={tableHeaderStyleProjectTrackI}
                        columns={columnsProjectTrackIpoI}
                        data={filterProjectTrackI}
                        pagination
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
            </div>
        </>
    );
};

export default ProjectTrackIpoTable;
