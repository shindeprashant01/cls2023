import React, { useState, useEffect } from "react";
import "../../../App.css"
import DataTable from 'react-data-table-component';
import axios from "axios";
import newApiUrl from "../../config";




const FMSEmployeeHrTable = () => {
    const [fMSHr, setFMSHr] = useState([]);
    const [searchFMSHr, setSearchFMSHr] = useState("");
    const [filterFMSHr, setFilteredFMSHr] = useState([]);

    const viewFMSHr= async () => {
        try {
            const response = await axios.get(`${newApiUrl}/fms_emp2.php`)
            setFMSHr(response.data);
            setFilteredFMSHr(response.data)
        } catch (error) {
            console.log(error);
        }
    };



   
    const columnsFMSEmployeeHr = [
        {
            name: <div id="demo">Employee Code</div>,
            selector: (row) => row.emp_code,
            sortable: true,
            wrap: true,
        },
        {
            name: <div id="demo">Employee Name</div>,
            selector: (row) => row.emp_name,
            sortable: true,
            wrap: true,
        
        },
        {
            name: <div id="demo">Designation </div>,
            selector: (row) => row.designation,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Cost Center</div>,
            selector: (row) => row.cost_center,
            sortable: true,
            wrap: true,
        
        },

        {
            name: <div id="demo">Mobile No.</div>,
            selector: (row) => row.mobile_no,
            sortable: true,
            wrap:true,
        },


        {
            name: <div id="demo">CTC PA</div>,
            selector: (row) => row.ctc_pa,
            sortable: true,
            wrap:true,
        
        },
        {
            name:<div id="demo">Edit</div>,
            cell :(row)=><div>
      
          <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} >Edit</button>
          </div> 
           
        },

    ]

    const columnsFMSPoHrPay = [
        {
            name: <div id="demo">Employee Code</div>,
            selector: (row) => row.emp_code,
            sortable: true,
            wrap: true,
        },
        {
            name: <div id="demo">Site Name</div>,
            selector: (row) => row.site_name,
            sortable: true,
            wrap: true,
        },
        {
            name: <div id="demo">Basic</div>,
            selector: (row) => row.basic,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">House Rent Allowance</div>,
            selector: (row) => row.house_rent_allowance,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Conveyance Allowance</div>,
            selector: (row) => row.conveyance_allowance,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Medical Allowance</div>,
            selector: (row) => row.medical_allowance,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Special Allowance</div>,
            selector: (row) => row.special_allowance,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Provident Fund</div>,
            selector: (row) => row.provident_fund,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Profession tax</div>,
            selector: (row) => row.profession_tax,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Employee State Insurance</div>,
            selector: (row) => row.employee_state_insurance,
            sortable: true,
            wrap:true,
        },
       
    ]

    useEffect(() => {
        viewFMSHr();
    }, []);

    useEffect(() => {
        const result = fMSHr.filter(singleOrder => {
            return singleOrder.cost_center.toLowerCase().match(searchFMSHr.toLocaleLowerCase());
        });

        setFilteredFMSHr(result)
    }, [searchFMSHr]);

    const tableHeaderStyleFMSPOHr = {
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
          FMS Employee
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                <div style={{ position: 'relative' }}>

                    <DataTable
                        className="dataTables_wrapper"
                        customStyles={tableHeaderStyleFMSPOHr}
                        columns={ columnsFMSEmployeeHr}
                        data={filterFMSHr}
                        pagination
                   
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search Cost Center"
                                className="w-25 form-control"
                                value={searchFMSHr}
                                onChange={(e) => setSearchFMSHr(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />
</div>

                </div>
            </div>



            <div>
                <div  >
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Employee Pay</h3>
                    <hr />
                </div>
                <div style={{ position: 'relative' }}>

                    <DataTable
                     
                        customStyles={tableHeaderStyleFMSPOHr}
                        columns={ columnsFMSPoHrPay}
                        data={filterFMSHr}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="550px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                // value={searchFMSHr}
                                // onChange={(e) => setSearchFMSHr(e.target.value)} 
                                
                                />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default FMSEmployeeHrTable;
