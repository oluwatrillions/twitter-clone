import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Explore from './Explore'

function App() {
  return (
    <div>
      <Router>
          <Switch>
          
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/'>
            <Home />
          </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
