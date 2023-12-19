import React, { useState, useEffect } from "react";
// import BackTheme from "../BackTheme";
import "../../App.css";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button } from "react-bootstrap";
import newApiUrl from "../config";
import { Link} from 'react-router-dom';

// import "./viewVendor.css"  
  
const ViewVendorTable = () => {


  
  const [vendor, setVendor] = useState([]);
  const [searchV, setSearchV] = useState('');
   const [filtereVendor, setFilteredVendor] = useState([]);

  //   const viewVendor = async ()=>{
  //     try{
  //  const response = await axios.get('http://192.168.10.153/json/vendor_details.php?id=edit')
  //      setVendor(response.data);
      //  setFilteredVendor(response.data)
  //     } catch(error){
  //           console.log(error);
  //     }
  //   };

  useEffect(() => {
    getUsers();
  }, []);


  const getUsers = async () => {
    try {
      const response = await axios.get(`${newApiUrl}/vendor_details.php?id=get`)
      // setExpenseTrack(response.data);
      setFilteredVendor(response.data);
      setVendor(response.data);
      console.log(response.data)
      
     } catch (error) {
      console.log(error);
    }
  };
 

  const columnsVendor = [
    {
      name: <div id="demo">Vendor ID</div>,
      selector: (row) => row.vendor_id,
      sortable: true,
      wrap: true,
    },
    {
      name: <div id="demo">Vendor Name</div>,
      selector: (row) => row.Company_name,
      wrap: true,
    },

    {
      name: <div id="demo">Company Address</div>,
      selector: (row) => row.company_address,
      wrap: true,
    },
    {
      name: <div id="demo">Vendor Contact Person Name </div>,
      selector: (row) => row.vendor_name,
      wrap: true,
    },
    {
      name: "Contact",
      selector: (row) => row.vendor_contactno,
      wrap: true,
    },
    {
      name: <div id="demo">Alternate Contacts</div>,
      selector: (row) => row.vendor_contactno2,
      wrap: true,
    },
    {
      name: <div id="demo">Pan No.</div>,
      selector: (row) => row.vendor_PAN,
      wrap: true,
    },
    {
      name: <div id="demo">GST No.</div>,
      selector: (row) => row.GSTN_no,
      wrap: true,
    },
    {
      name: <div id="demo">Email</div>,
      selector: (row) => row.vendor_email,
      wrap: true,
    },
    {
      name: <div id="demo">Alternate Email</div>,
      selector: (row) => row.vendor_email2,
      wrap: true,
    },
    {
      name: <div id="demo">Account No.</div>,
      selector: (row) => row.Acc_no,
      wrap: true,
    },
    {
      name: <div id="demo">IFSC Code</div>,
      selector: (row) => row.ifsc_code,
      wrap: true,
    },
    {
      name: <div id="demo">Edit</div>,
      // selector: (row) => row.ifsc_code,
      cell: (row) => (

        // <Link to={`/update_vendor/${row.vendor_id}/edit`}> 
        
         <Link to={{ 
        pathname: "/update_vendor",
        search: `?vendor_id=${row.vendor_id}`, 
         }}><Button> Edit</Button></Link>
  
      
        
      ),
    },
    {
      name: <div id="demo">Delete</div>,
      cell: (row) => (
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => alert(row.id)}
        >
          {" "}
          Delete{" "}
        </Button>
      ),
    },
  ];

 
 
  // function getUsers() {
  //   axios
  //     .get(`${newApiUrl}/vendor_details.php`, filtereVendor)
  //     .then(function (response) {
       
  //       // setFilteredVendor(response.data);
  //       console.log(response.data);
  //     });
  // }

  //       useEffect(()=>{
  //            fetch('http://192.168.10.169/json/vendor_details.php?id=GET')
  //                .then(res=> {res.json().then(data => setFiltereVendor(data))})
  //                 // .then(data =>setFilteredVendor(data))
  //                 // .then(data =>console.log(data))
  //                 .catch(err => console.log(err))

  // },[])

  //  console.log(filtereVendor);

  //  useEffect(()=>{
  //    viewVendor();
  //   },[]);

  useEffect(() => {
    const results = vendor.filter((singleOrders) => {
      return singleOrders.Company_name.toLowerCase().match(searchV.toLocaleLowerCase());
    });

    setFilteredVendor(results);
  }, [searchV]);

  const tableHeaderStyleVendor = {
    headCells: {
      style: {
        customStyles: "customStyles",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        borderRight: "0.5px solid lightgrey",
        // border: "1px solid white",
        width: "50px",
        height: "100px",
        fontWeight: "bold",
        fontSize: "14px",
        color: "white",
        backgroundColor: "rgb(67, 190, 206)",
        padding: "12px",
        // height:'100px'
        // minWidht "!100px !important"
      },
    },
    cells: {
      style: {
        display: "flex",
        justifyContent: "center",
        fontSize: "14px",
        flexWrap: "wrap",
        // width: '100px',
        borderRight: "1px solid lightgrey",
        borderBottom: "1px solid lightgrey",
        // height:'100px'
      },
    },
    rows: {
      style: {
        height: "60vh",
      },
    },
  };

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <div>
        <h3 style={{ marginTop: "20px", marginLeft: "10px", color: "black" }}>
          Vendor Details
          <hr style={{ borderTop: "1px solid", color: "black" }} />
        </h3>
      </div>
      <div style={{ width: "88rem" }}>
        <DataTable
          className="dataTables_wrapper"
          customStyles={tableHeaderStyleVendor}
          columns={columnsVendor}
          data={filtereVendor}
          pagination
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          actions={
            <Button varient="primary" className="me-3" >
           
              Search
            </Button>
          }
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search By Vendor Name"
              className="w-25 form-control"
              value={searchV}
              onChange={(e) => setSearchV(e.target.value)}
            />
          }
          paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
        />
      </div>
    </div>
  );
};

export default ViewVendorTable;


