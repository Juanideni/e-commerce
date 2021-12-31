import Bar from './Components/Bar';
import Foot from './Components/Foot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogue from './Components/Catalogue';
import Home from './Components/Home';
import Details from './Components/Details';
import './App.css';

function App() {
  return (
    <Router>
    <Bar/>
      <Switch>
        <Route path="/Details">
          <Details/>
        </Route>
      <Route path="/Catalogue">
        <Catalogue/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
      </Switch> 
    <Foot/>
    </Router>
  );
}

export default App;
