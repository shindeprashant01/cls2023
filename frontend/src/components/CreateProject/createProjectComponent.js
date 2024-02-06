import React from 'react';

// import CreateProject from './createProject';
import DemoSection from './demoSection';
import CreateProject from './createProject';
import BackTheme from '../../TablePages/BackTheme';
import EmpDetailsComponents from '../../ExtraPages/EmpDetailsComponent';
import BackThemeFooter from '../../TablePages/BackThemeFooter';



const CreateProjectComponents = () => {
  return (
    <div>
  <BackTheme/>
  <EmpDetailsComponents/>
  <div className="w3-col m3 note-line">
  <p  className="instructor-line">
    Note:- Do not use " " in this form
  </p>
</div>
          <CreateProject/>
      <BackThemeFooter/>
    </div>
  )
}

export default CreateProjectComponents;
