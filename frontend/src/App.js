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

//charya
//import AddCategories from './components/AddCategories';


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
        <Route exact path="/regStaff" element={<RegStaff />} />
        <Route exact path="/stockReport" element={<StockReport />} />
        <Route exact path="/cusPay" element={<AllCusPayments />} />
        </Routes>
        </div> 
        <Routes>
        <Route exact path="/" element={<StaffLogin />} />
        <Route exact path="/addcuspay" element={<PaymentCustomer />} />
        </Routes>

        {/* charya */} 
      {/*<Routes>
          <Route exact path="/addCategories" element={<AddCategories />} />
         </Routes> */}
        
         {/* Thisara - IT20198954 */}

          

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
