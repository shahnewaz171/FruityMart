import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Home/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CategoriesSlider from './components/Home/CategoriesSlider/CategoriesSlider';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <CategoriesSlider />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
