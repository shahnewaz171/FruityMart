import React from 'react';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';
import CategorizeProducts from './CategorizeProducts/CategorizeProducts';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MainBanner from './MainBanner/MainBanner';
import Newarrivals from './Newarrivals/Newarrivals';
import PopularProducts from './PopularProducts/PopularProducts';

const Home = () => {

    return (
        <>
            <Header />
            <MainBanner />
            <CategoriesSlider />
            <CategorizeProducts />
            <Newarrivals />
            <PopularProducts />
            <Footer />
        </>
    );
};

export default Home;