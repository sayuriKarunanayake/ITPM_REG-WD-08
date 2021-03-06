import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';


//IT20197032 - Sayuri
import AddStock from './components/AddStock';
import StockHome from './components/StockHome';
import DeleteStock from './components/DeleteStock';
import DisplayStockDetails from './components/DisplayStockDetails';
import EditStock from './components/EditStock';
import FetchStock from './components/FetchStock';
import RegStaff from './components/RegStaff';
import StaffLogin from './components/StaffLogin';
import StockReport from './components/StockReport';
import AllCusPayments from './components/AllCusPayments';
import PaymentCustomer from './components/PaymentCustomer';
import AllStaffDetails from './components/AllStaffDetails';
import AdminHome from './components/AdminHome';
import FetchStaff from './components/FetchStaff';

//charya -IT20192532
import AddItem from './components/AddItem';
import EditItems from './components/EditItems';
import {AllItems} from './components/Items';
import Allnewrequests from './components/Allnewrequests';
import ItemCategoryManagement from './components/ItemandCategoryManagement';
import GenerateItemReport from './components/GenerateItemReport';



//IT20156510
import Supplier_Home from './components/Supplier_Home';
import Supplier_Details from './components/Supplier_Details';
import Supplier_Registration from './components/Supplier_Registration';

import Payment_Details from './components/Payment_Details';
import Add_Payment_Details from './components/Add_Payment_Details';

import Supplier_Payment_Details from './components/Supplier_Payment_Details';
import Add_Supplier_Payment from './components/Add_Supplier_Payment';

//IT20198954
import AdminEditDelivery from './components/AdminEditDelivery';
import AdminEditOrder from './components/AdminEditOrders';
import AllFeedbacks from './components/ViewFeedbacks';
import GenerateOrderReport from './components/ItemPDFReport';
import OrderHandler from './components/OrderHome';

function App() {
  return (
    <Router>
      <div>
      
        <Header/>

        {/* Sayuri - IT20197032 */}
        <div className='body'>  
        <Routes>
         
        <Route exact path="/addStock" element={<AddStock />} />
        <Route exact path="/deleteStock/:id" element={<DeleteStock />} />
        <Route exact path="/viewStock" element={<DisplayStockDetails />} />
        <Route exact path="/editStock/:id" element={<EditStock />} />
        <Route exact path="/fetchStock/:id" element={<FetchStock />} />
        <Route exact path="/stockReport" element={<StockReport />} />
        <Route exact path="/cusPay" element={<AllCusPayments />} />
        <Route exact path="/allstaff" element={<AllStaffDetails />} />
        <Route exact path="/fetchstaff/:id" element={<FetchStaff />} />
        </Routes>
        </div> 
        <Routes>
        <Route exact path="/" element={<StaffLogin />} />
        <Route exact path="/regStaff" element={<RegStaff />} />
        <Route exact path="/addcuspay" element={<PaymentCustomer />} />
        <Route exact path="/adminHome" element={<AdminHome />} />
        <Route exact path="/stockHome" element={<StockHome />} /> 
        </Routes>


        {/* charya - IT20192532*/} 
        <Routes>
          <Route exact path="/additems" element={<AddItem />} />
          <Route exact path="/edititems/:id"  element={<EditItems/>}/>
          <Route exact path="/allitems" element={<AllItems />} />
          <Route exact path="/newrequests" element={<Allnewrequests />} />
          <Route exact path="/itemandcategoryHome" element={<ItemCategoryManagement />} />
          <Route exact path="/reportgene" element={<GenerateItemReport />} />
         </Routes> 



        {/* Sanjaya - IT20156510 */} 
        <Routes>
        <Route exact path="/Supplier_Home" element={<Supplier_Home />} />
        <Route exact path="/Supplier_Details" element={<Supplier_Details />} />
        <Route exact path="/Supplier_Registration" element={<Supplier_Registration />} />
        
        <Route exact path="/Payment_Details" element={<Payment_Details />} />
        <Route exact path="/Add_Payment_Details" element={<Add_Payment_Details />} />
        
        <Route exact path="/Supplier_Payment_Details" element={<Supplier_Payment_Details />} />
        <Route exact path="/Add_Supplier_Payment" element={<Add_Supplier_Payment />} />
        

        </Routes>
        
       {/*Thisara - IT20198954 */}
       <Routes>
       <Route exact path="/updateorder" element={<AdminEditOrder />} />
       <Route exact path="/updatedelivery" element={<AdminEditDelivery />} />
       <Route exact path="/readf" element={<AllFeedbacks />} />
       <Route exact path="/orderhome" element={<OrderHandler />} />
       <Route exact path="/readOrder" element={<GenerateOrderReport />} />

       </Routes>

          

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
