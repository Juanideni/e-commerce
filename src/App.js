import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogue from './Components/Catalogue';
import Home from './Components/Home';
import Details from './Components/Details';
import './App.css';

function App() {
  return (
    <Router>
    <Navbar/>
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
    <Footer/>
    </Router>
  );
}

export default App;
