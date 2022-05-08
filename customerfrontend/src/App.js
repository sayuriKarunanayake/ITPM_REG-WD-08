 
import './App.css';
import AddUser from './components/Register';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
 import AddFeedback from './components/Feedback';
import AllFeedbacks from './components/ViewFeedbacks';
import Signin from './components/Signin';
import NavBar from './components/Header';
import Footer from './components/Footer';
import AddOrder from './components/AddOrder';
import AddDelivery from './components/AddDeliveryDetails';
 
 
 
 
 
//IT20197032
import PaymentCustomer from './components/PaymentCustomer';

//IT20192532
import AddNewProductRequest from './components/AddNewProductRequest';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
         <Routes>
           <Route exact path="/adduser" element={<AddUser />} />
           <Route exact path="/addf" element={<AddFeedback />} />
           <Route exact path="/readf" element={<AllFeedbacks />} />
           <Route exact path="/signin" element={<Signin />} />
 
            <Route exact path="/addorder" element={<AddOrder />} />
            
              <Route exact path="/adddelivery" element={<AddDelivery />} />
               
              {/* Sayuri - IT20197032 */}
              <Route exact path="/addcuspay" element={<PaymentCustomer/>}/>

              {/*Charya - IT20192532 */}
              <Route exact path="/addrequest" element={<AddNewProductRequest/>}/>
              <Route exact path="/" element={<Home/>}/>

 

         </Routes>

        <Footer />
      </div>
    </Router>
       
     
  );
}

export default App;
