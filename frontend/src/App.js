import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


//IT20197032 - Sayuri
import Header from './components/Header';
import AddStock from './components/AddStock';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
        <Route exact path="/addStock" element={<AddStock />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
