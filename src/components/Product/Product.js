import React from 'react';
import Header from '../Home/Header/Header';
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs';
import ProductDetails from './ProductDetails/ProductDetails';
import Footer from '../Home/Footer/Footer';

const Product = () => {

    return (
        <>
            <Header />
            <BreadCrumbs />
            <ProductDetails />
            <Footer />
        </>
    );
};

export default Product;