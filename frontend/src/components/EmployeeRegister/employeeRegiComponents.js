import React from 'react';
import EmployeeRegister from './employeeRegister';
import '../../assets/css/w3Class.css';
import BackTheme from '../../TablePages/BackTheme';



const EmployeeRegiComponents = () => {
  return (
    <div>
   <BackTheme/>
   <div className="w3-col m3 note-line">
         <p  className="instructor-line">
           Note:- Do not use " " in this form
         </p>
       </div>
        
       <EmployeeRegister/>

   <div>
     <footer
       className="w3-container w3-theme-d3 w3-padding-16 footer-mainTag"
     >
       <h5>Nirvaa CLS</h5>
     </footer>
     <footer
       className="w3-container w3-theme-d5 footer-subline footer-mainTag-1"

     >
       <p>
         Powered by
         
           CSS-3
         
       </p>
     </footer>
   </div>
 </div>
  )
}

export default EmployeeRegiComponents;
