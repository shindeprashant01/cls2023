import React from 'react';
// import '../../assets/css/w3Class.css';
import BackTheme from '../../../TablePages/BackTheme';
import EmpDetailsComponents from '../../../ExtraPages/EmpDetailsComponent';
import AddStockForm from './addStockForm';
import BackThemeFooter from '../../../TablePages/BackThemeFooter';



const AddStockFormComponents = () => {
  return (
    <div>
<BackTheme/>
<EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
  <p  className="instructor-line">
    Note:- Do not use " " in this form
  </p>
</div>
        <AddStockForm/> 
<BackThemeFooter/>
  
    </div>
  )

}

export default AddStockFormComponents;
