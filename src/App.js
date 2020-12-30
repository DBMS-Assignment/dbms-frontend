import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./screen/Home";
import Task1 from "./screen/Task1";
import Index from "./screen/Index";
import Task3 from "./screen/Task3";
import Task4 from "./screen/Task4";


export default function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/task1">
            <Task1 />
          </Route>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/task3">
            <Task3 />
          </Route>
          <Route path="/task4">
            <Task4 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

