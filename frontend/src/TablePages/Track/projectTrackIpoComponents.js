import React from "react";
import BackTheme from "../BackTheme";
import ProjectTrackIpoTable from "./projectTrackIpoTable";
import EmpDetailsComponents from "../../ExtraPages/EmpDetailsComponent";
import BackThemeFooter from "../BackThemeFooter";








const ProjectTrackIpoTablesComponents =()=>{

    return(
        <>
     
   
<BackTheme/>
<EmpDetailsComponents/>
  
<div style={{marginTop:'100px',marginRight:'15px',marginBottom:'50px'}}>
      <ProjectTrackIpoTable/>
        </div>
      <BackThemeFooter/>
 
  
     
        </>
    )}


    export default ProjectTrackIpoTablesComponents;