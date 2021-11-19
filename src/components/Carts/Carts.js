import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs';
import CartInfo from './CartInfo';

const Carts = () => {

    return (
        <>
            <Header />
            <BreadCrumbs />
            <CartInfo />
            <Footer />
        </>
    );
};

export default Carts;