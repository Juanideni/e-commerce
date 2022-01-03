import Bar from './Components/Bar';
import Foot from './Components/Foot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from "react"
import Catalogue from './Components/Catalogue';
import Home from './Components/Home';
import Details from './Components/Details';
import './App.css';


function App(props) {
  const [idProd, setIdProd] = useState(0)
 
  function getId(callbackId){
    setIdProd(callbackId)
  }
  return (
    <Router>
    <Bar/>
      <Routes>

      <Route path="/Details" element={<Details id = {idProd}/>}></Route>
      <Route path="/Catalogue" element={<Catalogue getId={getId}/>}></Route>
      <Route path="/Home" element={<Home getId={getId}/>}></Route>
      
      </Routes>
    <Foot/>
    </Router>
  );
}

export default App;
