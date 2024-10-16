// src/App.js
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


// import EmployeePage from './pages/EmployeePage';
import FrontPage from './ExtraPages/FrontPage/frontpage';
import PurchaseFormComponents from './components/PurchaseForms/purchaseFormComponents';
import HomeComponents from './components/HomeComponent/homeComponent';
import SignForm from './Authentication/login/signin';
// import newApiUrl from './TablePages/config';

function Abc()  {

    

 

  return (
    <Router>
    <Routes>
      <Route path="/" Component={FrontPage} />
      <Route  path="/signin" Component={SignForm}/>
      <Route  path="/home" Component={HomeComponents}/>

        {/* {userPosition === 'Deputy Operational Manager' &&( <Route  path="/home" Component={HomeComponents}/> )  }
        {userPosition === 'employee' && (
         <Route  path="/purchase_form" Component={PurchaseFormComponents}/> 
        )} */}
  </Routes>
    </Router>
  );
};



export default Abc;
