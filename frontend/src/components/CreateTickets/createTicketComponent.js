import React from 'react';
import '../../assets/css/w3Class.css';
import CreateTicket from './createTicket';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';
import BackTheme from '../../TablePages/BackTheme';
import BackThemeFooter from '../../TablePages/BackThemeFooter';


const CreateTicketComponents = () => {
  return (
    <div>
   <BackTheme/>
   <EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
  <p  className="instructor-line">
    Note:- Do not use " " in this form
  </p>
</div>
          <CreateTicket/>

        <BackThemeFooter/>
    </div>
  )
}

export default CreateTicketComponents;
