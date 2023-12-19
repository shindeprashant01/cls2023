import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";
import newApiUrl from "../config";
import '../../App.css'

// import '../addVendor/viewVendor.css'


    
const ViewEmployeeTable = () => {
    const [viewEmployee, setViewEmployee] = useState([]);
    const [searchVE, setSearchVE] = useState("");
    const [filterViewEmployee, setFilteredViewEmployee] = useState([]);

    const viewEmployees = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/employee.php`)
            setViewEmployee(response.data);
            setFilteredViewEmployee(response.data)
        } catch (error) {
            console.log(error);
        }
    };  



    const columnsViewEmployee = [
        {
            name: <div id="demo">Employee ID</div>,
            selector: (row) => row.emp_id,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Employee  Name</div>,
            selector: (row) => row.emp_name,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Employee Department</div>,
            selector: (row) => row.emp_dept,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Employee Position</div>,
            selector: (row) => row.emp_position,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Employee  Region</div>,
            selector: (row) => row.emp_region,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Employee Email</div>,
            selector: (row) => row.emp_email,
            sortable: true,
            wrap:true,
        },
     

        {
            name: <div id="demo">Employee Contact</div>,
            selector: (row) => row.emp_contact,
            sortable: true,
            wrap:true,
        },


        {
            name: <div id="demo">Employee Password</div>,
            selector: (row) => row.emp_pass,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Status</div>,
            selector: (row) => row.status,
            sortable: true,
            wrap:true,
        },

        {
            name:<div id="demo">Edit</div>,
            cell :(row)=> <Button variant="outline-primary" size="sm" onClick={()=> alert(row.id)} > Edit </Button>
           
          },
          {
            name:<div id="demo">Delete</div>,
            cell :(row)=> <Button variant="outline-danger" size="sm"  onClick={()=> alert(row.id)} > Delete </Button>
           
          }


    ]

   
    useEffect(() => {
        viewEmployees();
    }, []);

    useEffect(() => {
        const result = viewEmployee.filter(singleOrder => {
            return singleOrder.emp_name.toLowerCase().match(searchVE.toLocaleLowerCase());
        });

        setFilteredViewEmployee(result)
    }, [searchVE]);

    const tableHeaderStyleViewEmployee = {
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
          View Employee
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>
                    <DataTable
                        className="dataTables_wrapper"
                        customStyles={tableHeaderStyleViewEmployee}
                        columns={columnsViewEmployee}
                        data={filterViewEmployee}
                        pagination
                   
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search By Employee NAMW"
                                className="w-25 form-control"
                                value={searchVE}
                                onChange={(e) => setSearchVE(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default ViewEmployeeTable;
