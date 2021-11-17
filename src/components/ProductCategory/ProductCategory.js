import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs';
import SubCategory from './SubCategory/SubCategory';
import './ProductCategory.css';

const ProductCategory = () => {

    return (
        <>
            <Header />
            <BreadCrumbs />
            <SubCategory />
            <Footer />
        </>
    );
};

export default ProductCategory;