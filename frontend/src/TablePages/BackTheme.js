import React from 'react'

const BackTheme = () => {

  // const user =JSON.parse(localStorage.getItem('emp_id;'))
  // function logout(){
  //   localstorage.clear
  // }

  return (  
    <div>
    <div style={{marginBottom:"70px"}}>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large nav-bar">
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2">
            <i className="fa fa-bars"></i>
          </a>
          <a
            href="/home"
            className="w3-bar-item w3-button w3-padding-large w3-theme-d4 nirvaa-cls-tag "
          >
            <i className="fa fa-home w3-margin-right"></i> Nirvaa CLS
          </a>
         
          <div className="w3-dropdown-hover">
            <button className="w3-button">Purchase</button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
              <a href="/Purchase_form" className="w3-bar-item w3-button">
                Purchase Form
              </a>
              
            </div>
          </div>
          <div className="w3-dropdown-hover">
            <button className="w3-button">Request</button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
              <a href="/AMC_expense" className="w3-bar-item w3-button">
                Expense Request
              </a>
              <a href="/AMC_purchase" className="w3-bar-item w3-button">
                Purchase Request
              </a>
            </div>
          </div>
          <div className="w3-dropdown-hover">
          <button className="w3-button">Register</button>
          <div className="w3-dropdown-content w3-bar-block w3-border">
            <a href="/vendor_register" className="w3-bar-item w3-button">
              Vendor Register
            </a>
            <a href="/employee_register" className="w3-bar-item w3-button">
              Employee Register
            </a>
            <a href="/customer_register" className="w3-bar-item w3-button">
            Customer Register
          </a>
          </div>
        </div>


        <div className="w3-dropdown-hover">
        <button className="w3-button">Ticket</button>
        <div className="w3-dropdown-content w3-bar-block w3-border">
          <a href="/create_tickets" className="w3-bar-item w3-button">
            Create Ticket
          </a>
     
     
          <a href="/live_ticket" className="w3-bar-item w3-button">
            Live Tickets
          </a>

          <a href="/New_live_ticket" className="w3-bar-item w3-button">
           New Live Tickets
          </a>
    
     
          <a href="/archive_ticket" className="w3-bar-item w3-button">
            Archived Tickets
          </a>
          <a href="/others_live_ticket" className="w3-bar-item w3-button">
            Assign Tickets
          </a>
        </div>
      </div>

      <div className="w3-dropdown-hover">
      <button className="w3-button">Report</button>
      <div className="w3-dropdown-content w3-bar-block w3-border">
        <a href="/report_admin" className="w3-bar-item w3-button">
         Report che
         </a>
         <a href="/expenses_report_list" className="w3-bar-item w3-button">
         Expense Report
        </a>
        <a href="/purchase_report_list" className="w3-bar-item w3-button">
         Purchase Report
        </a>
      
      </div>
    </div>
    <div className="w3-dropdown-hover">
    <button className="w3-button">PO</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="/create_project" className="w3-bar-item w3-button">
        Create Project
      </a>
      <a href="/Add_PM_schedule" className="w3-bar-item w3-button">
       PM Schedule
      </a>
      <a href="/new_cls/live_PO" className="w3-bar-item w3-button">
       Live PO
      </a>
      <a href="live_cc_DOA" className="w3-bar-item w3-button">
       Live PO DOA
      </a>
      <a href="live_cc" className="w3-bar-item w3-button">
       Live PO_HOD
      </a>
      <a href="live_cc_receivable" className="w3-bar-item w3-button">
       Live PO Receivable
      </a>
      <a href="/archive_po" className="w3-bar-item w3-button">
       Archived PO
      </a>
      <a href="/archive_cc" className="w3-bar-item w3-button">
       Archived PO HOD
      </a>
      <a href="/archive_po_DOA" className="w3-bar-item w3-button">
       Archived PO DOA
      </a>
      <a href="/archive_po_sa" className="w3-bar-item w3-button">
       Archived PO SA
      </a>
      <a href="/archive_po_receivable" className="w3-bar-item w3-button">
       Archived PO Receivable
      </a>
      <a href="/disapprove_po_list" className="w3-bar-item w3-button">
       Requested PO
      </a>
      <a href="/recent_live_po_AA" className="w3-bar-item w3-button">
       Recently Added PO
      </a>
      <a href="/recent_live_po_AA" className="w3-bar-item w3-button">
       Recently Added PO HOD
      </a>
      <a href="/Internal_po_list" className="w3-bar-item w3-button">
       View PO
      </a>
      <a href="/FM_track" className="w3-bar-item w3-button">
       PM HOD
      </a>
      <a href="/archived_fm_track" className="w3-bar-item w3-button">
       Archived PM HOD
      </a>
      <a href="/live_cc_po_service_not_Visible" className="w3-bar-item w3-button">
      PO Service Not Available
      </a>
    </div>
  </div>
  <div className="w3-dropdown-hover">
    <button className="w3-button">I-PO</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="/ApprovalPurchase" className="w3-bar-item w3-button">
      Create I-PO
      </a>
      <a href="/ApprovalPurchase" className="w3-bar-item w3-button">
      Amend
      </a>
    </div>
    
  </div>
  <div className="w3-dropdown-hover">
    <button className="w3-button">Approval</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="/po_approval" className="w3-bar-item w3-button">
     Project Approval
      </a>
      <a href="/Approval_project_purchase" className="w3-bar-item w3-button">
   Purchase Approval
      </a>
      <a href="/Approval_project_expense" className="w3-bar-item w3-button">
   Expense  Approval
      </a>
      <a href="/request_purchase" className="w3-bar-item w3-button">
   Purchase order  Approval
      </a>
      <a href="/invoice_months" className="w3-bar-item w3-button">
 Invoice Schedule
      </a>
      <a href="/stock_approval" className="w3-bar-item w3-button">
Stock
      </a>
    </div>
    
  </div>
  <div className="w3-dropdown-hover">
    <button className="w3-button">View</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="/View_customer" className="w3-bar-item w3-button">
    View Customer
      </a>
      <a href="/view_employee" className="w3-bar-item w3-button">
   View Employee
      </a>
      <a href="/View_vendor" className="w3-bar-item w3-button">
   View Vendor
      </a>
    </div>
    
  </div>
  <div className="w3-dropdown-hover">
    <button className="w3-button"> Track</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="/amc_expense_status" className="w3-bar-item w3-button">
 Expense
      </a>
      <a href="/live_ticket_se" className="w3-bar-item w3-button">
        Expense Track_SE
      </a>
      <a href="/amc_purchase_status" className="w3-bar-item w3-button">
  Purchase
      </a>
      <a href="/pm_track_aa" className="w3-bar-item w3-button">
        PM
      </a>
      <a href="/archived_pm_aa" className="w3-bar-item w3-button">
      Archived PM
      </a>
      <a href="/archived_fm_track" className="w3-bar-item w3-button">
      Archived PM HOD
      </a>
    </div>
    
  </div>

  <div className="w3-dropdown-hover">
    <button className="w3-button">Stock</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="view_stock" className="w3-bar-item w3-button">
     Live Stock 
      </a>
      <a href="view_stock_hod" className="w3-bar-item w3-button">
     Live Stock HOD
      </a>
      <a href="archived_stock" className="w3-bar-item w3-button">
     Archived_stock
      </a>
      <a href="archived_stock_hod" className="w3-bar-item w3-button">
     Archived_stock HOD
      </a>
    </div>
  </div>



  <div className="w3-dropdown-hover">
    <button className="w3-button">Logs</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="track_record" className="w3-bar-item w3-button">
   Project Logs
      </a>
      <a href="track_record_IPO" className="w3-bar-item w3-button">
  I-PO Logs
      </a>
    </div>
  </div>

  <div className="w3-dropdown-hover">
    <button className="w3-button">FMS</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="/Fms/employee_fms" className="w3-bar-item w3-button">
      FMS
      </a>
      <a href="/Fms/hr_employee" className="w3-bar-item w3-button">
      FMS Employee
      </a>
      <a href="/new_cls/view_employee" className="w3-bar-item w3-button">
      View Employee
      </a>
 
    </div>
  </div>
  <div className="w3-dropdown-hover">
    <button className="w3-button">View Employee</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="new_cls/view_employee" className="w3-bar-item w3-button">
      View Employee
      </a>
 
    </div>
  </div>

  <div className="w3-dropdown-hover">
    <button className="w3-button">Payment</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="AMC_expense_pay" className="w3-bar-item w3-button">
     Expense
      </a>
      <a href="Acc_amc_purchase_pay" className="w3-bar-item w3-button">
     Purchase
      </a>
 
    </div>
  </div>

  <div className="w3-dropdown-hover">
    <button className="w3-button">Invoice</button>
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <a href="Add_invoice_schedule" className="w3-bar-item w3-button">
   Invoice Schedule
      </a>
      <a href="invoice_months_acc" className="w3-bar-item w3-button">
   Due Invoices
      </a>
 
      <a href="invoice_accounts" className="w3-bar-item w3-button">
   Invoice Receivable
      </a>
      <a href="update_invoice_list" className="w3-bar-item w3-button">
    Update Invoice 
      </a>
      <a href="live_cc_account" className="w3-bar-item w3-button">
    Create Invoice 
      </a>
      <a href="live_ticket_se" className="w3-bar-item w3-button">
     Attend Services
      </a>
    </div>
  </div>
          <a 
            href="#"
            className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
            title="My Account"
          
          >
            Logout
           
          </a>
        </div>
      </div>

      <div
        id="navDemo"
        className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large"
      >
        <a href="#" className="w3-bar-item w3-button w3-padding-large"></a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">
          Link 3
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">
          My Profile
        </a>
      </div>

     

      <br />
    </div>
  

  </div> 
  )
}

export default BackTheme