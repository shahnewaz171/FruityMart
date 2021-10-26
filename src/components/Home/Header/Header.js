import React from 'react';
import TopHeader from './TopHeader';
import './Header.css';
import MainHeader from './MainHeader';
import MainMenu from '../MainMenu/MainMenu';

const Header = () => {

    return (
        <>
            <TopHeader />
            <MainHeader />
            <MainMenu />
        </>
    );
};

export default Header;