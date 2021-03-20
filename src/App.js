import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Home from './Home'
import About from './About'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path = '/' exact component ={Home} />
          <Route path = '/about'  component ={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
