import React from 'react';
// import axios from "axios";
import { useEffect, useState } from "react";

 function Demovendor(){

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        displayData();
    },[])

    // function displayData(){
    //     axios.get('http://192.168.10.169/json/vendor_details.php')
    //     .then(function(response){
    //         setUsers(response.data);
    //     //    console.log(response.data);
    //     });
    // }

   

    const displayData =() =>{

        //  let userData = JSON.parse(window.localStorage.getItem("userDetails"));
         fetch("http://192.168.10.169/json/vendor_details.php")
         .then((res)=> res.json())
         .then((res)=> {
             setUsers(res);
             console.log(res);
         })
    }
 
   return(
       <>
        <h1 style={{marginTop:'100px'}}> List User </h1>
        <table>
            <thead>
                <tr>
                    <th> Vendor ID </th>
                    <th> Vendor Name</th>
                    <th> Company Address </th>
                    <th> Vendor Contact Person Name </th>
                </tr>
            </thead>
    
              <tbody>
           {users.map((user,key)=>{

           <tr key={key}>
           <td> prashant </td>
           <td>{user.Company_name}</td>
           <td>{user.company_address}</td>
           <td>{user.company_address}</td>
           <td>{user.vendor_name}</td>
           </tr>
      })}
           </tbody>
        </table>
  </>

   );
  
}

export default Demovendor;