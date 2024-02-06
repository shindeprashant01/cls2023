import React from 'react';
import CustomerRegister from './customerRegister';
import BackTheme from '../../TablePages/BackTheme';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';
import BackThemeFooter from '../../TablePages/BackThemeFooter';



const CustomerRegiComponents = () => {
  return (
    <div>
   <BackTheme/>
   <EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
         <p  className="instructor-line">
           Note:- Do not use " " in this form
         </p>
       </div>
 
       <CustomerRegister/>
    <BackThemeFooter/>

 </div>
  )
}

export default CustomerRegiComponents;
