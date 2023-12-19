import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";
import '../../App.css'
import newApiUrl from "../config";
// import '../addVendor/viewVendor.css'



const ViewCustomerTable = () => {
    const [viewCustomer, setViewCustomer] = useState([]);
    const [searchVC, setSearchVC] = useState("");
    const [filterViewCustomer, setFilteredViewCustomer] = useState([]);

    const viewCustomers = async () => {
        try {
            const response = await axios.get(`${newApiUrl}/customer.php`)
            setViewCustomer(response.data);
            setFilteredViewCustomer(response.data)
        } catch (error) {
            console.log(error);
        }
    };
   


    const columnsViewCustomer = [
        {
            name: <div id="demo">Customer ID</div>,
            selector: (row) => row.CUST_ID,
             sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Customer Name</div>,
            selector: (row) => row.cust_name,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Customer Address</div>,
            selector: (row) => row.cust_add,
            sortable: true,
            wrap:true,
        },
        {
            name: <div id="demo">Customer Email</div>,
            selector: (row) => row.cust_email,
            sortable: true,
            wrap:true,
        },

        {
            name: <div id="demo">Customer Contact</div>,
            selector: (row) => row.cust_contact,
            sortable: true,
            wrap:true,
        },


        {
            name: <div id="demo">Customer Password</div>,
            selector: (row) => row.cust_pass,
            sortable: true,
            wrap:true,
        },

        {
            name:<div id="demo">Edit</div>,
            cell :(row)=> <Button variant="outline-primary" size="lg" onClick={()=> alert(row.id)} > Edit </Button>
           
          },
          {
            name:<div id="demo">Delete</div>,
            cell :(row)=> <Button variant="outline-danger" size="lg"  onClick={()=> alert(row.id)} > Delete </Button>
           
          }


    ]

   
    useEffect(() => {
        viewCustomers();
    }, []);

    useEffect(() => {
        const result = viewCustomer.filter(singleOrder => {
            return singleOrder.cust_name.toLowerCase().match(searchVC.toLocaleLowerCase());
        });

        setFilteredViewCustomer(result)
    }, [searchVC]);

    const tableHeaderStyleViewCustomer = {
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
          View Customer
          <hr style={{ borderTop:'1px solid', color:'black'}}/>
        </h3>
   
      </div>
        <div style={{ width: '88rem' }}>

                    <DataTable
                        className="dataTables_wrapper"
                        customStyles={tableHeaderStyleViewCustomer}
                        columns={columnsViewCustomer}
                        data={filterViewCustomer}
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search Customer Name"
                                className="w-25 form-control"
                                value={searchVC}
                                onChange={(e) => setSearchVC(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default ViewCustomerTable;
