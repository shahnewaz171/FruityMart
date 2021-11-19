import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import ProductCategory from './components/ProductCategory/ProductCategory';
import Carts from './components/Carts/Carts';
import Checkout from './components/Checkouts/Checkout';
import ProductViewModal from './components/Home/ProductViewModal/ProductViewModal';
import Login from './components/Login/Login';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/product-category">
            <ProductCategory />
          </Route>
          <Route path="/carts">
            <Carts />
          </Route>
          <Route path="/checkouts">
            <Checkout />
          </Route>
          <Route path="/quickView">
            <ProductViewModal />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
