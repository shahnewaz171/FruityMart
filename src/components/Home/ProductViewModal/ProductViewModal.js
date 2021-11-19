import React from 'react';
import Header from '../Header/Header';
import BreadCrumbs from '../../shared/BreadCrumbs/BreadCrumbs';
import ViewModalInfo from './ViewModalInfo';
import Footer from '../Footer/Footer';
import './ProductViewModal.css';

const ProductViewModal = () => {

    return (
        <>
            <Header />
            <BreadCrumbs />
            <ViewModalInfo />
            <Footer />
        </>
    );
};

export default ProductViewModal;