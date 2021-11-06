import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo/logo1.png';
import localImages from '../../shared/localImages';

const MainHeader = () => {
    const [navbarAnimation, setNavbarAnimation] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbarAnimation(true);
        }
        else {
            setNavbarAnimation(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <section className={"main-header "+ (navbarAnimation === true ? "fixedTop m-lg-0 nav-shadow" : "")}>
                <Container className="custom-container">
                    <Row className="m-0 align-items-center">
                        <Col lg={3} sm={6} className="remove-pad col-5">
                            <div className="header-logo">
                                <Image src={Logo} fluid />
                                <span className="ms-2 logo-text">FruityMart</span>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className="remove-pad order-last order-sm-2 order-md-2">
                            <div className="search-box">
                                <Form className="d-flex">
                                    <div className="input-group">
                                        <FormControl
                                            type="search"
                                            placeholder="Search For Product"
                                            className=""
                                            aria-label="Search"
                                        />
                                        <Button className="border-0 px-3 search-btn">
                                            <FiSearch />
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="remove-pad col-7 order-lg-last">
                            <div className="header-icons">
                                <div className="helpful-links">
                                    <ul className="helpful-links-inner">
                                        <li className="d-inline-block">
                                            <div className="position-relative item-count" >
                                                <FaExchangeAlt />
                                                <Badge className="count-badge">
                                                    <span className="counter-num">0</span>
                                                </Badge>
                                            </div>
                                        </li>
                                        <li className="d-inline-block">
                                            <div className="position-relative item-count" >
                                                <FiHeart />
                                                <Badge className="count-badge">
                                                    <span className="counter-num">0</span>
                                                </Badge>
                                            </div>
                                        </li>

                                        <li className="my-dropdown d-inline-block">
                                            <Link to="/a" className="d-flex align-items-center">
                                                <div className="position-relative item-count" >
                                                    <BsCart4 />
                                                    <Badge className="count-badge">
                                                        <span className="counter-num">0</span>
                                                    </Badge>
                                                </div>
                                                <span className="total-cart-amount ms-1">$0.00</span>
                                            </Link>
                                            <div id="product-items" className="my-dropdown-menu" >
                                                <div className="cart-items">
                                                    <div className="cart-product">
                                                        <figure className="cart-product-image position-relative">
                                                            <Image src={localImages.product1} fluid />
                                                            <div className="cart-remove">
                                                                <FontAwesomeIcon icon={faTimes} />
                                                            </div>
                                                        </figure>
                                                        <div className="ms-3 cart-product-details">
                                                            <p className="product-title">	Gold Diamond Chain</p>
                                                            <p className="product-quantity">QTY: 1</p>
                                                            <p className="product-price">$399.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between subtotals">
                                                    <span className="cart-title">Cart Total</span>
                                                    <span className="amount">$1,379.00</span>
                                                </div>
                                                <div className="d-flex justify-content-between actions">
                                                    <Button className="btn green-outline-btn">Go to Cart</Button>
                                                    <Button className="btn border-0 green-btn">Proceed to Checkout</Button>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MainHeader;