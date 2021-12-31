import Bar from './Components/Bar';
import Foot from './Components/Foot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/Details">
          <Details id = {idProd}/>
        </Route>
      <Route path="/Catalogue">
        <Catalogue getId={getId}/>
      </Route>
      <Route path="/">
        <Home getId={getId}/>
      </Route>
      </Switch> 
    <Foot/>
    </Router>
  );
}

export default App;
