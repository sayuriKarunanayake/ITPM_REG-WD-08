import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


//IT20197032 - Sayuri
import AddStock from './components/AddStock';
import StockHome from './components/StockHome';
import DeleteStock from './components/DeleteStock';
import DisplayStockDetails from './components/DisplayStockDetails';
import EditStock from './components/EditStock';
import FetchStock from './components/FetchStock';
import RegStaff from './components/RegStaff';
import StaffLogin from './components/StaffLogin';

//
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className='body'>
      
        <Header/>
           
        <Routes>
        <Route exact path="/stockHome" element={<StockHome />} />  
        <Route exact path="/addStock" element={<AddStock />} />
        <Route exact path="/deleteStock/:id" element={<DeleteStock />} />
        <Route exact path="/viewStock" element={<DisplayStockDetails />} />
        <Route exact path="/editStock/:id" element={<EditStock />} />
        <Route exact path="/fetchStock/:id" element={<FetchStock />} />
        <Route exact path="/regStaff" element={<RegStaff />} />
        <Route exact path="/" element={<StaffLogin />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
