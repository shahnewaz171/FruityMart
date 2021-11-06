import React from 'react';
import Header from '../Home/Header/Header';
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs';
import ProductDetails from './ProductDetails/ProductDetails';

const Product = () => {

    return (
        <>
            <Header />
            <BreadCrumbs />
            <ProductDetails />
        </>
    );
};

export default Product;