import React from 'react';
import '../../assets/css/w3Class.css';
import Report1 from './report1';
import BackTheme from '../../TablePages/BackTheme';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';
import BackThemeFooter from '../../TablePages/BackThemeFooter';


const Report1Components = () => {
  return (
    <div>
<BackTheme/>
<EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
  <p  className="instructor-line">
    Note:- Do not use " " in this form
  </p>
</div>
         <Report1/>  
<BackThemeFooter/>
  
    </div>
  )

}

export default Report1Components;
