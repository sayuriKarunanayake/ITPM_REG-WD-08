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

//charya
//import AddCategories from './components/AddCategories';


//IT20156510
import Supplier_Home from './components/Supplier_Home';
import Supplier_Details from './components/Supplier_Details';
import Supplier_Registration from './components/Supplier_Registration';

import Payment_Details from './components/Payment_Details';
import Add_Payment_Details from './components/Add_Payment_Details';

import Supplier_Payment_Details from './components/Supplier_Payment_Details';
import Add_Supplier_Payment from './components/Add_Supplier_Payment';




function App() {
  return (
    <Router>
      <div>
      
        <Header/>

        {/* Sayuri - IT20197032 */}
        <div className='body'>  
        <Routes>
        <Route exact path="/stockHome" element={<StockHome />} />  
        <Route exact path="/addStock" element={<AddStock />} />
        <Route exact path="/deleteStock/:id" element={<DeleteStock />} />
        <Route exact path="/viewStock" element={<DisplayStockDetails />} />
        <Route exact path="/editStock/:id" element={<EditStock />} />
        <Route exact path="/fetchStock/:id" element={<FetchStock />} />
        <Route exact path="/stockReport" element={<StockReport />} />
        <Route exact path="/cusPay" element={<AllCusPayments />} />
        <Route exact path="/allstaff" element={<AllStaffDetails />} />
        
        </Routes>
        </div> 
        <Routes>
        <Route exact path="/" element={<StaffLogin />} />
        <Route exact path="/regStaff" element={<RegStaff />} />
        <Route exact path="/addcuspay" element={<PaymentCustomer />} />
        <Route exact path="/adminHome" element={<AdminHome />} />

        </Routes>


        {/* charya */} 
        {/*<Routes>
          <Route exact path="/addCategories" element={<AddCategories />} />
         </Routes> */}


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
        
       

          

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
