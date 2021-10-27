import React from 'react';
import TopHeader from './TopHeader';
import './Header.css';
import MainHeader from './MainHeader';
import MainMenu from '../MainMenu/MainMenu';
import MainBanner from '../MainBanner/MainBanner';

const Header = () => {

    return (
        <>
            <TopHeader />
            <MainHeader />
            <MainMenu />
            <MainBanner />
        </>
    );
};

export default Header;