import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import AccountInfo from './AccountInfo';
import './UserDashboard.css';

const UserDashboard = () => {

    return (
        <>
            <Header />
            <AccountInfo />
            <Footer />
        </>
    );
};

export default UserDashboard;