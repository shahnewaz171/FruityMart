import React from 'react';
import { Col, Container, Image, Row, ProgressBar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Countdown from 'react-countdown';
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
                                    <Col lg={3}>
                                        <div className="product-wrapper">
                                            <div className="product-head">
                                                <Image src={localImages.product1} fluid />
                                            </div>
                                            <div className="product-content">
                                                <h5>Black Fashion zapda</h5>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>a</Col>
                                    <Col lg={3}>a</Col>
                                    <Col lg={3}>a</Col>
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