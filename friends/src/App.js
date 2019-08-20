import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import LoginForm from './components/login/LoginForm';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/dashboard">Dashboard</Link>

        <Route exact path="/" component={LoginForm} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </header>
    </div>
  );
}

export default App;
