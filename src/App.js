import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import MainBanner from './components/Home/MainBanner/MainBanner';
import CategoriesSlider from './components/Home/CategoriesSlider/CategoriesSlider';
import CategorizeProducts from './components/Home/CategorizeProducts/CategorizeProducts';
import Newarrivals from './components/Home/Newarrivals/Newarrivals';
import PopularProducts from './components/Home/PopularProducts/PopularProducts';
import Footer from './components/Home/Footer/Footer';
import Product from './components/Product/Product';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <MainBanner />
            <CategoriesSlider />
            <CategorizeProducts />
            <Newarrivals />
            <PopularProducts />
            <Footer />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
