import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './pages/SearchPage';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
              <SearchPage />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      
      <div className='footer'>
                    <h3>India</h3>
                    </div>
                <div className="Mfooter">
                    <div className="footerLeft">
                        <Link to="/about">About</Link>
                        <Link to="/advertising">Advertising</Link>
                        <Link to="/business">Business</Link>
                        <Link to="/search">How Search works</Link>
                        </div>
                    <div className="footerRight">
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/term">Terms</Link>
                        <Link to="/settings">Settings</Link>
                    </div>
                </div>
                </Router>
    </div>
    
  );
}

export default App;
