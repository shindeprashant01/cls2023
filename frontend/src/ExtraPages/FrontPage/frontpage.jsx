import React from 'react';
import DashboardNav from "../DashboardNav/DashboardNav" ;
import SignForm from "../../Authentication/login/signin";
import BackThemeFooter from "../../TablePages/BackThemeFooter";
// import { useNavigate } from 'react-router';





const FrontPage = () => {



  return (
    <div>
   <DashboardNav/>
     <SignForm />
     <BackThemeFooter/>
    </div>
  );
};

export default FrontPage;
