import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import './App.css';
import CategoriesSlider from './components/Home/CategoriesSlider/CategoriesSlider';
import CategorizeProducts from './components/Home/CategorizeProducts/CategorizeProducts';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <CategoriesSlider />
            <CategorizeProducts />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
