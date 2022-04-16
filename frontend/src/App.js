import './App.css';
//import { BrowserRouter as BRouter, Switch, Route,Link } from "react-router-dom";


//IT20197032 - Sayuri
import Header from './components/Header';
import addStock from './components/addStock';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/addStock" component={addStock} />
    </div>
  );
}

export default App;
