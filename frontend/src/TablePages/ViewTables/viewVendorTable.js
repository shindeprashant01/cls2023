import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const ViewVendorTables = () => {
    const [searchVV, setSearchVV] = useState("");
    const [viewVendor, setViewVendor] = useState([]);
    const [filterViewVendor, setFilteredViewVendor] = useState([]);

    const ViewVendors = async () => {
        try {
            const response = await axios.get('http://192.168.10.153/json/Vendors/vendor_details1.php')
            setViewVendor(response.data);
            setFilteredViewVendor(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsViewVendor = [
        {
            name:<div id="demo">Vendor ID</div>,
            
            selector: (row)=> row.vendor_id,
            sortable:true,
            wrap:true,
        
          },
          {
            name:<div id="demo">Vendor Name</div>,
            selector: (row )=> row.Company_name,
            sortable: true,
            wrap:true,
          },
       
          {
            name:<div id="demo">Company Address</div>,
            selector: (row) => row.company_address,
            sortable: true,
            wrap:true,
            
          },
          {
            name:<div id="demo">Vendor Contact Person Name </div>,
            selector: (row) => row.vendor_name,
            sortable: true,
            wrap:true,
          },
          {
            name:'Contact',
            selector: (row) => row.vendor_contactno,
            sortable: true,
            wrap:true,
          },
          {
            name:<div id="demo">Alternate Contacts</div>,
            selector: (row) => <div className="form-control"> {row.vendor_contactno2} </div>,
            sortable: true,
            wrap:true,
          },
          {
            name:<div id="demo">Pan No.</div>,
            selector: (row) => row.vendor_pan,
            sortable: true,
            wrap:true,
          },
          {
            name:<div id="demo">GST No.</div>,
            selector: (row) => row.GSTN_no,
            sortable: true,
            wrap:true,
          },
          {
            name:<div id="demo">Email</div>,
            selector: (row) => row.vendor_email,
            sortable: true,
            wrap:true,
          },
          {
            name:<div id="demo">Alternate Email</div>,
            selector: (row) => row.vendor_email2,
            sortable: true,
            wrap:true,
          },
          {
            name:<div id="demo">Account No.</div>,
            selector: (row) => row.Acc_no,
            sortable: true,
            wrap:true,
          },
          {
            name:<div id="demo">IFSC Code</div>,
            selector: (row) => row.ifsc_code,
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
        ViewVendors();
    }, []);

    useEffect(() => {
        const result = viewVendor.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchVV.toLowerCase());
        });

        setFilteredViewVendor(result)
    }, [searchVV]);

    const tableHeaderStyleViewVendor = {
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
            height:'100px'

        }
    },
    cells: {
        style: {
            display: "flex",
            justifyContent: "center",
            fontSize: '14px',
            flexWrap: "wrap",
            width: '100px',
            // height:'100px'
        }
    },
    rows: {
        style: {
            height:"40vh"
            //   width:"25px",
        }
    }
    }

    return (
        <>
            <div>
           

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleViewVendor}
                        columns={columnsViewVendor}
                        data={filterViewVendor}
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
                                value={searchVV}
                                onChange={(e) => setSearchVV(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default ViewVendorTables;
