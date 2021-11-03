import React from 'react';
import { Col, Container, Image, Row, ProgressBar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Countdown from 'react-countdown';
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import localImages from '../../shared/localImages';
import './CategorizeProducts.css';
import renderer from '../../shared/countdownClock';

const CategorizeProducts = () => {

    return (
        <section className="categorize-products mt-4">
            <Container className="custom-container">
                <div className="wrap-tabs-content">
                    <div className="categorize-products-menu">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="active fw-600">Featured</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/b" activeClassName="active fw-600">On Sale</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/c" activeClassName="active fw-600">Top Rated</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="tabs-content position-relative">
                        <div className="products-tabs-content">
                            <div className="ctg-special-product">
                                <div className="product-wrapper">
                                    <div className="product-head">
                                        <div className="product-image">
                                            <span className="special-offer-text">Spacial <br /> Offer</span>
                                            <Link to="/a">
                                                <div className="image-lazySize">
                                                    <Image src={localImages.product1} fluid />
                                                </div>
                                            </Link>
                                            <span className="d-flex align-items-center justify-content-center flex-column offer-product-label">
                                                <span className="text">Save</span>
                                                <span className="fw-bolder percent">30%</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h5>Black Fashion zapda</h5>
                                        <div className="product-price">
                                            <span className="price-sale">$300.00</span>
                                            <span className="price-compare">$600.00</span>
                                        </div>
                                        <div className="deal-progress">
                                            <div className="deal-stock d-flex justify-content-between">
                                                <span className="stock-sold custom-text-color">
                                                    Already Sold: <strong>6</strong>
                                                </span>
                                                <span className="custom-text-color">Available: <strong>39</strong> </span>
                                            </div>
                                            <ProgressBar now={13} />
                                        </div>
                                        <div className="wrapper-counter">
                                            <span className="offer-text">Hurry Up! Offer ends in</span>
                                            <Countdown
                                                date={Date.now() + 5000000000}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ctg-tabs-list">
                                <Row>
                                    <Col lg={4} className="p-0">
                                        <div className="product-wrapper">
                                            <div className="product-info">
                                                <div className="product-img-container mb-4">
                                                    <div className="product-img lightgray-border">
                                                        <Link to="/a">
                                                            <Image src={localImages.lemon} fluid />
                                                        </Link>
                                                    </div>
                                                    <div className="product-action d-flex justify-content-center align-items-center">
                                                        <div className="link-view">
                                                            <Button className="action-cart quickView">
                                                                <IoEyeOutline />
                                                            </Button>
                                                        </div>
                                                        <div className="actions-cart">
                                                            <Button className="action-cart toCart">
                                                                <AiOutlineShopping />
                                                            </Button>
                                                        </div>
                                                        <div className="add-wish">
                                                            <Button className="action-cart toWish">
                                                                <AiOutlineHeart />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-info">
                                                    <h5 className="item-name fw-bolder pointer">Organic Lemon</h5>
                                                    <div className="starts mb-2">
                                                        <span>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </span>
                                                        <span className="ms-1 custom-text-color">(1 review)</span>
                                                    </div>
                                                    <h4 className="price fw-bolder">$55.00</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className="p-0">
                                        <div className="product-wrapper">
                                            <div className="product-head">
                                                <div className="product-img lightgray-border">
                                                    <Image src={localImages.pomegranate} fluid />
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <h5 className="item-name fw-bolder">Organic Lemon</h5>
                                                <div className="starts mb-2">
                                                    <span>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </span>
                                                    <span className="ms-1 custom-text-color">(1 review)</span>
                                                </div>
                                                <h4 className="price fw-bolder">$55.00</h4>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className="p-0">
                                        <div className="product-wrapper">
                                            <div className="product-head">
                                                <div className="product-img lightgray-border">
                                                    <Image src={localImages.strawberry} fluid />
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <h5 className="item-name fw-bolder">Organic Lemon</h5>
                                                <div className="starts mb-2">
                                                    <span>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </span>
                                                    <span className="ms-1 custom-text-color">(1 review)</span>
                                                </div>
                                                <h4 className="price fw-bolder">$55.00</h4>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className="p-0">
                                        <div className="product-wrapper">
                                            <div className="product-head">
                                                <div className="product-img lightgray-border">
                                                    <Image src={localImages.strawberry} fluid />
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <h5 className="item-name fw-bolder">Organic Lemon</h5>
                                                <div className="starts mb-2">
                                                    <span>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </span>
                                                    <span className="ms-1 custom-text-color">(1 review)</span>
                                                </div>
                                                <h4 className="price fw-bolder">$55.00</h4>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className="p-0">
                                        <div className="product-wrapper">
                                            <div className="product-head">
                                                <div className="product-img lightgray-border">
                                                    <Image src={localImages.strawberry} fluid />
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <h5 className="item-name fw-bolder">Organic Lemon</h5>
                                                <div className="starts mb-2">
                                                    <span>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </span>
                                                    <span className="ms-1 custom-text-color">(1 review)</span>
                                                </div>
                                                <h4 className="price fw-bolder">$55.00</h4>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CategorizeProducts;