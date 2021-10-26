import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Home/Header/Header';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
