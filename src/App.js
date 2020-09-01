import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import { Nav } from './layout'

import { Home, Show, Episode } from './pages'

function App() {
  return (
    <Router>
      <div className='app'>

        <Nav className='nav'/>

        <div className='content'>
          <Switch>
            <Route path="/Show">
              <Show />
            </Route>
            <Route path="/Episode">
              <Episode />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
