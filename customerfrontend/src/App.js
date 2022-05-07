 
import './App.css';
import AddUser from './components/Register';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
 import AddFeedback from './components/Feedback';
import AllFeedbacks from './components/ViewFeedbacks';
import Signin from './components/Signin';
import NavBar from './components/Header';
import Footer from './components/Footer';
 


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

            
         </Routes>

        <Footer />
      </div>
    </Router>
       
     
  );
}

export default App;
