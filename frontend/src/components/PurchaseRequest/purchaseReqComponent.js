import React from 'react';
import PurchaseRequest from './purchaseRequest';
import '../../assets/css/w3Class.css';
import BackThemeFooter from '../../TablePages/BackThemeFooter';
import BackTheme from '../../TablePages/BackTheme';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';


const PurchaseReqComponents = () => {
  return (
    <div>
       
     <BackTheme/>
     <EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
  <p  className="instructor-line">
    Note:- Do not use " " in this form
  </p>
</div>
        
          <PurchaseRequest/>

          <div>
      <BackThemeFooter/>
        </div> 
    </div>
  )
}

export default PurchaseReqComponents;
