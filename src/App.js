import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Landing from './Components/LandingSection/LandingSection';
import Chart from './Components/Chart/Chart';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Landing}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
