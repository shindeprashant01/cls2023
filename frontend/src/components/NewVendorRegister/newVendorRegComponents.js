import React from 'react'
import NewVendorRegiForm from './newVendorRegiForm';
import BackTheme from '../../TablePages/BackTheme';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';
import BackThemeFooter from '../../TablePages/BackThemeFooter';

const NewVendorRegComponents = () => {
  return (
    <div> 
 <BackTheme/>
 <EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
         <p  className="instructor-line">
           Note:- Do not use " " in this form
         </p>
       </div>
    

     <NewVendorRegiForm/>
 <BackThemeFooter/>
    </div>
  )
}

export default NewVendorRegComponents;
