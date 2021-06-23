import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
