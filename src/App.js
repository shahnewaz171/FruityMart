import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import './App.css';
import CategoriesSlider from './components/Home/CategoriesSlider/CategoriesSlider';
import CategorizeProducts from './components/Home/CategorizeProducts/CategorizeProducts';
import Newarrivals from './components/Home/Newarrivals/Newarrivals';
import PopularProducts from './components/Home/PopularProducts/PopularProducts';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <CategoriesSlider />
            <CategorizeProducts />
            <Newarrivals />
            <PopularProducts />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
