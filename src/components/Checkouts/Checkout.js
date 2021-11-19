import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegAddressCard, FaDolly, FaRegCreditCard, FaUser } from "react-icons/fa";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import localImages from '../shared/localImages';
import './Checkout.css';
import CheckoutInfo from './CheckoutInfo';
import Header from '../Home/Header/Header';
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs';
import Footer from '../Home/Footer/Footer';

const Checkout = () => {

    return (
        <>
            <Header />
            <BreadCrumbs />
            <CheckoutInfo />
            <Footer />
        </>
    );
};

export default Checkout;