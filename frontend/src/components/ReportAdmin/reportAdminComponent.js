import React from 'react';
import '../../assets/css/w3Class.css';
import ReportAdmin from './reportAdmin';
import BackTheme from '../../TablePages/BackTheme';
import BackThemeFooter from '../../TablePages/BackThemeFooter';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';


const ReportAdminComponents = () => {
  return (
    <div>
 <BackTheme/>
 <EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
  <p  className="instructor-line">
    Note:- Do not use " " in this form
  </p>
</div>
          <ReportAdmin/>

      <BackThemeFooter/>
    </div>
  )
}

export default ReportAdminComponents;
