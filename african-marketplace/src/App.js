import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            African Marketplace App
          </h1>
        </header>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <ProductList/>
      </div>
    </Router>
  );
}

export default App;
