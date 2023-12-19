import React ,{useEffect}from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PurchaseReqComponents from './components/PurchaseRequest/purchaseReqComponent';
import ExpenseReqComponents from './components/ExpenseRequest/expenseReqComponents';
import PurchaseFormComponents from './components/PurchaseForms/purchaseFormComponents';
import EmployeeRegiComponents from './components/EmployeeRegister/employeeRegiComponents';
import CustomerRegiComponents from './components/CustomerRegister/customerRegiComponents';
import NewVendorRegComponents from './components/NewVendorRegister/newVendorRegComponents';
import CreateTicketComponents from './components/CreateTickets/createTicketComponent';
import ReportAdminComponents from './components/ReportAdmin/reportAdminComponent';
import CreateProjectComponents from './components/CreateProject/createProjectComponent';
import HomeComponents from './components/HomeComponent/homeComponent';
// import PurchaseTablePage from './TablePages/PurchaseTable/purchaseTable';

// import LivePoTable from './TablePages/LivePO/livePo';

// import TblFunc from './TablePages/RequestedPo/requestedPo';
// import DemoTable from './TablePages/RequestedPo/requestedPo';
import RequestedPoTable from './TablePages/RequestedPo/requestedPo';
import ViewVendorTableComponents from './TablePages/addVendor/viewVendorComponets';
import ExpenseTableComponents from './TablePages/Approval/Expense/expenseComponents';
import ProjectTableComponents from './TablePages/Approval/Project/projectComponents';
import PurchaseTableComponents from './TablePages/Approval/Purchase/purchaseComponents';
import ExpenseTrackTableComponents from './TablePages/Track/Expense/expenseTrackComponents';
import PurchaseTrackTableComponents from './TablePages/Track/Purchase/purchaseTrackComponents';
import ExpenseReportTableComponents from './TablePages/Reports/Expense/expenseReportComponents';
import PurchaseReportTableComponents from './TablePages/Reports/Purchase/purchaseReportComponents';
import AmendPoTableComponents from './TablePages/AmendPo/amendPoComponents';
import ViewPoTableComponents from './TablePages/ViewPo/viewPoComponents';
import LiveStockTableComponents from './TablePages/Stock/LiveStock/liveStockComponents';
import ApprovalPurchaseTableComponents from './TablePages/ApprovalPurchase/approvalPurchaseComponents';
import ArchivedStockTableComponents from './TablePages/Stock/ArchivedStock/archivedStockComponents';
import PMScheduleTableComponents from './TablePages/PMSchedule/pmScheduleComponents';
import LivePoTableComponents from './TablePages/LivePO/livePoComponents';
import ArchivedPOTableComponents from './TablePages/ArchivedPo/archivedPoComponents';
import RequestedPOTableComponents from './TablePages/RequestedPOs/requestedPOComponents';
import RCAPoTablesComponents from './TablePages/RecentlyAddedPo/recently AddedPoComponents';
import LiveTicketsTableComponents from './TablePages/Tickets/LiveTickets/liveTicketsComponents';
import ArchivedTicketsTableComponents from './TablePages/Tickets/ArchivedTickets/archivedTcketsComponents';
import ViewCustomerTableComponents from './TablePages/ViewTables/viewCustomerComponents';
import ViewEmployeeTableComponents from './TablePages/ViewTables/viewEmployeeComponents';
import ViewVendorsTablesComponents from './TablePages/ViewTables/viewVendorComponents';
import PMTrackTablesComponents from './TablePages/Track/PMTrack/pMTrackComponents';
import ArchivePMTablesComponents from './TablePages/Track/ArchivedPM/archivedPMComponents';
import PoServiceNotAvialableTableComponents from './TablePages/PoServiceNotAvailable/pSNAComponents';
import ProjectTrackTablesComponents from './TablePages/Track/projectTrackIpoComponents';
import LivePo1TableComponents from './TablePages/LivePO/livePo1Components';
import ArchivePo1TableComponents from './TablePages/ArchivedPo/archivePo1Components';

import NewLiveTicketsTableComponents from './TablePages/Tickets/NewLiveTickets/newLiveTicketsComponents';
import ArchivedStockHodTableComponents from './TablePages/Stock/ArchivedStockHod/archivedStockHodComponents';
import LiveStockHodTableComponents from './TablePages/Stock/LiveStock/liveStockHodComponents';
import PurchaseRequestTableComponents from './TablePages/Approval/PurchaseRequest/purchaseRequestComponents';
import StockTrackTableComponents from './TablePages/Track/Stock/stockTrackComponemts';
import ArchivedPODOATableComponents from './TablePages/ArchivedPo/archivePoDOAComponents';
import PoServiceNotAvialableDOATableComponents from './TablePages/PoServiceNotAvailable/pSNADOAComponents';
import InvoiceScheduleTableComponents from './TablePages/InvoiceSchedule/invoiceScheduleComponents';
import StockApprovalTableComponents from './TablePages/Track/Stock/stockApprovalComponents';
import FMSEmployeeTableComponents from './TablePages/FMS/fmsEmployeeComponents';

import FMSEmployeeHrTableComponents from './TablePages/HR/FMS_HR/fmsEmployeeHrComponents';
import InvoiceScheduleAATableComponents from './TablePages/InvoiceSchedule/invoiceScheduleAAComponents';
import ExpensePaymentTableComponents from './TablePages/Account/AccountPurchase/expensePaymentComponents';
import PurchasePaymentTableComponents from './TablePages/Account/AccountPurchase/purchasePaymentsComponents';
import LivePoReceivableTableComponents from './TablePages/Account/AccountReceivable/livePoReceivableComponents';
import ArchivedPOReceivableTableComponents from './TablePages/Account/AccountReceivable/archivePoReceivableComponents';
import InvoiceScheduleRTableComponents from './TablePages/Account/AccountReceivable/invoiceScheduleRComponents';
import DueInvoiceTableComponents from './TablePages/Account/AccountReceivable/dueInvoiceComponents';
import InvoiceCollectionTableComponents from './TablePages/Account/AccountReceivable/invoiceCollectionComponents';
import LivePoAccTableComponents from './TablePages/Account/AccountMain/livePoAccComponents';
import UpdateInvoiceTableComponents from './TablePages/Account/AccountMain/updateInvoiceComponents';
import CreateInvoiceTableComponents from './TablePages/Account/AccountMain/createInvoiceComponents';
import PurchaseTrackSeTableComponents from './TablePages/ServiceEngineer/purchaseTrackSeComponents';

import LiveTicketsSeTableComponents from './TablePages/ServiceEngineer/liveTicketsSeComponents';
import ExpenseTrackSeTableComponents from './TablePages/ServiceEngineer/expenseTrackSeComponents';
import LivePoDOATableComponents from './TablePages/LivePO/livePoDOAComponents';
import ArchivedPOSATableComponents from './TablePages/ArchivedPo/archivedPoSAComponents';
import ViewEmployeeHrTableComponents from './TablePages/HR/ViewEmployee/viewEmployeeComponents';
import ProjectTrackIpoTablesComponents from './TablePages/Track/projectTrackIpoComponents';
import LoginForm from './Authentication/login/login';
import BackTheme from './TablePages/BackTheme';
import Demovendor from './TablePages/addVendor/demoVendor';
import NewVendorUpdateForm from './components/NewVendorRegister/newVendorUpdateForm';
import UpdatedData from './components/NewVendorRegister/vendorUpdatedData';
import Dashboard from './Dashboard/Dashboard';
import MultipleDashboards from './Dashboard/DashboardPrash';





function App() {

  // useEffect(()=>{ 
  //    fetch('https://jsonplaceholder.typicode.com/posts/1')
  //    .then(res=> res.json())
  //    .then(data =>console.log(data))
  //    .catch(err => console.log(err))
  // },[])
  return (

    <Router >  
      <div style={{marginBottom:'200px'}}>
        <BackTheme/>


  
    <Routes>
    <Route  path="/" Component={HomeComponents}/>
    <Route path='/dashboard' Component={Dashboard}/>
    <Route path='/dashboardPrashant' Component={MultipleDashboards}/>
    <Route  path="/purchase_form" Component={PurchaseFormComponents}/>
    <Route  path="/purchase_request" Component={PurchaseReqComponents}/>
    <Route  path="/expense_request" Component={ExpenseReqComponents}/>
    <Route  path="/vendor_register" Component={NewVendorRegComponents}/>
    <Route  path="/employee_register" Component={EmployeeRegiComponents}/>
    <Route  path="/customer_register" Component={CustomerRegiComponents}/>
    <Route  path="/create_tickets" Component={CreateTicketComponents}/>
    <Route  path="/report_admin" Component={ReportAdminComponents}/>
    <Route  path="/create_project" Component={CreateProjectComponents}/>
    {/* <Route  path="/purchase_table" Component={PurchaseTablePage}/> */}

                            {/* Tables  */} 
                             
    <Route  path="/ApprovalPurchase" Component={ApprovalPurchaseTableComponents}/>
    {/* <Route  path="/live_po" Component={LivePoTable}/>   */}
     {/* have to create */}

    <Route  path="/po_approval" Component={ProjectTableComponents}/>
    <Route  path="/Approval_project_purchase" Component={PurchaseTableComponents}/>
    <Route  path="/Approval_project_expense" Component={ExpenseTableComponents}/> 
    <Route  path="/request_purchase" Component={PurchaseRequestTableComponents}/>

    <Route path='view_vendor' Component={ViewVendorTableComponents}/>
    
    <Route path='/update_vendor' Component={NewVendorUpdateForm}/>
    <Route path='/updated_vendorsdetails' Component={UpdatedData}/>
    <Route path='demo_vendor' Component={Demovendor}/>

    <Route path='amc_expense_status' Component={ExpenseTrackTableComponents}/>
    <Route path='amc_purchase_status' Component={PurchaseTrackTableComponents}/>
    <Route path='expenses_report_list' Component={ExpenseReportTableComponents}/>
    <Route path='purchase_report_list' Component={PurchaseReportTableComponents} />
    <Route path='update_amc_internal_po_list' Component={AmendPoTableComponents} />
    <Route path='Internal_po_list' Component={ViewPoTableComponents}/>
    <Route path='view_stock' Component={LiveStockTableComponents}/>
    <Route path='view_stock_hod' Component={LiveStockHodTableComponents}/>
    <Route path='archived_stock' Component={ArchivedStockTableComponents}/>
    <Route path='archived_stock_hod' Component={ArchivedStockHodTableComponents}/>
    
    <Route path='/Add_PM_schedule' Component={PMScheduleTableComponents}/>
    <Route path='/new_cls/live_PO' Component={LivePoTableComponents}/>
    <Route path='/live_cc_DOA' Component={LivePoDOATableComponents}/>
    


    <Route path='/requested_tables' Component={RequestedPoTable}/>

    <Route path='/archive_po' Component={ArchivedPOTableComponents}/> 
    <Route path='/archive_po_DOA' Component={ArchivedPODOATableComponents}/> 
    <Route path='/archive_po_sa' Component={ArchivedPOSATableComponents}/>
 

    <Route path='/disapprove_po_list' Component={RequestedPOTableComponents}/>
    <Route path='/recent_live_po_AA' Component={RCAPoTablesComponents}/>
    <Route path='/recent_live_po_HOD' Component={RCAPoTablesComponents}/>
    <Route path='/live_ticket' Component={LiveTicketsTableComponents}/>
    <Route path='/archive_ticket' Component={ArchivedTicketsTableComponents}/>
    <Route path='/View_customer' Component={ViewCustomerTableComponents}/>
    <Route path='/view_employee' Component={ViewEmployeeTableComponents}/> 
    {/* <Route path='/View_vendors' Component={ViewVendorsTablesComponents}/> */}
    <Route path='/pm_track_aa' Component={PMTrackTablesComponents}/>  
    <Route path='/FM_track' Component={PMTrackTablesComponents}/>   
    <Route path='/stock_track' Component={StockTrackTableComponents}/> 
    <Route path='/stock_approval' Component={StockApprovalTableComponents}/> 
    
    <Route path='/archived_pm_aa' Component={ArchivePMTablesComponents}/>
    <Route path='/archived_fm_track' Component={ArchivePMTablesComponents}/>
    <Route path='/live_cc_po_service_not_Visible' Component={PoServiceNotAvialableTableComponents}/>
    <Route path='/live_cc_po_service_not_Visible_DOA' Component={PoServiceNotAvialableDOATableComponents}/>
    <Route path='/track_record' Component={ProjectTrackTablesComponents}/> 
    <Route path='/track_record_IPO' Component={ProjectTrackIpoTablesComponents}/> 
    <Route path='/live_cc' Component={LivePo1TableComponents}/> 
    <Route path='/archive_cc' Component={ArchivePo1TableComponents}/> 
    <Route path='/New_live_ticket' Component={NewLiveTicketsTableComponents}/> 
    <Route path='/others_live_ticket' Component={NewLiveTicketsTableComponents}/> 
    <Route path='/invoice_months' Component={InvoiceScheduleTableComponents}/> 
    <Route path='/invoice_months_aa' Component={InvoiceScheduleAATableComponents}/> 

    {/* HR */}
    <Route path='/Fms/employee_fms' Component={FMSEmployeeTableComponents}/>
    <Route path='/Fms/hr_employee' Component={FMSEmployeeHrTableComponents}/>
    <Route path='/new_cls/view_employee' Component={ViewEmployeeHrTableComponents}/>
   
   
     {/* Account */}
    <Route path='AMC_expense_pay' Component={ExpensePaymentTableComponents}/>
    <Route path='Acc_amc_purchase_pay' Component={PurchasePaymentTableComponents}/>
    <Route path='live_cc_receivable' Component={LivePoReceivableTableComponents}/>
    <Route path='archive_po_receivable' Component={ArchivedPOReceivableTableComponents}/>
    <Route path='Add_invoice_schedule' Component={InvoiceScheduleRTableComponents}/>
    <Route path='invoice_months_acc' Component={DueInvoiceTableComponents}/>
    <Route path='invoice_accounts' Component={InvoiceCollectionTableComponents}/>
    <Route path='live_cc_admin_associate' Component={LivePoAccTableComponents}/>
    <Route path='update_invoice_list' Component={UpdateInvoiceTableComponents}/>
    <Route path='live_cc_account' Component={CreateInvoiceTableComponents}/>
    <Route path='live_ticket_se' Component={LiveTicketsSeTableComponents}/>
    <Route path='amc_expense_status_s' Component={ExpenseTrackSeTableComponents}/>

   {/* Servie Engineer */}
   
   <Route path='amc_purchase_status_se' Component={PurchaseTrackSeTableComponents}/>
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
