import React from 'react'

const DashboardNav = () => {
  return (
    
   
      <div className="w3-top" >
         {/* <div style={{marginBottom:"70px"}}> */}
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large nav-bar" >
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2">
            <i className="fa fa-bars"></i>
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-padding-large w3-theme-d4 nirvaa-cls-tag "
          >
            <i className="fa fa-home w3-margin-right"></i> Nirvaa CLS
          </a>
         
         
    
          <a
            href="#"
            className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
            title="My Account"
          >
            Logout
          </a>
        </div>
      {/* </div> */}


     

      <br />
    </div>
  

  
  )
}

export default DashboardNav