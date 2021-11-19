import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegAddressCard, FaDolly, FaRegCreditCard, FaUser } from "react-icons/fa";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import localImages from '../shared/localImages';
import './Checkout.css';

const CheckoutInfo = () => {

    return (
        <section className="pd-checkouts mt-5">
            <Container className="custom-container">
                <Row>
                    <Col lg={12}>
                        <div className="checkout-area d-block text-center mb-5">
                            <div className="process mb-0 pb-0">
                                <ul className="nav d-inline-block">
                                    <li className="nav-item d-inline-block me-4 mb-2 mb-md-0">
                                        <Link to="/a" className="nav-link active">
                                            <span>1</span>
                                            Address
                                            <FaRegAddressCard />
                                        </Link>
                                    </li>
                                    <li className="nav-item d-inline-block me-4 mb-2 mb-md-0">
                                        <Link to="/a" className="nav-link disabled">
                                            <span>2</span>
                                            Orders
                                            <FaDolly />
                                        </Link>
                                    </li>
                                    <li className="nav-item d-inline-block me-4 mb-2 mb-md-0">
                                        <Link to="/a" className="nav-link disabled">
                                            <span>3</span>
                                            Payment
                                            <FaRegCreditCard />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <form action="">
                            <div className="tab-content">
                                {/* <div className="content-box">
                                    <div className="content">
                                        <div className="personal-details">
                                            <h5 className="title fw-600 mb-3">Personal Information :</h5>
                                            <Row>
                                                <Col lg={6}>
                                                    <input type="text" name="name" className="form-control mb-3" placeholder="Enter Your Name" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="text" name="name" className="form-control mb-3" placeholder="Enter Your Name" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="text" name="name" className="form-control mb-3" placeholder="Enter Your Name" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="text" name="name" className="form-control mb-3" placeholder="Enter Your Name" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className="payArea-btn mt-4">
                                                       <Button type="submit" className="rounded-pill text-uppercase fw-600 pay-btn1">Continue</Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="content-box">
                                    <div className="content">
                                        <div className="d-flex pb-1 mb-1 orders">
                                            <div className="product-img">
                                                <div className="d-flex">
                                                    <Image src={localImages.lemon} className="me-4 p-1" fluid />
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <p className="name">
                                                    <Link to="/a" className="fw-600 mb-1 d-inline-block">
                                                        Organic Orange
                                                    </Link>
                                                </p>
                                                <div className="d-flex price">
                                                    <h5 className="fw-700 me-2 mb-1">Price</h5>
                                                    <p className="fw-600 fz-14 mb-1">23$</p>
                                                </div>
                                                <div className="d-flex quantity">
                                                    <h5 className="fw-700 me-2 mb-1">Quantity</h5>
                                                    <p className="fw-600 fz-14 mb-1">1</p>
                                                </div>
                                                <div className="d-flex total-price">
                                                    <h5 className="fw-700 me-2 mb-1">Total Price</h5>
                                                    <p className="fw-600 fz-14 mb-1">23$</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="payArea-btn mt-3">
                                                    <Button className="rounded-pill text-uppercase fw-600 me-3 pay-btn1">Back</Button>
                                                    <Button className="rounded-pill text-uppercase fw-600 pay-btn1">Continue</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div> */}

                                <div className="content-box">
                                    <div className="content">
                                        <div className="shipping-info">
                                            <h5 className="title fw-600 mb-3">Personal Information :</h5>
                                            <ul className="list-inline info-list">
                                                <li>
                                                    <p className="dark-gray">
                                                        <FaUser className="icon me-2" />
                                                        Muhammad Shahnewaz
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="dark-gray">
                                                        <IoLocationSharp className="icon me-2" />
                                                        Bhelua, Sreebordi, Sherpur
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="dark-gray">
                                                        <IoCall className="icon me-2" />
                                                        09455534553
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="dark-gray">
                                                        <MdEmail className="icon me-2" />
                                                        deb15-1393@diu.edu.bd
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="payment-info mt-4">
                                            <h5 className="title fw-600 mb-3">Payment Information :</h5>
                                            <div>
                                                <input type="text" name="name" className="form-control mb-3" placeholder="Enter Your Name" />
                                            </div>
                                        </div>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="payArea-btn mt-3">
                                                    <Button className="rounded-pill text-uppercase fw-600 me-3 pay-btn1">Back</Button>
                                                    <Button className="rounded-pill text-uppercase fw-600 pay-btn1">Continue</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Col>
                    <Col lg={4}>
                        <div className="order-box mt-4 mt-lg-0">
                            <h4 className="text-uppercase fw-700 mb-3 title">Price Details</h4>
                            <ul className="list-inline order-list mb-0">
                                <li className="d-flex justify-content-between">
                                    <p className="fz-14 fw-600 dark-gray">Total MRP</p>
                                    <p className="fz-14 fw-700">45$</p>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-between fw-600 pt-2">
                                <p>Total</p>
                                <p>45$</p>
                            </div>
                            <div className="mt-3 text-center">
                                <Link to="/a" className="px-5 py-2 order-btn">Place Order</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CheckoutInfo;